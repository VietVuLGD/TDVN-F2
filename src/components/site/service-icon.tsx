import {
  BatteryCharging,
  Cpu,
  DraftingCompass,
  HardHat,
  LineChart,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  DraftingCompass,
  HardHat,
  Workflow,
  BatteryCharging,
  Cpu,
  LineChart,
  Wrench,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] ?? Workflow;
  return <Icon className={className} aria-hidden />;
}
