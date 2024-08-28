
import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const ConfettiEffect = () => {
  useEffect(() => {
    const duration = 10 * 1000; // 10 seconds
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

  }, []);

  return null; // This component doesn't render anything visible
};

export default ConfettiEffect;
