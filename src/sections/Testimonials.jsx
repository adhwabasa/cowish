import React from 'react'
import TestiCard from '../components/TestiCard'
import testimonials from '../assets/fetchTesti'

const Testimonials = () => {
  return (
    <div className='container flex flex-col gap-4 mb-[86px]' id="testimonials">
      <h3 className='font-heading font-semibold self-center mb-8'>Testimonials From Our <span className='text-primary'>Clients</span></h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map(data => <TestiCard  stars={data.rating} name={data.name} key={data.id} desc={data.description}/>)}
        </div>
    </div>
  )
}

export default Testimonials
