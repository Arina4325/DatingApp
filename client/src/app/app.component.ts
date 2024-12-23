import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  http = inject(HttpClient);
  title = 'DatigApp';
  users: any;

  ngOnInit(): void {
    this.http.get('https://localhost:5026/api/users').subscribe({
      next: response =>this.users=response,
      error: error =>console.log(error),
      complete: () =>console.log('Request has complited'),
      
    })
  }
}
