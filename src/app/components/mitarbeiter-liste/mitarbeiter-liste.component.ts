import { Component, OnInit } from '@angular/core';
import { MitarbeiterService } from '../../services/mitarbeiter.service';
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

}
