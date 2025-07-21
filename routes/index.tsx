import Layout from "../components/Layout.tsx";

export default function Home() {
  return (
    <Layout>
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center text-center">
        <h1 class="text-4xl font-bold mb-4">Welcome to Fresh</h1>
        <p class="mb-6">
          Try updating this message in the
          <code class="mx-2">./routes/index.tsx</code> file, and refresh.
        </p>
      </div>
    </Layout>
  );
}
