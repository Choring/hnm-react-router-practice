import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault(); // 페이지 리프레쉬 방지
    setAuthenticate(true);
    navigate('/');
  }
  return (
    <div className='container mt-5'>
      <div className='d-flex flex-column justify-content-center align-items-center l-container'>
        <form className='d-flex flex-column align-items-center' onSubmit={(event) => {loginUser(event)}}>
          <div className='d-flex align-items-center gap-2 border login-box'>
            <label className='mb-0' htmlFor='username'>아이디: </label>
            <input id='username' className='login-input' type='text' placeholder='아이디를 입력해주세요' required />
          </div>
          <div className='d-flex align-items-center gap-2 border login-box'>
            <label className='mb-0' htmlFor='password'>비밀번호: </label>
            <input id='password' className='login-input' type='password' placeholder='비밀번호를 입력해 주세요' required />
          </div>
          <button className='bg-primary login-btn' type='submit'>로그인</button>
        </form>
      </div>
    </div>
  )
}
