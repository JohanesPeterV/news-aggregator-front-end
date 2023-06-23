import React, { FunctionComponent, useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { ISourceOptions } from 'tsparticles-engine';

const particleOptions: ISourceOptions = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 700,
      },
      max: 40,
    },
    color: {
      value:  "#000000",
    },
    shape: {
      type: "circle",
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.1,
      random: false,
      anim: {
        enable: false,
        speed: 0.1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: {
        min: 4,
        max: 14,
      },
      random: true,
    },
    line_linked: {
      enable: false,
      distance: 80,
      color:  "#000000",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: {
        min: 0.3,
        max: 2.2,
      },
      direction: "bottom",
      random: true,
      straight: true,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 100,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        duration: 4,
        opacity: 0.8,
      },
      push: {
        particles_nb: 4,
        quantity: 1,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  background: {
    color: {
      value: "#0284c7",
    },
    opacity: 0,
  },
  retina_detect: true,
};

const SimpleParticle: FunctionComponent = ({}) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div>
      <Particles
        options={particleOptions}
        id="tsparticles"
        init={particlesInit}
      />
    </div>
  );
};
export default SimpleParticle;
