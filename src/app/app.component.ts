import { Component } from '@angular/core';
import { request } from './helpers/fetchData';
import { Cat } from './types/cat';
import { Options } from './types/Options'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cats-app';
  cats: Cat[] = []
  isLoading: boolean = false
  options: Options = {
    breed: null,
    limit: null,
  };

  setCats(options: any) {
    this.options = options;
    this.cats = [];

    this.isLoading = true;

    request(options)
      .then((data: Cat[]) => {
        this.cats=data;
      })
      .finally(() => this.isLoading = false)
  }
}
