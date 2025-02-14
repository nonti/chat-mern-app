import { FiSend } from "react-icons/fi";
const MessageInput = () => {
  return (
    <div className="px-4 my-3">
      <div className="w-full relative">
        <input type="text" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 text-white" placeholder="Send a message..." />
        <button className="absolute inset-y-0 end-0 flex items-center px-3"><FiSend className="text-gray-500"/></button>
      </div>
    </div>
  )
}

export default MessageInput