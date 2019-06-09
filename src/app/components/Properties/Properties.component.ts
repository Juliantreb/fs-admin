import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Property } from 'src/app/models/Property';

@Component({
  selector: 'app-Properties',
  templateUrl: './Properties.component.html',
  styleUrls: ['./Properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  
  public properties: Array< any > = [];
  
  constructor(
    private httpClient: HttpClient) {}

  

  ngOnInit() {
    
    this.httpClient
    .get('http://localhost:3000/api/properties')
    .subscribe( 
      (response) => {
        this.properties = response;
        
        
      }
    )
    }}