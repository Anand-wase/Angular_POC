import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/Services/housing.service';
import { IVilla } from '../IVilla.interface';


@Component({
  selector: 'app-villa-list',
  templateUrl: './villa-list.component.html',
  styleUrls: ['./villa-list.component.css']
})

export class VillaListComponent implements OnInit {
  Villas: Array<IVilla>;
  constructor(private housingService:HousingService) {
    this.Villas=[];
  }
  
  ngOnInit(): void {
    this.housingService.getAllVillas().subscribe(
      data=>{
            this.Villas=data;
            console.log("data",this.Villas);
          }
    )
  }
}
