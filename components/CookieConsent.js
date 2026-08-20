"use client";

import { useEffect, useState } from "react";

const COOKIE_KEY = "recosm_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let timer;
    try {
      if (!localStorage.getItem(COOKIE_KEY)) {
        timer = setTimeout(() => setVisible(true), 1500);
      }
    } catch {}
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  function dismiss(value) {
    try {
      localStorage.setItem(COOKIE_KEY, value);
    } catch {}
    setVisible(false);
  }

  return (
    <div className={`cookie-banner${visible ? " is-visible" : ""}`}>
      <div className="cookie-inner">
        <p>
          We use cookies to enhance your experience. By continuing, you agree to our <a href="#">Privacy Policy</a>.
        </p>
        <div className="cookie-actions">
          <button className="cookie-accept" onClick={() => dismiss("accepted")}>Accept</button>
          <button className="cookie-decline" onClick={() => dismiss("declined")}>Decline</button>
        </div>
      </div>
    </div>
  );
}
