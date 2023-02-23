import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToonserviceService } from '../toonservice.service';

@Component({
  selector: 'app-fulldta',
  templateUrl: './fulldta.component.html',
  styleUrls: ['./fulldta.component.css']
})
export class FulldtaComponent implements OnInit {

  cartoondeta:any
  card : any

  constructor(private service:ToonserviceService,private route : ActivatedRoute,private router:Router){}


  ngOnInit(): void {
    // this.route.paramMap.subscribe((details:any)=>{
    //   this.cartoondeta = 
    //   // this.service.getDetails(this.cartoondeta).subscribe((cart:any)=>{
    //   //   this.card=cart
    //   // })
    // })

    this.service.getDetails(this.route.snapshot.params['id']).subscribe(detail=>{
     this.cartoondeta=detail
            
     
    })

    
  }
  you(id:any){
    this.router.navigate(['/youtbe',id])
  }

}
