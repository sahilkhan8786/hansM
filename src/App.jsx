import { lazy, Suspense, useState } from "react";
const Loader = lazy(() => import("./components/Loader"))
const DoorLock = lazy(() => import("./components/DoorLock"));
const Cursor = lazy(() => import("./components/Cursor"));
const Details = lazy(() => import("./components/Details"));

export default function App() {
  const [text, setText] = useState('')

  return (
    <div className="w-full h-screen">
      <Suspense fallback={<Loader />}>
        <DoorLock setText={setText} />
        <Details text={text} />
        <Cursor />
      </Suspense>
    </div>
  )
}