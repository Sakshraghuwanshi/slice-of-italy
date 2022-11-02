import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  order:Order = new Order();
  constructor(private orderService: OrderService,
              private cartService: CartService,
              private router:Router,
              private toastrService: ToastrService) {
    orderService.getNewOrderForCurrentUser().subscribe({
      next: (order) => {
        this.order = order;
      },
      error:() => {
        router.navigateByUrl('/chekcout');
      }
    });
  }

  ngOnInit(): void {
  }

  cod(){
    this.order.paymentId = '';
    this.order.cod = false;
    this.orderService.pay(this.order).subscribe(
      {
        next: (orderId) => {
          this.cartService.clearCart();
          this.router.navigateByUrl('/track/' + orderId);
          this.toastrService.success(
            'Order placed successfully',
            'Success'
          );
        },
        error: (error) => {
          this.toastrService.error('Order Failed', 'Error');
        }
      }
    );
  }
}
