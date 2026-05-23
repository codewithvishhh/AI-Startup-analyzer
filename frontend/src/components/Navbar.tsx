import { Zap } from "lucide-react";
import { motion } from "framer-motion";

interface NavbarProps {
  showNewAnalysis: boolean;
  onNewAnalysis: () => void;
}

const Navbar = ({ showNewAnalysis, onNewAnalysis }: NavbarProps) => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl"
      style={{ background: "hsl(222 47% 8% / 0.8)" }}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20">
            <Zap className="h-5 w-5 text-primary" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Start<span className="glow-text">Eval</span>
          </span>
        </div>
        {showNewAnalysis && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={onNewAnalysis}
            className="rounded-lg border border-primary/30 px-4 py-2 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary/10 hover:border-primary/60"
          >
            + New Analysis
          </motion.button>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;