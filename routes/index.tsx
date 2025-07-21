import Layout from "../components/Layout.tsx";
import Counter from "../islands/Counter.tsx";
import ToggleSwitch from "../islands/ToggleSwitch.tsx";
import { signal } from "@preact/signals";

const count = signal(0);
const isOn = signal(false);

export default function Home() {
  return (
    <Layout>
      <div class="max-w-screen-md mx-auto flex flex-col px-4 text-left">
        <h1 class="text-4xl font-bold mb-4">Welcome to Fresh</h1>
        <p class="mb-6">
          Try updating this message in the
          <code class="mx-2">./routes/index.tsx</code> file, and refresh.
        </p>

        <Counter count={count} />
        <ToggleSwitch on={isOn} />
      </div>
    </Layout>
  );
}
