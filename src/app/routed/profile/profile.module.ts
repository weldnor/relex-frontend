import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileInfoPage } from './pages/profile-info/profile-info.page';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AuthModule} from '../auth/auth.module';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ValidationModule} from '../../features/validators/validation.module';

@NgModule({
  declarations: [
    ProfileInfoPage,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    AuthModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    ValidationModule
  ],

})
export class ProfileModule { }
