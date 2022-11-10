import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthguardGuard } from "./auth.guard";
import { HomeComponent } from "./home/home.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { ProfilePageComponent } from "./profile-page/profile-page.component";
import { RegistrationPageComponent } from "./registration-page/registration-page.component";

const appRoutes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'home', component: HomeComponent,canActivate: [AuthguardGuard]},
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegistrationPageComponent},
    {path: 'profile/:id',component: ProfilePageComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {


}