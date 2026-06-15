import React from 'react'
import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
  return (
    <div className='privacy-page'>
      <div className='privacy-hero'>
        <h1>🔒 Privacy Policy</h1>
        <p>Last updated: June 2026</p>
      </div>

      <div className='privacy-content'>
        <div className='privacy-section'>
          <h2>1. Introduction</h2>
          <p>
            Welcome to Tomato ("we", "our", "us"). We are committed to protecting your personal information and
            your right to privacy. This Privacy Policy explains how we collect, use, and share information about
            you when you use our food delivery platform.
          </p>
        </div>

        <div className='privacy-section'>
          <h2>2. Information We Collect</h2>
          <ul>
            <li><strong>Account Information:</strong> Name, email address, and password when you register.</li>
            <li><strong>Order Information:</strong> Delivery address, payment details, and order history.</li>
            <li><strong>Device Information:</strong> IP address, browser type, and operating system.</li>
            <li><strong>Usage Data:</strong> Pages visited, clicks, and time spent on the platform.</li>
          </ul>
        </div>

        <div className='privacy-section'>
          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To process and deliver your food orders.</li>
            <li>To send order confirmations and delivery updates.</li>
            <li>To personalise your experience and show relevant recommendations.</li>
            <li>To improve our platform and customer service.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </div>

        <div className='privacy-section'>
          <h2>4. Sharing Your Information</h2>
          <p>
            We do not sell your personal data. We may share your information with:
          </p>
          <ul>
            <li><strong>Restaurant Partners:</strong> To prepare and fulfil your orders.</li>
            <li><strong>Delivery Partners:</strong> To deliver your food to your location.</li>
            <li><strong>Payment Processors:</strong> To securely handle your transactions.</li>
            <li><strong>Legal Authorities:</strong> When required by law or to protect our rights.</li>
          </ul>
        </div>

        <div className='privacy-section'>
          <h2>5. Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience on our platform.
            You can control cookie settings through your browser preferences. Disabling cookies may affect
            the functionality of certain features.
          </p>
        </div>

        <div className='privacy-section'>
          <h2>6. Data Security</h2>
          <p>
            We implement industry-standard security measures including SSL encryption, secure servers, and
            regular security audits to protect your personal information. However, no method of transmission
            over the internet is 100% secure.
          </p>
        </div>

        <div className='privacy-section'>
          <h2>7. Your Rights</h2>
          <ul>
            <li>Access and download your personal data.</li>
            <li>Correct any inaccurate information.</li>
            <li>Request deletion of your account and associated data.</li>
            <li>Opt out of marketing communications at any time.</li>
          </ul>
        </div>

        <div className='privacy-section'>
          <h2>8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <div className='privacy-contact'>
            <p>📧 <a href="mailto:privacy@tomato.com">privacy@tomato.com</a></p>
            <p>📞 <a href="tel:+12224352342">+1-222-435-2342</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
