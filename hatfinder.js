import FieldGenerator from "./field-generator.js";
import FieldManager from "./field-manager.js";

const field = new FieldGenerator().playingField(19, 9);
const manager = new FieldManager(field)

manager.promptMove()