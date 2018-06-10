import { Component, OnInit } from '@angular/core';
import { Herosik } from "../hero";
import { HEROES } from "../mock-heroes";

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

    selectedHero: Herosik;
    heroeZ : Herosik[] = HEROES; // here we have to use =, not : to assign HEROES

    onSelect (clickedHero: Herosik) : void {
        this.selectedHero = clickedHero;
    }
    constructor() { }

    ngOnInit() {
    }

}
