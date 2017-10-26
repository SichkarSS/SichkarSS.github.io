import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';

import {EventListComponent} from './modules/event-searcher/components/event-list/event-list.component';
import {FriendsComponent} from './components/friends/friends.component';
import {MessagesComponent} from './components/messages/messages.component';
import {MyEventsComponent} from './modules/event-searcher/components/my-events/my-events.component';
import {ShopComponent} from './components/shop/shop.component';

const routes: Routes = [
    {path: 'events', component: EventListComponent},
    {path: 'friends', component: FriendsComponent},
    {path: 'messages', component: MessagesComponent},
    {path: 'my-events', component: MyEventsComponent},
    {path: 'shop', component: ShopComponent},
    {path: '', redirectTo: 'events', pathMatch: 'full'},
    // {path: '**', redirectTo: '/events'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes/*, { enableTracing: true }*/)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}

export const routedComponents = [AppComponent];
