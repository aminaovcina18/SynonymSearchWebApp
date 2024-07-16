import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '', loadChildren: () => import('./pages/synonym.routes').then(mod => mod.routes)
            },
        ]
       
    }
];

