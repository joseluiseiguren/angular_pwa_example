import { Component, OnInit } from '@angular/core';
import { Item, ApiService } from './services/api.service';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'firstpwa';
  items: Array<Item>;
  
  constructor(private apiService: ApiService,
              private swUpdate: SwUpdate) {}

  ngOnInit() {
    this.fetchData();

    if (this.swUpdate.isEnabled) {

      this.swUpdate.available.subscribe(() => {

          if(confirm("New version available. Load New Version?")) {

              window.location.reload();
          }
      });
    }       
  }

  fetchData() {
    this.apiService.fetch().subscribe(
      (data: Array<Item>) => {
         console.log(data);
         this.items = data;
      }, (err) => {
        console.log(err);
      }
    );
  }
}