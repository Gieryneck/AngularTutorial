import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';  

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent // it was automatically imported and put here by Angular when this component was created
  ],
  imports: [
    BrowserModule,
    FormsModule // we need this to access NgModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
