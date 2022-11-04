import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Options } from 'src/app/types/Options';
import { Breed } from 'src/app/types/Breed';

@Component({
  selector: 'app-cats-filter',
  templateUrl: './cats-filter.component.html',
  styleUrls: ['./cats-filter.component.css']
})
export class CatsFilterComponent implements OnInit {

  constructor() { }

  breeds: Breed[] = [];

  setBreeds(values: Breed[]) {
    this.breeds = values
  }

  ngOnInit(): void {
    const breedsJSON = fetch('https://api.thecatapi.com/v1/breeds', {
      headers: {
        'x-api-key': 'live_8to19QEYRRqAqTvByBfslIrwahAejRpTqJ0hbapP9PGzP9jE1r2dPW5BlkrlY8Dj'
      }
    }).then(response => {
      if (!response.ok) {
        throw `${response.status}`
      }
      return response.json();
    })
    
    breedsJSON.then(data => {
      this.setBreeds(data);
    })
  }

  @Output() changesEvent = new EventEmitter<Options>();
  @Input() isLoading = false;

  breed = new FormControl('All');
  limit = new FormControl(10);

  applyChanges() {
    const options: Options = {
      breed: this.breed.value,
      limit: this.limit.value,
    }

    this.changesEvent.emit(options);
  }
}
