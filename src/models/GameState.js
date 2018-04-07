import moment from 'moment'

import { Founder, Engineer } from './Character'
import Company from './Company'

let START_TIME = moment("20100101")

class Game {
  constructor (player, company) {
    this._company = company
    this._events = []
    this._month = 0
    this._player = player
  }

  /**
   * Check that all inputs are set in valid states (as reflected by model current* values)
   */
  readyToStep() {
    return this._company.readyToStep()
  }

  step () {
    this._events = this._events.concat(this._company.step())
    this._month++
    return this
  }

  get company () {
    return this._company
  }

  get events () {
    // TODO: maybe switch to using unshift everywhere so you don't have to do this
    return this._events.slice().reverse().map((e, i) => e.feedEvent())
  }

  get date () {
    // TODO: probably a better way to do this
    return START_TIME.clone().add(this._month, 'months').format('MMMM YYYY')
  }

  /**
   * Init a scenario for dev/test
   */
  debugInit () {
    let p = new Founder('dan')
    let e1 = new Engineer('steve', 100)
    let c = new Company('newco')
    c.hire(p)
    c.hire(e1)
    this._player = p
    this._company = c
  }


  /**
   * Easy autopilot for testing out interactions
   */
  debugAutoplay () {
    let iter = 0
    let that = this
    function step () {
      console.log(that.step())
      if (iter < 10) {
        iter++
        setTimeout(step, 500)
        console.log(that._player._morale)
      }
    }
    step()
  }
}

export default (new Game)
