import { Component, OnInit } from '@angular/core';
import { MitarbeiterService } from '../../services/mitarbeiter.service';
import { Mitarbeiter } from './../../models/mitarbeiter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mitarbeiter-liste',
  templateUrl: './mitarbeiter-liste.component.html',
  styleUrls: ['./mitarbeiter-liste.component.css']
})
export class MitarbeiterListeComponent implements OnInit {

  private mitarbeiterListe: Object[] = [];

  constructor(
    private mitarbeiterService: MitarbeiterService,
    private router: Router
    ) { }

  ngOnInit() {
    this.mitarbeiterService.getAlleMitarbeiter().subscribe((data) => {
      for (let mitarbeiter of data) {
        this.mitarbeiterListe.push(mitarbeiter);
      }
    });
  }

  public bearbeiteMitarbeiter(id: number) {
    this.router.navigateByUrl('/bearbeiten/' + id);
  }

  public zeigeMitarbeiter(id: number) {
    this.router.navigateByUrl('/anzeigen/' + id);
  }

  public loescheMitarbeiter(id: number, idx: number) {
    let mitarbeiter: Mitarbeiter = this.mitarbeiterListe[idx] as Mitarbeiter;

    if (confirm(mitarbeiter.name + " wirklich löschen?")) {
      this.mitarbeiterService.loescheMitarbeiter(id)
        .subscribe(data => {
          this.mitarbeiterListe.splice(idx, 1);
        });
    }
  }
}
