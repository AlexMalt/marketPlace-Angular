import {Injectable} from "@angular/core"
import { Subject } from 'rxjs';

@Injectable()
export class DataService {
    
    observableTotArt:Subject<any> = new Subject<any>();
    observablePrixTot:Subject<any> = new Subject<any>();

    articles = [
        { 
          id : 1,
          img : "./../assets/imgs/banane.jpg",
          prix : 7.0,
          nom : "Banana",
          qte:0
        },
        { 
          id : 2,
          img : "./../assets/imgs/mandarine.jpg",
          prix : 4.5,
          nom : "Mandarine",
          qte:0
        },
        { 
          id : 3,
          img : "./../assets/imgs/fraise.jpg",
          prix : 8.8,
          nom : "Fraise",
          qte:0
        },
        { 
          id : 4,
          img : "./../assets/imgs/panais.jpg",
          prix : 5.3,
          nom : "Panais",
          qte:0
        },
        { 
          id : 5,
          img : "./../assets/imgs/chicon.jpg",
          prix : 3.7,
          nom : "Chicon",
          qte:0
        },
        { 
          id : 6,
          img : "./../assets/imgs/patatedouce.jpg",
          prix : 4.75,
          nom : "Patate douce",
          qte:0
        },
        { 
          id : 7,
          img : "./../assets/imgs/tomate.jpg",
          prix : 6.45,
          nom : "Tomate",
          qte:0
        }

      ];

    calc_prix_tot = ()  => {
        let totals = 0;
        for (let art of this.articles) {
            totals += art.qte*art.prix;
        }
        return totals;
    }

    calc_total = () => {
        let qte_article = 0;
        for (let art of this.articles) {
            qte_article += art.qte;
        }
        return qte_article;
    }
    
    constructor() {

    }
}