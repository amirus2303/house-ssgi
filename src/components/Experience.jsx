import { OrbitControls, SoftShadows, useHelper } from "@react-three/drei";
import Building from "./Building";
import { useControls } from "leva";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

//import { extend, useThree } from "@react-three/fiber";

//import { EffectComposer } from "@react-three/postprocessing";

//import * as POSTPROCESSING from "postprocessing";
//import { EffectPass } from "postprocessing";
// import {
//   SSGIEffect,
//   TRAAEffect,
//   MotionBlurEffect,
//   VelocityDepthNormalPass,
// } from "realism-effects";

// extend({
//   VelocityDepthNormalPass,
//   SSGIPass: class extends EffectPass {
//     constructor(scene, camera, velocityDepthNormalPass) {
//       super(camera, new SSGIEffect(scene, camera, velocityDepthNormalPass));
//     }
//   },
//   TRAAPass: class extends EffectPass {
//     constructor(scene, camera, velocityDepthNormalPass) {
//       super(camera, new TRAAEffect(scene, camera, velocityDepthNormalPass));
//     }
//   },
// });

// function Effects({
//   distance,
//   thickness,
//   denoiseIterations,
//   radius,
//   phi,
//   lumaPhi,
//   depthPhi,
//   normalPhi,
//   roughnessPhi,
//   specularPhi,
//   envBlur,
//   steps,
//   refineSteps,
// }) {
//   const [velocityDepthNormalPass, setVelocityDepthNormalPass] = useState(null);
//   const scene = useThree((state) => state.scene);
//   const camera = useThree((state) => state.camera);

//   return (
//     <EffectComposer disableNormalPass multisampling={0}>
//       <velocityDepthNormalPass
//         ref={setVelocityDepthNormalPass}
//         args={[scene, camera]}
//       />
//       {velocityDepthNormalPass && (
//         <>
//           <sSGIPass
//             args={[
//               scene,
//               camera,
//               velocityDepthNormalPass,
//               {
//                 distance,
//                 thickness,
//                 denoiseIterations,
//                 radius,
//                 phi,
//                 lumaPhi,
//                 depthPhi,
//                 normalPhi,
//                 roughnessPhi,
//                 specularPhi,
//                 envBlur,
//                 steps,
//                 refineSteps,
//               },
//             ]}
//           />
//           <tRAAPass args={[scene, camera, velocityDepthNormalPass]} />
//         </>
//       )}
//     </EffectComposer>
//   );
// }

const Experience = () => {
  // const {
  //   distance,
  //   thickness,
  //   denoiseIterations,
  //   radius,
  //   phi,
  //   lumaPhi,
  //   depthPhi,
  //   normalPhi,
  //   roughnessPhi,
  //   specularPhi,
  //   envBlur,
  //   steps,
  //   refineSteps,
  // } = useControls("SSGI", {
  //   distance: {
  //     value: 5.98,
  //     min: 0,
  //     max: 50,
  //     step: 0.001,
  //   },
  //   thickness: {
  //     value: 2.82,
  //     min: 0,
  //     max: 10,
  //     step: 0.001,
  //   },
  //   envBlur: {
  //     value: 1,
  //     min: 0,
  //     max: 1,
  //     step: 0.001,
  //   },
  //   denoiseIterations: {
  //     value: 1,
  //     min: 0,
  //     max: 5,
  //     step: 1,
  //   },
  //   radius: {
  //     value: 11,
  //     min: 0,
  //     max: 32,
  //     step: 1,
  //   },
  //   phi: {
  //     value: 0.875,
  //     min: 0,
  //     max: 1,
  //     step: 0.001,
  //   },
  //   depthPhi: {
  //     value: 23.37,
  //     min: 0,
  //     max: 50,
  //     step: 0.001,
  //   },

  //   normalPhi: {
  //     value: 26.087,
  //     min: 0,
  //     max: 100,
  //     step: 0.001,
  //   },

  //   roughnessPhi: {
  //     value: 18.47,
  //     min: 0,
  //     max: 100,
  //     step: 0.001,
  //   },

  //   lumaPhi: {
  //     value: 20.65,
  //     min: 0,
  //     max: 50,
  //     step: 0.001,
  //   },
  //   specularPhi: {
  //     value: 7.09,
  //     min: 0,
  //     max: 10,
  //     step: 0.001,
  //   },

  //   steps: {
  //     value: 20,
  //     min: 0,
  //     max: 256,
  //     step: 1,
  //   },

  //   refineSteps: {
  //     value: 4,
  //     min: 0,
  //     max: 16,
  //     step: 1,
  //   },
  // });

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

  const directionnalLight = useRef();
  useHelper(directionnalLight, DirectionalLightHelper, "red");

  // const cameraControl = useRef();
  // const [resetCamera] = useState(true);

  // const scene = useThree((state) => state.scene);
  // const camera = useThree((state) => state.camera);
  // const gl = useThree((state) => state.gl);
  // const composer = new POSTPROCESSING.EffectComposer(gl);
  // const velocityDepthNormalPass = new VelocityDepthNormalPass(scene, camera);
  // composer.addPass(velocityDepthNormalPass);
  // const ssgiEffect = new SSGIEffect(scene, camera, velocityDepthNormalPass, {
  //   distance,
  //   thickness,
  //   denoiseIterations,
  //   radius,
  //   phi,
  //   lumaPhi,
  //   depthPhi,
  //   normalPhi,
  //   roughnessPhi,
  //   specularPhi,
  //   envBlur,
  //   steps,
  //   refineSteps,
  // });
  // const traaEffect = new TRAAEffect(scene, camera, velocityDepthNormalPass);
  // const effectPass = new POSTPROCESSING.EffectPass(
  //   camera,
  //   ssgiEffect,
  //   traaEffect
  // );
  // composer.addPass(effectPass);
  // useEffect(() => {
  //   if (resetCamera) {
  //     console.log(cameraControl.current);
  //     cameraControl.current.setLookAt(2.3, 1, 0, -2, 0.5, 1, true);
  //   }
  // }, [resetCamera]);

  const { size, focus, samples } = useControls("Soft Shadow", {
    size: { value: 35, min: 0, max: 100, step: 0.001 },
    focus: { value: 0.5, min: 0, max: 20, step: 0.001 },
    samples: { value: 16, min: 1, max: 100, step: 1 },
  });

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
      {/* <CameraControls ref={cameraControl} makeDefault /> */}
      {/* <Effects
        distance={distance}
        thickness={thickness}
        envBlur={envBlur}
        denoiseIterations={denoiseIterations}
        radius={radius}
        phi={phi}
        depthPhi={depthPhi}
        normalPhi={normalPhi}
        roughnessPhi={roughnessPhi}
        lumaPhi={lumaPhi}
        specularPhi={specularPhi}
        steps={steps}
        refineSteps={refineSteps}
      /> */}
      <SoftShadows size={size} focus={focus} samples={samples} />
      <Building
        scale={0.3}
        rotation={[0, Math.PI * 0.2, 0]}
        position={[0, 0, 0]}
      />
    </>
  );
};

export default Experience;
