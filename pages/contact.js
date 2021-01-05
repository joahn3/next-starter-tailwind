import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
      <div>
        <section className="mb-6">
          <h2 className="mb-3 text-xl font-bold">Feel free to contact me</h2>
          <p>
            Tailwind CSS is a highly customizable, low-level CSS framework that
            gives you all of the building blocks you need to build bespoke
            designs without any annoying opinionated styles you have to fight to
            override.
          </p>
        </section>
      </div>
      <Image
        alt="A one-eyed alien holding a broken cable connected between a server and a desktop computer"
        src="/team-of-critters.svg"
        width={476}
        height={297.17}
      />
    </div>
  );
}
