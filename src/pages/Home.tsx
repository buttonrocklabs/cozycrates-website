import { Link } from "react-router-dom";
import heroImg from "@/assets/images/hero-bg.jpeg";
import closedBox from "@/assets/images/closed-box.jpg";
import redCross from "@/assets/images/red-cross-by-truck.jpg";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex min-h-[70vh] items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h1 className="font-heading text-4xl font-bold text-white md:text-6xl">
            Welcome to <span className="text-cc-green">Cozy Crates</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 md:text-xl">
            Providing comfort items to children affected by natural disasters
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/how-to-help"
              className="rounded bg-cc-green px-8 py-3 font-heading text-lg font-bold text-cc-black transition-colors hover:bg-cc-green-dark"
            >
              Donate Now
            </Link>
            <Link
              to="/our-mission"
              className="rounded border-2 border-white px-8 py-3 font-heading text-lg font-bold text-white transition-colors hover:bg-white hover:text-cc-black"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-bold text-cc-black md:text-4xl">
                About Us
              </h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                Cozy Crates is a legal, nonprofit 501(c)(3) charitable organization that serves to
                comfort as many children in need as we can and to raise awareness of the emotional
                impact of natural disasters on children.
              </p>
              <p className="mt-4 leading-relaxed text-gray-700">
                We provide comfort items to give kids a newfound sense of ownership and hope,
                including individualized blankets, backpacks, stuffed animals, colored pencils,
                activity books, and personal hand-written notes for each child.
              </p>
              <Link
                to="/our-crates"
                className="mt-6 inline-block rounded bg-cc-green px-6 py-2.5 font-heading font-bold text-cc-black transition-colors hover:bg-cc-green-dark"
              >
                Learn More
              </Link>
            </div>
            <img
              src={closedBox}
              alt="A Cozy Crate packed and ready for delivery"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission preview */}
      <section className="bg-cc-off-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <img
              src={redCross}
              alt="Cozy Crates delivery at a Red Cross shelter"
              className="rounded-lg shadow-lg"
            />
            <div>
              <h2 className="font-heading text-3xl font-bold text-cc-black md:text-4xl">
                Our Mission
              </h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                We are committed to providing essential comfort items to children who have been
                affected by natural disasters. Items such as individualized blankets, backpacks,
                toys and activity books give kids a newfound sense of ownership and hope, along
                with an easier transition to their new life.
              </p>
              <Link
                to="/our-mission"
                className="mt-6 inline-block rounded bg-cc-green px-6 py-2.5 font-heading font-bold text-cc-black transition-colors hover:bg-cc-green-dark"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cc-black py-16 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Help Us <span className="text-cc-green">Make a Difference</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Every donation helps us deliver comfort crates to children in need. Together, we can
            bring hope and a sense of security to kids during their most difficult times.
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
