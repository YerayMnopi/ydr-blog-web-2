import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { CoreModule } from 'src/libs/core/core.module';
import { SectionModule } from 'src/libs/core/components/section/section.module';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    CoreModule,
    SectionModule
  ]
})
export class AboutModule { }
