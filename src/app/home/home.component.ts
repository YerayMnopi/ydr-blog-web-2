import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/libs/core/content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
} )
export class HomeComponent implements OnInit {

  sections!: any;

  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit(): void {
    this.sections = this.contentService.sections;
  }

}
