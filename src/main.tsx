import { StrictMode, useState, type FormEvent } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function WhatsAppMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className="whatsapp-mark"
      fill="currentColor"
    >
      <path d="M16.05 3A12.78 12.78 0 0 0 5.13 22.39L3.3 29l6.77-1.77A12.8 12.8 0 1 0 16.05 3Zm0 23.44a10.62 10.62 0 0 1-5.42-1.48l-.39-.23-4.02 1.05 1.08-3.91-.25-.4a10.65 10.65 0 1 1 9 4.97Zm5.84-7.98c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59a9.63 9.63 0 0 1-1.78-2.22c-.19-.32-.02-.49.14-.65.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.14 3.08 1.3 3.29.16.21 2.25 3.43 5.44 4.81.76.33 1.35.52 1.81.67.76.24 1.46.21 2.01.13.61-.09 1.89-.77 2.16-1.52.27-.74.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

function App() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  function openWhatsApp(event: FormEvent) {
    event.preventDefault();
    const cleaned = phone.replace(/\D/g, "");

    if (cleaned.length < 7 || cleaned.length > 15) {
      setError("Enter a valid phone number including its country code.");
      return;
    }

    setError("");
    window.location.href = `https://wa.me/${cleaned}`;
  }

  return (
    <main>
      <section className="redirect-card" aria-labelledby="page-title">
        <div className="logo" aria-hidden="true">
          <WhatsAppMark />
        </div>

        <div className="intro">
          <h1 id="page-title">Just Message!</h1>
          <p>Enter a phone number with country code to start chatting</p>
        </div>

        <form onSubmit={openWhatsApp} noValidate>
          <label htmlFor="phone">Phone number</label>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+65 9123 4567"
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
              if (error) setError("");
            }}
            aria-describedby={error ? "phone-error phone-help" : "phone-help"}
            aria-invalid={Boolean(error)}
          />
          <button type="submit">Open in WhatsApp</button>
          <p className="error" id="phone-error" role="alert" aria-live="polite">
            {error}
          </p>
        </form>

        <p className="help" id="phone-help">
          Include your country code (e.g. +65 for Singapore)
        </p>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`).catch(
      (error: unknown) => {
        console.error("Service worker registration failed:", error);
      },
    );
  });
}
