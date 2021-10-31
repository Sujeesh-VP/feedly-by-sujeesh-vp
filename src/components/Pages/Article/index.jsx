import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router'
import NewsDetails from './NewDetails'
import { globalDataContext } from '../../../App'



function ArticlePage({newsData}) {
    const {category, data, id} = useParams()
    const [globalData, setGlobalData] = useContext(globalDataContext)
    const {randomList = [], searchAllData = []} = globalData || {}

    const [localArticleDetails, setLocalArticleDetails] = useState({})
    const [localArticleList, setLocalArticleList] = useState([])
const changeState = (list = []) =>{
    let articleList = list?.find((e)=>e.key === category )?.value
    let articleDetails = articleList?.find((i)=>i.id === id)
    if(articleDetails?.id){
         setLocalArticleDetails(articleDetails)
        setLocalArticleList(articleList)

    }else {
        articleList = searchAllData?.find((e)=>e.key === category )?.value
        articleDetails = articleList?.find((i)=>i.id === id)
        setLocalArticleDetails(articleDetails)
       setLocalArticleList(articleList)
    }
    
}
console.log("params", useParams())
    useEffect(() => {
        
       const init=()=>{
        
        if(newsData.length === 0){
           changeState(randomList)

        }else {
            changeState(newsData)
        }
        
    }
       init();

    }, [id,newsData, randomList])

 
   
    return (
        <div className = "flex flex-col w-3/4 justify-center mx-auto mt-10">
           <NewsDetails list = {localArticleList?.filter((item) => item.id !== id) || []} news = {localArticleDetails} category = {category}/>
        </div>
    )
}

export default ArticlePage
