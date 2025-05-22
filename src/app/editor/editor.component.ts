import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { ApiService } from '../services/api.service';

declare var bootstrap: any;

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, QuillModule, HttpClientModule, DatePipe],
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  saveddocuments: { name: string; content: string; created_at: string }[] = [];
  selectedDocument: { name: string; content: string; created_at: string } | null = null;
  document: any[] = [];
  documentName: string = '';
  editorContent: string = '';
  created_at: string = '';
  isBrowser = false;
  documentodelete: any;
  modalInstance: any;

  modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image']
    ]
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    // private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.loadDocuments();
    // this.apiService.getDocuments().subscribe({
    //   next: (data) => this.document = data,
    //   error: (err) => console.error('API Error:', err)
    // });
  }

  createNewDocument() {
    const payload = { title: 'New Doc', content: 'Hello Flask!' };
    // this.apiService.createDocument(payload).subscribe({
    //   next: (res) => console.log('Created:', res),
    //   error: (err) => console.error('Error:', err)
    // });
  }

  loadDocuments() {
    this.http.get<{ name: string; content: string; created_at: string }[]>('https://backendapp-2-5nc3.onrender.com/api/document')
      .subscribe((docs) => {
        this.saveddocuments = docs;
      });
  }

  selectDocument(doc: { name: string; content: string; created_at: string }) {
    this.selectedDocument = { ...doc };
    this.documentName = doc.name;
    this.editorContent = doc.content;
  }

  saveDocument(form: NgForm) {
    if (!form || form.invalid || this.isContentInvalid() || !this.documentName.trim() || !this.editorContent.trim()) {
      form.control.markAllAsTouched();
      return;
    }

    const name = this.documentName.trim();
    const content = this.editorContent.trim();

    if (name && content) {
      const payload = { name, content };

      this.http.post('https://backendapp-2-5nc3.onrender.com/api/document', payload).subscribe({
        next: () => {
          this.loadDocuments();
          this.clearForm();
          form.resetForm();

          
          this.snackBar.open('Document saved successfully', 'Close', {
            duration: 3000,
            horizontalPosition:'right',

          });
        },
        error: (err) => {
          console.error('Error saving document:', err);
        }
      });
    }
  }

  public clearForm() {
    this.selectedDocument = null;
    this.documentName = '';
    this.editorContent = '';
  }

  deleteDocument(doc: any, event: MouseEvent) {
    event.stopPropagation();
    if (confirm(`Are you sure you want to delete "${doc.name}"?`)) {
      this.http.delete<{ message: string }>(`https://backendapp-2-5nc3.onrender.com/api/document/${doc.name}`).subscribe({
        next: (res) => {
          alert(res.message);
          this.saveddocuments = this.saveddocuments.filter((d) => d.name !== doc.name);

          if (this.selectedDocument?.name === doc.name) {
            this.clearForm();
          }
        },
        error: (err) => {
          console.error('Error deleting document:', err);
          alert('Failed to delete document.');
        }
      });
    }
  }

  openDeleteModal(doc: any, event: Event) {
    event.stopPropagation();
    this.documentodelete = doc;

    if (!this.modalInstance) {
      const modalElem = document.getElementById('deleteConfirmModal');
      this.modalInstance = new bootstrap.Modal(modalElem, {
        backdrop: 'static'
      });
    }

    this.modalInstance.show();
  }

  confirmDelete() {
    this.http.delete<{ message: string }>(`https://backendapp-2-5nc3.onrender.com/api/document/${this.documentodelete.name}`)
      .subscribe({
        next: (res) => {
          alert(res.message);
          this.saveddocuments = this.saveddocuments.filter((d) => d.name !== this.documentodelete.name);
          if (this.selectedDocument?.name === this.documentodelete.name) {
            this.clearForm();
          }
          this.documentodelete = null;
          if (this.modalInstance) {
            this.modalInstance.hide();
          }
        },
        error: (err) => {
          console.error('Error deleting document:', err);
          alert('Failed to delete document.');
          if (this.modalInstance) {
            this.modalInstance.hide();
          }
        }
      });
  }

  isContentInvalid(): boolean {
    return this.editorContent.trim() === '';
  }
}
