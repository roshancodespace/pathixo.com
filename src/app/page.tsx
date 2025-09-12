"use client"
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import LogoLoop from "@/components/LogoLoop";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Problems } from "@/components/problems";
import Services from "@/components/services";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiGraphql,
  SiDocker,
  SiKubernetes,
  SiAwsorganizations,
  SiGooglecloud,
  SiFirebase,
  SiVercel,
  SiGit,
  SiGithub,
  SiJest,
  SiFigma,
} from "react-icons/si"

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiPrisma />, title: "Prisma", href: "https://www.prisma.io" },
  { node: <SiGraphql />, title: "GraphQL", href: "https://graphql.org" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiKubernetes />, title: "Kubernetes", href: "https://kubernetes.io" },
  { node: <SiAwsorganizations />, title: "AWS", href: "https://aws.amazon.com" },
  { node: <SiGooglecloud />, title: "Google Cloud", href: "https://cloud.google.com" },
  { node: <SiFirebase />, title: "Firebase", href: "https://firebase.google.com" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiJest />, title: "Jest", href: "https://jestjs.io" },
  { node: <SiFigma />, title: "Figma", href: "https://figma.com" },
]


export default function Home() {
  return (
    <>
      <div className="relative">
        {/* <section className="w-screen left-0 z-50 -bottom-2 overflow-hidden fixed right-0">
          <GradualBlurMemo
            target="parent"
            position="bottom"
            height="8rem"
            strength={2}
            divCount={5}
            curve="bezier"
            exponential={true}
            opacity={1}
          />
        </section> */}
        <Hero />
        <div className="rounded-t-[2.5em] bg-[#060016] -mt-[2rem]">
          <Problems />
        </div>
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#060016"
          ariaLabel="Technology partners"
        />
        <div className="w-screen flex justify-center">
          <Services />
        </div>
      </div>
      <Footer />
      <ScrollProgress className="top-[1px] h-[2px]" />
    </>
  );
}
