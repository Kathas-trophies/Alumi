import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Alumni } from './alumni/alumni';
import { Career } from './career/career';
import { Events } from './events/events';
import { StoriesPageComponent } from './stories/stories';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'alumni', component: Alumni },
  { path: 'career', component: Career },
  { path: 'events', component: Events },
  {
    path: 'stories',
    component: StoriesPageComponent,
  },
];
