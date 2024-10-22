import { Component, ElementRef, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Group } from '../core/models/group/group.model';
import { AnimationController, InfiniteScrollCustomEvent } from '@ionic/angular';
import { GroupsService } from '../core/services/impl/groups.service';
import { Paginated } from '../core/models/paginated/paginated.model';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.page.html',
  styleUrls: ['./grupos.page.scss'],
})
export class GruposPage implements OnInit {
  _groups:BehaviorSubject<Group[]> = new BehaviorSubject<Group[]>([]);
  groups$:Observable<Group[]> = this._groups.asObservable();

  constructor(
    private groupsSv:GroupsService
  ) { }

  ngOnInit() {
    this.getMoreGroups();
  }

  page:number = 1;
  pageSize:number = 25;

  getMoreGroups(notify:HTMLIonInfiniteScrollElement | null = null) {
    this.groupsSv.getAll(this.page, this.pageSize).subscribe({
      next:(response:Paginated<Group>)=>{
        this._groups.next([...this._groups.value, ...response.data]);
        this.page++;
        notify?.complete();
      }
    });
  }

  onIonInfinite(ev:InfiniteScrollCustomEvent) {
    this.getMoreGroups(ev.target);
  }
}