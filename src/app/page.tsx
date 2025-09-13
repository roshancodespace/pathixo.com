"use client"
import Beams from "@/components/Beams";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import LogoLoop from "@/components/LogoLoop";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Problems } from "@/components/problems";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";

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
        <Hero />
        <div className="rounded-t-[2.5em] bg-zinc-950 -mt-[2rem]">
          <Problems />
        </div>
        {/* <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#09090b"
          ariaLabel="Technology partners"
          className="bg-zinc-950 h-[10vw]"
        /> */}
        <div className="w-screen relative flex justify-center bg-zinc-950">
          {/* <div className="absolute left-0 top-0 w-screen bottom-0 z-0">
           
          </div> */}
          <Services />
        </div>
        {/* <WhyChooseUsPage/> */}
        <Testimonials />
      </div>
      <Footer />
      <ScrollProgress className="top-[1px] h-[2px]" />
    </>
  );
}
