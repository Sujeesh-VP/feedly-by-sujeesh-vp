
import axios from "axios";
import React, { useEffect, useState} from "react";
import NavBar from "./components/NavBar";
import LandingPage from "./components/Pages/Landing";
import ArticlePage from "./components/Pages/Article";
import {BrowserRouter, Switch, Route } from 'react-router-dom'
export const FilterContext = React.createContext()
const allCategories = ["national", "world", "business", "sports"]
function App() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState(allCategories)

   
  const newsApi = async (item) => {
      try{

          const news = await axios.get(`https://inshortsapi.vercel.app/news?category=${item}`)
          return news?.data
          
      }
      catch (error){
          console.log(error)
          setLoading(false)
      }
  }

  const init= async(categoryList)=>{
    let tempAll = []
      await axios.all(categoryList?.map(async(item)=> {
      let response = await newsApi(item)
      response.data.forEach((e)=>{
        e.id = `${response.category}-${e.url.slice(-13)}`
      })
      tempAll.push({key: response.category, value: response.data}) 
    }))
    setLoading(false)
    setNewsData(tempAll)
}



  useEffect(() => {
    setLoading(true)
    init(categories?.length === 0? allCategories: categories)
  }, [categories])


  return (
    <div>
      <FilterContext.Provider value = {[categories, setCategories]}>
        {loading ? <div>Loading....</div>:
          <div>
          <NavBar/>
          <BrowserRouter>
              <Switch>
                <Route exact path = {'/'}><LandingPage newsData = {newsData}/></Route>
                <Route exact path = {"/article/:category/:id"}><ArticlePage newsData = {newsData}/></Route>
              </Switch>
          </BrowserRouter>
        </div>}
      </FilterContext.Provider>
      
    </div>
  );
}

export default App;
