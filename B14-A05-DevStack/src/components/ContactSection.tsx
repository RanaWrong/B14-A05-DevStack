import { useState } from "react";
import type { FormEvent } from "react";
import { toast } from "react-toastify";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleEmailChange = (value: string) => {
    setEmail(value);

    if (emailError && emailPattern.test(value.trim())) {
      setEmailError("");
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim()) {
      toast.warning("Please enter your name.");
      return;
    }

    if (!email.trim()) {
      setEmailError("Email is required.");
      toast.warning("Please enter your email address.");
      return;
    }

    if (!emailPattern.test(email.trim())) {
      setEmailError("Please enter a valid email address.");
      toast.error("That email address doesn't look valid.");
      return;
    }

    if (!message.trim()) {
      toast.warning("Please write a short message.");
      return;
    }

    setEmailError("");
    setName("");
    setEmail("");
    setMessage("");
    setIsSent(true);

    toast.success("Thank you! We will contact you as soon as possible.");
  };

  return (
    <section id="contact" className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">
            Get In Touch
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Have a question?{" "}
            <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Let’s talk.
            </span>
          </h2>

          <p className="mt-4 leading-7 text-slate-500">
            Have feedback, suggestions, or ideas for Dev Stack?
            Send us a message and let us know.
          </p>
        </div>

        {isSent ? (
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-emerald-200 bg-emerald-50/70 p-10 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-2xl text-white shadow-sm">
              ✓
            </div>

            <h3 className="mt-5 text-2xl font-bold text-slate-900">
              Thank you for reaching out!
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Your message has been sent successfully.
              We will contact you as soon as possible.
            </p>

            <button
              type="button"
              onClick={() => setIsSent(false)}
              className="mt-6 rounded-xl border border-emerald-300 bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mx-auto mt-10 max-w-2xl space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-pink-400 focus:ring-4 focus:ring-pink-50"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => handleEmailChange(event.target.value)}
                  placeholder="you@example.com"
                  aria-invalid={emailError ? true : undefined}
                  aria-describedby={emailError ? "email-error" : undefined}
                  className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                    emailError
                      ? "border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-50"
                      : "border-slate-200 focus:border-pink-400 focus:ring-4 focus:ring-pink-50"
                  }`}
                />

                {emailError && (
                  <p id="email-error" className="mt-2 text-xs font-medium text-red-500">
                    {emailError}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Message
              </label>

              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Write your message..."
                className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-pink-400 focus:ring-4 focus:ring-pink-50"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-3.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
