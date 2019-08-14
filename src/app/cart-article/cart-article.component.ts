import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-cart-article',
  templateUrl: './cart-article.component.html',
  styleUrls: ['./cart-article.component.css']
})
export class CartArticleComponent implements OnInit {

  @Input() article;

  add_qte = () => {
    // console.log(this.article.id);
    this.data.articles.find((a) => a.id == this.article.id).qte +=1; 

    this.data.observableTotArt.next(1);
    this.data.observablePrixTot.next(1);
    // console.log(this.data.articles);
  }

  sub_qte = () => {
    // console.log(this.article.id);
    let qte = this.data.articles.find((a) => a.id == this.article.id).qte;
    if (qte > 0) {
      this.data.articles.find((a) => a.id == this.article.id).qte -=1; 
    }
    
    this.data.observableTotArt.next(-1);
    this.data.observablePrixTot.next(-1);
    // console.log(this.data.articles);
  }

  delete = () => {

    let qte =this.data.articles.find((a) => a.id == this.article.id).qte;
    this.data.articles.find((a) => a.id == this.article.id).qte= 0;
    this.data.observablePrixTot.next(-qte);
    this.data.observableTotArt.next(-qte);
  }


  constructor(private data:DataService) { }

  ngOnInit() {
  }

}
