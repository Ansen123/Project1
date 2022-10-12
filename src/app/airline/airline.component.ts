import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css']
})
export class AirlineComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchAir()
  }

  fetchAir=()=>{
    this.myapi.airView().subscribe(
      (data)=>{
        this.airData=data
      }
    )
  }

  airData:any=[]
  ngOnInit(): void {
  }

}
