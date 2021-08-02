import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    activateComponent: boolean = false;
    constructor() {}

    ngOnInit(): void {}

    Activate(value: any) {
        this.activateComponent = value;
    }
}
