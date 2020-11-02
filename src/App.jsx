import React from 'react'
import Layout from './components/Layout'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Posts from './pages/Posts'
import Usuarios from './pages/Usuarios'
import Photos from './pages/Photos'
import Login from './pages/Login'
import Registrar from './pages/Registrar'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/posts' component={Posts} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/registrar' component={Registrar} />
              <Route exact path='/usuarios' component={Usuarios} />
              <Route exact path='/photos' component={Photos} />
              <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>

    </>
  )
}

export default App