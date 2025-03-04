import { useState } from 'react';
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom';
import useSignUp from '../../hooks/useSignUp';

const Signup = () => {

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const {loading, signup} = useSignUp();

  const handleChecboxChange = (gender) => {
    setInputs({...inputs, gender });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='p-6 h-full w-full bg-slate-50/10 rounded-lg bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100'>
        <h1 className='text-3xl font-semi-bold text-center text-white'>Signup</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='' className='label p-2'>
              <span className='text-base label-text'>Fullname</span>
            </label>
            <input type='text' placeholder='Enter your fullname' 
            className='input input-bordered w-full h-10' 
            onChange={(e) => setInputs({...inputs, fullName: e.target.value})} value={inputs.fullName} />

          </div>
          <div>
            <label htmlFor='' className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type='text' placeholder='Enter your username' className='input input-bordered w-full h-10' onChange={(e) => setInputs({...inputs, username: e.target.value})} value={inputs.username} />

          </div>
          <div>
            <label htmlFor='' className='label p-2'>
              <span className='text-base label-text'>Email</span>
            </label>
            <input type='email' placeholder='Enter your email' className='input input-bordered w-full h-10' onChange={(e) => setInputs({...inputs, email: e.target.value})} value={inputs.email} />

          </div>
          <div>
            <label htmlFor='' className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type='password' placeholder='Enter your password' className='input input-bordered w-full h-10' onChange={(e) => setInputs({...inputs, password: e.target.value})} value={inputs.password} />
          </div>
          <div>
             <label htmlFor='' className='label p-2'>
               <span className='text-base label-text'>Confirm Password</span>
             </label>
             <input type='password' placeholder='Enter your password again' className='input input-bordered w-full h-10' onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})} value={inputs.confirmPassword} />
           </div>

           <GenderCheckbox className='mt-2' onCheckboxChange ={handleChecboxChange}  selectedGender={inputs.gender} />

           <Link to='' className='text:sm hover:underline hover:text-blue-500 mt-2 inline-block'>Already have an account?</Link>
           <div>
            <button className='btn w-full rounded-lg' disabled={loading}>
              {loading ? <span className='loading loading-spinner loading-sm'></span> : 'Signup'}
            </button>
           </div>
        </form>
      </div>
    </div>
  )
}

export default Signup


//starter code
{/** 
  
  import GenderCheckbox from './GenderCheckbox'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='p-6 h-full w-full bg-slate-50/10 rounded-lg bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100'>
        <h1 className='text-3xl font-semi-bold text-center text-white'>Signup</h1>

        <form action=''>
          <div>
            <label htmlFor='' className='label p-2'>
              <span className='text-base label-text'>Fullname</span>
            </label>
            <input type='text' placeholder='Enter your fullname' className='input input-bordered w-full input input-bordered h-10' />

          </div>
          <div>
            <label htmlFor='' className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type='text' placeholder='Enter your username' className='input input-bordered w-full input input-bordered h-10' />

          </div>
          <div>
            <label htmlFor='' className='label p-2'>
              <span className='text-base label-text'>Email</span>
            </label>
            <input type='email' placeholder='Enter your email' className='input input-bordered w-full input input-bordered h-10' />

          </div>
          <div>
            <label htmlFor='' className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type='password' placeholder='Enter your password' className='input input-bordered w-full input input-bordered h-10' />
          </div>
          <div>
             <label htmlFor='' className='label p-2'>
               <span className='text-base label-text'>Confirm Password</span>
             </label>
             <input type='password' placeholder='Enter your password again' className='input input-bordered w-full input input-bordered h-10' />
           </div>

           <GenderCheckbox className='mt-2'/>

           <a href='' className='text:sm hover:underline hover:text-blue-500 mt-2 inline-block'>Already have an account?</a>
           <div>
            <button className='btn w-full rounded-lg'>Login</button>
           </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
  */}