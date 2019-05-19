import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  arrdata: string [];

  constructor(private httpService: HttpClient) {
    }

    onEnter(): void{
      this.httpService.get('./assets/test.json').subscribe(
        data => {
          this.arrdata=data as string [];
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );      
    }

  ngOnInit() {

   
    
}
}
