import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {

  @Input() message: any;

  constructor() { }

  ngOnInit(): void {
  }

}
