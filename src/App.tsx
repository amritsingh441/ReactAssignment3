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
  const [currentPage, setCurrentPage] = useState(1);
  const [servUrl,setServUrl] = useState('http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1fc0a77bf2bd494db21842f0a66d75bb'); //&page={currentPage}
  const [pageSize,setPageSize] = useState('');
  const [totalResult, setTotalResult] = useState(0);
 
  const updateToken =(token:string) => {
    localStorage.setItem('token',token);
    setToken(token)
  }
  const updatePage =(page:string) => {
    setPage(page)
  }
const updateServiceUrl = (servUrl : string) => {
  setServUrl(servUrl);
}

const updatePageSize = (pageSize : string) => {
  setPageSize(pageSize);
}
  return (
    <div>
      <Grid container direction = "column">
      <Header token={token} updatePage={updatePage} updatePageSize = {updatePageSize} updateServiceUrl = {updateServiceUrl}></Header>
        <Router>
          <Route exact path = '/' component = {() =>(token)?<Redirect to = '/dashboard'></Redirect>: <Login updateToken = {updateToken} />} />
          <Route exact path = '/dashboard' component = {() => (page=='ReadNow')?<Redirect to = '/readnow'></Redirect>: (token)?<Dashboard url={servUrl} pageSize={pageSize}/>:<Redirect to = '/'/> } />
          <Route exact path = '/readnow' component = {() => (page=='Dashboard')?<Redirect to = '/dashboard'></Redirect>:(token)?<ReadNow />:<Redirect to = '/'/>} />
        </Router>
        <Footer></Footer>
      </Grid>
    
    </div>
  );
}

export default App;
