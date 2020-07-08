import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/account/account.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.scss']
})
export class CheckoutAddressComponent implements OnInit {
@Input() checkoutForm: FormGroup;

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  saveUserAddress() {
    console.log('hi');
    this.accountService.updateUserAddress(this.checkoutForm.get('addressForm').value)
      .subscribe(() => {
        this.toastr.success('Address saved');
      }, error => {
        this.toastr.error(error.message);
        console.log(error);
      });
  }
}