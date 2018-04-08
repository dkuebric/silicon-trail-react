import Entity from './Entity'
import Event from './Event'

class Company extends Entity {
  constructor (name) {
    super(name)
    this._money = 1000 * 1000
    this._employees = []
  }

  /* see Game.readyToStep */
  readyToStep() {
    for (var e of this._employees) {
      if (e.currentAction === null) {
        return 'Set actions for all employees!'
      }
    }
    return null
  }

  step () {
    let events = this.doPayroll()
    for (var e of this._employees) {
      events = events.concat(e.step())
    }
    return events
  }

  hire (c) {
    this._employees.push(c)
    c.setCompany(this)
  }

  fire (c) {
    c.setCompany(null)
    this._employees = this._employees.filter(e => e !== c)
  }

  doPayroll () {
    let events = []
    let before = this._money
    let fail = false
    for (var e of this._employees) {
      if (!e.getPaid(this.paySalary(e.salary))) {
        events.push(new Event('warn', this, `Couldn't afford to pay ${e.name}'s paycheck!`))
        fail = true
      }
    }
    let paid = before - this._money
    if (!fail) {
      events.unshift(new Event('info', this, `Ran payroll for $${paid}`))
    } else {
      events.unshift(new Event('error', this, "Didn't have enough money to cover payroll this month!"))
    }
    return events
  }

  paySalary (x) {
    this._money -= x
    if (this._money < 0) {
      this._money = 0
      return false
    }
    return true
  }

  get employees () {
    return this._employees
  }

  get money () {
    return this._money
  }
}

export default Company
