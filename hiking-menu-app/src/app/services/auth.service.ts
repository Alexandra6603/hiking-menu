import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Authorization, Token } from "../common/models/interfaces";
import { Observable } from "rxjs";
import { HOME_API, AUTH, JWT, LOGIN } from "../common/urlConstants";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(
        private http: HttpClient,
    ) {}

    public logIn(data: Authorization): Observable<any> {

        const authData = new HttpParams()
            .set('username', data.username)
            .set('password', data.password)
        
        return this.http.post(`${HOME_API}/${AUTH}/${JWT}/${LOGIN}`, authData.toString(), {headers: {"Content-Type": "application/x-www-form-urlencoded"}})
    }

    public getToken() {
        return localStorage.getItem('token')
    }
}