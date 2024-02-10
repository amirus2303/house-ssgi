import {
  Environment,
  OrbitControls,
  SoftShadows,
  useHelper,
} from "@react-three/drei";

import Building from "./Building";
import { Effects } from "./Effects";
import { useControls } from "leva";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";
import { EffectComposer, DepthOfField, SSR } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

const Experience = () => {
  const { position, intensity, shadowBias } = useControls(
    "Directionnal light",
    {
      position: {
        value: { x: -5, y: 3, z: 0 },
        step: 0.01,
      },
      intensity: {
        value: 5,
        min: 0,
        max: 100,
        step: 0.001,
      },
      shadowBias: {
        value: 0.04,
        min: 0,
        max: 1,
        step: 0.001,
      },
    }
  );

  const { focusDistance, focalLength, bokehScale, height } = useControls(
    "Depth of field",
    {
      focusDistance: {
        value: 0.09,
        min: 0,
        max: 1,
        step: 0.00001,
      },
      focalLength: {
        value: 0.75,
        min: 0,
        max: 1,
        step: 0.00001,
      },
      bokehScale: {
        value: 5,
        min: 0,
        max: 100,
        step: 0.001,
      },
      height: {
        value: 600,
        min: 0,
        max: 10000,
        step: 1,
      },
    }
  );

  const directionnalLight = useRef();
  useHelper(directionnalLight, DirectionalLightHelper, "red");

  const { size, focus, samples } = useControls("Soft Shadow", {
    size: { value: 5, min: 0, max: 100, step: 0.001 },
    focus: { value: 0.5, min: 0, max: 20, step: 0.001 },
    samples: { value: 16, min: 1, max: 100, step: 1 },
  });

  // const { enabled, ...ssrProps } = useControls("SSR", {
  //   enabled: true,
  //   temporalResolve: true,
  //   STRETCH_MISSED_RAYS: true,
  //   USE_MRT: true,
  //   USE_NORMALMAP: true,
  //   USE_ROUGHNESSMAP: true,
  //   ENABLE_JITTERING: true,
  //   ENABLE_BLUR: true,
  //   temporalResolveMix: { value: 0.9, min: 0, max: 1 },
  //   temporalResolveCorrectionMix: { value: 0.4, min: 0, max: 1 },
  //   maxSamples: { value: 0, min: 0, max: 1 },
  //   resolutionScale: { value: 1, min: 0, max: 1 },
  //   blurMix: { value: 0.2, min: 0, max: 1 },
  //   blurExponent: { value: 10, min: 0, max: 20 },
  //   blurKernelSize: { value: 1, min: 0, max: 10 },
  //   rayStep: { value: 0.5, min: 0, max: 1 },
  //   intensity: { value: 1, min: 0, max: 5 },
  //   maxRoughness: { value: 1, min: 0, max: 1 },
  //   jitter: { value: 0.3, min: 0, max: 5 },
  //   jitterSpread: { value: 0.25, min: 0, max: 1 },
  //   jitterRough: { value: 0.1, min: 0, max: 1 },
  //   roughnessFadeOut: { value: 1, min: 0, max: 1 },
  //   rayFadeOut: { value: 0, min: 0, max: 1 },
  //   MAX_STEPS: { value: 20, min: 0, max: 20 },
  //   NUM_BINARY_SEARCH_STEPS: { value: 6, min: 0, max: 10 },
  //   maxDepthDifference: { value: 10, min: 0, max: 10 },
  //   maxDepth: { value: 1, min: 0, max: 1 },
  //   thickness: { value: 10, min: 0, max: 10 },
  //   ior: { value: 1.45, min: 0, max: 2 },
  // });

  return (
    <>
      <directionalLight
        castShadow
        shadow-normalBias={shadowBias}
        shadow-mapSize={2048}
        ref={directionnalLight}
        intensity={intensity}
        position={[position.x, position.y, position.z]}
        target-position={[0.6, 0, 0.5]}
      />
      <OrbitControls makeDefault target={[0, 0.1, 0]} />
      <SoftShadows size={size} focus={focus} samples={samples} />
      <EffectComposer disableNormalPass>
        {/* <RealismEffect /> */}
        {/* {enabled && <SSR {...ssrProps} />} */}
        <DepthOfField
          focusDistance={focusDistance}
          focalLength={focalLength}
          bokehScale={bokehScale}
          height={height}
          blendFunction={BlendFunction.Screen}
          blur={true}
        />
      </EffectComposer>
      <Building
        scale={0.3}
        rotation={[0, Math.PI * 0.2, 0]}
        position={[0, 0, 0]}
      />

      <Effects />
    </>
  );
};

export default Experience;
