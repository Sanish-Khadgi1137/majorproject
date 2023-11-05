
import { Link } from 'react-router-dom'

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


function Login() {


    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>

            <div className='bg-white p-3 rounded w-50'>

                <h2> Log in </h2>

                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong> </label>

                    <input type='email' placeholder='Enter your Email' className='form-control rounded-0'></input>

                </div>

                <form action="">

                    <div className='mb-3'>
                        <label htmlFor='password'><strong> Password</strong> </label>

                        <input type='password' placeholder='Enter your Password' className='form-control rounde-0'></input>

                        <br />

                        <button className='btn btn-success w-100 rounded-0'>Log in</button>
                        <p>Hereby you agree with all our terms and policies </p>


                        <Link to="/signup" className='btn btn-default border w-100 rounded-0 text-decortaion-none'> Create an Account</Link>



                    </div>
                </form >
            </div >
        </div >
    )
}

export default Login

