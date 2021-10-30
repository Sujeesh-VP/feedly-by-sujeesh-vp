import React from 'react'
import NewsContent from './NewsContent';


function LandingPage({newsData}) {
    
    return (
        <div className = "flex flex-col w-3/4 justify-center mx-auto mt-10">
            {newsData.map((newsItem) => <NewsContent category = {newsItem.key} data = {newsItem.value.splice(0,5)}/>)}
        </div>
    )
}

export default LandingPage
