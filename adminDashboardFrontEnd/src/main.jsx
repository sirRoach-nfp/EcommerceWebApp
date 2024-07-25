import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/home/Home.jsx'
import { DarkModeContextProvider } from './context/darkModeContext.jsx'

import {Provider} from "react-redux"
import {store,persistor} from "./redux/store.js"
import { PersistGate } from 'redux-persist/integration/react'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>

      <PersistGate loading="null" persistor={persistor}> 
        <DarkModeContextProvider>
            <App />

        </DarkModeContextProvider>
      </PersistGate>

    </Provider>

  
  </React.StrictMode>,
)
