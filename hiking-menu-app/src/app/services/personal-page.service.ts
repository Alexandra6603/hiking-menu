import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HOME_API, ME, USERS } from "../common/urlConstants";

@Injectable({
    providedIn: 'root'
})

export class PersonalPageService {
    constructor(
        private http: HttpClient,
    ) {}

    public getInfoAboutMe() {
        return this.http.get(`${HOME_API}/${USERS}/${ME}`, {headers: {"Content-Type": "application/x-www-form-urlencoded"}})
    }
}