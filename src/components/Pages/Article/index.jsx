import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import NewsDetails from './NewDetails'

function ArticlePage({newsData}) {
    const {category, data, id} = useParams()

    const [localArticleDetails, setLocalArticleDetails] = useState({})
    const [localArticleList, setLocalArticleList] = useState([])
    useEffect(() => {
       const init=()=>{
          let articleList = newsData.find((e)=>e.key === category ).value
          let articleDetails = articleList.find((i)=>i.id === id)
          setLocalArticleDetails(articleDetails)
          setLocalArticleList(articleList)
          
       }
       init();
    }, [id])

 
    
    return (
        <div className = "flex flex-col w-3/4 justify-center mx-auto mt-10">
           <NewsDetails list = {localArticleList.filter((item) => item.id !== id)} news = {localArticleDetails} category = {category}/>
        </div>
    )
}

export default ArticlePage
