import { Component, OnInit, Input, ElementRef, ViewChild} from '@angular/core';
import { Element } from '@angular/compiler';


@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input()
   private rating:number =0;

   private stars:boolean[];

   @ViewChild('ptag')
   public pTag:ElementRef

  @ViewChild('spantag')
  public spanTag: ElementRef;

  constructor() { }

  ngOnInit() {
    this.stars=[];
    for(let i=1;i<=5;i++){
      this.stars.push(i>this.rating);
    }
    console.log(this.spanTag.nativeElement);
  }

}
