import React from 'react'

export default function FooterMenu() {
  return (
    <div className='flex justify-end gap-10 md:px-10 text-lg text-secondary-400 pb-16 '>
        <div className='grid lg:grid-cols-2 gap-10'>
            <nav>
                <h2 className='pb-5'>About</h2>
                <ul>
                    <li>
                        <a href="#">How it works</a>
                    </li>
                    <li>
                        <a href="#">Featured</a>
                    </li>
                    <li>
                        <a href="#">Partnership</a>
                    </li>
                    <li>
                        <a href="#">Bussines relation</a>
                    </li>
                </ul>
            </nav>
            
            <nav>
                <h2 className='pb-5'>Community</h2>
                <ul>
                    <li>
                        <a href="#">How it works</a>
                    </li>
                    <li>
                        <a href="#">Featured</a>
                    </li>
                    <li>
                        <a href="#">Partnership</a>
                    </li>
                    <li>
                        <a href="#">Bussines relation</a>
                    </li>
                </ul>
            </nav>
        </div>
    
       
        <nav>
            <h2 className='pb-5'>Socials</h2>
            <ul>
                <li>
                    <a href="#">How it works</a>
                </li>
                <li>
                    <a href="#">Featured</a>
                </li>
                <li>
                    <a href="#">Partnership</a>
                </li>
                <li>
                    <a href="#">Bussines relation</a>
                </li>
            </ul>
        </nav>
    </div>
    
  )
}
