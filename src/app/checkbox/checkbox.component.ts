import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() checked: boolean=false;
  @Input() active: boolean=true;

  constructor() { }

  ngOnInit() {
  }

}
