import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import app from './firebase.config'
function App() {
      const myroute=createBrowserRouter(
        createRoutesFromElements(
          <Route>
            <Route path='/' element={<Home/>}/>
          </Route>
        )
      )
  return (
    <>
      <RouterProvider router={myroute}/>
    </>
  )
}

export default App
