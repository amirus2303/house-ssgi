import { Canvas } from "@react-three/fiber";
import { Loader, Environment } from "@react-three/drei";
import { Suspense } from "react";
import Experience from "./components/Experience";

const App = () => {
  return (
    <>
      <Canvas
        flat
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: [2.3, 0.7, 1], fov: 30 }}
        shadows
      >
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <Experience />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default App;
