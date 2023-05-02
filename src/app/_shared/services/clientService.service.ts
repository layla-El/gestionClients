import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { client } from "src/app/models/client.model";

@Injectable({
    providedIn: 'root'
})
export class clientService {
    private apiUrl = 'à définir';
    constructor(private http: HttpClient) { }

    getclient(): Observable<client[]> {
        return this.http.get<client[]>(this.apiUrl);
    }
    getClientById(id: number): Observable<client> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<client>(url);
    }
    searchclientByVille(ville: string): Observable<client[]> {
        const url = `${this.apiUrl}?ville=${ville}`;
        return this.http.get<client[]>(url);
    }

    addClient(client: client): Observable<client> {
        console.log(client);
        return this.http.post<client>(this.apiUrl, client);
    }

    updateClient(client: client): Observable<any> {
        const url = `${this.apiUrl}/${client.id}`;
        return this.http.put(url, client);
    }
    deleteClient(id: number): Observable<any> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete(url);
    }

}