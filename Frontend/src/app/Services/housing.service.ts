import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IVilla } from '../Villa/IVilla.interface';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }


  // getCities():Observable<IVilla[]>{
  //   return this.http.get<IVilla[]>('http://localhost:5120/api/villa');
  // }

  getVilla(id: number){
    return this.getAllVillas().pipe(
      map(VillasArray =>{
        return VillasArray.find(p=>p.id==id);
      })
    );
  }

  getAllVillas(): Observable<IVilla[]>{
    return this.http.get('http://localhost:5120/api/villa').pipe(
      map(data=>{
        const villasArray: Array<IVilla> =[];
        for( const id in data){
          if(data.hasOwnProperty(id)){
            villasArray.push(data[id as keyof object]);

          }
        }
        return villasArray;
      })
    )

  }
}
