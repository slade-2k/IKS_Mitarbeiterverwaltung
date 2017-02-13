import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mitarbeiter } from './../../models/mitarbeiter';
import { MitarbeiterService } from './../../services/mitarbeiter.service';

@Component({
  selector: 'app-mitarbeiter-anzeige',
  templateUrl: './mitarbeiter-anzeige.component.html',
  styleUrls: ['./mitarbeiter-anzeige.component.css']
})
export class MitarbeiterAnzeigeComponent implements OnInit {

  private mitarbeiter: Mitarbeiter = new Mitarbeiter();
  private id: number;

  constructor(
    private mitarbeiterService: MitarbeiterService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        params => this.id = params['id']
      );

    this.mitarbeiterService.getMitarbeiterMitId(this.id).subscribe(
      (data) => {
        this.mitarbeiter.id = this.id;
        this.mitarbeiter.name = data.name;
        this.mitarbeiter.email = data.email;
        this.mitarbeiter.foto = data.foto;
        this.mitarbeiter.tel = data.tel;
        this.mitarbeiter.created_at = data.created_at;
        this.mitarbeiter.updated_at = data.updated_at;
        this.mitarbeiter.url = data.url;
      });
  }

}
