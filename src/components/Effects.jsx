import { useThree, useFrame } from "@react-three/fiber";
import {
  EffectComposer,
  RenderPass,
  EffectPass,
  BloomEffect,
  ToneMappingEffect,
  FXAAEffect,
} from "postprocessing";
import { useEffect, useState } from "react";
import { SSGIEffect, VelocityDepthNormalPass } from "./realism-effects/v2";
import { useControls } from "leva";

export function Effects() {
  /* ---------------------------------- LEVA ---------------------------------- */
  const {
    importanceSampling,
    steps,
    refineSteps,
    spp,
    resolutionScale,
    missedRays,
    distance,
    thickness,
    denoiseIterations,
    denoiseKernel,
    denoiseDiffuse,
    denoiseSpecular,
    radius,
    phi,
    lumaPhi,
    depthPhi,
    normalPhi,
    roughnessPhi,
    specularPhi,
    envBlur,
  } = useControls("SSGI", {
    importanceSampling: true,
    distance: {
      value: 5.98,
      min: 0,
      max: 50,
      step: 0.001,
    },
    spp: {
      value: 1,
      min: 0,
      max: 50,
      step: 0.001,
    },
    resolutionScale: {
      value: 1,
      min: 0,
      max: 10,
      step: 0.001,
    },
    missedRays: false,
    thickness: {
      value: 2.82,
      min: 0,
      max: 10,
      step: 0.001,
    },
    envBlur: {
      value: 0.8,
      min: 0,
      max: 1,
      step: 0.001,
    },
    denoiseIterations: {
      value: 1,
      min: 0,
      max: 5,
      step: 1,
    },
    denoiseKernel: {
      value: 3,
      min: 0,
      max: 10,
      step: 1,
    },
    denoiseDiffuse: {
      value: 25,
      min: 0,
      max: 100,
      step: 1,
    },
    denoiseSpecular: {
      value: 25.54,
      min: 0,
      max: 100,
      step: 1,
    },
    radius: {
      value: 11,
      min: 0,
      max: 32,
      step: 1,
    },
    phi: {
      value: 0.57,
      min: 0,
      max: 1,
      step: 0.001,
    },
    depthPhi: {
      value: 23.37,
      min: 0,
      max: 50,
      step: 0.001,
    },

    normalPhi: {
      value: 26.087,
      min: 0,
      max: 100,
      step: 0.001,
    },

    roughnessPhi: {
      value: 18.47,
      min: 0,
      max: 100,
      step: 0.001,
    },

    lumaPhi: {
      value: 20.65,
      min: 0,
      max: 50,
      step: 0.001,
    },
    specularPhi: {
      value: 7.09,
      min: 0,
      max: 10,
      step: 0.001,
    },

    steps: {
      value: 20,
      min: 0,
      max: 256,
      step: 1,
    },

    refineSteps: {
      value: 4,
      min: 0,
      max: 16,
      step: 1,
    },
  });
  const gl = useThree((state) => state.gl);
  const scene = useThree((state) => state.scene);
  const camera = useThree((state) => state.camera);
  const size = useThree((state) => state.size);
  const [composer] = useState(
    () => new EffectComposer(gl, { multisampling: 0 })
  );

  useEffect(() => composer.setSize(size.width, size.height), [composer, size]);
  useEffect(() => {
    const config = {
      importanceSampling,
      steps,
      refineSteps,
      spp,
      resolutionScale,
      missedRays,
      distance,
      thickness,
      denoiseIterations,
      denoiseKernel,
      denoiseDiffuse,
      denoiseSpecular,
      radius,
      phi,
      lumaPhi,
      depthPhi,
      normalPhi,
      roughnessPhi,
      specularPhi,
      envBlur,
    };

    const renderPass = new RenderPass(scene, camera);
    const velocityDepthNormalPass = new VelocityDepthNormalPass(scene, camera);
    composer.addPass(renderPass);
    composer.addPass(velocityDepthNormalPass);
    composer.addPass(
      new EffectPass(
        camera,
        new SSGIEffect(composer, scene, camera, {
          ...config,
          velocityDepthNormalPass,
        })
      )
    );
    // composer.addPass(
    //   new EffectPass(
    //     camera,
    //     new BloomEffect({
    //       mipmapBlur: true,
    //       luminanceThreshold: 0.1,
    //       intensity: 0.9,
    //       levels: 7,
    //     })
    //   )
    // );
    // composer.addPass(
    //   new EffectPass(camera, new FXAAEffect(), new ToneMappingEffect())
    // );

    return () => {
      composer.removeAllPasses();
    };
  }, [composer, camera, scene]);

  useFrame((state, delta) => {
    gl.autoClear = true; // ?
    composer.render(delta);
  }, 1);
}
