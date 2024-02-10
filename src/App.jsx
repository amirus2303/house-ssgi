import { Canvas } from "@react-three/fiber";
import { Loader, Environment } from "@react-three/drei";
import { Suspense } from "react";
import Experience from "./components/Experience";
import { useControls } from "leva";

const App = () => {
  const { environment } = useControls("Environment Map", {
    environment: {
      options: [
        "apartment",
        "city",
        "dawn",
        "forest",
        "lobby",
        "night",
        "park",
        "studio",
        "warehouse",
        "sunset",
      ],
    },
  });

  return (
    <>
      <Canvas
        gl={{ antialias: false }}
        flat
        camera={{ position: [2.3, 0.7, 1], fov: 30 }}
        shadows
      >
        <Suspense fallback={null}>
          <Environment preset={environment || "city"} />
          <Experience />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default App;
