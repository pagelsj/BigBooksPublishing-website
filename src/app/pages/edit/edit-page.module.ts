import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {
  CreateBookService,
  GetBookService,
  UpdateBookService
} from '../../services/index';

import { EditPageComponent } from './edit-page.component';

const routes: Routes = [
  {
    path: 'create',
    component: EditPageComponent
  },
  {
    path: 'edit/:bookId',
    component: EditPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    EditPageComponent
  ],
  providers: [
    CreateBookService,
    GetBookService,
    UpdateBookService
  ]
})
export class EditPageModule{ }
