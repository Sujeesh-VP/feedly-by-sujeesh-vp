
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import LandingPage from "./components/Pages/Landing";
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import ArticlePage from "./components/Pages/Article Page";


function App() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true)

  const newsApi = async () => {
      try{

          const news = await axios.get("https://inshortsapi.vercel.app/news?category=science")
          setNewsData(news.data)
          setLoading(false)
      }
      catch (error){
          console.log(error)
          setLoading(false)
      }
  }
  useEffect(() => {
    newsApi();
    
  },[])

  if(loading) {
      return(
          <div className ="flex">
              Loading ...
          </div>
      )
  }

  return (
    <div>
      <NavBar/>
      <BrowserRouter>
        <Switch>
          <Route exact path = {'/'}><LandingPage newsData = {newsData}/></Route>
          <Route path = {'/article'}> <ArticlePage newsData = {newsData}/></Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
