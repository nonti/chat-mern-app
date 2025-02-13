
const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="p-6 h-full w-full bg-slate-50/10 rounded-lg bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100">
        <h1 className="text-3xl font-semi-bold text-center text-white">Chat App</h1>

        <form action="">
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="Enter your username" className="input input-bordered w-full input input-bordered h-10" />
          </div>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter your password" className="input input-bordered w-full input input-bordered h-10" />
          </div>

          <a href="" className="text:sm hover:underline hover:text-blue-500 mt-2 inline-block">{"Don't"} have an account?</a>
          <div>
          <button className="btn w-full rounded-lg">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login

//starter code


// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="p-6 h-full w-full bg-slate-50/10 rounded-lg bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100">
//         <h1 className="text-3xl font-semi-bold text-center text-white">Chat App</h1>

//         <form action="">
//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input type="text" placeholder="Enter your username" className="input input-bordered w-full input input-bordered h-10" />
//           </div>
//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input type="password" placeholder="Enter your password" className="input input-bordered w-full input input-bordered h-10" />
//           </div>

//           <a href="" className="text:sm hover:underline hover:text-blue-500 mt-2 inline-block">{"Don't"} have an account?</a>
//           <div>
//           <button className="btn w-full rounded-lg">Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login