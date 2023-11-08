import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Bug } from 'src/domain/bug';
import { Bugs } from 'src/domain/bugs';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  constructor(private http: HttpClient) { }

  getBugs(){
    let baseUrl= "assets/data/db.json";
    return this.http.get<Bugs>(baseUrl);
  }

}
