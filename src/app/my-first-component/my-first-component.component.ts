import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-my-first-component',
    templateUrl: './my-first-component.component.html',
    styleUrls: ['./my-first-component.component.css']
})
export class MyFirstComponent implements OnInit{
    componentName = 'My First Component';
    myBoolean = true;
    data = '';


    toggleMyBoolean() {
        this.myBoolean = !this.myBoolean;
    }

    ngOnInit() {
        // setInterval(() => this.data = '', 1000);
    }

    valid(): boolean {
        return this.data.length > 5;
    }
}
