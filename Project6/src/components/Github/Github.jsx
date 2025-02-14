import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState();
    const [loading,setLoading] = useState(true);
    useEffect(() => {
      fetch('https://api.github.com/users/hiteshchoudhary')
       .then(res => res.json())
       .then(data => {
        setData(data)
        setLoading(false)
        console.log(data)
       })
    },[]
    )
    if (loading === true) {
        return <div className="text-white text-2xl">Loading...</div>;
    }
  return (
    <div className='flex w-full justify-center items-center flex-col text-white bg-slate-800 text-3xl h-auto'>
      Github followers : {data.followers}
      
      <img width={300} src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github
