import { lazy, Suspense, useState } from "react";
const Loader = lazy(() => import("./components/Loader"));
const DoorLock = lazy(() => import("./components/DoorLock"));
const Details = lazy(() => import("./components/Details"));
const Cursor = lazy(() => import('./components/Cursor'));

export default function App() {
  const [text, setText] = useState('');

  return (
    <div className="w-full h-screen relative">
      <Suspense fallback={<Loader />}>
        <DoorLock setText={setText} />
        <Details text={text} />
      </Suspense>
      <Cursor />
    </div>
  );
}
