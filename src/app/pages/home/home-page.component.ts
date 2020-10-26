import { Component, OnInit } from '@angular/core';
import { ListBooksService } from '../../services/index';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  booksList = [];
  filteredData = [];

  constructor( private listBooksService: ListBooksService) { }

  filter(filterValue) {
    console.log(filterValue);
    if(filterValue != 'All') {
      this.filteredData = this.booksList.filter(book => book.stage == filterValue);
    } else {
      this.filteredData = this.booksList;
    }
  }

  ngOnInit() {
    this.listBooksService.load()
      .subscribe(resp => {
        console.log(resp);
        this.booksList = resp;
        this.filteredData = resp;
      })
  }

}
