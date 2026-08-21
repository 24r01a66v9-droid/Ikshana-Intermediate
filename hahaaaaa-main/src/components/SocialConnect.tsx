import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type SocialLink = {
  name: string;
  url: string;
  icon: React.ReactNode;
  iconClassName: string;
};

const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/YOUR_INSTAGRAM",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6 sm:h-7 sm:w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.5"
          cy="6.5"
          r="1.15"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),
    iconClassName:
      "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/YOUR_LINKEDIN",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6 sm:h-7 sm:w-7"
        fill="currentColor"
      >
        <path d="M6.5 8.5A1.75 1.75 0 1 0 6.5 5a1.75 1.75 0 0 0 0 3.5ZM5 10h3v9H5v-9Zm5 0h2.9v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V19h-3v-4.2c0-1-.02-2.3-1.4-2.3-1.4 0-1.62 1.08-1.62 2.23V19h-3v-9Z" />
      </svg>
    ),
    iconClassName: "bg-[#0A66C2] text-white",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@YOUR_YOUTUBE",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6 sm:h-7 sm:w-7"
        fill="currentColor"
      >
        <path d="M23 12s0-3.5-.45-5.18a2.96 2.96 0 0 0-2.08-2.08C18.8 4.3 12 4.3 12 4.3s-6.8 0-8.47.44A2.96 2.96 0 0 0 1.45 6.82C1 8.5 1 12 1 12s0 3.5.45 5.18a2.96 2.96 0 0 0 2.08 2.08c1.67.44 8.47.44 8.47.44s6.8 0 8.47-.44a2.96 2.96 0 0 0 2.08-2.08C23 15.5 23 12 23 12ZM9.75 15.5v-7l6 3.5-6 3.5Z" />
      </svg>
    ),
    iconClassName: "bg-[#FF0000] text-white",
  },
];

export default function SocialConnect() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-5 right-5 z-[60] sm:bottom-7 sm:right-7"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="dialog"
            aria-label="Connect with Ikshana"
            className="
              absolute bottom-[calc(100%+14px)] right-0
              w-[calc(100vw-2rem)] max-w-[330px]
              rounded-[1.4rem]
              border border-brand-maroon/10
              bg-white/95
              p-4
              shadow-[0_20px_60px_rgba(80,0,0,0.16)]
              backdrop-blur-xl
              sm:w-[330px] sm:p-5
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute -bottom-2 right-7
                h-4 w-4 rotate-45
                border-b border-r border-brand-maroon/10
                bg-white
              "
            />

            <div className="mb-4 flex items-center justify-between gap-3">
              <h3 className="font-serif text-lg font-semibold text-brand-maroon sm:text-xl">
                Connect with Ikshana
              </h3>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close social media links"
                className="
                  flex h-8 w-8 shrink-0 items-center justify-center
                  rounded-full
                  text-brand-maroon/70
                  transition-colors
                  hover:bg-brand-maroon/5
                  hover:text-brand-maroon
                "
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group flex min-h-[62px] items-center gap-3
                    rounded-2xl
                    border border-stone-100
                    bg-white
                    px-3
                    transition-all duration-200
                    hover:-translate-y-0.5
                    hover:border-brand-maroon/10
                    hover:shadow-md
                    sm:min-h-[68px] sm:px-4
                  "
                >
                  <span
                    className={`
                      flex h-10 w-10 shrink-0 items-center justify-center
                      rounded-xl shadow-sm
                      sm:h-11 sm:w-11
                      ${social.iconClassName}
                    `}
                  >
                    {social.icon}
                  </span>

                  <span className="flex-1 text-sm font-medium text-stone-800 sm:text-base">
                    {social.name}
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="
                      text-brand-maroon/45
                      transition-all duration-200
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-brand-maroon
                    "
                  />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {}
      <motion.button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={
          isOpen
            ? "Close social media links"
            : "Connect with Ikshana on social media"
        }
        aria-expanded={isOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
        className="
          group relative
          flex h-14 w-14 items-center justify-center
          rounded-full
          bg-brand-maroon
          text-white
          shadow-[0_12px_30px_rgba(128,0,0,0.28)]
          ring-4 ring-white/80
          transition-shadow
          hover:shadow-[0_16px_38px_rgba(128,0,0,0.35)]
          sm:h-16 sm:w-16
        "
      >
        {!isOpen && (
          <span
            aria-hidden="true"
            className="
              absolute inset-0 rounded-full
              border border-white/30
              opacity-0
              transition-all duration-200
              group-hover:scale-110
              group-hover:opacity-100
            "
          />
        )}

        {isOpen ? (
          <X size={25} strokeWidth={1.8} />
        ) : (
          <svg
            viewBox="0 0 48 48"
            aria-hidden="true"
            className="relative h-8 w-8 sm:h-9 sm:w-9"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="24" r="7" />
            <circle cx="36" cy="11" r="7" />
            <circle cx="36" cy="37" r="7" />
            <path d="M18 21L30 14" />
            <path d="M18 27L30 34" />
          </svg>
        )}
      </motion.button>
    </div>
  );
}
