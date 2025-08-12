import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit {
    token: any;
    userData: any;
    email: any;
    showDropdown = false;

    toggleDropdown() {
        this.showDropdown = !this.showDropdown;
    }


    ngOnInit(): void {
        // this.token = localStorage.getItem('token');
        // this.userData = jwtDecode(this.token);
        // this.email = this.userData.email;

    }

    // Method to handle logout
    onLogout() {
        this.authService.logout(); // Call the logout method from AuthService
    }

    // onLogout() {
    //     sessionStorage.removeItem('token'); // Remove token
    //     sessionStorage.removeItem('email'); // Optionally remove user-specific data
    //     this.router.navigate(['/']); // Navigate to login
    // }

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService, private router: Router, private authService: AuthService) { }
}
function jwtDecode(token: any): any {
    throw new Error('Function not implemented.');
}

