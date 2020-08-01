import {Component, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  @Output()
  response?: any = undefined;

  constructor(private readonly http: HttpClient) {
  }

  ngOnInit(): void {
    this.http
      .get<any>(
        `https://httpbin.org/get`
      )
      .subscribe(
        (result) => {
          console.log(result);
          this.response = result;
        },
        (error) => (console.log(`oops ${error}`))
      );
  }
}
