import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { FooterComponent } from './main/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { HistoryComponent } from './about/history/history.component';
import { BoardComponent } from './about/board/board.component';
import { ProductComponent } from './product-support/product/product.component';
import { SupportComponent } from './product-support/support/support.component';
import { ActivityComponent } from './new-activity/activity/activity.component';
import { NewsComponent } from './new-activity/news/news.component';
import { KiatsinNextComponent } from './about/kiatsin-next/kiatsin-next.component';
import { ContactComponent } from './contact/contact.component';
import { DetailNewComponent } from './new-activity/detail-new/detail-new.component';
import { RewardComponent } from './about/reward/reward.component';
import { LanmittraphapComponent } from './about/lanmittraphap/lanmittraphap.component';
import { DetailActivityComponent } from './new-activity/detail-activity/detail-activity.component';
import { LanmittraphapTwoComponent } from './about/lanmittraphap-two/lanmittraphap-two.component';
import { HelperService } from './common/helper-service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    HistoryComponent,
    BoardComponent,
    ProductComponent,
    SupportComponent,
    ActivityComponent,
    NewsComponent,
    KiatsinNextComponent,
    ContactComponent,
    DetailNewComponent,
    RewardComponent,
    LanmittraphapComponent,
    DetailActivityComponent,
    LanmittraphapTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
