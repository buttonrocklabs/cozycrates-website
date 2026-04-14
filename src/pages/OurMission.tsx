import { Link } from "react-router-dom";
import redCross from "@/assets/images/red-cross-by-truck.jpg";

export default function OurMission() {
  return (
    <>
      {/* Hero banner */}
      <section
        className="relative flex min-h-[40vh] items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${redCross})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <h1 className="relative z-10 font-heading text-4xl font-bold text-white md:text-5xl">
          Our Mission to <span className="text-cc-green">Help Children</span>
        </h1>
      </section>

      {/* Mission content */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-lg leading-relaxed text-gray-700">
            Cozy Crates is a legal, nonprofit 501(c)(3) charitable organization that serves to
            comfort as many children in need as we can and to raise awareness of the emotional
            impact of natural disasters on children.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            We are committed to providing essential comfort items to children who have been
            affected by natural disasters. Items such as individualized blankets, backpacks,
            toys and activity books give kids a newfound sense of ownership and hope, along with
            an easier transition to their new life.
          </p>
        </div>
      </section>

      {/* 2023 Goals */}
      <section className="bg-cc-off-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold text-cc-black">
            2023 Goals
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-cc-green-light">
                <svg className="h-6 w-6 text-cc-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold">Establish Our Team</h3>
              <p className="mt-2 text-gray-600">Build a dedicated team of passionate volunteers.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-cc-green-light">
                <svg className="h-6 w-6 text-cc-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold">150 Cozy Crates This Year</h3>
              <p className="mt-2 text-gray-600">
                Our goal for the 2023 Season has expanded by 50%! We plan to assemble and
                distribute 150 Cozy Crates to children affected by natural disasters.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-cc-green-light">
                <svg className="h-6 w-6 text-cc-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold">Share the Big News</h3>
              <p className="mt-2 text-gray-600">
                A big and exciting fundraising event is in the works... STAY TUNED.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-cc-green-light">
                <svg className="h-6 w-6 text-cc-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold">Work With Area Shelters</h3>
              <p className="mt-2 text-gray-600">
                Work with area shelters in several coastal states to establish the most effective
                distribution to the communities and children needing our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer call */}
      <section className="bg-cc-black py-16 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-heading text-3xl font-bold text-white">
            We Need <span className="text-cc-green">Volunteers!</span>
          </h2>
          <p className="mt-4 text-gray-400">
            We need lots and lots of volunteers to make these items! We can train you or your
            group to make blankets and spread the word!
          </p>
          <p className="mt-4 text-gray-400">
            Please email us at{" "}
            <a
              href="mailto:cozycratesorg@gmail.com"
              className="text-cc-green hover:underline"
            >
              cozycratesorg@gmail.com
            </a>{" "}
            to help!
          </p>
          <Link
            to="/how-to-help"
            className="mt-8 inline-block rounded bg-cc-green px-8 py-3 font-heading text-lg font-bold text-cc-black transition-colors hover:bg-cc-green-dark"
          >
            HOW TO HELP
          </Link>
        </div>
      </section>
    </>
  );
}
