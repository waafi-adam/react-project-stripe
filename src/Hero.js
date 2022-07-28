import React from 'react'
import { useGlobalContext } from './context'
import phoneImg from './images/phone.svg'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()
  return (
    <section
      className='hero'
      onMouseOver={(e) => {
        closeSubmenu()
      }}
    >
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes - from startups to Fortune 500s -
            use Stripe's sofware and APIs to accept payments, send payouts and
            manage their business online
          </p>
          <button className='btn'>start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} alt='phone' className='phone-img' />
        </article>
      </div>
    </section>
  )
}

export default Hero
