import './login.scss';
import { useState } from 'react';


const SignInModal = () => {
    const [className, setClassName] = useState(false)
    const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.value ? setClassName(true) : setClassName(false)
    }        
    
    return (
        <div className='signInWrapper w-100' onClick={(e) => {e.stopPropagation()}}>
            <div className='signInCredentials'>
                <h3>Sign in</h3>
                <hr />                
                <div className='input-container'>
                    <input type='text' id='username' className={`p-1 w-100 ${className ? 'is-valid' : ''}`} 
                    onBlur={(e) => handleBlur(e)}></input>
                    <label htmlFor='username' className=''>Username</label>
                </div>
                <div className='input-container'>
                    <input type='password' id='password' className={`p-1 w-100 ${className ? 'is-valid' : ''}`} 
                    onBlur={(e) => handleBlur(e)}></input>
                    <label htmlFor='password'>Password</label>
                </div>
                <p className='items-center'>Forgot password?</p>
                <input type='submit' className='w-50 submit-button'></input>
            </div>
            <hr />
            <div className='signUpCredentials'>
                <p>Don't have an account? <a href="" className='alt-signup'>Sign up</a></p>
            </div>
        </div>
    )
}

export default SignInModal;