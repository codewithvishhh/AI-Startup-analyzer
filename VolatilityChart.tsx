import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Sep", volatility: 42 },
  { month: "Oct", volatility: 55 },
  { month: "Nov", volatility: 38 },
  { month: "Dec", volatility: 62 },
  { month: "Jan", volatility: 48 },
  { month: "Feb", volatility: 53 },
];

const VolatilityChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="glass-card p-6"
    >
      <h3 className="mb-4 text-lg font-semibold text-foreground">📈 Market Volatility Trend</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="volGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(189 100% 50%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(189 100% 50%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 30% 20%)" />
            <XAxis dataKey="month" stroke="hsl(215 20% 55%)" fontSize={12} />
            <YAxis stroke="hsl(215 20% 55%)" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(222 40% 12%)",
                border: "1px solid hsl(222 30% 25%)",
                borderRadius: "8px",
                color: "hsl(210 40% 95%)",
              }}
            />
            <Area type="monotone" dataKey="volatility" stroke="hsl(189 100% 50%)" fill="url(#volGrad)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default VolatilityChart;
