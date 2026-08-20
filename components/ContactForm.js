"use client";

import { useState } from "react";
import { useStore } from "./StoreContext";

export default function ContactForm() {
  const { showToast } = useStore();
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    setSent(true);
    showToast("Message sent! We'll be in touch.");
  }

  return (
    <div className="reveal">
      <div className={`contact-form-msg${sent ? " success" : ""}`}>
        Thank you! Your message has been sent. We&apos;ll get back to you within 24 hours.
      </div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="contact-name">Name</label>
          <input className="form-input" type="text" id="contact-name" name="name" required placeholder="Your name" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="contact-email">Email</label>
          <input className="form-input" type="email" id="contact-email" name="email" required placeholder="your@email.com" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="contact-message">Message</label>
          <textarea className="form-textarea" id="contact-message" name="message" required placeholder="How can we help?"></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
      </form>
    </div>
  );
}
