import lilyUnloading from "@/assets/images/lily-unloading-truck.jpg";
import packedTruck from "@/assets/images/packed-truck.jpg";
import lilyInsideShelter from "@/assets/images/lily-inside-shelter.jpg";
import lilyInShelter from "@/assets/images/lily-in-shelter.jpg";
import lilyWithCart from "@/assets/images/lily-with-cart.jpg";
import redCrossAlt from "@/assets/images/red-cross-by-truck-alt.jpg";
import ian1 from "@/assets/images/ian-IMG_9224.jpg";
import ian2 from "@/assets/images/ian-IMG_9230.jpg";
import ian3 from "@/assets/images/ian-IMG_9238.jpg";
import ian4 from "@/assets/images/ian-IMG_9244.jpg";
import ian5 from "@/assets/images/ian-IMG_9253.jpg";
import ian6 from "@/assets/images/ian-IMG_9262.jpg";

const galleryImages = [
  { src: packedTruck, alt: "Packed truck and U-Haul ready for the trip to Florida" },
  { src: lilyUnloading, alt: "Lily unloading Cozy Crates from the truck" },
  { src: redCrossAlt, alt: "Delivery at a Red Cross shelter" },
  { src: lilyInsideShelter, alt: "Inside a disaster shelter" },
  { src: lilyInShelter, alt: "Lily in the shelter donation area" },
  { src: lilyWithCart, alt: "Lily with a cart of Cozy Crates" },
  { src: ian1, alt: "Hurricane Ian response" },
  { src: ian2, alt: "Hurricane Ian response" },
  { src: ian3, alt: "Hurricane Ian response" },
  { src: ian4, alt: "Hurricane Ian response" },
  { src: ian5, alt: "Hurricane Ian response" },
  { src: ian6, alt: "Hurricane Ian response" },
];

export default function OurResponse() {
  return (
    <>
      {/* Hero banner */}
      <section
        className="relative flex min-h-[40vh] items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${packedTruck})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <h1 className="relative z-10 font-heading text-4xl font-bold text-white md:text-5xl">
          Our <span className="text-cc-green">Response</span>
        </h1>
      </section>

      {/* Hurricane Ian story */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-2 font-heading text-3xl font-bold">
            Hurricane Ian <span className="text-cc-green">Response</span>
          </h2>
          <p className="mb-6 text-sm font-medium uppercase tracking-wider text-gray-500">
            September 28, 2022
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Hurricane Ian was one of the most destructive storms of all time, with over 150
            deaths and impacts across the Florida peninsula. The hurricane made landfall near
            Fort Myers Beach and Sanibel Island with winds of over 150 mph and a storm surge
            above 12 feet.
          </p>

          <p className="mt-6 leading-relaxed text-gray-700">
            Cozy Crates undertook a 2,500-mile roundtrip journey with a trailer full of boxes.
            The team visited multiple Red Cross shelters, including facilities at a hockey arena
            and a local high school housing hundreds of survivors, including families with young
            children, elderly residents, and people with special needs.
          </p>

          <div className="my-10 rounded-lg bg-cc-green-light p-8">
            <p className="text-center font-heading text-2xl font-bold text-cc-black">
              100 Cozy Crates
            </p>
            <p className="mt-2 text-center text-gray-700">
              assembled and delivered to children affected by Hurricane Ian
            </p>
          </div>

          <p className="leading-relaxed text-gray-700">
            The team observed powerful moments when children opened individualized boxes, with
            parents expressing relief and hope during their trauma. Mental health volunteers
            emphasized the organization's broader community value, reinforcing how such outreach
            provides comfort, hope, and healing during crisis situations.
          </p>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="bg-cc-off-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold">
            Photo <span className="text-cc-green">Gallery</span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className="h-64 w-full rounded-lg object-cover shadow-sm"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
