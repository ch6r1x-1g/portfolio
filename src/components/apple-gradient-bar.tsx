"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function AppleGradientBar({ className }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={cn(
            "pointer-events-none absolute inset-x-0 top-0 z-[999]",
            className
          )}
        >
          <div className="absolute -top-16 left-0 w-full h-32 bg-[linear-gradient(90deg,#91AB83,#EDDDE7,#DDDEED,#D7EECB,#DE71B5,#EDE5DD,#BE9CFF)] animate-gradient-x blur-3xl opacity-30 pointer-events-none" />
          <div className="absolute -top-6 left-0 w-full h-12 bg-[linear-gradient(90deg,#91AB83,#EDDDE7,#DDDEED,#D7EECB,#DE71B5,#EDE5DD,#BE9CFF)] animate-gradient-x blur-xl opacity-60 pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
