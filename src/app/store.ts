import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Store<T> {
  $state: Observable<T>;
  private _$state: BehaviorSubject<T>;

  protected constructor(initialState: T) {
    this._$state = new BehaviorSubject(initialState);
    this.$state = this._$state.asObservable();
  }

  get state (): T {
    return this._$state.getValue();
  }

  setState (nextState: T): void {
    this._$state.next(nextState);
  }
}
