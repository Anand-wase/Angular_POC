import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HousingService } from 'src/app/Services/housing.service';
import { IVilla } from '../IVilla.interface';
import { Villa } from '../Villa';
// import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-Villa-detail',
  templateUrl: './Villa-detail.component.html',
  styleUrls: ['./Villa-detail.component.css']
})
export class VillaDetailComponent implements OnInit {



public villaId: number;
villa= new Villa();



  constructor(private route: ActivatedRoute, private housingService: HousingService)
   {
    this.villaId=0;



   }

  ngOnInit() {


    this.villaId = this.route.snapshot.params['id'];
    this.housingService.getVilla(this.villaId).subscribe(
      data=>{
        this.villa.name = data!.name;
        this.villa.details=data!.details;
        this.villa.rate=data!.rate;
        this.villa.sqft=data!.sqft;
        this.villa.image= data!.image;
        this.villa.occupancy=data!.occupancy;
      }

    // this.route.params.subscribe(
    //   (params)=>{
    //     this.villaId = +params['id'];

    //     )
    //   }
    )
  }

}
