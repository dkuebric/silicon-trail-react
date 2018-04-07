class Entity {
  constructor (name, icon, image) {
    this._name = name
    this._icon = icon
    this._image = image
  }

  get name () {
    return this._name
  }

  get icon () {
    // XXX
    return 'https://react.semantic-ui.com/assets/images/avatar/small/helen.jpg'
  }

  get image () {
    // XXX
    return 'https://react.semantic-ui.com/assets/images/avatar/large/matthew.png'
  }


}


export default Entity
