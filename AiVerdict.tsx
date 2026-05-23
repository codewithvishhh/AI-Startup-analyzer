import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

interface AiVerdictProps {
  verdict: string;
  investorAppeal: "Not Ready" | "Promising" | "Strong Buy";
  actionItems: string[];
}

const appealColors = {
  "Not Ready": "bg-danger/20 text-danger border-danger/30",
  Promising: "bg-warning/20 text-warning border-warning/30",
  "Strong Buy": "bg-success/20 text-success border-success/30",
};

const AiVerdict = ({ verdict, investorAppeal, actionItems }: AiVerdictProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="glass-card overflow-hidden"
    >
      <div className="border-b border-border/50 px-6 py-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">AI Verdict</h3>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Investor Appeal:</span>
          <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${appealColors[investorAppeal]}`}>
            {investorAppeal}
          </span>
        </div>
        <p className="mb-6 leading-relaxed text-foreground/80">{verdict}</p>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">🎯 Top 3 Things to Improve</h4>
          <div className="space-y-2">
            {actionItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + i * 0.15 }}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AiVerdict;
