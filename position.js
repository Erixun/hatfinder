export default class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  static of(x, y) {
    return new Position(x, y)
  }
}