import { TicTacToeMark, TicTacToeRecord, CurrentState } from './common-types';

export class GameState {
  xWins: number = 0;
  oWins: number = 0;
  currentState: CurrentState = 'not-started';
  moveCounter: number;
  currentMark: TicTacToeMark = 'X';
  upLeft: TicTacToeMark = '';
  upMiddle: TicTacToeMark = '';
  upRight: TicTacToeMark = '';
  midLeft: TicTacToeMark = '';
  midMiddle: TicTacToeMark = '';
  midRight: TicTacToeMark = '';
  lowLeft: TicTacToeMark = '';
  lowMiddle: TicTacToeMark = '';
  lowRight: TicTacToeMark = '';
}
