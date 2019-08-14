import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  // init de articles de ce composant du data service
  articles;
  totals=0;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.totals = this.data.calc_prix_tot();
    this.data.observablePrixTot.subscribe((a) => {
      this.totals = this.data.calc_prix_tot();
      // console.log(this.totals );
    })
    // this.totals = this.data.calc_prix_tot();
    //récupérer la valeur dans le data service
    this.articles = this.data.articles;
  }

}
