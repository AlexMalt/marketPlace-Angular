import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  articles : Array<any>
  constructor(private data:DataService) { 
    
  }

  ngOnInit() {
    this.articles= this.data.articles;
  }

}
