import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {jqxGridComponent} from "jqwidgets-ng/jqxgrid";
import {generateTheData} from "./generate-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url = 'http://localhost:3001/getdata';
  source: any =
    {
      url: this.url,
      datafields: [
        {
          name: 'CompanyName',
        }, {
          name: 'ContactName',
          map: 'first_name'
        }, {
          name: 'ContactTitle',
          map: 'last_name'
        }, {
          name: 'Address',
          map: 'address'
        }, {
          name: 'City',
          map: 'city'
        }, {
          name: 'Country',
          map: 'country_region'
        }
      ],
      datatype: 'json',
      root: 'Rows',
      cache: false,
      beforeprocessing: (data: any) => {
        this.source.totalrecords = data.TotalRows;
      }
    };

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] =
    [
      {
        text: 'Company Name',
        datafield: 'CompanyName',
        width: 250
      }, {
      text: 'Contact Name',
      datafield: 'ContactName',
      width: 200
    }, {
      text: 'Contact Title',
      datafield: 'ContactTitle',
      width: 200
    }, {
      text: 'Address',
      datafield: 'Address',
      width: 180
    }, {
      text: 'City',
      datafield: 'City',
      width: 100
    }, {
      text: 'Country',
      datafield: 'Country'
    }
    ];

  rendergridrows(params: any): any {
    return params.data;
  }
}


