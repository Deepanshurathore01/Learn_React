import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data =useLoaderData()
  // const [data,setData] =useState([])
  // useEffect(()=>{
  //  fetch('https://api.github.com/users/Deepanshurathore01')
  //  .then(response => response.json())
  //  .then(data =>{
  //   console.log(data);
  //   setData(data)
  //  })
  // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white'>
      Github Followers : {data.followers}
      <img className='flex items-center justify-center' src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoder =async () => {
  const response =await fetch('https://api.github.com/users/Deepanshurathore01')
  return response.json()
}
