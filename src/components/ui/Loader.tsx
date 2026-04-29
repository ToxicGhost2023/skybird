import { useEffect, useState } from "react";

export function Loader({ className = "", duration = 3000 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 rounded-full border-4 border-cyan-400/20"></div>
        <div className="absolute inset-0 rounded-full border-4 border-t-cyan-400 border-r-cyan-400 animate-spin"></div>
        <div className="absolute inset-2 rounded-full bg-cyan-400/20 blur-sm"></div>
      </div>
    </div>
  );
}
