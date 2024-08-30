import { Badge } from "./ui/badge";

const SkillsSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xl font-bold">Skills</p>
      <div className="flex flex-wrap items-center gap-2">
        <Badge className="uppercase px-2py-3">Javascript</Badge>
        <Badge>Typescript</Badge>
        <Badge>Java</Badge>
        <Badge>React</Badge>
        <Badge>Redux</Badge>
        <Badge>Tailwind</Badge>
        <Badge>Next.js</Badge>
        <Badge>Node.js</Badge>
        <Badge>Express.js</Badge>
        <Badge>MongoDB</Badge>
        <Badge>PostgreSQL</Badge>
        <Badge>Prisma</Badge>
        <Badge>Docker</Badge>
        <Badge>WebSockets</Badge>
        <Badge>WebRtc</Badge>
        <Badge>Git</Badge>
        <Badge>GitHub</Badge>
      </div>
    </div>
  );
};

export default SkillsSection;
