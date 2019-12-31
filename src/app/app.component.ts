import { Component, OnInit } from '@angular/core';
import { Item, ApiService } from './services/api.service';
import { SwUpdate } from '@angular/service-worker';
import { MatDialog, MatSnackBar } from '@angular/material';
import { MydialogComponent } from './mydialog/mydialog.component';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'firstpwa';
  items: Array<Item>;
  selected = "option2";
  panelOpenState: boolean;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  
  constructor(private apiService: ApiService,
              private swUpdate: SwUpdate,
              public dialog: MatDialog,
              public snackBar: MatSnackBar) {}

  ngOnInit() {
    /*this.fetchData();

    if (this.swUpdate.isEnabled) {

      this.swUpdate.available.subscribe(() => {

          if(confirm("New version available. Load New Version?")) {

              window.location.reload();
          }
      });
    }*/   
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

  openDialog(): void {
    const dialogRef = this.dialog.open(MydialogComponent, {
      width: '250px',
      data: {name: "xxx", animal: "ccc"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');      
    });
  }

  openSnackBar(): void {
    let snackBarRef = this.snackBar.open('Mensaje', '', { duration: 1000, direction: 'ltr', verticalPosition: 'top' });
  }
}