import { lazy, Suspense, useState } from "react";
import Details from "./components/Details";
import Cursor from "./components/Cursor";
const Loader = lazy(() => import("./components/Loader"))
const DoorLock = lazy(() => import("./components/DoorLock"));

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