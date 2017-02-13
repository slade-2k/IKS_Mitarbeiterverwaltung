import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mitarbeiter-liste',
  templateUrl: './mitarbeiter-liste.component.html',
  styleUrls: ['./mitarbeiter-liste.component.css']
})
export class MitarbeiterListeComponent implements OnInit {

  private mitarbeiterListe: Object[] = [ { name: "Fabian Prinz" }, { name: "Ingo Hotischeck" }];

  constructor() { }

  ngOnInit() {
  }

}
