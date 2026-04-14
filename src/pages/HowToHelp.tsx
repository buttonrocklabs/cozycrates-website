import { useState } from "react";

export default function HowToHelp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production, integrate with a form service like Formspree or Netlify Forms
    const mailto = `mailto:contact@cozycrates.org?subject=Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;
    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero banner */}
      <section className="bg-cc-black py-20 text-center">
        <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">
          How to <span className="text-cc-green">Help</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Every contribution helps us bring comfort and hope to children in need
        </p>
      </section>

      {/* Donation options */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold">
            Ways to <span className="text-cc-green">Support</span>
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-gray-700">
            We are actively preparing for hurricane season with an ambitious expansion goal. We
            plan to assemble 150 boxes containing activity books, blankets, toys, backpacks and
            other items to reach more children in affected communities.
          </p>

          <div className="mx-auto max-w-lg">
            {/* GoFundMe */}
            <div className="rounded-lg border border-gray-200 p-8 text-center transition-shadow hover:shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cc-green-light">
                <svg className="h-8 w-8 text-cc-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold">GoFundMe</h3>
              <p className="mt-3 text-sm text-gray-600">
                Support our campaign on GoFundMe
              </p>
              <a
                href="https://gofund.me/bee1cc79e"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded bg-cc-green px-6 py-2.5 font-heading font-bold text-cc-black transition-colors hover:bg-cc-green-dark"
              >
                View Campaign
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-cc-off-white py-16">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold">
            Leave a <span className="text-cc-green">Message!</span>
          </h2>

          {submitted ? (
            <div className="rounded-lg bg-cc-green-light p-8 text-center">
              <p className="font-heading text-xl font-bold text-cc-green-dark">
                Thank you for reaching out!
              </p>
              <p className="mt-2 text-gray-700">
                Your email client should have opened with your message. If not, please email us
                directly at{" "}
                <a href="mailto:contact@cozycrates.org" className="underline">
                  contact@cozycrates.org
                </a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full rounded border border-gray-300 px-4 py-3 focus:border-cc-green focus:outline-none focus:ring-1 focus:ring-cc-green"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full rounded border border-gray-300 px-4 py-3 focus:border-cc-green focus:outline-none focus:ring-1 focus:ring-cc-green"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full rounded border border-gray-300 px-4 py-3 focus:border-cc-green focus:outline-none focus:ring-1 focus:ring-cc-green"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded bg-cc-green py-3 font-heading text-lg font-bold text-cc-black transition-colors hover:bg-cc-green-dark"
              >
                Send Message
              </button>
            </form>
          )}

          <div className="mt-8 text-center text-sm text-gray-600">
            <p>
              Or email us directly at{" "}
              <a href="mailto:contact@cozycrates.org" className="text-cc-green-dark hover:underline">
                contact@cozycrates.org
              </a>
            </p>
            <p className="mt-1">611 Sword Bridge Drive, Lewisville, Texas 75056</p>
          </div>
        </div>
      </section>
    </>
  );
}
