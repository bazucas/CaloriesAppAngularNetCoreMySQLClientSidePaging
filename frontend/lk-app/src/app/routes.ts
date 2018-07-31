import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { MyDiaryComponent } from './mydiary/mydiary.component';
import { SigninComponent } from './signin/signin.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'mydiary', component: MyDiaryComponent},
    {path: 'register', component: RegisterComponent},
    // {
    //     path: '',
    //     runGuardsAndResolvers: 'always',
    //     canActivate: [AuthGuard],
    //     children: [
    //         {path: 'members', component: MemberListComponent, resolve:
    //             {users: MemberListResolver}},
    //         {path: 'members/:id', component: MemberDetailComponent, resolve:
    //             {user: MemberDetailResolver}},
    //         {path: 'member/edit', component: MemberEditComponent, resolve:
    //         {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges]},
    //         {path: 'messages', component: MessagesComponent, resolve: {messages: MessagesResolver}},
    //         {path: 'lists', component: ListsComponent, resolve : {users: ListsResolver}}
    //     ]
    // },
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent }
];
