import Character from './Character'
import Company from './Company'

class Game {
  constructor (player, company) {
    this._month = 1
    this._player = player
    this._company = company
  }

  step () {
    this._month++
    return this._company.step()
  }

  get company () {
    return this._company
  }

  /**
   * Init a scenario for dev/test
   */
  debugInit () {
    let p = new Character('dan', 'test', true, 0)
    let e1 = new Character('steve', 'other', false, 100)
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
