import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import createStore from './store'

const store = createStore()

const render = Component => {
  ReactDOM.render(
    <Provider store={store}> 
    </Provider>,
    document.getElementById('app')
  )
}

render(App)

