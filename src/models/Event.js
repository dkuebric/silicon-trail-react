import Game from './GameState'
import '../styling/Event.less'

class Event {
  constructor (level, entity, message) {
    this._level = level
    this._entity = entity
    this._time = Game.date.format('MMMM YYYY')
    this._message = message
  }

  _levelToClass () {
    switch(this._level) {
      case 'good':
        return 'event-green'
      case 'info':
        return 'event-blue'
      case 'warn':
        return 'event-yellow'
      case 'error':
        return 'event-red'
      default:
        console.log(`Unknown event level ${this._level}`)
        return null
    }
  }

  feedEvent () {
    /* TODO: use moment.js for nicer-looking dates throughout */
    return {className: this._levelToClass(),
            date: this._time,
            image: this._entity.icon,
            meta: null, // TODO: can take advantage of this
            summary: this._message}
  }
}

export default Event
