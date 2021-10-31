
import axios from "axios";
import React, { useEffect, useState} from "react";
import NavBar from "./components/NavBar";
import LandingPage from "./components/Pages/Landing";
import ArticlePage from "./components/Pages/Article";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavRoute from "./components/Pages/NavRoute";

import moment from "moment";

export const FilterContext = React.createContext()
export const globalDataContext = React.createContext()

const allCategories = ["national", "world", "business", "sports"]
function App() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [globalData, setGlobalData] = useState({randomList: [], searchAllData: []});
  const [FilterCategories, setFilterCategories] = useState({categories: allCategories, isToday: true})
 const {categories = [], isToday = false} = FilterCategories || {}


   
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
      
      let tempValue = !isToday? dateWiseFilter(response.data): response.data;
      if(tempValue?.length>0){
        tempAll.push({key: response.category, value: tempValue})
      }
    }))
    setLoading(false)
    setNewsData(tempAll)
    globalData?.randomList?.length === 0 && setGlobalData({...globalData, randomList: tempAll})
}


    const dateWiseFilter=(list = [])=>{
  let temp= list.filter((item)=>moment().format("DD MMM YYYY,dddd")===item.date)

 return temp;
}


  useEffect(() => {
    setLoading(true)
    init(categories)
   
  }, [categories, isToday])

  return (
    <div>
      <globalDataContext.Provider value = {[globalData, setGlobalData]}>
        <FilterContext.Provider value = {[FilterCategories, setFilterCategories]}>
            <BrowserRouter>
                <Switch>
                  <NavRoute exact path = {'/'} component = {LandingPage} newsData = {newsData} loading = {loading} ></NavRoute>
                  <NavRoute exact path = {"/article/:category/:id"} component = {ArticlePage} newsData = {newsData} loading = {loading} disableFilterTag ={true}></NavRoute>
                  
                </Switch>
            </BrowserRouter>
        </FilterContext.Provider>
      </globalDataContext.Provider>
  
      
    </div>
  );
}

export default App;
