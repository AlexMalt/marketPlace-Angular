import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  qte_panier;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.observableTotArt.subscribe((a) => {
      this.qte_panier = this.data.calc_total();

      // console.log(this.qte_panier);
    })

  }

}
