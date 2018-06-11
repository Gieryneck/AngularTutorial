import { Component, OnInit } from '@angular/core';
import { Herosik } from "../hero";
import { HeroService } from "../hero.service";

// annotate the component class with @Component
// @Component is a decorator function that specifies the Angular metadata for the component
@Component({
    selector: 'app-heroes', // <app-heroes></app-heroes> thats how to put component in the app html template
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})

// The ngOnInit is a lifecycle hook Angular calls ngOnInit shortly after creating a component.
// It's a good place to put initialization logic.
export class HeroesComponent implements OnInit {

    // The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site (this.heroService = HeroService)
    // When Angular creates a HeroesComponent, the Dependency Injection system sets the heroService parameter to the singleton instance of HeroService.
    // constructor should not be used for antyhing but simple initialization ( shouldn't do things like http requests )
    constructor(private heroService: HeroService) { }

    heroeZ: Herosik[]; 

    getHeroes(): void {
        this.heroService.getHeroes()
            // waits for the Observable to emit the array of heroes — which could happen now or several minutes from now. 
            // Then hero.service Observable's .subscribe passes the emitted array to the callback, which sets the component's heroes property
            .subscribe(heroes => this.heroeZ = heroes)
    }

    ngOnInit() {
        this.getHeroes();
    }

  /*   onSelect (clickedHero: Herosik) : void {
        this.selectedHero = clickedHero;
    } */

    //selectedHero: Herosik;

}
