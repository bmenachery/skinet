import { IBasketItem } from './../../models/basket';
import { Observable } from 'rxjs';
import { BasketService } from './../../../basket/basket.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IBasket } from '../../models/basket';

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss'],
})
export class BasketSummaryComponent implements OnInit {
  basket$: Observable<IBasket>;
  @Output() decrement: EventEmitter<any> = new EventEmitter<IBasketItem>();
  @Output() increment: EventEmitter<any> = new EventEmitter<IBasketItem>();
  @Output() remove: EventEmitter<any> = new EventEmitter<IBasketItem>();
  @Input() isBasket = true;

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }

  decrementItemQuantity(item: IBasketItem) {
    this.decrement.emit(item);
  }

  incrementItemQuantity(item: IBasketItem) {
    this.increment.emit(item);
  }

  removeBasketItem(item: IBasketItem) {
    this.remove.emit(item);
  }
}
