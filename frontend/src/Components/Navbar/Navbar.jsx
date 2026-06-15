import React, {useContext, useState, useRef, useEffect} from 'react'
import './Navbar.css' 
import {assets} from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({setShowLogin}) => {

  const[menu,setMenu] = useState("menu");
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);

  const {getTotalCartAmount,token,setToken,setSearchTerm} = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  const handleSearchToggle = () => {
    setShowSearch(prev => !prev);
    if (!showSearch) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    } else {
      setSearchQuery('');
      setSearchTerm('');
    }
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setSearchTerm(e.target.value);
    // Scroll to food display if not already there
    if (e.target.value.length === 1) {
      const el = document.getElementById('food-display');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Escape') {
      setShowSearch(false);
      setSearchQuery('');
      setSearchTerm('');
    }
  }

  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="Logo" className="logo" /></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-container">
          <img
            src={assets.search_icon}
            alt="Search"
            onClick={handleSearchToggle}
            className="search-icon-btn"
            title="Search food"
          />
          <div className={`search-input-wrapper ${showSearch ? 'search-active' : ''}`}>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search food..."
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleSearchKeyDown}
              className="navbar-search-input"
            />
            {searchQuery && (
              <span className="search-clear" onClick={() => { setSearchQuery(''); setSearchTerm(''); searchInputRef.current?.focus(); }}>✕</span>
            )}
          </div>
        </div>
       <div className="navbar-search-icon">
        <Link to='/cart'><img src={assets.basket_icon} alt="Cart"/></Link>
        <div className={getTotalCartAmount()===0?"":"dot"}>
        </div>
       </div>
       {!token?<button onClick={()=>setShowLogin(true)}>sign in</button>
       :<div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='nav-profile-dropdown'>
              <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
        </div>}
      </div>
    </div>
  )
}

export default Navbar
