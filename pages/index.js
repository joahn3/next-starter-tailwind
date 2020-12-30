import Image from "next/image";

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <Image
        src="/hero-developer_activity.svg"
        alt="Hero-Developer"
        width={576}
        height={429.734}
        priority
      />

      <h2 className="p-3 font-bold bg-yellow-300 md:text-2xl">
        Hi! Welcome to my Developer Portofolio website.
      </h2>
    </div>
  );
}
