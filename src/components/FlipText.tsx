import { motion } from "motion/react";

const DURATION = 0.2;
const STAGGER = 0.025;

interface FlipTextProps {
  children: React.ReactNode;
  hoverText: string;
  duration?: number;
  stagger?: number;
  className?: string;
  padding?: number;
}

export const FlipText = ({
  children,
  hoverText,
  duration = DURATION,
  stagger = STAGGER,
  className,
  padding = 20,
}: FlipTextProps) => {
  const text = String(children);
  const hoverTextStr = String(hoverText);

  const maxLength = Math.max(text.length, hoverTextStr.length);
  const paddedText = text.padEnd(maxLength, " ");
  const paddedHoverText = hoverTextStr.padEnd(maxLength, " ");

  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className={`relative block overflow-hidden whitespace-nowrap text-4xl ${className} cursor-default`}
      style={{
        lineHeight: 0.75,
        height: `${
          (Math.max(paddedText.length, paddedHoverText.length) / 2) * 1.5 +
          padding
        }px`,
      }}
    >
      <div style={{ position: "relative", zIndex: 1 }}>
        {paddedText.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-200%",
              },
            }}
            transition={{
              duration,
              ease: "easeInOut",
              delay: stagger * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>

      <div className="absolute inset-0">
        {paddedHoverText.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "200%",
              },
              hovered: {
                y: "0%",
              },
            }}
            transition={{
              duration,
              ease: "easeInOut",
              delay: stagger * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};
