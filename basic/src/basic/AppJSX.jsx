import '../App.css'

function AppJSX() {
    const name = '엘리'
    const list = ['우유' ,'딸기','바나나']
  return (
      <>
          <h1 className="orange">{`Hello ${name}`}</h1>
          <h2>Hello</h2>
          <p>{name}</p>
          <ul>
              {list.map((item)=>(<li>{item}</li>))}
          </ul>
          <img
              style={{width:"200px", height:"200px"}}
              src="https://images.unsplash.com/photo-1743360167520-761fa087ee8d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img"/>
      </>
  )
}

export default AppJSX
