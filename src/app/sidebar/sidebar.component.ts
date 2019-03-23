import { Component, OnInit, Input } from '@angular/core';
import { JsondataService } from '../jsondata.service';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sideitems: any;
  show: any;
  uniquecolor: Array<any> = [];




  constructor(public jsonservice: JsondataService) { }

  ngOnInit() {
    this.add_sidedata();
    this.find_unique();
  }

  add_sidedata() {
    this.sideitems = this.jsonservice.getproducts();
    this.show = Object.keys(this.sideitems[0])
  }

  find_unique() {
    this.sideitems.map((ele, index) => {

      if (this.uniquecolor.indexOf(ele.colour) == -1) {
        this.uniquecolor.push(ele.colour)
      }
    });
  }



}
