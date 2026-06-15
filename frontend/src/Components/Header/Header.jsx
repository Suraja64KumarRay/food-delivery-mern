import React from 'react'
import './Header.css'

const Header =() => {
    const handleViewMenu = () => {
        const el = document.getElementById('explore-menu');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className='header'>
            <div className="header-contents">
                <h2>Order your favourite food here</h2>
                <p>
                    Choose from a wide variety of restaurants and cuisines, and have your food delivered to your doorstep in no time. With our user-friendly interface and secure payment options, ordering food has never been easier. Whether you're craving pizza, sushi, or a hearty burger, we've got you covered. So why wait? Start browsing our menu and place your order today!
                </p>
                <button onClick={handleViewMenu}>View Menu</button>
            </div>
        </div>
    )
}

export default Header
