const ContactSection = () => {
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

        <form className="mx-auto mt-10 max-w-2xl space-y-5">
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
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-pink-400 focus:ring-4 focus:ring-pink-50"
              />
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
              placeholder="Write your message..."
              className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-pink-400 focus:ring-4 focus:ring-pink-50"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-3.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
