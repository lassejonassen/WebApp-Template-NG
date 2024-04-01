import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./modules/sakai/sakai.module').then((m) => m.SakaiModule),
    },
    {
        path: 'login',
        // component: LoginComponent,
    },
    {
        path: 'error',
        // component: ErrorComponent,
    },
    {
        path: '404',
        // component: NotFoundComponent,
    },
    {
        path: '401',
        // component: AccessDeniedComponent,
    },
    {
        path: '**',
        redirectTo: '/404',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
