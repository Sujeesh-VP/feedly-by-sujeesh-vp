import React from 'react'
import News from '../../Article/News'
import Recommend from '../../Article/Recommend'

function ArticlePage() {
    return (
        <div className = "flex flex-col w-3/4 justify-center mx-auto mt-10">
            <div>
                <News/>
            </div>
            <div className = "flex flex-wrap pt-4 border-b-2 justify-between">
                <Recommend/>
                <Recommend/>
                <Recommend/>
                <Recommend/>
            </div>
        </div>
    )
}

export default ArticlePage
