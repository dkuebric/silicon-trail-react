import Entity from './Entity'
import Event from './Event'

class Company extends Entity {
  constructor (name) {
    super(name)
    this._money = 1000 * 1000
    this._employees = []

    this._product = 5
    this._quality = 45
    this._brand = 5
    this._loyalty = 5
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

    /* life takes its toll */
    this._product--
    this._quality--
    this._brand--
    this._loyalty--

    return events
  }

  improveProduct (exp) {
    /* improving from n => n+1 costs n experience */
    exp -= this._product
    while (exp > 0) {
      this._product++
      exp -= this._product
    }
    if (this._product > 100) {
      this._product = 100
    }
  }

  improveQuality (exp) {
    exp -= this._quality
    while (exp > 0) {
      this._quality++
      exp -= this._quality
    }
    if (this._quality > 100) {
      this._quality = 100
    }
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

  get brand () {
    return this._brand
  }

  get loyalty () {
    return this._loyalty
  }

  get product () {
    return this._product
  }

  get quality () {
    return this._quality
  }
}

export default Company
