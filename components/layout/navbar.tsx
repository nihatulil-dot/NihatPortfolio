"use client";

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Trading Lab", href: "#trading-lab" },
  { label: "Certificates", href: "#certificates" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  /*
   * Index item yang paling dekat dengan cursor
   */
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  /*
   * Ref setiap item navbar
   */
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  /*
   * Lock ketika smooth scroll sedang berjalan
   */
  const isNavigating = useRef(false);

  const navigationTimeout = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);

  /* =====================================================
     ACTIVE SECTION OBSERVER
  ====================================================== */

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(
        (section): section is Element => section !== null
      );

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isNavigating.current) return;

        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id
          );
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /* =====================================================
     NAVBAR SCROLL STATE
  ====================================================== */

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 35);
        ticking = false;
      });

      ticking = true;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =====================================================
     CLEANUP
  ====================================================== */

  useEffect(() => {
    return () => {
      if (navigationTimeout.current) {
        clearTimeout(navigationTimeout.current);
      }
    };
  }, []);

  /* =====================================================
     DOCK MAGNIFICATION
  ====================================================== */

  const handleDockMouseMove = (
    e: MouseEvent<HTMLElement>
  ) => {
    const mouseX = e.clientX;

    let closestIndex = -1;
    let closestDistance = Infinity;

    itemRefs.current.forEach((item, index) => {
      if (!item) return;

      const rect = item.getBoundingClientRect();

      const centerX =
        rect.left + rect.width / 2;

      const distance = Math.abs(
        mouseX - centerX
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    if (
      closestIndex !== -1 &&
      closestDistance < 90
    ) {
      setHoveredIndex(closestIndex);
    } else {
      setHoveredIndex(null);
    }
  };

  const handleDockMouseLeave = () => {
    setHoveredIndex(null);
  };

  /* =====================================================
     SCALE CALCULATION
  ====================================================== */

  const getItemScale = (index: number) => {
    if (hoveredIndex === null) {
      return 1;
    }

    const distance = Math.abs(
      index - hoveredIndex
    );

    if (distance === 0) {
      return 1.35;
    }

    if (distance === 1) {
      return 1.15;
    }

    if (distance === 2) {
      return 1.06;
    }

    return 1;
  };

  /* =====================================================
     NAVIGATION
  ====================================================== */

  const handleNavigation = (
    e: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const target =
      document.querySelector(href);

    if (!target) return;

    const id = href.replace("#", "");

    /*
     * Active state langsung berubah
     */
    setActiveSection(id);

    /*
     * Lock observer sementara smooth scroll
     * sedang berjalan
     */
    isNavigating.current = true;

    if (navigationTimeout.current) {
      clearTimeout(navigationTimeout.current);
    }

    navigationTimeout.current = setTimeout(() => {
      isNavigating.current = false;
    }, 900);

    /*
     * Smooth scroll
     */
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    /*
     * Update URL
     */
    window.history.replaceState(
      null,
      "",
      href
    );
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header
        className={`
          fixed
          top-0
          left-0
          right-0
          z-[100]
          transition-all
          duration-500
          ${
            isScrolled
              ? "bg-black/30 backdrop-blur-xl"
              : "bg-transparent"
          }
        `}
      >
        <div
          className="
            relative
            mx-auto
            flex
            h-[82px]
            max-w-[1450px]
            items-center
            justify-between
            px-6
            lg:px-10
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}

          <motion.a
            href="#home"
            onClick={(e) =>
              handleNavigation(e, "#home")
            }
            className="
              group
              relative
              z-30
              flex
              items-center
              gap-3
            "
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Logo */}

            <motion.div
              className="
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                border
                border-white/[0.10]
                bg-white/[0.035]
                backdrop-blur-md
              "
              whileHover={{
                scale: 1.05,
                borderColor:
                  "rgba(167,139,250,0.45)",
                boxShadow:
                  "0 0 25px rgba(139,92,246,0.35)",
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                duration: 0.18,
              }}
            >
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-violet-500/25
                  via-purple-500/10
                  to-transparent
                "
              />
            </motion.div>

            {/* Name */}

            <div className="hidden sm:block">
              <div
                className="
                  text-sm
                  font-semibold
                  tracking-wide
                  text-white
                "
              >
                NhatQt
              </div>

              <div
                className="
                  mt-[2px]
                  text-[9px]
                  tracking-[0.22em]
                  text-white/35
                "
              />
            </div>
          </motion.a>

          {/* =================================================
              DOCK NAVIGATION
          ================================================== */}

          <nav
            onMouseMove={handleDockMouseMove}
            onMouseLeave={handleDockMouseLeave}
            className="
              absolute
              left-1/2
              top-1/2
              z-30
              hidden
              -translate-x-1/2
              -translate-y-1/2
              lg:flex
              items-end
              gap-[3px]
              rounded-full
              border
              border-white/[0.08]
              bg-black/45
              px-3
              py-2
              backdrop-blur-2xl
              shadow-[0_12px_40px_rgba(0,0,0,0.35)]
            "
          >
            {navItems.map((item, index) => {
              const id = item.href.replace("#", "");

              const isActive =
                activeSection === id;

              const scale =
                getItemScale(index);

              return (
                <motion.a
                  key={item.href}
                  ref={(element) => {
                    itemRefs.current[index] =
                      element;
                  }}
                  href={item.href}
                  onClick={(e) =>
                    handleNavigation(
                      e,
                      item.href
                    )
                  }
                  className="
                    group
                    relative
                    flex
                    h-[38px]
                    items-center
                    justify-center
                    rounded-full
                    px-4
                    text-[12px]
                    font-medium
                    outline-none
                    origin-bottom
                  "
                  animate={{
                    scale,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 420,
                    damping: 24,
                    mass: 0.55,
                  }}
                  whileTap={{
                    scale: Math.max(
                      scale - 0.08,
                      0.92
                    ),
                  }}
                >
                  {/* HOVER BACKGROUND */}

                  <motion.span
                    className="
                      absolute
                      inset-0
                      rounded-full
                    "
                    animate={{
                      backgroundColor:
                        isActive
                          ? "rgba(139,92,246,0.11)"
                          : hoveredIndex === index
                            ? "rgba(139,92,246,0.10)"
                            : "rgba(139,92,246,0)",
                    }}
                    transition={{
                      duration: 0.18,
                    }}
                  />

                  {/* ACTIVE BORDER */}

                  {isActive && (
                    <motion.span
                      className="
                        absolute
                        inset-0
                        rounded-full
                        border
                        border-violet-400/20
                      "
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    />
                  )}

                  {/* TEXT */}

                  <motion.span
                    className="
                      relative
                      z-10
                      whitespace-nowrap
                    "
                    animate={{
                      color: isActive
                        ? "#ffffff"
                        : hoveredIndex === index
                          ? "#ffffff"
                          : "rgba(255,255,255,0.45)",

                      textShadow:
                        isActive ||
                        hoveredIndex === index
                          ? "0 0 12px rgba(167,139,250,0.55)"
                          : "0 0 0px rgba(167,139,250,0)",
                    }}
                    transition={{
                      duration: 0.16,
                    }}
                  >
                    {item.label}
                  </motion.span>

                  {/* ACTIVE UNDERLINE */}

                  {isActive && (
                    <motion.span
                      className="
                        absolute
                        bottom-[3px]
                        left-1/2
                        h-[2px]
                        -translate-x-1/2
                        rounded-full
                        bg-gradient-to-r
                        from-violet-400
                        via-fuchsia-300
                        to-violet-400
                      "
                      initial={{
                        width: 0,
                        opacity: 0,
                      }}
                      animate={{
                        width: 22,
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: [
                          0.22,
                          1,
                          0.36,
                          1,
                        ],
                      }}
                      style={{
                        boxShadow:
                          "0 0 10px rgba(167,139,250,0.85)",
                      }}
                    />
                  )}

                  {/* HOVER GLOW */}

                  {hoveredIndex === index && (
                    <motion.span
                      className="
                        pointer-events-none
                        absolute
                        bottom-[-8px]
                        left-1/2
                        h-[10px]
                        w-8
                        -translate-x-1/2
                        rounded-full
                        bg-violet-500/25
                        blur-[7px]
                      "
                      initial={{
                        opacity: 0,
                        scaleX: 0.5,
                      }}
                      animate={{
                        opacity: 1,
                        scaleX: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scaleX: 0.5,
                      }}
                      transition={{
                        duration: 0.15,
                      }}
                    />
                  )}
                </motion.a>
              );
            })}
          </nav>
        </div>

        {/* =================================================
            BOTTOM LINE
        ================================================== */}

        <motion.div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            right-0
            h-[1px]
            bg-gradient-to-r
            from-transparent
            via-violet-400/60
            to-transparent
          "
          animate={{
            opacity: isScrolled
              ? 0.25
              : [0.35, 0.75, 0.35],
          }}
          transition={{
            duration: 3,
            repeat: isScrolled ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =================================================
            SUBTLE AMBIENT PURPLE
        ================================================== */}

        <motion.div
          className="
            pointer-events-none
            absolute
            bottom-[-18px]
            left-1/2
            h-[32px]
            w-[430px]
            -translate-x-1/2
            rounded-full
            bg-violet-600/15
            blur-[28px]
          "
          animate={{
            opacity: isScrolled
              ? 0.12
              : [0.22, 0.4, 0.22],
          }}
          transition={{
            duration: 4,
            repeat: isScrolled ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />
      </header>

      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}

      <div
        className="
          fixed
          bottom-5
          left-1/2
          z-[100]
          -translate-x-1/2
          lg:hidden
        "
      >
        <div
          className="
            flex
            max-w-[calc(100vw-24px)]
            items-center
            gap-1
            overflow-x-auto
            rounded-full
            border
            border-white/[0.10]
            bg-black/70
            px-2
            py-2
            backdrop-blur-2xl
            shadow-[0_15px_45px_rgba(0,0,0,0.5)]
          "
        >
          {navItems.map((item) => {
            const id =
              item.href.replace("#", "");

            const isActive =
              activeSection === id;

            return (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) =>
                  handleNavigation(
                    e,
                    item.href
                  )
                }
                className="
                  relative
                  shrink-0
                  overflow-hidden
                  rounded-full
                  px-3
                  py-2
                  text-[10px]
                  font-medium
                "
                whileTap={{
                  scale: 0.88,
                }}
              >
                {/* Mobile active background */}

                {isActive && (
                  <motion.span
                    className="
                      absolute
                      inset-0
                      rounded-full
                      border
                      border-violet-400/20
                      bg-gradient-to-r
                      from-violet-500/[0.13]
                      to-fuchsia-500/[0.10]
                    "
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  />
                )}

                {/* Mobile text */}

                <motion.span
                  className="
                    relative
                    z-10
                    block
                  "
                  animate={{
                    color: isActive
                      ? "#ffffff"
                      : "rgba(255,255,255,0.4)",

                    textShadow: isActive
                      ? "0 0 10px rgba(167,139,250,0.6)"
                      : "0 0 0px rgba(167,139,250,0)",
                  }}
                  transition={{
                    duration: 0.15,
                  }}
                >
                  {item.label}
                </motion.span>

                {/* Mobile underline */}

                {isActive && (
                  <motion.span
                    className="
                      absolute
                      bottom-[2px]
                      left-1/2
                      h-[1.5px]
                      -translate-x-1/2
                      rounded-full
                      bg-violet-300
                    "
                    initial={{
                      width: 0,
                      opacity: 0,
                    }}
                    animate={{
                      width: 14,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  />
                )}
              </motion.a>
            );
          })}
        </div>
      </div>
    </>
  );
}