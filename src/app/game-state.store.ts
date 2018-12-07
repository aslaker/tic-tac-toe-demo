import {Injectable} from '@angular/core';
import {Store} from './store';
import {GameState} from './game-state';
import {BoardLocation, TicTacToeMark} from './common-types';

@Injectable()
export class GameStateStore extends Store<GameState> {

  constructor() {
    super(new GameState());
  }

  resetGame() {
    this.setState({
      ...this.state,
      moveCounter: 0,
      currentMark: 'X',
      upLeft: '',
      upMiddle: '',
      upRight: '',
      midLeft: '',
      midMiddle: '',
      midRight: '',
      lowLeft: '',
      lowMiddle: '',
      lowRight: ''
    });
  }

  advanceState() {
    if (this.state.currentState === 'not-started') {
      this.setState({
        ...this.state,
        currentState: 'in-progress'
      });
    } else if (this.state.currentState === 'in-progress') {
      this.setState({
        ...this.state,
        currentState: 'complete'
      });
    } else {
      this.setState({
        ...this.state,
        currentState: 'not-started'
      });
    }
  }

  toggleCurrentMark() {
    if (this.state.currentMark === 'X') {
      this.setState({
        ...this.state,
        currentMark: 'O',
        moveCounter: this.state['moveCounter'] + 1
      });
    } else if (this.state.currentMark === 'O') {
      this.setState({
        ...this.state,
        currentMark: 'X',
        moveCounter: this.state['moveCounter'] + 1
      });
    }
  }

  checkForWin() {
    const currentState = this.state;
    if (
      currentState.upLeft === currentState.upMiddle && currentState.upLeft === currentState.upRight && currentState.upLeft !== '' ||
      currentState.midLeft === currentState.midMiddle && currentState.midLeft === currentState.midRight && currentState.midLeft !== '' ||
      currentState.lowLeft === currentState.lowMiddle && currentState.lowLeft === currentState.lowRight && currentState.lowLeft !== '' ||
      currentState.upLeft === currentState.midLeft && currentState.upLeft === currentState.lowLeft && currentState.upLeft !== '' ||
      currentState.upMiddle === currentState.midMiddle && currentState.upMiddle === currentState.lowMiddle && currentState.upMiddle !== '' ||
      currentState.upRight === currentState.midRight && currentState.upRight === currentState.lowRight && currentState.upRight !== '' ||
      currentState.upLeft === currentState.midMiddle && currentState.upLeft === currentState.lowRight && currentState.upLeft !== '' ||
      currentState.upRight === currentState.midMiddle && currentState.upRight === currentState.lowLeft && currentState.upRight !== ''
    ) {
      this.advanceState();
      alert(`${this.state.currentMark} Wins!!!!`);
      this.advanceState();
      this.increaseWinCount(this.state.currentMark);
      this.resetGame();
    } else {
      this.toggleCurrentMark();
      console.log('Game Not Finished Yet');
    }
  }

  increaseWinCount(winningMark: string): void {
    if (winningMark === 'X') {
      this.setState({
        ...this.state,
        xWins: this.state.xWins + 1
      });
    } else if (winningMark === 'O') {
      this.setState({
        ...this.state,
        oWins: this.state.oWins + 1
      });
    }
  }


  updateLastMarkLocation(mark: TicTacToeMark, location: BoardLocation) {
    switch (location) {
      case 'upLeft':
        this.setState({
          ...this.state,
          upLeft: mark
        });
        break;
      case 'upMiddle':
        this.setState({
          ...this.state,
          upMiddle: mark
        });
        break;
      case 'upRight':
        this.setState({
          ...this.state,
          upRight: mark
        });
        break;
      case 'midLeft':
        this.setState({
          ...this.state,
          midLeft: mark
        });
        break;
      case 'midMiddle':
        this.setState({
          ...this.state,
          midMiddle: mark
        });
        break;
      case 'midRight':
        this.setState({
          ...this.state,
          midRight: mark
        });
        break;
      case 'lowLeft':
        this.setState({
          ...this.state,
          lowLeft: mark
        });
        break;
      case 'lowMiddle':
        this.setState({
          ...this.state,
          lowMiddle: mark
        });
        break;
      case 'lowRight':
        this.setState({
          ...this.state,
          lowRight: mark
        });
        break;
    }
  }
}
