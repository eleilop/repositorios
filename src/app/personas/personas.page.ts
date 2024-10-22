import { Component, ElementRef, OnInit } from '@angular/core';
import { PeopleService } from '../core/services/impl/people.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { AnimationController, InfiniteScrollCustomEvent } from '@ionic/angular';
import { Paginated } from '../core/models/paginated/paginated.model';
import { Person } from '../core/models/person/person.model';

@Component({
  selector: 'app-personas',
  templateUrl: 'personas.page.html',
  styleUrls: ['personas.page.scss'],
})
export class PersonasPage implements OnInit{
  _people:BehaviorSubject<Person[]> = new BehaviorSubject<Person[]>([]);
  people$:Observable<Person[]> = this._people.asObservable();

  constructor(
    private peopleSv:PeopleService
  ) {}

  ngOnInit(): void {
    this.getMorePeople();
  }

  page:number = 1;
  pageSize:number = 25;

  getMorePeople(notify:HTMLIonInfiniteScrollElement | null = null) {
    this.peopleSv.getAll(this.page, this.pageSize).subscribe({
      next:(response:Paginated<Person>)=>{
        this._people.next([...this._people.value, ...response.data]);
        this.page++;
        notify?.complete();
      }
    });
  }

  onIonInfinite(ev:InfiniteScrollCustomEvent) {
    this.getMorePeople(ev.target);
  }
}