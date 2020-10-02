import { Component} from '@angular/core';
import {trigger, style, transition, animate, query, group, keyframes, sequence} from '@angular/animations';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [

        query('.logo', style({ opacity: 0 })),
        query('.grid-item-3', style({ opacity: 0 })),
        query('.grid-item-6', style({ opacity: 0 })),
        query('.img_triangle', style({transform: 'skew(90deg, 0deg)', 'transition-property': 'transform' })),
        query('.at-item', style({opacity: 0})),
        query('.grid-item-11', style({ opacity: 0 })),
        query('.grid-item-13', style({ opacity: 0 })),
        query('.grid-item-14', style({ opacity: 0 })),
        query('.grid-item-16', style({ opacity: 0 })),
        sequence([
          // On parallel
          group([
            query('.logo' , animate('1.5s', style( { opacity: 1 })), { optional: true}),
            query('.grid-item-3' , animate('1.5s', style( { opacity: 1 }))),
            query('.grid-item-6' , animate('1s', style( { opacity: 1 }))),

            query('.img_triangle' , animate('0.9s', style({
              transform: 'skew(0deg, 0deg)'})), { optional: true}),
            query('.grid-item-13' , animate('1.5s', keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({opacity: 1, transform: 'translateY(0)', offset: 0.5}),
              style({opacity: 1, transform: 'translateY(-15px)', offset: 0.6}),
              style({opacity: 1 , transform: 'translateY(0)', offset: 0.8}),
              style({opacity: 1 , transform: 'translateY(0)', offset: 1}),

            ])), { optional: true}),
            query('.grid-item-14' , animate('1.2s', style( { opacity: 1 })), { optional: true}),
            query('.grid-item-16' , animate('1.2s', style( { opacity: 1 })), { optional: true})]),

          query('.at-item' , animate(3, keyframes ([
            style({
              'letter-spacing': '2em',
              transform: 'translateY(300px)',
              filter: 'blur(12px)',
              opacity: 0,
              offset: 0
            }),
            style({
              transform: 'translateY(0px)',
              filter: 'blur(0)',
              opacity: 1,
              offset: 1}),
          ])), { optional: true}),
        ])
      ]),
      transition(':leave', [
        sequence([
          group([
            query('.logo' , animate('0.3s', style( { opacity: 0 })), { optional: true}),
            query('.grid-item-3' , animate('0.3s', style( { opacity: 0 }))),
            query('.grid-item-6' , animate('0.3s', style( { background : 'none'}))),
            query('.grid-item-8' , animate('0.3s', style( { opacity: 0 }))),
            query('.grid-item-9' , animate('0.3s', style( { opacity: 0 }))),
            query('.grid-item-11' , animate('0.3s', style( { opacity: 0 }))),
            query('.grid-item-12' , animate('0.3s', style( { opacity: 0 }))),
            query('.grid-item-13' , animate('0.3s', style( { opacity: 0 }))),
            query('.grid-item-14' , animate('0.3s', style( { opacity: 0 }))),
            query('.grid-item-16' , animate('0.3s', style( { opacity: 0 }))),
          ]),
            group([
            query('.grid-item-6' , animate('0.5s', style( { background : 'none', opacity: 1 }))),
            query('.img_triangle' , animate('0.3s', keyframes([
              style({
                transform: 'rotate(0deg)',
               // 'transform-origin': 'bottom right',
                opacity: 0.6,
                offset: 0}),
                style({
                  transform: 'rotate(260deg)',
                //  'transform-origin': 'bottom right',
                  opacity: 0,
                  offset: 1})
            ])
            ), { optional: true}),
          query('.at-item' , animate('0.3s', keyframes ([
            style({
             // 'letter-spacing': '0.2em',
              'animation-direction': 'reverse',
              transform: 'translateY(300px)',
              filter: 'blur(12px)',
              opacity: 1,
              offset: 0
            }),
            style({
              'animation-direction': 'reverse',
              transform: 'translateY(0px)',
              filter: 'blur(0)',
              opacity: 0,
              offset: 1}),
          ])), { optional: true})]),
        ])
      ])
    ]),
  ]
})
export class HomeComponent {

}




/*
trigger('slide', [
  transition('login => home', [
    query('home', style({ left: '-120%', right: '120%' })),
    query('login', style({ left: '0', right: '0' })),

    group([ query('home', animate(duration, style({ left: '0', right: '0' }))),
            query('login', animate(duration, style({ left: '120%', right: '-120%' }))) ])
])
* */
