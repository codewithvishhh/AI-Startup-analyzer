import { motion } from "framer-motion";

interface SwotData {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

const SwotAnalysis = ({ data }: { data: SwotData }) => {
  const quadrants = [
    { title: "Strengths", items: data.strengths, color: "border-success/40 bg-success/5", textColor: "text-success", emoji: "💪" },
    { title: "Weaknesses", items: data.weaknesses, color: "border-danger/40 bg-danger/5", textColor: "text-danger", emoji: "⚠️" },
    { title: "Opportunities", items: data.opportunities, color: "border-primary/40 bg-primary/5", textColor: "text-primary", emoji: "🎯" },
    { title: "Threats", items: data.threats, color: "border-warning/40 bg-warning/5", textColor: "text-warning", emoji: "🔥" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <h3 className="mb-4 text-lg font-semibold text-foreground">🧠 SWOT Analysis</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {quadrants.map((q, i) => (
          <motion.div
            key={q.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + i * 0.1 }}
            className={`rounded-xl border p-5 ${q.color}`}
          >
            <h4 className={`mb-3 font-semibold ${q.textColor}`}>
              {q.emoji} {q.title}
            </h4>
            <ul className="space-y-2">
              {q.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${q.textColor} bg-current`} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SwotAnalysis;
