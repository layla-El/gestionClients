import { Component, Input, OnInit } from '@angular/core';
import { clientService } from 'src/app/_shared/services/clientService.service';
import { clients } from 'src/app/models/clients.model';

@Component({
  selector: 'app-affichage-clients',
  templateUrl: './affichage-clients.component.html',
  styleUrls: ['./affichage-clients.component.scss']
})
export class AffichageClientsComponent implements OnInit {
  @Input()
  client?: clients[];
  ville?: string;



  constructor(private clientService: clientService) { }

  ngOnInit(): void {
    this.getClients();
  }
  getClients(): void {
    this.clientService.getClients().subscribe(client => this.client = client);
  }
  deleteClient(id: number): void {
    this.clientService.deleteClient(id).subscribe(() => {
      this.client = this.client?.filter(clients => clients.id !== id);
    });
  }
  searchClientsByVille(): void {
    this.clientService.searchClientsByVille(this.ville!)
      .subscribe(client => this.client = client);
  }

}
