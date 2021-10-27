import React from 'react'
import Prominent from '../../Article/Prominent'
import Recommend from '../../Article/Recommend'

function LandingPage() {
    return (
        <div className = "flex flex-col w-3/4 justify-center mx-auto mt-10">
            <div>
                <Prominent/>
            </div>
            <div className = "flex flex-wrap  pt-4 border-b-2 justify-between">
                <Recommend/>
                <Recommend/>
                <Recommend/>
                <Recommend/>
            </div>
        </div>
    )
}

export default LandingPage
