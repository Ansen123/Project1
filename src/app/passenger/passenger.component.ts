import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchPass()
  }

  fetchPass=()=>{
    this.myapi.passView().subscribe(
      (data)=>{
        this.passData=data
      }
    )
  }
  
passData:any={}
  ngOnInit(): void {
  }

}
