import { motion } from "framer-motion";

interface Competitor {
  name: string;
  marketShare: number;
  threatLevel: "Low" | "Medium" | "High";
  description: string;
}

interface CompetitorTableProps {
  competitors: Competitor[];
}

const threatColors = {
  Low: "bg-success/20 text-success",
  Medium: "bg-warning/20 text-warning",
  High: "bg-danger/20 text-danger",
};

const CompetitorTable = ({ competitors }: CompetitorTableProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="glass-card overflow-hidden"
    >
      <div className="border-b border-border/50 px-6 py-4">
        <h3 className="text-lg font-semibold text-foreground">🏢 Competitor Analysis</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/30 text-left text-xs uppercase tracking-wider text-muted-foreground">
              <th className="px-6 py-3">Company</th>
              <th className="px-6 py-3">Market Share</th>
              <th className="px-6 py-3">Threat Level</th>
              <th className="px-6 py-3">Description</th>
            </tr>
          </thead>
          <tbody>
            {competitors.map((c, i) => (
              <motion.tr
                key={c.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="border-b border-border/20 transition-colors hover:bg-muted/20"
              >
                <td className="px-6 py-4 font-medium text-foreground">{c.name}</td>
                <td className="px-6 py-4 font-mono text-sm text-primary">{c.marketShare}%</td>
                <td className="px-6 py-4">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${threatColors[c.threatLevel]}`}>
                    {c.threatLevel}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{c.description}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default CompetitorTable;
