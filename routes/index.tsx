export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav class="w-full bg-[#86efac] p-4">
        <div class="w-full flex items-center justify-between px-4">
          {/* Logo + Título à esquerda */}
          <div class="flex items-center space-x-2">
            <img
              src="/logo.svg"
              width="32"
              height="32"
              alt="Fresh logo"
            />
            <span class="font-bold text-lg">My Fresh App</span>
          </div>

          {/* Abas à direita */}
          <div class="flex space-x-4">
            <a href="/" class="underline">Home</a>
            <a href="/about" class="underline">About</a>
            <a href="/contact" class="underline">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div class="px-4 py-12 mx-auto">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center text-center">
          <h1 class="text-4xl font-bold mb-4">Welcome to Fresh</h1>
          <p class="mb-6">
            Try updating this message in the
            <code class="mx-2">./routes/index.tsx</code> file, and refresh.
          </p>
        </div>
      </div>
    </>
  );
}
