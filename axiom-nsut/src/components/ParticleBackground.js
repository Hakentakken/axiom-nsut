import React, { useRef, useEffect } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set initial canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particlesArray = [];
    const numberOfParticles = 50; // Reduced number of particles
    const mouse = {
      x: null,
      y: null,
      radius: 100, // Interaction radius
    };

    // Update canvas size on window resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init(); // Reinitialize particles to fit the new dimensions
    };
    window.addEventListener("resize", resizeCanvas);

    // Track mouse movement
    window.addEventListener("mousemove", (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    // Particle class
    class Particle {
      constructor(x, y, size, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
      }

      // Draw dot
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      }

      // Update particle position
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;

        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius + this.size) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - distance) / mouse.radius;
          const forceX = Math.cos(angle) * force * 0.5; // Reduced force for slower repulsion
          const forceY = Math.sin(angle) * force * 0.5;

          // Move particle away from the mouse
          this.speedX -= forceX;
          this.speedY -= forceY;
        }

        // Stop particle after a certain distance
        if (distance > mouse.radius * 1.5) {
          this.speedX *= 0.9; // Gradually reduce speed (stronger damping)
          this.speedY *= 0.9;
        }

        this.draw();
      }
    }

    // Initialize particles
    const init = () => {
      particlesArray.length = 0; // Clear the array
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 1; // Smaller dots
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = Math.random() * 0.1 - 0.05; // Slower horizontal speed
        const speedY = Math.random() * 0.1 - 0.05; // Slower vertical speed
        particlesArray.push(new Particle(x, y, size, speedX, speedY));
      }
    };

    // Animation loop
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // Dark sky background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesArray.forEach((particle) => particle.update());
      requestAnimationFrame(animate);
    };

    init();
    animate();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("mousemove", () => {});
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Ensures particles are in the background
      }}
    />
  );
};

export default ParticleBackground;