import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/admin/dashboard'] }
                ]
            },
            {
                label: 'Tag List',
                items: [
                    { label: 'Tag List', icon: 'pi pi-fw pi-bars', routerLink: ['/admin/tag/tag-list'] }
                ]
            },
            {
                label: 'UI Components',
                items: [
                    { label: 'Product', icon: 'pi pi-fw pi-list', routerLink: ['/admin/ui/product'] },
                    { label: 'Customer', icon: 'pi pi-fw pi-list', routerLink: ['/admin/kh/customer'] },
                    { label: 'Page List', icon: 'pi pi-fw pi-check-square', routerLink: ['/admin/ph/page-list'] },
                    { label: 'Form Array', icon: 'pi pi-fw pi-check-square', routerLink: ['/admin/ch/array'] },
                    { label: 'Employee', icon: 'pi pi-fw pi-database', routerLink: ['/admin/list/staff'] },
                    { label: 'Input Output', icon: 'pi pi-fw pi-book', routerLink: ['/admin/in/in'] },
                ]
            },
            {
                label: 'Template',
                items: [
                    { label: 'Template', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/template/template'] },
                ]
            },
            {
                label: 'Exercise',
                items: [
                    { label: 'Content View Demo', icon: 'pi pi-fw pi-book', routerLink: ['/admin/content/view'] },
                    { label: 'Dynamic', icon: 'pi pi-fw pi-book', routerLink: ['/admin/show/dynamic'] },
                    { label: 'Alert Box', icon: 'pi pi-fw pi-book', routerLink: ['/admin/basic/basic'] },
                ]
            },
            {
                label: 'Lifecycle',
                items: [
                    { label: 'Component Lifecycle', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/admin/life-cycle/page'] },

                ]
            },
            {
                label: 'Pipe',
                items: [
                    { label: 'Pipe Page', icon: 'pi pi-fw pi-slack', routerLink: ['/admin/pipe/page-detail'] },
                ]
            },
            {
                label: 'Directives',
                items: [
                    { label: 'Directives', icon: 'pi pi-fw pi-slack', routerLink: ['/admin/page/directives'] },
                ]
            },
            // {
            //     label: 'Template',
            //     icon: 'pi pi-fw pi-briefcase',
            //     items: [
            //         {
            //             label: 'Template-Statement',
            //             icon: 'pi pi-fw pi-user',
            //             items: [
            //                 {
            //                     label: 'Template-Statement',
            //                     icon: 'pi pi-fw pi-sign-in',
            //                     routerLink: ['/template/statement']
            //                 }
            //             ]
            //         },
            //     ]
            // },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/login']
                            }
                        ]
                    },
                ]
            }
        ];
    }
}
