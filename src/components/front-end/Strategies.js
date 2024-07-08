import Image from 'next/image'
import React from 'react'

export default function Strategies() {
  return (
    <div className='my-24 mx-36'>
      <div className='grid grid-cols-5  gap-4  justify-center items-center'>
      <div className='flex flex-col col-span-2'>
        <h1 className='my-12 text-5xl text-nowrap font-bold'>The Strategies</h1>
        <p>
        Since then it has been progressing with tremendous pace in the industrial area of Bangladesh. A large number of people are employed by the group and cared for as members of the Infinia family. The non-profit concerns are also involved in sustaining development of the country & for social welfare. 
        </p>
      </div>
      <div className='col-span-3'>
        <Image src="http://infiniagroupbd.com/wp-content/uploads/2019/08/Strategies.png" width={800} height={300} alt=""/>
      </div>
      </div>
    </div>
  )
}
