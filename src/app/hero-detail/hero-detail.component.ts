import { Component, OnInit, Input } from '@angular/core';
import { Herosik } from '../hero';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    @Input() detailedHero: Herosik;
    /* 
    That's the only change you should make to the HeroDetailComponent class. 
    There are no more properties. There's no presentation logic. 
    This component simply receives a hero object through its hero property and displays it.
     */

    constructor() { }

    ngOnInit() {
    }

}
