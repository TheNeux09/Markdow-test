import React from 'react'
import ReactDOM from 'react-dom'
import { Greeting, UserCard, Clientes } from './Greeting'
import Product, { Navbar } from './Product'
import { Button } from './Button'
import { TaskCard } from './Task' // el archivo no se tiene que llamar igual// 
import { App } from './App'


const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(<>
    <TaskCard />
    <App name='facundo'
        edad={17} />
</>)


