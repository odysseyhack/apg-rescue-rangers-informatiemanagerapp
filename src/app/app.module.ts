import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MediastreamComponent } from './mediastream/mediastream.component';
import { GeomapComponent } from './mediastream/geomap/geomap.component';
import { SummaryComponent } from './mediastream/summary/summary.component';
import { TimelineComponent } from './mediastream/timeline/timeline.component';
import { TimelineItemComponent } from './mediastream/timeline/timeline-item/timeline-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopbarComponent,
    MediastreamComponent,
    GeomapComponent,
    SummaryComponent,
    TimelineComponent,
    TimelineItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAR6CdTE5J3xwKdCNfjXNe9NdcqEegovgw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
