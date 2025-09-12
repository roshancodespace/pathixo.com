"use client"
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Problems } from "@/components/problems";

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
      </div>
      <Footer />
      <ScrollProgress className="top-[1px] h-[2px]" />
    </>
  );
}
