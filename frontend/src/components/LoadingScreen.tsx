import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Search, BarChart3, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: Brain, text: "Analyzing market landscape...", duration: 1200 },
  { icon: Search, text: "Scanning competitors...", duration: 1000 },
  { icon: BarChart3, text: "Calculating risk metrics...", duration: 1000 },
  { icon: CheckCircle2, text: "Generating AI verdict...", duration: 800 },
];

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep >= steps.length) {
      onComplete();
      return;
    }
    const timer = setTimeout(() => setCurrentStep((s) => s + 1), steps[currentStep].duration);
    return () => clearTimeout(timer);
  }, [currentStep, onComplete]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/30"
          style={{ background: "linear-gradient(135deg, hsl(189 100% 50% / 0.15), hsl(263 84% 52% / 0.15))" }}
        >
          <Brain className="h-10 w-10 text-primary" />
        </motion.div>
        <h2 className="mb-8 text-2xl font-bold text-foreground">AI Analysis in Progress</h2>
        <div className="mx-auto max-w-xs space-y-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = i === currentStep;
            const isDone = i < currentStep;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: isDone || isActive ? 1 : 0.3 }}
                className="flex items-center gap-3 text-left"
              >
                <Icon className={`h-5 w-5 ${isDone ? "text-success" : isActive ? "text-primary animate-pulse-glow" : "text-muted-foreground/40"}`} />
                <span className={`text-sm ${isDone ? "text-success" : isActive ? "text-foreground" : "text-muted-foreground/40"}`}>
                  {step.text}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;