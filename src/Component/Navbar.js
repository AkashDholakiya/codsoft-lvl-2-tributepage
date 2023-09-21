import React from 'react'
import Sardar from './sardar'

const Navbar = () => {
    return (
        <>
            <div id="carouselExampleDark" class="carousel carousel-dark slide">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <h2 className='box'>Sardar Vallabhbhai Patel</h2>
                        <Sardar heading='Sardar'/>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <h2 className='box'>Rabindranath Tagore</h2>
                    </div>
                    <div class="carousel-item">
                        <h2 className="box" >Dr. A.P.J. Abdul Kalam</h2>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next" >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </>
    )
}

export default Navbar
