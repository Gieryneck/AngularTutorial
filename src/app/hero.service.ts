import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Herosik } from "./hero";
import { HEROES } from "./mock-heroes";
import { MessageService } from "./message.service";

// The @Injectable decorator identifies services and other classes that are intended to be injected. It can also be used to configure a provider for those services.
@Injectable({
  // A provider is a recipe for creating a dependency. For a service, this is typically the service class itself. 
  // HeroService will be the provider(utility creating or delivering a service), we must register it
  // An Angular dependency injector is responsible for creating service instances and injecting them into classes like the HeroListComponent.
  // providedIn tells Angular that the "root" injector is responsible for creating an instance of the HeroService
  // (by invoking its constructor) and making it available across the application
  providedIn: 'root'
})


export class HeroService {

  getHeroes(): Observable<Herosik[]> {

    // send the message _after_ fetching the heroes
    this.messageService.add("HeroService: fetched heroes");

    // "of (HEROES)"" returns an Observable<Herosik[]> that emits a SINGLE VALUE, the array of mock heroes.
    return of (HEROES);
  }

  getHero(id: number): Observable<Herosik> {
    // send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }


  /* 
  When Angular creates a new instance of a component class, it determines which services or other dependencies that component needs by 
  looking at the types of its constructor parameters. For example, the constructor of HeroService needs a MessageService:
  */
  constructor(private messageService: MessageService) { }
}
