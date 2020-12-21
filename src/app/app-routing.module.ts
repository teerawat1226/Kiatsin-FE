import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HistoryComponent } from './about/history/history.component';
import { BoardComponent } from './about/board/board.component';
import { ProductComponent } from './product-support/product/product.component';
import { ActivityComponent } from './new-activity/activity/activity.component';
import { SupportComponent } from './product-support/support/support.component';
import { NewsComponent } from './new-activity/news/news.component';
import { KiatsinNextComponent } from './about/kiatsin-next/kiatsin-next.component';
import { ContactComponent } from './contact/contact.component';
import { DetailNewComponent } from './new-activity/detail-new/detail-new.component';
import { RewardComponent } from './about/reward/reward.component';
import { LanmittraphapComponent } from './about/lanmittraphap/lanmittraphap.component';
import { DetailActivityComponent } from './new-activity/detail-activity/detail-activity.component';
import { LanmittraphapTwoComponent } from './about/lanmittraphap-two/lanmittraphap-two.component';

const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'history', component: HistoryComponent
  },
  {
    path: 'board', component: BoardComponent
  },
  {
    path: 'product' , component: ProductComponent
  },
  {
    path: 'activity', component: ActivityComponent
  },
  {
    path: 'service' ,component: SupportComponent
  },
  {
    path: 'news', component: NewsComponent
  },
  {
    path: 'kiatsinnext', component: KiatsinNextComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'detailnew' , component: DetailNewComponent
  },
  {
    path: 'reward', component: RewardComponent
  },
  {
    path: 'lanmittraphap', component:LanmittraphapComponent
  },
  {
    path: 'lanmittraphap-two', component:LanmittraphapTwoComponent
  },
  {
    path: 'detail-activity', component: DetailActivityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
