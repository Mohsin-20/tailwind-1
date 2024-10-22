
import React from 'react'
import Header from './component/Header';Header
import Footer from './component/Footer/Footer';Footer

const page = () => {
  return (
    <div>
  <Header/>
  
      <p className=" border-2 border-orange-600 outline-black-500 text-red-600 bg-blue-300 font-medium py-4  border-black text-center mt-8 box-border-50 break-inside-auto break-inside-auto">this is a pragraph</p>
<button className="p-2 bg-red-200 rounded-md p-4 mt-10 text-center py-3">About</button>   
<Footer/> 
    </div>
   
  )

}

export default page
