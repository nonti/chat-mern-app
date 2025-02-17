import toast from 'react-hot-toast';
import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
const useSignUp = () => {
 const [loading, setLoading] = useState(false);
 const { setAuthUser}= useAuthContext();

 const signup = async({fullName, username, email, password, confirmPassword, gender}) => {
    const success = handleInputErrors({fullName, username,email, password, confirmPassword, gender});
    if(!success) return;

    try {
      const res = await fetch(`/api/auth/register`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({fullName, username, email, password, confirmPassword, gender})
      });

      const data = await res.json();
      if(data.error){
        throw new Error(data.error);
      }
      // localstorage
      localStorage.setItem('chat-user', JSON.stringify(data));
      //context
      setAuthUser(data);

    } catch (error) {
      toast.error(error.message);
    }finally {
      setLoading(false);
    }
 };

 return { signup, loading };
}

export default useSignUp


const handleInputErrors = ({fullName, username, email, password, confirmPassword, gender}) => {
  if(!fullName || !username || !email || !password || !confirmPassword || !gender) {
    toast.error('Please fill all the fields');
    return false;
  }
  
  if(password !== confirmPassword) {
    toast.error('Passwords do not match');
    return false;
  }

  if(password.length < 6) {
    toast.error('Password must be at least 6 characters');
    return false;
  }

  return true;
}