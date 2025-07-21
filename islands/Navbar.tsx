import { useSignal } from "@preact/signals";

export default function Navbar() {
  const isOpen = useSignal(false);

  return (
    <nav class="w-full bg-[#86efac] p-4">
      <div class="flex items-center justify-between px-4">
        {/* Logo + Título */}
        <div class="flex items-center space-x-2">
          <img src="/logo.svg" width="32" height="32" alt="Fresh logo" />
          <span class="font-bold text-lg">My Fresh App</span>
        </div>

        {/* Botão hamburguer visível apenas em telas pequenas */}
        <button
          type="button"
          class="md:hidden"
          onClick={() => isOpen.value = !isOpen.value}
          aria-label="Toggle menu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Links horizontais para md+ */}
        <div class="hidden md:flex space-x-4">
          <a href="/" class="underline">Home</a>
          <a href="/about" class="underline">About</a>
          <a href="/contact" class="underline">Contact</a>
        </div>
      </div>

      {/* Menu dropdown visível apenas quando aberto em telas pequenas */}
      {isOpen.value && (
        <div class="flex flex-col mt-2 space-y-2 md:hidden px-4">
          <a href="/" class="underline">Home</a>
          <a href="/about" class="underline">About</a>
          <a href="/contact" class="underline">Contact</a>
        </div>
      )}
    </nav>
  );
}
