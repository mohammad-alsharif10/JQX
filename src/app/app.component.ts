import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'JQX';
  columns: any[] = [
    {
      text: 'Id', datafield: 'id', columntype: 'numberinput',
      validation: (cell: any, value: number): any => {
        if (value < 0 || value > 150) {
          return {result: false, message: 'Quantity should be in the 0-150 interval'};
        }
        return true;
      }
    },
    {text: 'Name', datafield: 'name'}
  ];

  data = [
    {id: 1, name: 'Hydrogen'},
    {id: 2, name: 'Helium'},
    {id: 3, name: 'Lithium'},
    {id: 4, name: 'Beryllium'},
    {id: 5, name: 'Boron'},
    {id: 6, name: 'Carbon'},
    {id: 7, name: 'Nitrogen'},
    {id: 8, name: 'Oxygen'},
    {id: 9, name: 'Fluorine'},
    {id: 10, name: 'Neon'},
    {id: 11, name: 'Sodium'},
    {id: 12, name: 'Magnesium'},
    {id: 13, name: 'Aluminum'},
    {id: 14, name: 'Silicon'},
    {id: 15, name: 'Phosphorus'},
    {id: 16, name: 'Sulfur'},
    {id: 17, name: 'Chlorine'},
    {id: 18, name: 'Argon'},
    {id: 19, name: 'Potassium'},
    {id: 20, name: 'Calcium'}
  ]

  source = new jqx.dataAdapter({
    localData: this.data,
    datafields:
      [
        {name: 'name', type: 'string'},
        {name: 'id', type: 'number'}
      ]
  });

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  logEvent($event: any) {
    console.log($event);
    console.log(this.data);
    console.log(this.source);
  }
}


