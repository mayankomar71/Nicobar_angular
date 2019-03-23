import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { JsondataService } from '../jsondata.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  productid:any;
  product_obj:any;
  arr_obj:Array<object>=[];

  constructor(public route: ActivatedRoute, private router: Router, public json:JsondataService) { }

  ngOnInit() {
    this.productid= parseInt(this.route.snapshot.paramMap.get('id'));

    this.productinfo();
  }

  productinfo(){
    this.product_obj=this.json.getproducts();
    this.product_obj=this.product_obj[this.productid]
    
  }

  public opencomp(item) {
    this.router.navigate(['/cart', item.id]).then( (e) => {
      if (e) {
        console.log("Navigation is successful! in details");
      } else {
        console.log("Navigation has failed!");
      }
    });

}


}
