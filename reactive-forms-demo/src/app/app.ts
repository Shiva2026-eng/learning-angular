import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ReactiveFormsModule,FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('reactive-forms-demo');
  profileForm=new FormGroup({
    name:new FormControl('Shivansh Lavaniya'),
    email:new FormControl('shivansh@email.com')
  })
  constructor(){
    console.log(this.profileForm.value)
  }
}
