import React from 'react'
import './nopage.css'
import error from './404Error.gif'

const NoPage = () => {
    return (
        <>
            <div className='nopage-container'>
                <center>
                    <img src={error} />
                </center>
            </div>
        </>
    )
}

export default NoPage