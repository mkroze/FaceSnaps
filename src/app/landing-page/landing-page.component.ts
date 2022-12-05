import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
//...

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  // userEmail!: String;
  constructor(private router: Router) {}
  userEmail = 'Insert2@mail.here'
  ngOnInit(): void {
    
  }
  onContinue() {
    this.router.navigateByUrl('facesnaps');
  }
  onSubmitForm(form: NgForm) : void{
    console.log(form.value);
    
  }
}
