import MessageContainer from '../../components/message/MessageContainer'
import Sidebar from '../../components/sidebar/Sidebar'

const Home = () => {
  return (
    <div className='flex sm:h-450px] md:h-[550px] bg-slate-50/10 rounded-lg bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100'>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home