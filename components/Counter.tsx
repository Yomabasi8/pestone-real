import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

interface CounterProps {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function Counter({ to, suffix = "", duration = 1.8, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (value) => setDisplay(Math.round(value)),
    });
    return () => controls.stop();
  }, [isInView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
