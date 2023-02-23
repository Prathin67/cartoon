import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';

import { ToonserviceService } from '../toonservice.service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit  {

  dataSource:Observable<any>=of([{

      image: '',
      title: '',
      description:'', 
      id:'',
     wishlist: false

    
  
  }])



  datcrd: any;

  
    
 

  constructor(private service :ToonserviceService){}
  ngOnInit(): void {
    
    
    this.service.gettoons()
    
    this.datcrd=this.service.dataEvent$
    .pipe(map((num:any)=>{

     

      return(num.filter((value:any)=>value.fav))
    }))
    console.log(this.datcrd ,'khkuh');
    
  }

}
