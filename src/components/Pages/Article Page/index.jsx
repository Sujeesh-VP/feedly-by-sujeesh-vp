import React from 'react'
import NewDetails from './NewDetails'

function ArticlePage({newsData}) {
    return (
        <div className = "flex flex-col w-3/4 justify-center mx-auto mt-10">
           <NewDetails category = {newsData.category} content = {newsData.data.slice(0,5)}/>
        </div>
    )
}

export default ArticlePage
