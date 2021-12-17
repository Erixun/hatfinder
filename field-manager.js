import Position from "./position.js";
import prompt, { hat, hole, pathCharacter } from "./const.js";

export default class FieldManager {
  constructor(field) {
    this._field = field;
    this.hideHat();
    this.setStart();
    this.isHatFound = false;
    this.isGameOver = false;
  }
  hideHat() {
    const { x, y } = this.randomSpot(this.field)
    this.hatPosition = Position.of(x, y)
  }
  setStart() {
    const { x, y } = this.randomSpot(this.field)
    this.field[y][x] = pathCharacter;
    this.position = Position.of(x, y)
  }
  randomSpot() {
    const y = Math.floor(Math.random() * this.field.length);
    const x = Math.floor(Math.random() * this.field[0].length);
    return { x, y }
  }

  get field() {
    return this._field;
  }

  renderField() {
    console.clear();
    console.log('\n--== HAT FINDER ==--\n')
    this._field.forEach(row => console.log(row.join('')))
  }

  isAlive() {
    const y = this._field[this.position.y];
    if (y) {
      const x = y[this.position.x]
      return x && x !== hole ? true : false;
    } else {
      return false;
    }
  }

  isHatPosition() {
    return this.position.y === this.hatPosition.y
      && this.position.x === this.hatPosition.x
  }

  getStatus() {
    if (this.isAlive()) {
      if (this.isHatPosition()) {
        this.isHatFound = true;
      }
    } else {
      this.isGameOver = true;
    }
  }
  updateField() {
    this.getStatus();
    if (!this.isGameOver) {
      this._field[this.position.y][this.position.x] = this.isHatFound ? hat : pathCharacter;
    }
  }

  moveUp() {
    this.position.y--;
    this.updateField()
  }
  moveDown() {
    this.position.y++;
    this.updateField()
  }
  moveLeft() {
    this.position.x--;
    this.updateField()
  }
  moveRight() {
    this.position.x++;
    this.updateField()
  }

  promptMove() {
    while (!this.isHatFound && !this.isGameOver) {
      this.renderField();
      switch (prompt('Your move: ')) {
        case 'w': this.moveUp()
          break;
        case 'a': this.moveLeft()
          break;
        case 's': this.moveDown()
          break;
        case 'd': this.moveRight()
          break;
        default:
          break;
      }
      if (this.isHatFound) {
        this.renderField()
        console.log('\nHat found! \nWell done, Hatfinder.\n')
      } else if (this.isGameOver) {
        console.clear();
        console.log('\nYou fall into the abyss. Game over...\n')
      }
    }
  }
}