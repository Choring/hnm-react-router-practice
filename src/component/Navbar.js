import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Navbar = ({authenticate,setAuthenticate}) => {
    const menuList= ['여성','Divided','남성','신생아/유아','아동','H&M Home','지속가능성']
    const navigate = useNavigate();
    const login = authenticate;
    const [mobileButton, setMobileButton ] = useState(false);

    const search = (event) => {
        if(event.key === "Enter"){
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`);
        }
    }
    const isLogin = () => {
        (login === true) ? setAuthenticate(false) : navigate(`/login`);
    }
    const toggleBtn = () => {
        mobileButton == true ? setMobileButton(false) : setMobileButton(true);
        console.log(mobileButton);
    }
  return (
    <div>
        <div className='login-button'>
            <FontAwesomeIcon icon={faUser} />
            <div className='cursor-pointer' onClick={isLogin}>
                {login === true ? "로그아웃" : "로그인"}
            </div>
        </div>
        <Link to={`/`} className='nav-section'>
            <img src='https://www.hm.com/entrance/assets/bundle/img/HM-Share-Image.jpg' width={100} alt='logo'></img>
        </Link>
        <div>
            <div className="menu-container">
                <div className='pc-menu-box'>
                    <ul className='menu-list'>
                        {menuList.map((menu,index) => (
                            <li key={index}>{menu}</li>
                        ))}
                    </ul>
                </div>
                <button className='toggle-button' onClick={toggleBtn}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div className='m-menu-box'>
                    <div className={`${mobileButton == false ? "d-none" : "d-block"}`}>
                        <ul className="m-menu-list">
                            {menuList.map((menu,index) => (
                                <li key={index}>{menu}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='input-section'>
                <div className='input-box'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input className='input-button' type='text' onKeyDown={(event) => search(event)} placeholder='제품검색' />
                </div>
            </div>
        </div>
    </div>
  )
}
