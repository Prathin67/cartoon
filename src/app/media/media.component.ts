import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToonserviceService } from '../toonservice.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  datcrd:any;

  constructor(private service : ToonserviceService , private router:Router){}
  ngOnInit(): void {

    this.service.gettoons().subscribe((data)=>{
      this.datcrd=data
      
     })

    
     


     



    
  }
  detail(id:any){
    this.router.navigate(['fulldta',id])
  }

  star(data:any){
    this.service.updatewish(data)
    .subscribe(()=>{
   window.location.reload
      
    })
  }

  onSearch(value:any){

    this.service.searchData(value);
    this.service.dataEvent$.subscribe((data)=>{
      this.datcrd=data
    })
  

    
  
    
   
  }
}
