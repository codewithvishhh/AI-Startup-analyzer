import { motion } from "framer-motion";

interface FundingMetric {
  label: string;
  value: number;
}

const FundingBreakdown = ({ metrics }: { metrics: FundingMetric[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="glass-card p-6"
    >
      <h3 className="mb-5 text-lg font-semibold text-foreground">💰 Funding Readiness Breakdown</h3>
      <div className="space-y-4">
        {metrics.map((m, i) => (
          <div key={m.label}>
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{m.label}</span>
              <span className="font-mono text-foreground">{m.value}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${m.value}%` }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, hsl(189 100% 50%), hsl(263 84% 52%))`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default FundingBreakdown;
