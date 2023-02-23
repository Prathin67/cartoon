import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToonserviceService } from '../toonservice.service';
import {MatCardModule} from '@angular/material/card';




@Component({
  selector: 'app-youtbe',
  templateUrl: './youtbe.component.html',
  styleUrls: ['./youtbe.component.css']
})
export class YoutbeComponent implements OnInit{
  cartoonsdeta: any;
  commentText:any
  comments:any

  constructor(private service:ToonserviceService,private route :ActivatedRoute){
    this.comments = []
  }

  ngOnInit(): void {
   

    this.service.getDetails(this.route.snapshot.params['id']).subscribe(detail=>{
      this.cartoonsdeta=detail
             
      
     })
  }
  
  onSubmit(){
    // console.log(this.commentText);

    // this.commentText=''


    this.comments.push(this.commentText)
    this.commentText = ''
    
  }

}
