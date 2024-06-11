import { lazy, Suspense } from "react";
const Loader = lazy(() => import("./components/Loader"))
const DoorLock = lazy(() => import("./components/DoorLock"));

export default function App() {
  return (
    <div className="w-full h-screen">

      <Suspense fallback={<Loader />}>
        <DoorLock />
      </Suspense>
    </div>
  )
}