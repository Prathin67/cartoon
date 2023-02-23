import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { cartoons } from './model';

@Injectable({
  providedIn: 'root'
})
export class ToonserviceService {

  private dataSubject$= new BehaviorSubject<any>('');
  dataEvent$ = this.dataSubject$.asObservable();



  toon_url = 'http://localhost:3000/cartoons'
  data:cartoons[] = [];

  constructor(private http :HttpClient) { }

  gettoons(){
   return this.http.get(this.toon_url)
  }

  updatewish(data:any){
    const newData={
      ...data,
      wishlist:!data.wishlist
    }
    return this.http.put(`${this.toon_url}/${data.id}`,newData);
  }


  
  getDetails(id:any){
    return this.http.get(`${this.toon_url}/${id}`)
  }




  searchData(value:any){

    this.http.get<cartoons[]>(`${this.toon_url}?q=${value}`).subscribe((data)=>{
      this.data=data;
      this.dataSubject$.next(data)
    })

    // this.dataSubject$.next(this.data.filter((val:any) => val.name.toLowerCase().includes(value.toLowerCase())))

  
  }






}
