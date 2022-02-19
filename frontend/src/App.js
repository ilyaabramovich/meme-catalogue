import {Outlet} from 'react-router-dom'
import './App.css'
import {Header} from "./components/Header";

function App() {
  return (
    <>
      <Header/>
      <main style={{ padding: '1rem'}}>
      <Outlet/>
      </main>
    </>
  )
}

export default App
