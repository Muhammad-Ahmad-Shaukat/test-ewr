"use client";
import React, { useState, useEffect, useRef } from "react";

const ExpertKnowledge = () => {
  const [activePersonIndex, setActivePersonIndex] = useState(0);
  const [particles, setParticles] = useState([]);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  // Team member data
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Chen",
      image: "/member1.png",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      image: "/member2.png",
    },
    {
      id: 3,
      name: "Alex Rodriguez",
      image: "/member3.png",
    },
  ];

  // Auto-cycle through team members
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePersonIndex((prev) => (prev + 1) % teamMembers.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [teamMembers.length]);

  // Create particles when active person changes
  useEffect(() => {
    const createParticles = () => {
      const newParticles = [];
      const particleCount = 8;

      // Define starting positions for each person (left, center, right)
      const personPositions = [
        { x: 0.507812, y: 0 }, // Left person - start of left curve
        { x: 56.5078, y: 0 }, // Center person - straight down
        { x: 112.508, y: 0 }, // Right person - start of right curve
      ];

      const startPos = personPositions[activePersonIndex];

      for (let i = 0; i < particleCount; i++) {
        const delay = i * 0.1; // Stagger particle release
        newParticles.push({
          id: Date.now() + i,
          x: startPos.x,
          y: startPos.y,
          progress: 0,
          life: 1,
          decay: 0.003,
          size: 2,
          delay: delay,
          startTime: Date.now(),
          personIndex: activePersonIndex,
        });
      }

      setParticles(newParticles);
    };

    createParticles();
  }, [activePersonIndex]);

  // Animate particles along curved paths
  useEffect(() => {
    const animate = () => {
      setParticles((prevParticles) =>
        prevParticles
          .map((particle) => {
            const currentTime = Date.now();
            const elapsed = (currentTime - particle.startTime) / 1000;

            // Don't animate until delay has passed
            if (elapsed < particle.delay) {
              return particle;
            }

            const animationProgress = Math.min(
              (elapsed - particle.delay) / 0.8,
              1
            ); // 0.8 second animation

            // Define curved paths for each person position based on actual SVG paths
            const getCurvedPosition = (progress, personIndex) => {
              if (personIndex === 1) {
                // Center person - straight down: M56.5078 0V25
                return {
                  x: 56.5078,
                  y: 0 + progress * 25,
                };
              }

              if (personIndex === 0) {
                // Left person - follows the left curved path: M0.507812 0V8C0.507812 16.837 7.67081 24 16.5078 24H40.5078C49.3448 24 56.5078 31.163 56.5078 40V55
                const t = progress;

                if (t < 0.15) {
                  // First part: M0.507812 0 V8 (straight down 8 units)
                  const localT = t / 0.15;
                  return {
                    x: 0.507812,
                    y: 0 + localT * 8,
                  };
                } else if (t < 0.5) {
                  // Second part: C0.507812 16.837 7.67081 24 16.5078 24 (cubic bezier curve)
                  const localT = (t - 0.15) / 0.35;
                  const t2 = localT * localT;
                  const t3 = t2 * localT;
                  const mt = 1 - localT;
                  const mt2 = mt * mt;
                  const mt3 = mt2 * mt;

                  // Control points: (0.507812,8) -> (0.507812, 8+8.837) -> (0.507812+7.163, 8+8.837+8) -> (0.507812+7.163+9, 8+8.837+8+8)
                  const p1 = { x: 0.507812, y: 8 };
                  const p2 = { x: 0.507812, y: 16.837 };
                  const p3 = { x: 7.67081, y: 24 };
                  const p4 = { x: 16.5078, y: 24 };

                  return {
                    x:
                      mt3 * p1.x +
                      3 * mt2 * localT * p2.x +
                      3 * mt * t2 * p3.x +
                      t3 * p4.x,
                    y:
                      mt3 * p1.y +
                      3 * mt2 * localT * p2.y +
                      3 * mt * t2 * p3.y +
                      t3 * p4.y,
                  };
                } else if (t < 0.7) {
                  // Third part: H40.5078 (horizontal line right to x=40.5078)
                  const localT = (t - 0.5) / 0.2;
                  return {
                    x: 16.5078 + localT * 24,
                    y: 24,
                  };
                } else if (t < 0.9) {
                  // Fourth part: C49.3448 24 56.5078 31.163 56.5078 40 (cubic bezier curve)
                  const localT = (t - 0.7) / 0.2;
                  const t2 = localT * localT;
                  const t3 = t2 * localT;
                  const mt = 1 - localT;
                  const mt2 = mt * mt;
                  const mt3 = mt2 * mt;

                  // Control points: (40.5078,24) -> (40.5078+8.837, 24) -> (40.5078+8.837+7.163, 24+7.163) -> (40.5078+8.837+7.163, 24+7.163+8)
                  const p1 = { x: 40.5078, y: 24 };
                  const p2 = { x: 49.3448, y: 24 };
                  const p3 = { x: 56.5078, y: 31.163 };
                  const p4 = { x: 56.5078, y: 40 };

                  return {
                    x:
                      mt3 * p1.x +
                      3 * mt2 * localT * p2.x +
                      3 * mt * t2 * p3.x +
                      t3 * p4.x,
                    y:
                      mt3 * p1.y +
                      3 * mt2 * localT * p2.y +
                      3 * mt * t2 * p3.y +
                      t3 * p4.y,
                  };
                } else {
                  // Final part: V55 (vertical line down to y=55)
                  const localT = (t - 0.9) / 0.1;
                  return {
                    x: 56.5078,
                    y: 40 + localT * 15,
                  };
                }
              }

              if (personIndex === 2) {
                // Right person - follows the right curved path: M112.508 0V8C112.508 16.837 105.345 24 96.5078 24H72.5078C66.5858 24 61.4148 27.218 58.6478 32
                const t = progress;

                if (t < 0.15) {
                  // First part: M112.508 0 V8 (straight down 8 units)
                  const localT = t / 0.15;
                  return {
                    x: 112.508,
                    y: 0 + localT * 8,
                  };
                } else if (t < 0.5) {
                  // Second part: C112.508 16.837 105.345 24 96.5078 24 (cubic bezier curve)
                  const localT = (t - 0.15) / 0.35;
                  const t2 = localT * localT;
                  const t3 = t2 * localT;
                  const mt = 1 - localT;
                  const mt2 = mt * mt;
                  const mt3 = mt2 * mt;

                  // Control points: (112.508,8) -> (112.508, 8+8.837) -> (112.508-7.163, 8+8.837+8) -> (112.508-7.163-9, 8+8.837+8+8)
                  const p1 = { x: 112.508, y: 8 };
                  const p2 = { x: 112.508, y: 16.837 };
                  const p3 = { x: 105.345, y: 24 };
                  const p4 = { x: 96.5078, y: 24 };

                  return {
                    x:
                      mt3 * p1.x +
                      3 * mt2 * localT * p2.x +
                      3 * mt * t2 * p3.x +
                      t3 * p4.x,
                    y:
                      mt3 * p1.y +
                      3 * mt2 * localT * p2.y +
                      3 * mt * t2 * p3.y +
                      t3 * p4.y,
                  };
                } else if (t < 0.7) {
                  // Third part: H72.5078 (horizontal line left to x=72.5078)
                  const localT = (t - 0.5) / 0.2;
                  return {
                    x: 96.5078 - localT * 24,
                    y: 24,
                  };
                } else {
                  // Final part: C66.5858 24 61.4148 27.218 58.6478 32 (cubic bezier curve)
                  const localT = (t - 0.7) / 0.3;
                  const t2 = localT * localT;
                  const t3 = t2 * localT;
                  const mt = 1 - localT;
                  const mt2 = mt * mt;
                  const mt3 = mt2 * mt;

                  // Control points: (72.5078,24) -> (72.5078-5.922, 24) -> (72.5078-5.922-5.093, 24+3.218) -> (72.5078-5.922-5.093-2.76, 24+3.218+4.782)
                  const p1 = { x: 72.5078, y: 24 };
                  const p2 = { x: 66.5858, y: 24 };
                  const p3 = { x: 61.4148, y: 27.218 };
                  const p4 = { x: 58.6478, y: 32 };

                  return {
                    x:
                      mt3 * p1.x +
                      3 * mt2 * localT * p2.x +
                      3 * mt * t2 * p3.x +
                      t3 * p4.x,
                    y:
                      mt3 * p1.y +
                      3 * mt2 * localT * p2.y +
                      3 * mt * t2 * p3.y +
                      t3 * p4.y,
                  };
                }
              }

              return { x: 56.5078, y: 55 };
            };

            const pos = getCurvedPosition(
              animationProgress,
              particle.personIndex
            );

            return {
              ...particle,
              x: pos.x, // No random offset - follow lines exactly
              y: pos.y,
              progress: animationProgress,
              life: Math.max(0, particle.life - particle.decay),
            };
          })
          .filter((particle) => particle.life > 0 && particle.progress < 1)
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    if (particles.length > 0) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particles.length]);

  // Canvas drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      // Create simple blue dots that float along the lines
      const alpha = particle.life;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(59, 130, 246, ${alpha})`;
      ctx.fill();
    });
  }, [particles]);

  return (
    <div className=" w-full max-w-[400px] bg-white rounded-2xl shadow-lg flex items-center justify-center md:px-[29px] px-5 md:pt-[29px] pt-[25px] pb-0">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center md:mb-5 mb-10">
          <h1 className="text-[22px] leading-[114%] text-[#131316] mb-[13px] font-medium text-left">
            Expert Knowledge
          </h1>
          <p className="text-[16px] leading-[145%] text-[#131316] text-left font-normal">
            Engineers with the expertise to deliver dependable, high-performance
            solutions
          </p>
        </div>

        {/* Main Card */}
        <div className="group isolate flex flex-col  overflow-hidden">
          {/* Animation Area */}
          <div
            className="pointer-events-none relative flex-auto select-none"
            style={{ minHeight: "10.25rem" }}
            aria-hidden="true"
          >
            {/* Background Concentric Circles */}
            <div className="relative flex h-full flex-col items-center justify-center">
              <div className="absolute -z-10 mt-[calc(-108/16*1rem)] blur-[1px]">
                <div
                  className="absolute left-1/2 top-1/2 ml-[calc(-216/2/16*1rem)] mt-[calc(-216/2/16*1rem)] size-[calc(216/16*1rem)] rounded-full border border-gray-400 opacity-15"
                  style={{ transform: "scale(1)" }}
                ></div>
                <div
                  className="absolute left-1/2 top-1/2 ml-[calc(-280/2/16*1rem)] mt-[calc(-280/2/16*1rem)] size-[calc(280/16*1rem)] rounded-full border border-gray-400 opacity-[0.125]"
                  style={{ transform: "scale(1)" }}
                ></div>
                <div
                  className="absolute left-1/2 top-1/2 ml-[calc(-344/2/16*1rem)] mt-[calc(-344/2/16*1rem)] size-[calc(344/16*1rem)] rounded-full border border-gray-400 opacity-10"
                  style={{ transform: "scale(1)" }}
                ></div>
                <div
                  className="absolute left-1/2 top-1/2 ml-[calc(-408/2/16*1rem)] mt-[calc(-408/2/16*1rem)] size-[calc(408/16*1rem)] rounded-full border border-gray-400 opacity-[0.075]"
                  style={{ transform: "scale(1)" }}
                ></div>
              </div>

              {/* Profile Images */}
              <div className="flex gap-4">
                {teamMembers.map((member, index) => (
                  <div
                    key={member.id}
                    className={`transition duration-1000 ${
                      index === activePersonIndex ? "opacity-100" : "opacity-25"
                    }`}
                  >
                    <div className="size-10 rounded-full border-2 border-white bg-gray-50 shadow-[0_2px_3px_rgba(0,0,0,0.04),0_24px_68px_rgba(47,48,55,0.05),0_4px_6px_rgba(34,42,53,0.04),0_1px_1px_rgba(0,0,0,0.05)] ring-1 ring-gray-950/5">
                      <img
                        alt={member.name}
                        width="36"
                        height="36"
                        className="rounded-full w-full h-full object-cover"
                        src={member.image}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Connection Lines */}
              <div className="relative aspect-113/55 w-32">
                <div>
                  {/* Visible SVG lines for the connection paths */}
                  <svg
                    viewBox="0 0 113 55"
                    fill="none"
                    aria-hidden="true"
                    className="absolute inset-0 size-full stroke-gray-300"
                    strokeWidth="1"
                  >
                    <path
                      d="M56.5078 0V25M0.507812 0V8C0.507812 16.837 7.67081 24 16.5078 24H40.5078C49.3448 24 56.5078 31.163 56.5078 40V55M112.508 0V8C112.508 16.837 105.345 24 96.5078 24H72.5078C66.5858 24 61.4148 27.218 58.6478 32"
                      stroke="#131316"
                      strokeOpacity="0.1"
                    />
                  </svg>

                  {/* Particle Canvas */}
                  <canvas
                    ref={canvasRef}
                    className="absolute inset-0 h-full w-full"
                    aria-hidden="true"
                    width="113"
                    height="55"
                  />
                </div>
              </div>

              {/* Auto-join Button */}
              <div className="relative mt-px flex items-center gap-1.5 rounded-lg bg-white py-1 pl-1.5 pr-2 text-2xs font-medium text-gray-950 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] ring-1 ring-gray-950/5">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="size-4"
                >
                  <g
                    stroke="#9394A1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.2"
                  >
                    <circle cx="8" cy="8" r="6.25"></circle>
                    <path d="M8 5v6m3-3H5"></path>
                  </g>
                </svg>
                Trusted Expertise
                <div className="absolute -bottom-1.5 left-1/2 -z-10 -ml-10 h-6 w-20 transform-gpu rounded-[50%] bg-linear-to-r from-purple-500 from-25% to-sky-300 to-75% blur-sm opacity-25"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertKnowledge;
