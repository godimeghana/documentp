// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { environment } from '../../environments/environment';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {

//   private apiUrl = environment.apiUrl; // e.g. https://your-backend.onrender.com

//   constructor(private http: HttpClient) {}

//   // Example: GET
//   getDocuments(): Observable<any> {
//     return this.http.get(`${this.apiUrl}/api/document`);
//   }

//   // Example: POST
//   createDocument(data: any): Observable<any> {
//     return this.http.post(`${this.apiUrl}/api/document`, data);
//   }

//   saveDocument(data: any): Observable<any> {
//     return this.http.post(`${this.apiUrl}/api/document`, data);
//   }

//   // DELETE: mark a document as inactive
//   deleteDocument(name: string): Observable<any> {
//     return this.http.delete(`${this.apiUrl}/api/document/${name}`);
//   }
// }
