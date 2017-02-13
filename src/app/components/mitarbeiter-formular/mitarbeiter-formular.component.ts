import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Mitarbeiter } from '../../models/mitarbeiter';
import { MitarbeiterService } from '../../services/mitarbeiter.service';

@Component({
  selector: 'app-mitarbeiter-formular',
  templateUrl: './mitarbeiter-formular.component.html',
  styleUrls: ['./mitarbeiter-formular.component.css']
})
export class MitarbeiterFormularComponent implements OnInit {

  private mitarbeiter: Mitarbeiter = new Mitarbeiter();
  private id: number;

  constructor(
    private mitarbeiterService: MitarbeiterService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        params => this.id = params['id']
      );

    if (this.id !== undefined) {
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

  public speichereMitarbeiter() {
    if (this.id !== undefined) {
      this.mitarbeiterService.aktualisiereMitarbeiter(this.mitarbeiter).subscribe(res => { this.router.navigateByUrl('') });
    } else {
      this.mitarbeiterService.erstelleMitarbeiter(this.mitarbeiter).subscribe(res => { this.router.navigateByUrl('') });
    }
  }
}