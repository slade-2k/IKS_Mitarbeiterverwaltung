import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mitarbeiter } from '../../models/mitarbeiter';
import { MitarbeiterService } from '../../services/mitarbeiter.service';

@Component({
  selector: 'app-mitarbeiter-formular',
  templateUrl: './mitarbeiter-formular.component.html',
  styleUrls: ['./mitarbeiter-formular.component.css']
})
export class MitarbeiterFormularComponent implements OnInit {

  private mitarbeiter: Mitarbeiter = new Mitarbeiter();

  constructor(
    private mitarbeiterService: MitarbeiterService,
    private router: Router
  ) { }

  ngOnInit() {
  }


  public speichereMitarbeiter() {
    this.mitarbeiterService.erstelleMitarbeiter(this.mitarbeiter).subscribe(res => { this.router.navigateByUrl('') });
  }

}
