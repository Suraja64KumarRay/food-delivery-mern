import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about-page'>
      <div className='about-hero'>
        <h1>About Tomato 🍅</h1>
        <p>Bringing your favourite food to your doorstep since 2020</p>
      </div>

      <div className='about-content'>
        <div className='about-section'>
          <h2>Our Story</h2>
          <p>
            Tomato was founded with a simple mission — to make great food accessible to everyone, everywhere.
            We started as a small local delivery service and have since grown into a platform connecting thousands of
            hungry customers with their favourite restaurants every day.
          </p>
        </div>

        <div className='about-cards'>
          <div className='about-card'>
            <span className='about-icon'>🍽️</span>
            <h3>500+</h3>
            <p>Menu Items</p>
          </div>
          <div className='about-card'>
            <span className='about-icon'>🏪</span>
            <h3>200+</h3>
            <p>Restaurant Partners</p>
          </div>
          <div className='about-card'>
            <span className='about-icon'>🚀</span>
            <h3>30 Min</h3>
            <p>Average Delivery</p>
          </div>
          <div className='about-card'>
            <span className='about-icon'>😊</span>
            <h3>50K+</h3>
            <p>Happy Customers</p>
          </div>
        </div>

        <div className='about-section'>
          <h2>Our Mission</h2>
          <p>
            We believe food brings people together. Our mission is to provide a seamless, enjoyable ordering
            experience — from browsing to the last bite. We work closely with our restaurant partners to ensure
            quality, freshness, and variety for every order.
          </p>
        </div>

        <div className='about-section'>
          <h2>Why Choose Us?</h2>
          <div className='about-features'>
            <div className='about-feature'>
              <h4>✅ Fast Delivery</h4>
              <p>Real-time tracking and guaranteed delivery within 30 minutes.</p>
            </div>
            <div className='about-feature'>
              <h4>🔒 Secure Payments</h4>
              <p>Multiple safe payment options for your peace of mind.</p>
            </div>
            <div className='about-feature'>
              <h4>🌟 Quality Food</h4>
              <p>Partnered with top-rated restaurants to ensure the best quality.</p>
            </div>
            <div className='about-feature'>
              <h4>📞 24/7 Support</h4>
              <p>Our support team is always available to help you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
