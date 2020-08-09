import {Directive, EmbeddedViewRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';
import {combineLatest, ReplaySubject, Subscription} from 'rxjs';
import {CurrentUserService} from './current-user.service';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective
  implements OnInit, OnChanges, OnDestroy {
  @Input() appPermission!: string | string[];

  private roles$ = new ReplaySubject<string[]>(1);
  private sub = Subscription.EMPTY;
  private view?: EmbeddedViewRef<void>;

  constructor(
    private readonly template: TemplateRef<void>,
    private vcr: ViewContainerRef,
    private currentUserService: CurrentUserService
  ) {
  }

  ngOnInit(): void {
    this.sub = combineLatest([
      this.roles$,
      this.currentUserService.user$
    ]).subscribe(([roles, user]) => {

      const mustShow = user != undefined && roles.some((role) => role === user.role);

      if (mustShow) {
        if (this.view == undefined) {
          this.view = this.vcr.createEmbeddedView(
            this.template
          );
        }
      } else {
        if (this.view != undefined) {
          this.view.destroy();
        }
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.appPermission == undefined) {
      return;
    }
    const roleOrRoles = changes.appPermission
      .currentValue as string | string[];
    if (Array.isArray(roleOrRoles)) {
      this.roles$.next(roleOrRoles);
    } else {
      this.roles$.next([roleOrRoles]);
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.view?.destroy();
    this.vcr.clear();
  }
}
