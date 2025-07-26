import Layout from "../components/Layout.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

// Define o handler para renderizar a piada do servidor
export const handler: Handlers = {
  async GET(_req, ctx) {
    const res = await fetch(`${ctx.url.origin}/api/joke`);
    const joke = await res.text();
    return ctx.render({ joke });
  },
};

export default function About({ data }: PageProps<{ joke: string }>) {
  return (
    <Layout>
      <div class="flex flex-col px-4 text-left">
        <h1 class="text-4xl font-bold mb-4">About Us</h1>
        <p class="mb-6">
          This is the About page of your Fresh app. You can add more information
          here.
        </p>

        <div class="mt-8 p-4 border-l-4 border-blue-500 bg-blue-50 text-blue-900 italic rounded">
          💡 Fun fact for devs:
          <br />
          {data.joke}
        </div>
      </div>
    </Layout>
  );
}
