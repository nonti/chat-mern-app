import toast from 'react-hot-toast';
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import { IoSearchSharp } from 'react-icons/io5';
import { useState } from 'react';
const SearchInput = () => {
  const [search, setSearch] = useState('');
  const { setSelectedConversation } = useConversation();
  const {conversations} = useGetConversations();

  const handleSearch = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3){
      return toast.error('Search must be at least 3 characters long');
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversation){
      setSelectedConversation(conversation);
      setSearch('');
    }else toast.error('No such user found')
  }
  return (
    <form className='flex items-center mt-2 gap-2' onSubmit={handleSearch}>
      <input type='text' placeholder='Search...' className='input input-bordered rounded-full' value={search} onChange={(e) => setSearch(e.target.value)}/>
      <button type='submit' className='btn btn-circle bg-sky-500 text-white border-none outline-none'><IoSearchSharp className='h-6 w-6 outline-none'/></button>
    </form>
  )
}

export default SearchInput



// import { IoSearchSharp } from 'react-icons/io5';
// const SearchInput = () => {
//   return (
//     <form className='flex items-center mt-2 gap-2'>
//       <input type='text' placeholder='Search...' className='input input-bordered rounded-full'/>
//       <button type='submit' className='btn btn-circle bg-sky-500 text-white border-none outline-none'><IoSearchSharp className='h-6 w-6 outline-none'/></button>
//     </form>
//   )
// }

// export default SearchInput