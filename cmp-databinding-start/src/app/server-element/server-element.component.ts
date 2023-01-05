import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input() //We can assign an alias here, if we don't want to bind to element outside 
  element: { type: string, name: string, content: string };
  constructor() { }

  ngOnInit(): void {
  }

}
