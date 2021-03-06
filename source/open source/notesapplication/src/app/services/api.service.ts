import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {
  public basenotesUrl = "http://localhost:3000/notes";
  public basetagsUrl = "http://localhost:3000/tags";
  public searchUrl = "http://localhost:3000/search";

  constructor(private http: Http) { }

  fetchNotes(): Observable<any[]> {
    return this.http.get(this.basenotesUrl).map((res: any) => {
      return res._body ? res.json() : null
    }).catch((err: any) => {
      return Observable.throw(err || 'Server error');
    })
  };

  fetchTags(): Observable<any[]> {
    return this.http.get(this.basetagsUrl).map((res: any) => {
      return res._body ? res.json() : null
    }).catch((err: any) => {
      return Observable.throw(err || 'Server error');
    })
  };

  fetchNotesByTag(id): Observable<any[]> {
    return this.http.get(`${this.basenotesUrl}/${id}`).map((res: any) => {
      return res._body ? res.json() : null
    }).catch((err: any) => {
      return Observable.throw(err || 'Server error');
    })
  };

  addNote(note): Observable<any[]> {
    return this.http.post(this.basenotesUrl, note).map((res: any) => {
      return res._body ? res.json() : null
    }).catch((err: any) => {
      return Observable.throw(err || 'Server error');
    });
  };

  updateNote(id, note): Observable<any[]> {
    return this.http.put(`${this.basenotesUrl}/${id}`, note).map((res: any) => {
      return res._body ? res.json() : null
    }).catch((err: any) => {
      return Observable.throw(err || 'Server error');
    });
  };

  deleteNote(id): Observable<any[]> {
    return this.http.delete(`${this.basenotesUrl}/${id}`).map((res: any) => {
      return res._body ? res.json() : null
    }).catch((err: any) => {
      return Observable.throw(err || 'Server error');
    });
  };

  searchNote(query): Observable<any[]> {
    return this.http.get(`${this.searchUrl}?title=${query}`).map((res: any) => {
      return res._body ? res.json() : null
    }).catch((err: any) => {
      return Observable.throw(err || 'Server error');
    });
  };

  deleteTag(id): Observable<any[]> {
    return this.http.delete(`${this.basetagsUrl}/${id}`).map((res: any) => {
      return res._body ? res.json() : null
    }).catch((err: any) => {
      return Observable.throw(err || 'Server error');
    });
  };

  

   updateTag(id, tag): Observable<any[]> {
    return this.http.put(`${this.basetagsUrl}/${id}`, tag).map((res: any) => {
      return res._body ? res.json() : null
    }).catch((err: any) => {
      return Observable.throw(err || 'Server error');
    });
  };
}
