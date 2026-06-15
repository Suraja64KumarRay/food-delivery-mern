import React from 'react'
import './Delivery.css'

const Delivery = () => {
  return (
    <div className='delivery-page'>
      <div className='delivery-hero'>
        <h1>🚚 Delivery Information</h1>
        <p>Fast, reliable and fresh — every time</p>
      </div>

      <div className='delivery-content'>
        <div className='delivery-section'>
          <h2>How It Works</h2>
          <div className='delivery-steps'>
            <div className='delivery-step'>
              <div className='step-number'>1</div>
              <div className='step-text'>
                <h4>Browse & Order</h4>
                <p>Choose your favourite items from our menu and add them to your cart.</p>
              </div>
            </div>
            <div className='delivery-step'>
              <div className='step-number'>2</div>
              <div className='step-text'>
                <h4>Order Confirmed</h4>
                <p>We send your order to the restaurant and confirm payment securely.</p>
              </div>
            </div>
            <div className='delivery-step'>
              <div className='step-number'>3</div>
              <div className='step-text'>
                <h4>Food Prepared</h4>
                <p>Our partner restaurant prepares your food fresh to order.</p>
              </div>
            </div>
            <div className='delivery-step'>
              <div className='step-number'>4</div>
              <div className='step-text'>
                <h4>Delivered to You</h4>
                <p>Our delivery partner brings your food right to your door.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='delivery-section'>
          <h2>Delivery Details</h2>
          <div className='delivery-info-grid'>
            <div className='delivery-info-card'>
              <h3>⏱ Delivery Time</h3>
              <p>Average delivery time is <strong>25–40 minutes</strong> depending on distance and restaurant preparation time.</p>
            </div>
            <div className='delivery-info-card'>
              <h3>💰 Delivery Fee</h3>
              <p>Delivery fee starts from <strong>$2</strong>. Orders above $30 enjoy <strong>free delivery</strong>.</p>
            </div>
            <div className='delivery-info-card'>
              <h3>📍 Service Areas</h3>
              <p>We currently serve all major areas within a <strong>15 km radius</strong> of our partner restaurants.</p>
            </div>
            <div className='delivery-info-card'>
              <h3>🕐 Operating Hours</h3>
              <p>We deliver from <strong>9:00 AM to 11:00 PM</strong>, seven days a week including holidays.</p>
            </div>
          </div>
        </div>

        <div className='delivery-section'>
          <h2>Track Your Order</h2>
          <p className='track-note'>
            Once your order is placed, you can track it in real-time by visiting <strong>My Orders</strong> from your profile menu.
            You'll see status updates from confirmation through to delivery at your door.
          </p>
        </div>

        <div className='delivery-section'>
          <h2>Issues with Delivery?</h2>
          <p>If you experience any problems with your delivery, please contact us:</p>
          <div className='delivery-contact'>
            <p>📞 <a href="tel:+12224352342">+1-222-435-2342</a></p>
            <p>📧 <a href="mailto:contact@tomato.com">contact@tomato.com</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Delivery
