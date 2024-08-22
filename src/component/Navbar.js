import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const menuList= ['여성','Divided','남성','신생아/유아','아동','H&M Home','지속가능성']
    const navigate = useNavigate();
  return (
    <div>
        <div className='login-button'>
            <FontAwesomeIcon icon={faUser} />
            <div className='cursor-pointer' onClick={() => {navigate("/login")}}>로그인</div>
        </div>
        <div className='nav-section'>
            <img src='https://www.hm.com/entrance/assets/bundle/img/HM-Share-Image.jpg' width={100} alt='logo'></img>
        </div>
        <div>
            <div>
                <ul className='menu-list'>
                    {menuList.map((menu,index) => (
                        <li key={index}>{menu}</li>
                    ))}
                </ul>
            </div>
            <div className='input-section'>
                <div className='input-box'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input className='input-button' type='text' placeholder='제품검색' />
                </div>
            </div>
        </div>
    </div>
  )
}
