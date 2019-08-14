import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { PanierComponent } from './panier/panier.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { MenuComponent } from './menu/menu.component';
import { ArticleComponent } from './article/article.component';
import { DataService } from './data.service';
import { CartArticleComponent } from './cart-article/cart-article.component';

const mesRoutes : Routes = [
  {path : '', component: CatalogueComponent},
  {path:'cart', component:PanierComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PanierComponent,
    CatalogueComponent,
    MenuComponent,
    ArticleComponent,
    CartArticleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(mesRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
