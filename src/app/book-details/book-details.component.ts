import { Component, OnInit } from '@angular/core';
import {Book} from './book';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  currentBook = new Book();

  constructor() {
    console.log('constructor');
    
  }

  ngOnInit(): void {
    console.log('ngInit');
    this.currentBook.author = 'John Example';
    this.currentBook.title = 'Angular in a nutshell';
  }
}