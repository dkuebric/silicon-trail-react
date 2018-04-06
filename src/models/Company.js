class Company {
  constructor (name) {
    this._name = name
    this._money = 1000 * 1000
    this._employees = []
  }

  step () {
    let events = []
    for (var e of this._employees) {
      if (!e.getPaid(this.paySalary(e.salary))) {
        events.push(`Couldn't afford to pay ${e.name}'s paycheck!`)
      }
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

  paySalary (x) {
    this._money -= x
    if (this._money < 0) {
      this._money = 0
      return false
    }
    return true
  }

  get name () {
    return this._name
  }

  get employees () {
    return this._employees
  }
}

export default Company
