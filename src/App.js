
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import LandingPage from "./components/Pages/Landing";


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
      <LandingPage newsData = {newsData}/>
    </div>
  );
}

export default App;
