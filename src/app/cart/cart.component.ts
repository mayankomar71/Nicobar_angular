import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { JsondataService } from '../jsondata.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productid:any;
  product_obj:any;
  data:Array<object>=[];

  constructor(public route: ActivatedRoute, public json:JsondataService) { }

  ngOnInit() {
    this.productid= parseInt(this.route.snapshot.paramMap.get('id'));
    this.productinfo();
  }

  productinfo(){
    this.product_obj=this.json.getproducts();
    this.product_obj=this.product_obj[this.productid]
    this.data.push(this.product_obj);
    console.log(this.data);
  }


}
