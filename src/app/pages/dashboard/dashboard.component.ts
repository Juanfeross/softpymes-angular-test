import { Component } from '@angular/core';
import { LayoutComponent } from "./components/layout/layout/layout.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [LayoutComponent]
})
export class DashboardComponent {

}
