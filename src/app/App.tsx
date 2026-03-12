import { useState } from 'react';
import { ChevronLeft, ChevronRight, Zap, Target, Search, Filter, Users, Flag, Lightbulb, ClipboardCheck, PenTool, Palette, Code, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    // Slide 1 - Title
    {
      title: "Medical Expo to Website Animation Pipeline",
      subtitle: "Design & Marketing Workflow",
      description: "From expo research to UI/UX redesign and animation integration",
      type: "title",
      icon: Zap
    },
    // Slide 2 - Overview
    {
      title: "Overview: From Expo Insights to Animated Websites",
      content: [
        {
          heading: "Purpose",
          text: "Turn manufacturer products into compelling digital stories"
        },
        {
          heading: "Phase 1: Manufacturer Selection & Marketing Prioritization (4 steps)",
          list: [
            "Medical Expo Research",
            "Manufacturer Filtering",
            "Marketing Team Consolidation",
            "Project Prioritization"
          ]
        },
        {
          heading: "Phase 2: UI/UX Website Redesign & Animation Integration (5 steps)",
          list: [
            "Discovery & Business Goals",
            "UX Audit",
            "Wireframing (Mid-Fidelity)",
            "High-Fidelity UI Design",
            "Development Handoff"
          ]
        },
        {
          heading: "Outcome",
          text: "Modern sites with clear product value through design and animation"
        }
      ],
      type: "overview",
      icon: Target
    },
    // Slide 3
    {
      title: "Phase 1 — Step 1: Medical Expo Research",
      content: [
        {
          heading: "Objectives",
          text: "Identify promising manufacturers at expos"
        },
        {
          heading: "What we evaluate:",
          list: [
            "Product quality and innovation",
            "Market presence",
            "Website and digital presentation"
          ]
        },
        {
          heading: "Output",
          text: "Shortlist of manufacturers suited for strong visual storytelling"
        }
      ],
      type: "step",
      icon: Search,
      phase: "Phase 1"
    },
    // Slide 4
    {
      title: "Phase 1 — Step 2: Manufacturer Filtering",
      content: [
        {
          heading: "Inputs",
          text: "Consolidated list from expo"
        },
        {
          heading: "Filters applied:",
          list: [
            "Product complexity",
            "Market demand",
            "Potential for animation storytelling",
            "Website improvement opportunities"
          ]
        },
        {
          heading: "Output",
          text: "Curated list of high-potential companies"
        }
      ],
      type: "step",
      icon: Filter,
      phase: "Phase 1"
    },
    // Slide 5
    {
      title: "Phase 1 — Step 3: Marketing Team Consolidation",
      content: [
        {
          heading: "Actions:",
          list: [
            "Validate selected manufacturers",
            "Prioritize by business opportunity",
            "Prepare final list for design and animation teams"
          ]
        },
        {
          heading: "Output",
          text: "Approved target list aligned with go-to-market"
        }
      ],
      type: "step",
      icon: Users,
      phase: "Phase 1"
    },
    // Slide 6
    {
      title: "Phase 1 — Step 4: Project Prioritization",
      content: [
        {
          heading: "Priority criteria:",
          list: [
            "Market impact",
            "Product uniqueness",
            "Sales opportunity",
            "Strategic importance"
          ]
        },
        {
          heading: "Handoff",
          text: "Animation and Website teams begin planning and kickoff"
        }
      ],
      type: "step",
      icon: Flag,
      phase: "Phase 1"
    },
    // Slide 7
    {
      title: "Phase 2 — Step 1: Discovery & Business Goals",
      content: [
        {
          heading: "Analyze:",
          list: [
            "Business objectives",
            "Product positioning",
            "Target audience",
            "Marketing goals"
          ]
        },
        {
          heading: "Deliverables",
          text: "Discovery brief, success metrics, audience personas"
        }
      ],
      type: "step",
      icon: Lightbulb,
      phase: "Phase 2"
    },
    // Slide 8
    {
      title: "Phase 2 — Step 2: UX Audit (Current Website Analysis)",
      content: [
        {
          heading: "Audit focus:",
          list: [
            "Layout and information architecture",
            "Visual quality and consistency",
            "Navigation experience",
            "Product presentation and content clarity"
          ]
        },
        {
          heading: "Deliverables",
          text: "UX findings, prioritized improvement opportunities"
        }
      ],
      type: "step",
      icon: ClipboardCheck,
      phase: "Phase 2"
    },
    // Slide 9
    {
      title: "Phase 2 — Step 3: Wireframing (Mid-Fidelity)",
      content: [
        {
          heading: "Plan:",
          list: [
            "Page structure and content hierarchy",
            "Placement of product animations",
            "Number of animation clips per page"
          ]
        },
        {
          heading: "Reference",
          text: "Product pages may include detailed animations (Amazon-style clarity)"
        },
        {
          heading: "Deliverables",
          text: "Mid-fidelity wireframes, content map, animation plan"
        }
      ],
      type: "step",
      icon: PenTool,
      phase: "Phase 2"
    },
    // Slide 10
    {
      title: "Phase 2 — Step 4: High-Fidelity UI Design",
      content: [
        {
          heading: "Design includes:",
          list: [
            "Final visual design and brand-aligned layouts",
            "Micro-interactions and animated UI elements",
            "Accessibility and responsive behavior"
          ]
        },
        {
          heading: "Deliverables",
          text: "Pixel-perfect screens, motion specs, design system updates"
        }
      ],
      type: "step",
      icon: Palette,
      phase: "Phase 2"
    },
    // Slide 11
    {
      title: "Phase 2 — Step 5: Development Handoff",
      content: [
        {
          heading: "Developers implement:",
          list: [
            "Redesigned layouts",
            "Animations and micro-interactions"
          ]
        },
        {
          heading: "Quality gates:",
          list: [
            "Cross-device testing, performance, accessibility"
          ]
        },
        {
          heading: "Deliverables",
          text: "Live site, component library, deployment notes"
        }
      ],
      type: "step",
      icon: Code,
      phase: "Phase 2"
    },
    // Slide 12 - Final
    {
      title: "Final Outcome: Design + Animation that Drives Adoption",
      content: [
        {
          heading: "Result",
          text: "Modern, visually engaging websites that clarify product value"
        },
        {
          heading: "Business impact:",
          list: [
            "Higher engagement and time on page",
            "Clearer product understanding and reduced sales friction",
            "Improved conversion and lead quality"
          ]
        },
        {
          heading: "Proof points",
          text: "UX scores, demo requests, CTR on animated elements"
        }
      ],
      type: "final",
      icon: TrendingUp
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  };

  useState(() => {
    window.addEventListener('keydown', handleKeyDown as any);
    return () => window.removeEventListener('keydown', handleKeyDown as any);
  });

  const slide = slides[currentSlide];
  const SlideIcon = slide.icon;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 flex items-center justify-center p-4 md:p-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      <div className="w-full max-w-6xl relative z-10">
        {/* Slide Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 min-h-[600px] flex flex-col relative overflow-hidden"
        >
          {/* Decorative gradient orb */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl -z-10" />

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="flex-1 flex flex-col"
            >
              {/* Title Slide */}
              {slide.type === 'title' && (
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="mb-8"
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
                      <SlideIcon className="w-12 h-12 text-white" />
                    </div>
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-3xl text-blue-300 font-semibold mb-4"
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg md:text-xl text-white/80"
                  >
                    {slide.description}
                  </motion.p>
                </div>
              )}

              {/* Overview Slide */}
              {slide.type === 'overview' && (
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <SlideIcon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      {slide.title}
                    </h2>
                  </div>
                  <div className="space-y-6">
                    {slide.content?.map((section, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all"
                      >
                        <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-3">
                          {section.heading}
                        </h3>
                        {section.text && (
                          <p className="text-white/90 ml-4 text-base md:text-lg">{section.text}</p>
                        )}
                        {section.list && (
                          <ul className="ml-8 space-y-2">
                            {section.list.map((item, i) => (
                              <li key={i} className="text-white/80 flex items-start text-base md:text-lg">
                                <span className="text-blue-400 mr-3 mt-1">▸</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step Slides */}
              {(slide.type === 'step' || slide.type === 'final') && (
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-8">
                    {slide.phase && (
                      <span className="px-4 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-semibold">
                        {slide.phase}
                      </span>
                    )}
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <SlideIcon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 leading-tight">
                    {slide.title}
                  </h2>
                  <div className="space-y-6">
                    {slide.content?.map((section, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all"
                      >
                        <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-3">
                          {section.heading}
                          {section.heading.endsWith(':') ? '' : section.text ? ':' : ''}
                        </h3>
                        {section.text && (
                          <p className="text-white/90 ml-4 text-base md:text-lg leading-relaxed">{section.text}</p>
                        )}
                        {section.list && (
                          <ul className="ml-8 space-y-3">
                            {section.list.map((item, i) => (
                              <li key={i} className="text-white/80 flex items-start text-base md:text-lg">
                                <span className="text-blue-400 mr-3 text-xl">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-between gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-2xl font-semibold shadow-lg border border-white/20 hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden md:inline">Previous</span>
          </motion.button>

          <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <span className="text-white font-bold text-lg">
              {currentSlide + 1}
            </span>
            <span className="text-white/50">/</span>
            <span className="text-white/70 text-lg">
              {slides.length}
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-2xl font-semibold shadow-lg border border-white/20 hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <span className="hidden md:inline">Next</span>
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Slide Indicators */}
        <div className="mt-6 flex justify-center gap-2 flex-wrap">
          {slides.map((_, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => goToSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentSlide
                  ? 'bg-white w-12'
                  : 'bg-white/30 w-2 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}