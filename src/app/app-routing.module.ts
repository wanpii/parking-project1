import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ProfilePageComponent } from "./profile-page/profile-page.component";
import { RegistrationPageComponent } from "./registration-page/registration-page.component";

const appRoutes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegistrationPageComponent},
    {path: 'profile/:id',component: ProfilePageComponent},
    {path: '**', component: NotFoundComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {


}