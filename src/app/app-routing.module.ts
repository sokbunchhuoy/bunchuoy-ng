import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { AuthGuardChild } from './guard/auth-child.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
            },
            {
                path: 'admin', component: AppLayoutComponent,

                children: [
                    { path: 'dashboard', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'ui', loadChildren: () => import('./demo/components/ui/ui.module').then(m => m.UiModule) },
                    { path: 'template', loadChildren: () => import('./demo/components/template/template.module').then(m => m.TemplateModule) },
                    { path: 'life-cycle', loadChildren: () => import('./demo/components/life-cycle/life-cycle.module').then(m => m.LifeCycleModule) },
                    { path: 'pipe', loadChildren: () => import('./demo/components/pipe/pipe.module').then(m => m.PipeModule) },
                    { path: 'basic', loadChildren: () => import('./demo/components/table/table.module').then(m => m.TableModule) },
                    { path: 'content', loadChildren: () => import('./demo/components/content-view-demo/content-view-demo.module').then(m => m.ContentViewDemoModule) },
                    { path: 'show', loadChildren: () => import('./demo/components/main-dynamic/main-dynamic.module').then(m => m.MainDynamicModule) },
                    { path: 'page', loadChildren: () => import('./demo/components/directives/directives.module').then(m => m.DirectivesModule) },
                    { path: 'ch', loadChildren: () => import('./demo/components/layouts/layouts.module').then(m => m.LayoutsModule) },
                    { path: 'form', loadChildren: () => import('./demo/components/form/form.module').then(m => m.FormModule) },
                    { path: 'kh', loadChildren: () => import('./demo/components/management/management.module').then(m => m.ManagementModule) },
                    { path: 'ph', loadChildren: () => import('./demo/components/data/data-routing.module').then(m => m.DataRoutingModule) },
                    { path: 'list', loadChildren: () => import('./demo/components/staff/staff-routing.module').then(m => m.StaffRoutingModule) },
                    { path: 'in', loadChildren: () => import('./demo/components/content-projection/contents/page-chil/page-chil-routing.module').then(m => m.PageChilRoutingModule) },
                    { path: 'tag', loadChildren: () => import('./demo/components/tag-component/tag-component-routing.module').then(m => m.TagComponentRoutingModule) },

                ]
            },

            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
