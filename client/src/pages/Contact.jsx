import { useState } from 'react';
import { api } from '../api/api';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });
    setLoading(true);
    try {
      await api.submitContact(form);
      setMessage({ type: 'success', text: 'Message sent! We will get back to you soon.' });
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setMessage({ type: 'error', text: err.message || 'Failed to send message.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
          Contact Us
        </h1>
        <p className="text-center text-gray-300 mb-8 text-sm sm:text-base">
          Have a question, bridal enquiry, or feedback? Drop us a message and we&apos;ll get back to you.
        </p>

        {message.text && (
          <div
            className={`mb-6 p-4 rounded-lg text-sm ${
              message.type === 'success'
                ? 'bg-emerald-900/40 text-emerald-200 border border-emerald-500/50'
                : 'bg-red-900/40 text-red-200 border border-red-500/50'
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
              Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-white/15 bg-black/40 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-white/15 bg-black/40 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-1">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-white/15 bg-black/40 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
              placeholder="Your phone"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-white/15 bg-black/40 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-accent-gold text-black font-medium rounded-full hover:brightness-110 disabled:opacity-60 transition"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="mt-12 p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-black/80">
          <h2 className="font-display text-lg font-semibold text-white mb-2">
            Visit or Call
          </h2>
          <p className="text-sm text-gray-300">Manju&apos;s Makeover</p>
          <p className="text-sm text-gray-300">Address line (update in Contact.jsx)</p>
          <a href="tel:+919876543210" className="text-accent-gold hover:text-white text-sm mt-2 inline-block">
            +91 98765 43210
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
