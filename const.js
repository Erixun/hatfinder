import promptSync from 'prompt-sync';

const prompt = promptSync({ sigint: true })
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

export default prompt;
export {hat, hole, fieldCharacter, pathCharacter}