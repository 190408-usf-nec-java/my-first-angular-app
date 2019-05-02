import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-second-component',
  templateUrl: './my-second-component.component.html',
  styleUrls: ['./my-second-component.component.css']
})
export class MySecondComponentComponent implements OnInit {

  list: Array<string> = new Array();
  inputData = '';

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.list.push(this.inputData);
    this.inputData = '';
  }

  inputOdd(): boolean {
    return this.inputData.length % 2 === 1;
  }

}
