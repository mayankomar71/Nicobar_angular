import { Component, OnInit, HostListener, Input } from '@angular/core';
import { JsondataService } from '../jsondata.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Router } from "@angular/router";


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  getProducts: any;



  constructor(public data: JsondataService, private router: Router) { }

  ngOnInit() {
    this.adddata();
  }

  adddata() {
    this.getProducts = this.data.getproducts();
  }

  public gotoProductDetails(item) {
    this.router.navigate(['/details', item.id]).then((e) => {
      if (e) {
        console.log('Navigation is successful');
      } else {
        console.log('Navigation has failed!');
      }
    });
  }

}
