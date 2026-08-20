import heroSolar from "@/assets/hero-solar.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import projectMicrogrid from "@/assets/project-microgrid.jpg";
import projectTower from "@/assets/project-tower.jpg";
import projectAgri from "@/assets/project-agri.jpg";

export const imageMap: Record<string, string> = {
  "hero-solar": heroSolar,
  "about-team": aboutTeam,
  "project-industrial": projectIndustrial,
  "project-commercial": projectCommercial,
  "project-residential": projectResidential,
  "project-microgrid": projectMicrogrid,
  "project-tower": projectTower,
  "project-agri": projectAgri,
};

export { heroSolar, aboutTeam };

export function resolveImageUrl(src?: string): string | undefined {
  if (!src) return undefined;
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("/")) {
    return src;
  }
  return imageMap[src] ?? undefined;
}

export function getImage(key: string): string {
  return resolveImageUrl(key) ?? heroSolar;
}
