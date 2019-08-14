import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article
  constructor(private data: DataService) { }

  add = (e) => {
    console.log(this.article.id);
    this.data.articles.find((a) => a.id == this.article.id).qte +=1; 

    this.data.observableTotArt.next(1);
    console.log(this.data.articles);
  }


  ngOnInit() {
   
  }


}
