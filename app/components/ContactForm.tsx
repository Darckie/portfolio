'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! (Backend integration needed)');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <input
        name="name"
        type="text"
        placeholder="Your Name"
        className="w-full p-3 border dark:bg-black"
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        className="w-full p-3 border dark:bg-black"
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        className="w-full p-3 border dark:bg-black"
        rows={5}
        onChange={handleChange}
      />
      <button type="submit" className="bg-black text-white dark:bg-white dark:text-black px-6 py-2 uppercase">
        Send Message
      </button>
    </form>
  );
}
