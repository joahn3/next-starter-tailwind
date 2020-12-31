import Image from "next/image";

export default function IndexPage() {
  return (
    <body className="bg-white">
      <div className="flex flex-col items-center justify-center space-y-10">
        <Image
          src="/hero-developer_activity.svg"
          alt="Hero-Developer"
          width={800}
          height={500}
          priority
        />

        <h2 className="p-3 font-bold bg-yellow-300 md:text-2xl">
        Greetings! I’m Ionuț. <br></br>
        Welcome to my Developer Portofolio website.
        </h2>
      <div>
        <article class="prose lg:prose-xl">
              <h1>Garlic bread with cheese: What the science tells us</h1>
              <p>
                For years parents have espoused the health benefits of eating garlic bread with cheese to their
                children, with the food earning such an iconic status in our culture that kids will often dress
                up as warm, cheesy loaf for Halloween.
              </p>
              <p>
                But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
                springing up around the country.
              </p>
            </article>
      </div>
      </div>
    </body>
  );
}
