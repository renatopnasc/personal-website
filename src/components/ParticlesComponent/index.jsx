import particlesConfig from "../../config/particles-config";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export function ParticlesComponent() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // const particlesLoaded = useCallback(async (container) => {
  //   await console.log(container);
  // }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesConfig}
    />
  );
}
