import * as LucideIcons from "lucide-react";
import { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

interface CapabilityIconProps {
  iconName: string;
  className?: string;
  size?: number;
}

const iconMap: Record<string, ComponentType<LucideProps>> = {
  HeartPulse: LucideIcons.HeartPulse,
  Layers: LucideIcons.Layers,
  Smartphone: LucideIcons.Smartphone,
  Server: LucideIcons.Server,
  LifeBuoy: LucideIcons.LifeBuoy,
  Database: LucideIcons.Database,
  Code: LucideIcons.Code,
  Cloud: LucideIcons.Cloud,
  Wrench: LucideIcons.Wrench,
};

export function CapabilityIcon({
  iconName,
  className = "",
  size = 24,
}: CapabilityIconProps) {
  const IconComponent = iconMap[iconName] || LucideIcons.Code;

  return <IconComponent className={className} size={size} />;
}

