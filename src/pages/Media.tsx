export default function Media() {
  return (
    <>
      {/* Hero banner */}
      <section className="bg-cc-black py-20 text-center">
        <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">
          <span className="text-cc-green">Media</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Press coverage and media resources for Cozy Crates
        </p>
      </section>

      {/* Press coverage */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-8 font-heading text-3xl font-bold">
            Press <span className="text-cc-green">Coverage</span>
          </h2>

          <div className="space-y-8">
            <article className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md">
              <h3 className="font-heading text-xl font-bold">
                "From Ruin to Relief"
              </h3>
              <p className="mt-1 text-sm font-medium text-cc-green-dark">
                Hebron Hawkeye
              </p>
              <p className="mt-3 text-gray-700">
                Reporter Avery Dyer covered Lily's personal story and how she channels past
                experiences into helping children through comfort crates.
              </p>
            </article>

            <article className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md">
              <h3 className="font-heading text-xl font-bold">
                Student Founder Profile
              </h3>
              <p className="mt-1 text-sm font-medium text-cc-green-dark">
                Star Local Media
              </p>
              <p className="mt-3 text-gray-700">
                Arianna Morrison profiled the high school student's accomplishment in founding
                the organization.
              </p>
            </article>

            <article className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md">
              <h3 className="font-heading text-xl font-bold">
                National Charity League Support
              </h3>
              <p className="mt-1 text-sm font-medium text-cc-green-dark">
                NCL Hebron Chapter
              </p>
              <p className="mt-3 text-gray-700">
                The National Charity League's Hebron Chapter featured Cozy Crates at their
                annual kickoff meeting, with members donating gift cards, handmade blankets, and
                over 200 yards of specialty fabric.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="bg-cc-off-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold">
            Video <span className="text-cc-green">Coverage</span>
          </h2>
          <div className="space-y-10">
            <div>
              <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
                <iframe
                  src="https://player.vimeo.com/video/854501919?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                  className="h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  title="Cozy Crates Home Page Video"
                />
              </div>
              <p className="mt-4 text-center text-sm text-gray-600">
                Cozy Crates Home Page Video
              </p>
            </div>

            <div>
              <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
                <iframe
                  src="https://player.vimeo.com/video/768192014?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                  className="h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  title="HawkTV Segment 11/4/22"
                />
              </div>
              <p className="mt-4 text-center text-sm text-gray-600">
                HawkTV Segment — November 4, 2022
              </p>
            </div>

            <div>
              <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
                <iframe
                  src="https://player.vimeo.com/video/729449078?h=78898436c7&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                  className="h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  title="CozyCrates.mp4"
                />
              </div>
              <p className="mt-4 text-center text-sm text-gray-600">
                Cozy Crates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Press kit */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold">
            Press <span className="text-cc-green">Kit</span>
          </h2>
          <p className="mt-4 text-gray-700">
            For media inquiries, press materials, and high-resolution photos, please contact us.
          </p>
          <a
            href="mailto:contact@cozycrates.org"
            className="mt-6 inline-block rounded bg-cc-green px-8 py-3 font-heading font-bold text-cc-black transition-colors hover:bg-cc-green-dark"
          >
            Contact for Press Kit
          </a>
        </div>
      </section>
    </>
  );
}
