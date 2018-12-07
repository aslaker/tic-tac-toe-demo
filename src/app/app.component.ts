import {Component, OnInit} from '@angular/core';
import {GameStateStore} from './game-state.store';
import {BoardLocation} from './common-types';
import {Observable} from 'rxjs';
import {GameState} from './game-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentState: Observable<GameState>;
  squareIds: BoardLocation[] = [
    'upLeft',
    'upMiddle',
    'upRight',
    'midLeft',
    'midMiddle',
    'midRight',
    'lowLeft',
    'lowMiddle',
    'lowRight'
  ];

  constructor(private gameStore: GameStateStore) {}

  ngOnInit() {
    this.currentState = this.gameStore.$state;
  }
}
