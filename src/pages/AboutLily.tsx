import lilyInShelter from "@/assets/images/lily-in-shelter.jpg";
import lilyWithCart from "@/assets/images/lily-with-cart.jpg";

export default function AboutLily() {
  return (
    <>
      {/* Hero banner */}
      <section className="bg-cc-black py-20 text-center">
        <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">
          About <span className="text-cc-green">Lily</span>, Founder
        </h1>
      </section>

      {/* Bio */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <img
              src={lilyWithCart}
              alt="Lily Falconer, founder of Cozy Crates"
              className="rounded-lg shadow-lg"
            />
            <div>
              <h2 className="font-heading text-2xl font-bold">Personal Background</h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                Lily is a 17-year-old honor student and soccer player preparing to enter her
                senior year. She describes herself as someone shaped by life experiences and
                driven by compassion, particularly toward children in need.
              </p>
              <p className="mt-4 leading-relaxed text-gray-700">
                Lily began volunteering from a young age, with particular enjoyment in organizing
                school supply boxes for distribution. She has been involved in Girl Scouts,
                National Charity League, Student Council, and National Honors Society — all
                organizations through which she engaged in community service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hurricane Maria */}
      <section className="bg-cc-off-white py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-bold">
                Hurricane Maria <span className="text-cc-green">(2017)</span>
              </h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                At age 11, Lily experienced Category 5 Hurricane Maria while living in the US
                Virgin Islands. She describes the event as profoundly difficult: "I often felt
                alone and scared of the uncertain future."
              </p>
              <p className="mt-4 leading-relaxed text-gray-700">
                Her family relocated for a month, and she witnessed families forced to evacuate
                unfamiliar territory, leaving behind everything comforting.
              </p>
            </div>
            <img
              src={lilyInShelter}
              alt="Lily helping at a disaster shelter"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Founding Cozy Crates */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold">
            Founding <span className="text-cc-green">Cozy Crates</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            After years processing Hurricane Maria's effects, Lily founded Cozy Crates to
            support affected children. The organization sends comfort items — blankets, toys, and
            activity books — helping children transition to a new life easier and with more hope
            after experiencing loss and displacement.
          </p>
        </div>
      </section>
    </>
  );
}
