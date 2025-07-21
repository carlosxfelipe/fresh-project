import Layout from "../components/Layout.tsx";

export default function About() {
  return (
    <Layout>
      <div class="max-w-screen-md mx-auto flex flex-col px-4 text-left">
        <h1 class="text-4xl font-bold mb-4">About Us</h1>
        <p class="mb-6">
          This is the About page of your Fresh app. You can add more information
          here.
        </p>
      </div>
    </Layout>
  );
}
