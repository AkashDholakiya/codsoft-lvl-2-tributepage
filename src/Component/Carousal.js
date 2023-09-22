import React from 'react'
import { useState } from 'react';
import Sardar from './sardar'
import APJ from './APJ'
import Rabindra from './rabindra'

const Navbar = () => {
    const [tri,settri] = useState(1);
    const handleprev = () => {
        settri(tri -1 === 0 ? 3 : tri - 1)
    }
    const handlenext = () => {
        settri(tri + 1 === 4 ? 1 : tri + 1)
    }
    return (
        <>
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <h2 className='box'><span id='sar'>Sardar Vallabhbhai Patel</span></h2>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <h2 className='box'><span id='rab'>Rabindranath Tagore</span></h2>
                    </div>
                    <div className="carousel-item">
                        <h2 className="box" ><span id='drapj'>Dr. A.P.J. Abdul Kalam</span></h2>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" onClick={handleprev} data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next" type="button" onClick={handlenext} data-bs-target="#carouselExampleDark" data-bs-slide="next" >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
            {tri === 1 && <Sardar />}
            {tri === 2 && <Rabindra heading="Rabindra here"/>}
            {tri === 3 && <APJ heading="APJ here"/>}
        </>
    )
}

export default Navbar
