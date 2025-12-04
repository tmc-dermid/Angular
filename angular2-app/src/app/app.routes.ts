import { Routes } from '@angular/router';
import { AddPersonComponentComponent } from './add-person-component/add-person-component.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { DetailsComponentComponent } from './details-component/details-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

export const routes: Routes = [
    { path: '', component: ListComponentComponent },
    { path: 'details/:id', component: DetailsComponentComponent },
    { path: 'add', component: AddPersonComponentComponent },
    { path: '**', component: NotFoundComponentComponent }
];
