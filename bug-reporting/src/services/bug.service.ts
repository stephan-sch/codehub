import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Bug } from 'src/domain/bug';
import { Bugs } from 'src/domain/bugs';
import { catchError, Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BugService {
  asc: boolean = true;
  constructor(private http: HttpClient) { }

  getBugs(sortBy : string){
    let baseUrl= "http://localhost:3000/bugs";
    this.asc = !this.asc;
    if(sortBy !== ''){
      baseUrl += '?_sort=' + sortBy;
      baseUrl += '&_order=';
      if(this.asc){
        baseUrl += 'asc';
      } else{
        baseUrl += 'desc';
      }
    }
    
    return this.http.get<Bug[]>(baseUrl);
  }

  saveBug(form: FormData) {
    let baseUrl= "http://localhost:3000/bugs";
    return this.http.post(baseUrl, form);
  }

  updateBug(form: FormData, bugId: string) {
    let baseUrl= "http://localhost:3000/bugs/" + bugId;
    return this.http.put(baseUrl, form);
  }

  getBug(bugId: string){
    let baseUrl= "http://localhost:3000/bugs/" + bugId;
    return this.http.get<Bug>(baseUrl);
  }
}
