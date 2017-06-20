import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'add', component: AddComponent}
]

export const routing = RouterModule.forRoot(routes, {useHash: true})