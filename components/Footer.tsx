export default function Footer() {
  return (
    <footer class="w-full bg-[#86efac] dark:bg-gray-800 text-black dark:text-white py-4 mt-12 text-center text-sm">
      <p>
        © {new Date().getFullYear()} My Fresh App ·
        <a
          href="/about"
          class="mx-2 underline hover:text-green-700 dark:hover:text-blue-400"
        >
          Sobre
        </a>·
        <a
          href="/contact"
          class="mx-2 underline hover:text-green-700 dark:hover:text-blue-400"
        >
          Contato
        </a>
      </p>
    </footer>
  );
}
