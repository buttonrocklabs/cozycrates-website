import closedBox from "@/assets/images/closed-box.jpg";
import tigerBox from "@/assets/images/tiger-box.jpg";
import whiteLion from "@/assets/images/white-lion-box.jpg";

const items = [
  {
    title: "Handmade Blankets",
    description:
      "We use Soft & Minky fabric that is hand-tied into a unique and comfortably soft blanket. These blankets give children a feeling of ownership and relief after loss.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Comfort Stuffed Animals",
    description:
      "Individualized stuffed-animals make children feel safe and loved, especially in a stressful and confusing time. A teddy bear can be a tool to help prevent separation anxiety while acting as a 'friend' to keep children feeling safe and secure.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Backpacks",
    description:
      "Many children arrive at shelters with nothing at all. A backpack will allow them to keep all of their items in one place and feel a sense of ownership.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
  {
    title: "Activity Books & Colored Pencils",
    description:
      "Playtime is essential. Kids are less likely to experience distress when they play and interact. Crates include fun-filled activity books, appealing to a range of ages and languages.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    title: "Card Games & Jump Ropes",
    description:
      "Card Games provide a way of building community with family and newfound friends in shelters. Jump ropes provide a source of recreation to children when there is little else. Both of these help children to heal from traumatic events.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function OurCrates() {
  return (
    <>
      {/* Hero banner */}
      <section
        className="relative flex min-h-[40vh] items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${closedBox})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">
            What's So Special About a{" "}
            <span className="text-cc-green">Cozy Crate?</span>
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-lg leading-relaxed text-gray-700">
            We have done our research! There are many amazing charities to donate to that
            provide food and water, clothing, shelter, hygiene items and counseling for victims.
            What Cozy Crates provides is purely to help with the emotional needs of children. We
            focus on building resiliency by creating a sense of security, community, ownership
            and reduced stress.
          </p>
        </div>
      </section>

      {/* Items grid */}
      <section className="bg-cc-off-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.title}
                className="rounded-lg bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cc-green-light text-cc-green-dark">
                  {item.icon}
                </div>
                <h3 className="font-heading text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold">
            Inside a <span className="text-cc-green">Cozy Crate</span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <img src={tigerBox} alt="A Cozy Crate with a tiger stuffed animal" className="rounded-lg shadow-sm" />
            <img src={whiteLion} alt="A Cozy Crate with a white lion stuffed animal" className="rounded-lg shadow-sm" />
            <img src={closedBox} alt="A packed Cozy Crate ready for delivery" className="rounded-lg shadow-sm" />
          </div>
        </div>
      </section>
    </>
  );
}
