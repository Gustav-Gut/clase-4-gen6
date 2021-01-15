import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public subTitleFather: string = 'Dog Breed';
  public titleSon: string;

  fatherFunxx(paramEvent: any){
    console.log('event -->', paramEvent);
    this.titleSon = paramEvent;
  }

}
