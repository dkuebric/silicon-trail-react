import Entity from './Entity'
import Event from './Event'

var employeeId = 1

class Character extends Entity {
  constructor (name, prof, pc, exp) {
    super(name)
    this.id = employeeId++
    this._name = name
    this._prof = prof
    this._pc = pc
    this._exp = exp
    this._morale = 100
    this._salary = 100 * 1000
    this._company = null
    this._actions = null
    this._currentAction = null
  }

  step () {
    let events = []

    if (this._morale < 5 && !this._pc) {
      // rage quit
      this._company.fire(this)
      events.push(new Event('error', this, `${this.name} got disgruntled and quit!`))
    }

    events.push(new Event('info', this, `${this.name} did ${this._currentAction}`))

    this._exp++

    return events
  }

  /**
   * This should be called by the company as part of payment only
   */
  getPaid(success) {
    if (!success) {
      this._morale /= 2
    }
    return success
  }

  setCompany (c) {
    this._company = c
  }

  setAction (a) {
    this._currentAction = a
  }

  get currentAction () {
    return this._currentAction
  }

  get actions () {
    return this._actions
  }

  get name () {
    return this._name
  }

  get morale () {
    return this._morale
  }

  get pc () {
    return this._pc
  }

  get prof () {
    return this._prof
  }

  get salary () {
    return this._salary
  }
}

class Founder extends Character {
  constructor (name) {
    super(name, 'Founder', true, 100)
    this._actions = ['Build', 'Recruit', 'Sell', 'Thought-Lead']
  }
}

class Engineer extends Character {
  constructor (name, exp) {
    super(name, 'Engineer', false, exp)
    this._actions = ['Build', 'Remediate Debt', 'Recruit']
  }
}

export { Founder, Engineer }
