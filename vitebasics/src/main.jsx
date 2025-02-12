import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

   const CreateElement = <a href="https://monkeytype.com/" target='_blank'>visit Google</a> 
   const ReactElement = React.createElement(
    'a',
    {href : 'https://monkeytype.com/'},
    'click me to visit google'
   )
createRoot(document.getElementById('root')).render(
  ReactElement
)
