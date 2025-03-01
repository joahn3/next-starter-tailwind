import Image from "next/image";

export default function PortofolioPage() {
  return (
  <div className="grid md:grid-cols-3 gap-6 grid-cols-1">
      <div>
          <section className="mb-6">
            <h2 className="mb-3 text-xl font-bold">My web portofolio</h2>
            <p>
          Tailwind CSS is a highly customizable, low-level CSS framework that
          gives you all of the building blocks you need to build bespoke
          designs without any annoying opinionated styles you have to fight to
          override.
          </p>
          </section>
        </div>
    </div>
   );
}