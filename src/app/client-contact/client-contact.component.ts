import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-contact',
  templateUrl: './client-contact.component.html',
  styleUrls: ['./client-contact.component.scss']
})
export class ClientContactComponent implements OnInit {
  constructor() { }

  inputValue = '';

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.inputValue);
    this.inputValue = '';
  }
}
