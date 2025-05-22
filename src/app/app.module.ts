import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EditorModule } from './editor/editor.module';
import { CommonModule } from '@angular/common';
import { NgToastModule } from 'ng-angular-popup';
import {QuillModule} from 'ngx-quill';
// import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EditorModule,
    CommonModule,
    QuillModule.forRoot(),
    NgToastModule,
    // HttpClientModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
