import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import API_PATHS from '../../config/api';
import { SynonymModel } from "../../models/synonym.model";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  
  @Injectable({
    providedIn: `root`,
  })
  export class SynonymService {
    private apiUrl = environment.apiUrl;
    constructor(private http: HttpClient) {}

    getSynonyms(key: string): Observable<{}> {
        return this.http.get<any>(
          this.apiUrl + API_PATHS.synonymSearchController_GET(key),
          httpOptions
        );
    }
    postSynonym(obj: SynonymModel): Observable<{}> {
        return this.http.post<any>(
          this.apiUrl + API_PATHS.synonymSearchController_POST,
          obj,
          httpOptions
        );
      }
  }