import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public title: string = 'Shiba Inu';
  public subTitleCard: string = '';
  public activeDescription: boolean = true;
  public skills: string[] = ['Protector', 'Paciente', 'Amistoso'];
  public category: string = 'Cat';
  public img1: string = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
  public img2: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  public imgSrc: string = 'Sin URL';

  @Input() subTitleAPP: string;
  @Input() description: boolean;
  @Output() myEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.subTitleCard = this.subTitleAPP;
    this.myEvent.emit(this.imgSrc);
  }

  chgImg1(dfghfgh: any) {
    console.log('event click -->', dfghfgh);
    this.imgSrc = this.img1;
    this.myEvent.emit(this.imgSrc);
  }

  chgImg2() {
    this.imgSrc = this.img2;
    this.myEvent.emit(this.imgSrc);
  }

}
