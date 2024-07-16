import { Routes } from "@angular/router";
import { SynonymSearchComponent } from "./synonym-search/synonym-search.component";
import { SynonymPostComponent } from "./synonym-post/synonym-post.component";

export const routes: Routes = [
    {
        path: '', 
        children: [
            {
                path: '', component: SynonymSearchComponent
            },          
            {
                path: 'post', component: SynonymPostComponent
            }
        ]
    }
];