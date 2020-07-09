import { Component} from '@angular/core';
import {trigger, style, transition, animate} from '@angular/animations';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('3s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('3s', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent {

}

// Exemple animation with query selecteur
/*
*   animations: [
    trigger('fadeIn', [
      transition(':enter', [
        query('h1', style({ opacity: 0 })),
        // animate the inner elements in, one by one
        query('h1', animate('15s', style({ opacity: 1 }))),
      ]),
      transition(':leave', [
        animate('10s', style({ opacity: 1 }))
      ])
  ])
  ]*/
