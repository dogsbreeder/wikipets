import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Contact WikiPets | Pet Business Directory Belgrade',
  description: 'Get in touch with the WikiPets team for questions, suggestions, or to list your pet business in our Belgrade directory.',
};

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-primary">
          <div className="absolute inset-0 opacity-20 bg-pattern"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl opacity-90">Get in touch with the WikiPets team</p>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="What is this regarding?"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="Your message..."
                        required
                      ></textarea>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              
              {/* Contact Info */}
              <div className="mt-12 bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Other Ways to Reach Us</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-primary mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-md font-medium">Email</h4>
                      <p className="text-gray-600">info@wikipets.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-md font-medium">Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9AM - 5PM CET</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-md font-medium">List Your Business</h4>
                      <p className="text-gray-600">
                        If you would like to list your pet business on WikiPets, please reach out with details about your business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 