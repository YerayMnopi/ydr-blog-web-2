import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
  host: {
    'role': 'section'
  }
})
export class CarrouselComponent implements OnInit {

  @Input()
  heading!: string;

  @Input()
  items!: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
