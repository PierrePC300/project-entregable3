import React from 'react'


const Location = ({location}) => { 
  return (
    <section className='pl-12 my-6'>
        <h2 className='pt-3 text-1.6xl font-serif text-red-600'>{location?.name}</h2>
        <ul className='columns-3 text-sky-400'>
           
            <li className='px-0'>Type: {location?.type}</li>
            <li className='px-0'>Dimension: {location?.dimension}</li>
            <li className='px-5'>Population: {location?.residents.length}</li>
        </ul>
    </section>
  )
}

export default Location
