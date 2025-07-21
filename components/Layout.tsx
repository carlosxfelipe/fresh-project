import { ComponentChildren } from "preact";
import Navbar from "../islands/Navbar.tsx";

export default function Layout({ children }: { children: ComponentChildren }) {
  return (
    <>
      <Navbar />
      <main class="px-4 py-12 mx-auto">
        {children}
      </main>
      {/* Futuro Footer */}
    </>
  );
}
