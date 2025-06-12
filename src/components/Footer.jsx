import React from 'react'
import { useEffect, useState } from 'react'

const Footer = () => {
    const [year, setYear] = useState(2024)

    useEffect(() => {
        const getYear = new Date().getFullYear()
        setYear(getYear)
    },[])

  return (
    <div className='bg-primary text-bg p-2 text-center'>
        Made with ❤️ by Adhwa Aulia Prabasa — © {year}. All rights reserved.
    </div>
  )
}

export default Footer
