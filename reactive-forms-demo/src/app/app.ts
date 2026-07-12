import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ReactiveFormsModule,FormControl} from '@angular/forms'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('reactive-forms-demo');
  name=new FormControl('Shivansh lavaniya')
  constructor(){
    console.log(this.name.value);
  }
}
