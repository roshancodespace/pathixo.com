/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { ScrollVelocityContainer, ScrollVelocityRow } from './magicui/scroll-based-velocity';
import ScrollFloat from './ScrollFloat';
import { Globe } from './magicui/globe';
import { COBEOptions } from 'cobe';
import { NumberTicker } from './magicui/number-ticker';

export const testimonials = [
    {
        name: "Sarah Johnson",
        position: "CTO, FinTech Solutions",
        headline: "“A reliable partner for scaling our cloud infrastructure.”",
        subheadline:
            "Pathixo helped us modernize and optimize our cloud setup with zero hassle. The team is proactive, skilled, and always delivers on time.",
        avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
        name: "David Lee",
        position: "Founder, EduNext",
        headline: "“Outstanding mobile app development.”",
        subheadline:
            "We trusted Pathixo with our app idea and the results were beyond expectations. The UI/UX is clean and performance is flawless.",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Ananya Sharma",
        position: "Project Manager, HealthSphere",
        headline: "“Seamless and secure cloud migration.”",
        subheadline:
            "Pathixo’s support team handled everything with care. We moved our systems to a secure cloud environment with zero downtime.",
        avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
        name: "James Carter",
        position: "CEO, RetailPro",
        headline: "“Custom software that gave us a competitive edge.”",
        subheadline:
            "Pathixo took the time to understand our business challenges and delivered tailor-made software that boosted our operations.",
        avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
        name: "Maria Lopez",
        position: "Operations Head, TravelEase",
        headline: "“Exceeded expectations from consultation to delivery.”",
        subheadline:
            "Pathixo proved to be reliable, transparent, and highly skilled throughout the entire project lifecycle.",
        avatar: "https://i.pravatar.cc/150?img=5",
    },
];


const Testimonials = () => {

    return (
        <section id='testimonials' className='relative min-h-screen py-24 bg-gradient-to-b from-zinc-950 to-black'>
            <div className='flex flex-col justify-center items-center text-center mb-40'>
                <h6 className='tracking-widest uppercase'>
                    <ScrollFloat>
                        Testimonials
                    </ScrollFloat>
                </h6>
                <h1 className='text-3xl md:text-5xl font-medium mb-5 mt-5 z-[1]'>
                    Don&apos;t take our word for it. <br />Over <NumberTicker className='text-white' value={100} />+ people trust us</h1>
                <p className='z-10'>We care for our customer&apos;s satisfaction.</p>
                <Globe config={{
                    devicePixelRatio: 2,
                    width: 100,
                    height: 100,
                    phi: 0,
                    theta: 0,
                    dark: 1,
                    diffuse: 1.2,
                    scale: 1,
                    mapSamples: 16000,
                    mapBrightness: 6,
                    baseColor: [1, 1, 1],
                    markerColor: [1, 0.5, 1],
                    glowColor: [0.2, 0.2, 0.2],
                    offset: [0, 0],
                    markers: [
                        { location: [37.7595, -122.4367], size: 0.03 },
                        { location: [40.7128, -74.006], size: 0.1 },
                    ],
                } as COBEOptions} className='top-70 z-0' />
            </div>
            <div className='bg-black/50 relative z-[100]'>
                <ScrollVelocityContainer>
                    <ScrollVelocityRow direction={1} baseVelocity={2}>
                        {
                            testimonials.map((tm, key) => TestimonialCard({ tm, key }))
                        }
                    </ScrollVelocityRow>
                    <ScrollVelocityRow direction={-1} baseVelocity={2}>
                        {
                            testimonials.map((tm, key) => TestimonialCard({ tm, key }))
                        }
                    </ScrollVelocityRow>
                </ScrollVelocityContainer>
            </div>
        </section>
    )
}

const TestimonialCard = ({ tm, key }: { tm: typeof testimonials[0], key: number | string }) => {
    return (
        <div
            key={key}
            className="rounded-xl mx-2 shadow-[0px_0px_2px_0px_#ffffff50] bg-black px-10 md:py-10 py-8  max-md:w-screen lg:max-w-xl md:max-w-lg h-full"
        >
            <div className="flex flex-col items-start gap-3">
                <h4 className="italic font-medium">Pathixo</h4>
                <h1 className="text-xl md:text-2xl text-wrap">{tm.headline}</h1>
                <p className="text-wrap max-md:text-[90%]">{tm.subheadline}</p>
            </div>

            {/* client info pinned at bottom */}
            <div className="flex items-center gap-3 mt-6">
                <img src={tm.avatar} alt={tm.name} className="rounded-full size-8 md:size-12" />
                <div>
                    <h6 className="font-medium max-sm:text-[90%]">{tm.name}</h6>
                    <p className="text-sm text-gray-400 max-sm:text-[80%]">{tm.position}</p>
                </div>
            </div>
        </div>
    );
};


export default Testimonials