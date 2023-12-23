export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('The character is already on the team');
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    characters.forEach((character) => this.members.add(character));
  }

  toArray() {
    this.members = Array.from(this.members);
  }

  [Symbol.iterator]() {
    const members = Array.from(this.members);
    let index = 0;
    return {
      next() {
        if (index >= members.length) {
          return {
            value: undefined,
            done: true
          }
        }
        index++;
        return {
          value: members[index - 1],
          done: false
        }
      }
    }
  }
}
