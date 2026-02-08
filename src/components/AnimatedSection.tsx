"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import type { ReactNode } from "react";
import { trackSectionViewed } from "@/lib/analytics";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** If provided, fires a section_viewed event once when scrolled into view */
  trackSection?: string;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  trackSection,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const hasFired = useRef(false);

  useEffect(() => {
    if (isInView && trackSection && !hasFired.current) {
      hasFired.current = true;
      trackSectionViewed(trackSection);
    }
  }, [isInView, trackSection]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
