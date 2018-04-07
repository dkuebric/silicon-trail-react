import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'
import Game from './models/GameState'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  )
}

Game.debugInit()
//Game.debugAutoplay()

render(App)

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', () => { render(App) })
}
