import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bookings } from 'src/app/models/Bookings';

@Component({
  selector: 'app-Bookings',
  templateUrl: './Bookings.component.html',
  styleUrls: ['./Bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  public bookings: Array< Bookings> = [];

  constructor(
    private client: HttpClient) {

  }

  ngOnInit() {
   
    this.client
    .get('http://localhost:3000/api/bookings')
    .subscribe( 
      (response) => {
        this.bookings = response;
        
        
      }
    )
  }



}