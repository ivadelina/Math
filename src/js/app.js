/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable max-classes-per-file */
export default class Character {
  constructor(name) {
    this.name = name;
  }
}
export class MathChar extends Character {
  constructor(name, distance) {
    super(name);
    this.distance = distance;
  }

  get attack() {
    let calcAttack = Math.floor(this._attack * (1.1 - this.distance / 10));
    if (this._stoned === true) {
      calcAttack = Math.floor(calcAttack - Math.log2(this.distance) * 5);
    }
    return Math.max(calcAttack, 0);
  }

  set attack(value) {
    this._attack = value;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }
}

export class Magician extends MathChar {
  constructor(name, distance) {
    super(name, distance);
    this.defence = 40;
  }
}
export class Daemon extends MathChar {
  constructor(name, distance) {
    super(name, distance);
    this.defence = 40;
  }
}
