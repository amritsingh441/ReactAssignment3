import React, { useState } from 'react';
import Dashboard from './Components/dashboard/Dashboard';
import Footer from './Components/footer/Footer';
import Grid from '@material-ui/core/Grid';
import Login from './Components/login/Login';
import ReadNow from './Components/readNow/ReadNow';
import Header from './Components/header/Header';
import {
  BrowserRouter as Router,
  Redirect,
  Route
} from 'react-router-dom'

function App() {
  const [token,setToken] = useState('');
  const [page,setPage] = useState('Dashboard');
  const updateToken =(token:string) => {
    localStorage.setItem('token',token);
    setToken(token)
  }
  const updatePage =(page:string) => {
    setPage(page)
  }
  return (
    <div>
      <Grid container direction = "column">
      <Header token={token} updatePage={updatePage}></Header>
        <Router>
          <Route exact path = '/' component = {() =>(token)?<Redirect to = '/dashboard'></Redirect>: <Login updateToken = {updateToken} />} />
          <Route exact path = '/dashboard' component = {() => (page=='ReadNow')?<Redirect to = '/readnow'></Redirect>: (token)?<Dashboard />:<Redirect to = '/'/> } />
          <Route exact path = '/readnow' component = {() => (page=='Dashboard')?<Redirect to = '/dashboard'></Redirect>:(token)?<ReadNow />:<Redirect to = '/'/>} />
        </Router>
        <Footer></Footer>
      </Grid>
    
    </div>
  );
}

export default App;
