import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];
}