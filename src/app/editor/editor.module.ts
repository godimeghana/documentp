import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditorComponent } from './editor.component';
import { QuillModule } from 'ngx-quill';
import { ToastrModule } from 'ngx-toastr'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    QuillModule,
    ToastrModule
  ],
  exports:[EditorComponent]
})
export class EditorModule { }
