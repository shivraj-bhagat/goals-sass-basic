import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Output() classActivate = new EventEmitter<any>();
  border: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  activate() {
    this.classActivate.emit(!this.border);
    this.border = !this.border;
  }

}
