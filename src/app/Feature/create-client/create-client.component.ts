import { Component, OnInit } from '@angular/core';
import { clientService } from 'src/app/_shared/services/clientService.service';
import { client } from 'src/app/models/client.model';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

  constructor(private userService: clientService) {
    this.userService = userService;
  }

  client?: client;
  ngOnInit(): void {

  }
  nom!: string;
  prenom!: string;
  birthdate!: string;
  adresse!: string;
  cin!: string;
  matricule!: string;
  ville!: string;

  onSubmit() {
    this.client = new client(1, this.nom, this.prenom, this.birthdate, this.cin, this.adresse, this.matricule, this.ville)
    this.userService.addClient(this.client);

    console.log(this.nom);
    console.log(this.prenom);
    console.log(this.birthdate);
    console.log(this.cin);
    console.log(this.adresse);
    console.log(this.matricule);

  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    console.log(file);
  }

}

