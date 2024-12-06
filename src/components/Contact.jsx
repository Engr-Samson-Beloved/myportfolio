import React, { useState } from 'react';
import { Mail, SendHorizonal, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setFormSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-[#0F0F0F]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white flex justify-center items-center">
            <Mail className="mr-3 text-purple-600 animate-bounce" size={36} />
            Contact Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let's connect! I'm always open to discussing new projects, opportunities, or just having a chat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white dark:bg-[#1E1E1E] rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-6 text-purple-700 dark:text-purple-400 border-b pb-2 border-gray-200 dark:border-gray-700">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="mr-3 text-purple-600" />
                <span className="text-gray-700 dark:text-gray-300">
                  ONDO STATE, NIGERIA
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 text-purple-600" />
                <span className="text-gray-700 dark:text-gray-300">
                  (234) 811-6060-517
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 text-purple-600" />
                <span className="text-gray-700 dark:text-gray-300">
                  samsonowooluwa@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-[#1E1E1E] rounded-lg p-6 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md bg-gray-100 dark:bg-[#2A2A2A] dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md bg-gray-100 dark:bg-[#2A2A2A] dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md bg-gray-100 dark:bg-[#2A2A2A] dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 transition-all duration-300"
                >
                  <SendHorizonal className="mr-2" size={20} />
                  {formSubmitted ? 'Sent!' : 'Send Message'}
                </button>
              </div>
              {formSubmitted && (
                <p className="text-green-600 text-center mt-4">
                  Thank you! Your message has been sent.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
