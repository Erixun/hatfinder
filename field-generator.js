import { fieldCharacter, hole } from "./const.js";

export default class FieldGenerator {
  playingField(cols, rows) {
    return this.emptyField(cols, rows).makeHoles();
  }

  emptyField(cols, rows) {
    this.field = Array.from(Array(rows), () => Array.from(fieldCharacter.repeat(cols)))
    return this;
  }

  makeHoles() {
    this.field.forEach(row => {
      const i = Math.floor(Math.random() * row.length);
      row[i] = hole;
    })
    return this.field;
  }
}