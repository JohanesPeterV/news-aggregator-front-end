import React, { FunctionComponent, useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { ISourceOptions } from 'tsparticles-engine';

const particleOptions: ISourceOptions = {
  particles: {
    number: {
      value: 80,
      limit: 200,
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        onClick: {
          enable: true,
          mode: 'push',
        },
      },
    },
    color: {
      value: '#FFFFFF',
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: {
        max: 0.6,
        min: 0.1,
      },
      random: true,
      anim: {
        enable: false,
        speed: 0.2,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 8,
      random: {
        enable: true,
        minimumValue: 0.1,
      },
    },
    move: {
      enable: true,
      speed: {
        max: 8,
        min: 3,
      },
      direction: 'bottom-right',
      random: true,
      straight: true,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: true,
        distance: 200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        duration: 4,
        opacity: 0.8,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
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
      value: '#0284c7',
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
