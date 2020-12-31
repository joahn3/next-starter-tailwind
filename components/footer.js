export default function Footer() {
  return (
    <footer className="bg-blue-600">
      <ul className="flex items-center justify-between lg:container px-4 py-6 mx-auto text-sm text-white md:px-6">
        <li>
          | Crafted with ♥️ and 🧠 by {" "}
          <a
            href="https://ionutfrancisc.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            Ionuț Francisc |
          </a>
        </li>

        <li>
          <a
            href="https://github.com/joahn3"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            my GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}
