import React from 'react'
import Navbar from '../Common/Navbar'
import Footer from '../Common/Footer'

function Help() {
  return (
    <div>
      <Navbar />
      
      
  {/* Header */}
  <header className="bg-primary text-white text-center py-4">
    <h1>Help &amp; Support</h1>
    <p>We're here to assist you with any questions or issues</p>
  </header>
  {/* FAQ Section */}
  <div className="container my-5">
    <h2 className="mb-4">Frequently Asked Questions</h2>
    <div className="accordion" id="faqAccordion">
      <div className="accordion-item">
        <h2 className="accordion-header" id="faq1">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
            How do I register an account?
          </button>
        </h2>
        <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            Click the "Sign Up" button on the homepage and fill out your details to create an account.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="faq2">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
            How can I change my password?
          </button>
        </h2>
        <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            Go to account settings and choose "Change Password". Follow the instructions provided.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="faq3">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3">
            How do I contact support?
          </button>
        </h2>
        <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            Fill out the contact form below or email us at support@example.com.
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</div>
    
  )
}

export default Help
