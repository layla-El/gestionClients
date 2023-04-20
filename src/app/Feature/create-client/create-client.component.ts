import { Component, OnInit } from '@angular/core';
import { clients } from 'src/app/models/clients.model';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

client?:clients
  ngOnInit(): void {

  }
  nom!: string;
  prenom!: string;
  birthdate!: string;
  adresse!: string;
  cin!: string;
  matricule!: string;

  onSubmit() {
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

