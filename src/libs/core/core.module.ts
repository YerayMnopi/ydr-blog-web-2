import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeadingComponent } from './components/page-heading/page-heading.component';
import { CardComponent } from './components/card/card.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PostPreviewComponent } from './components/post-preview/post-preview.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';


@NgModule({
  declarations: [
    PageHeadingComponent,
    CardComponent,
    NavComponent,
    BarChartComponent,
    PostPreviewComponent,
    CarrouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PageHeadingComponent,
    CardComponent,
    NavComponent,
    BarChartComponent,
    PostPreviewComponent,
    CarrouselComponent
  ]

})
export class CoreModule { }
