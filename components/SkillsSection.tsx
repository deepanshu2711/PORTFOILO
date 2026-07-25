import { Badge } from "./ui/badge";

const SkillsSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xl font-bold">Skills</p>
      <div className="flex flex-wrap items-center gap-2">
        <Badge>Javascript</Badge>
        <Badge>Typescript</Badge>
        <Badge>Python</Badge>
        <Badge>React</Badge>
        <Badge>Redux</Badge>
        <Badge>Tailwind</Badge>
        <Badge>Next.js</Badge>
        <Badge>Node.js</Badge>
        <Badge>Express.js</Badge>
        <Badge>FastAPI</Badge>
        <Badge>MongoDB</Badge>
        <Badge>PostgreSQL</Badge>
        <Badge>Prisma</Badge>
        <Badge>Docker</Badge>
        <Badge>WebSockets</Badge>
        <Badge>Git</Badge>
        <Badge>GitHub</Badge>
        <Badge>CI/CD</Badge>
        <Badge>LangChain</Badge>
        <Badge>LangGraph</Badge>
        <Badge>RAG</Badge>
        <Badge>GenAI</Badge>
        <Badge>Multi-Agents</Badge>
      </div>
    </div>
  );
};

export default SkillsSection;
