import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { StoreComponent } from './components/store/store.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductsComponent } from './components/store/products/products.component';
import { CategoriesComponent } from './components/store/categories/categories.component';
import { StoreHandlersComponent } from './components/store/store-handlers/store-handlers.component';
import { LoginComponent } from './components/login/login.component';
import { HeroComponent } from './components/hero/hero.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { InnerCategoriesComponent } from './components/store/categories/inner-categories/inner-categories.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoreComponent,
    FooterComponent,
    CarouselComponent,
    ProductsComponent,
    CategoriesComponent,
    StoreHandlersComponent,
    LoginComponent,
    HeroComponent,
    SignUpComponent,
    InnerCategoriesComponent
  ],
  imports: [
    BrowserModule ,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
