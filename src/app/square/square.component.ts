import {Component, OnInit, Input, Host} from '@angular/core';
import {BoardLocation, TicTacToeMark} from '../common-types';
import {GameStateStore} from '../game-state.store';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input() boardLocation: BoardLocation;
  private currentSquareValue: TicTacToeMark;

  constructor(private gameStore: GameStateStore) { }

  ngOnInit() {
    this.gameStore.$state
      .subscribe(currentState => {
      this.currentSquareValue = currentState[this.boardLocation];
    });
  }

  onSquareClick() {
    this.gameStore.updateLastMarkLocation(this.gameStore.state.currentMark, this.boardLocation);
    this.gameStore.checkForWin();
  }

}
