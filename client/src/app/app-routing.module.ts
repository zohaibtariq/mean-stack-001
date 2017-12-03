/**
 * Created by zohaib on 12/4/2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const appRoutes: Routes = [
    //{ path: 'crisis-center', component: CrisisListComponent },
    //{ path: 'heroes',        component: HeroListComponent },
    //{ path: '',   redirectTo: '/heroes', pathMatch: 'full' },
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
    { path: '**', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [],
    bootstrap: []
})

export class AppRoutingModule { }