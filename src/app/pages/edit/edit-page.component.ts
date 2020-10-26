import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import {
  CreateBookService,
  GetBookService,
  UpdateBookService
} from '../../services/index';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private createBookService: CreateBookService,
    private updateBookService: UpdateBookService,
    private getBookService: GetBookService
  ) { }
  bookId: string;

  bookForm = new FormGroup({
    title: new FormControl('', [ Validators.required ]),
    stage: new FormControl('', [ Validators.required ]),
    authors: new FormControl('', [ Validators.required ]),
    editor: new FormControl('', [ Validators.required ]),
    pcp: new FormControl('', [ Validators.required ])
  });

  ngOnInit() {
    this.activatedRoute.params
      .subscribe( params => {
        if(params['bookId']) {
          this.bookId = params['bookId'];
          this.loadBook();
        }
      });
  }

  loadBook() {
    this.getBookService.load(this.bookId)
      .subscribe(resp => {
        this.bookForm.patchValue({
          title: resp[0].title,
          stage: resp[0].stage,
          authors: resp[0].authors,
          editor: resp[0].editor,
          pcp: resp[0].pcp
        });
      });
  }

  sanitiseData() {
    let data = this.bookForm.value;
    data.authors = (typeof data.authors === 'string') ? data.authors.split(',') : data.authors;
    return data;
  }

  onSubmit() {
    let bookData = this.sanitiseData();

    if(!this.bookId) {
      this.createBookService.send(bookData)
        .subscribe(resp => {
          this.router.navigate(['/']);
        });
    } else {
      bookData['id'] = this.bookId;
      this.updateBookService.update(bookData)
        .subscribe(resp => {
          this.router.navigate(['/']);
        });
    }
  }

}
