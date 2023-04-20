import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { clients } from "src/app/models/clients.model";

@Injectable({
    providedIn: 'root'
})
export class clientService {
    private apiUrl = 'à définir';
    constructor(private http: HttpClient) { }

    getClients(): Observable<clients[]> {
        return this.http.get<clients[]>(this.apiUrl);
    }
    getClientById(id: number): Observable<clients> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<clients>(url);
    }
    searchClientsByVille(ville: string): Observable<clients[]> {
        const url = `${this.apiUrl}?ville=${ville}`;
        return this.http.get<clients[]>(url);
    }

    addClient(client: clients): Observable<clients> {
        return this.http.post<clients>(this.apiUrl, client);
    }

    updateClient(client: clients): Observable<any> {
        const url = `${this.apiUrl}/${client.id}`;
        return this.http.put(url, client);
    }
    deleteClient(id: number): Observable<any> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete(url);
    }

}