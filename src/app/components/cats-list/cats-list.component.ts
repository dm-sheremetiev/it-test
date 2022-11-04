import { Component, OnInit, Input } from '@angular/core';
import { Cat } from 'src/app/types/cat';

@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.css']
})
export class CatsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() cats: Cat[]=[]
  @Input() isLoading: boolean=false
}
