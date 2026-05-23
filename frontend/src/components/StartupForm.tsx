import { useState } from "react";
import { motion } from "framer-motion";
import { Rocket, ChevronDown } from "lucide-react";

const industries = ["FinTech", "HealthTech", "EdTech", "SaaS", "E-Commerce", "AI/ML", "CleanTech", "InsurTech"];
const stages = ["Idea", "MVP", "Early Revenue", "Growth"];

export interface StartupData {
  name: string;
  industry: string;
  stage: string;
  description: string;
  targetMarket: string;
  monthlyBudget: number;
}

interface StartupFormProps {
  onSubmit: (data: StartupData) => void;
}

const StartupForm = ({ onSubmit }: StartupFormProps) => {
  const [form, setForm] = useState<StartupData>({
    name: "",
    industry: "",
    stage: "",
    description: "",
    targetMarket: "",
    monthlyBudget: 10000,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.industry && form.stage) {
      onSubmit(form);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-glass-border/40 bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-300 focus:border-primary/60 focus:ring-1 focus:ring-primary/30 backdrop-blur-sm";
  const labelClass = "mb-1.5 block text-sm font-medium text-muted-foreground";

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      onSubmit={handleSubmit}
      className="glass-card mx-auto max-w-2xl p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className={labelClass}>Startup Name</label>
          <input
            type="text"
            placeholder="e.g., NeuralPay"
            className={inputClass}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>

        <div className="relative">
          <label className={labelClass}>Industry</label>
          <div className="relative">
            <select
              className={`${inputClass} appearance-none pr-10`}
              value={form.industry}
              onChange={(e) => setForm({ ...form, industry: e.target.value })}
              required
            >
              <option value="">Select industry</option>
              {industries.map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        <div className="relative">
          <label className={labelClass}>Stage</label>
          <div className="relative">
            <select
              className={`${inputClass} appearance-none pr-10`}
              value={form.stage}
              onChange={(e) => setForm({ ...form, stage: e.target.value })}
              required
            >
              <option value="">Select stage</option>
              {stages.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>One-line Description</label>
          <textarea
            placeholder="Describe your startup in one line..."
            className={`${inputClass} resize-none`}
            rows={2}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>

        <div>
          <label className={labelClass}>Target Market</label>
          <input
            type="text"
            placeholder="e.g., SMBs in North America"
            className={inputClass}
            value={form.targetMarket}
            onChange={(e) => setForm({ ...form, targetMarket: e.target.value })}
          />
        </div>

        <div>
          <label className={labelClass}>Monthly Budget</label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={1000}
              max={100000}
              step={1000}
              value={form.monthlyBudget}
              onChange={(e) => setForm({ ...form, monthlyBudget: Number(e.target.value) })}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-muted accent-primary"
            />
            <span className="min-w-[80px] text-right font-mono text-sm text-primary">
              ${form.monthlyBudget.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="btn-glow mt-8 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold text-primary-foreground"
      >
        <Rocket className="h-5 w-5" />
        Analyze Now
      </motion.button>
    </motion.form>
  );
};

export default StartupForm;