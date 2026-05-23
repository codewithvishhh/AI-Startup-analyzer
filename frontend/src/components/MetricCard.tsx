import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  icon: LucideIcon;
  title: string;
  value: number | string;
  subtitle?: string;
  delay?: number;
  tooltip?: string;
}

const MetricCard = ({ icon: Icon, title, value, subtitle, delay = 0, tooltip }: MetricCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="glass-card-hover group relative p-6"
      title={tooltip}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <span className="text-sm font-medium text-muted-foreground">{title}</span>
      </div>
      <div className="text-3xl font-bold font-mono text-foreground">
        {value}
      </div>
      {subtitle && (
        <span className="mt-1 inline-block rounded-md bg-muted/50 px-2 py-0.5 text-xs font-medium text-muted-foreground">
          {subtitle}
        </span>
      )}
    </motion.div>
  );
};

export default MetricCard;