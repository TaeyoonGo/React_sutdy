import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AppJSX() {
    const [count, setCount] = useState(0)
    const name = '엘리'
    const list = ['우유', '딸기', '바나나']
    return (
        <>
            <h1>Hello</h1>
            <h1 className="orange">{`Hello! ${name}`}</h1>
            <p>{name}</p>
            <ul>
                {list.map((item, i) => <li>{item}</li>)}
            </ul>
            <img alt="사진" style={{width: '200px', height: '200px'}}
                 src="https://images.unsplash.com/photo-1750263160585-241fa75dca79?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
            </img>
        </>
    )
}

export default AppJSX
