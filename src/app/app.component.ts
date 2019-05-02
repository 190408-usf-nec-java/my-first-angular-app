import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HELLO EVERYONE!';

  ngOnInit() {
    setInterval(() => {
      this.title += '!';
    }, 500);
  }
}
