import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LycorisComponent } from './components/lycoris/lycoris.component';
import { RebootComponent } from './components/reboot/reboot.component';

export const routes: Routes = [
  { path: '', component: LycorisComponent },
  { path: 'reboot', component: RebootComponent },
  { path: 'home', component: HomeComponent },
];
