/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useMemo } from 'react'
import dynamic from 'next/dynamic';
import ScrollFloat from './ScrollFloat';
import { NumberTicker } from './magicui/number-ticker';
import { COBEOptions } from 'cobe';

const Globe = dynamic(() => import('./magicui/globe').then((mod) => mod.Globe), {
    ssr: false,
    loading: () => <div className="h-[100px] w-full" /> 
});

const ScrollVelocityContainer = dynamic(() => import('./magicui/scroll-based-velocity').then((mod) => mod.ScrollVelocityContainer), { ssr: false });
const ScrollVelocityRow = dynamic(() => import('./magicui/scroll-based-velocity').then((mod) => mod.ScrollVelocityRow), { ssr: false });

export const testimonials = [
    {
        name: "Rohan Mehta",
        position: "CTO, CredHash Technologies (Bengaluru)",
        headline: "“Helped us streamline our cloud costs and improve reliability.”",
        subheadline:
            "Pathixo assisted us in re-architecting our microservices and reducing deployment friction. Our infra downtime dropped significantly.",
        avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=rohan",
    },
    {
        name: "Aishwarya Nair",
        position: "Co-Founder, Lurnify EdTech (Kochi)",
        headline: "“Clean UI, smooth performance — exactly what we needed.”",
        subheadline:
            "We collaborated with Pathixo for our learning app. Their team delivered fast, communicated clearly, and built with scalability in mind.",
        avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=aishwarya",
    },
    {
        name: "Vikram Deshpande",
        position: "Product Lead, MediRoute Health (Pune)",
        headline: "“Cloud migration done without disrupting our customers.”",
        subheadline:
            "Our legacy backend was a mess, but Pathixo handled the migration with zero downtime and excellent documentation.",
        avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=vikram",
    },
    {
        name: "Sanya Kapoor",
        position: "CEO, UrbanKart Retail Solutions (Delhi)",
        headline: "“Custom tools that actually improved our daily operations.”",
        subheadline:
            "The software Pathixo built for us cut manual work by nearly 40%. The team truly understood our retail workflow.",
        avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=sanya",
    },
    {
        name: "Arjun Bhat",
        position: "Operations Manager, TripSutra Travel Tech (Hyderabad)",
        headline: "“Reliable team — smooth communication and timely delivery.”",
        subheadline:
            "From planning to delivery, everything was transparent. Pathixo exceeded expectations given our tight timeline.",
        avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=arjun",
    },
];

const TestimonialCard = React.memo(({ tm }: { tm: typeof testimonials[0] }) => {
    return (
        <div
            className="rounded-xl mx-2 shadow-[0px_0px_2px_0px_#ffffff50] bg-black px-10 md:py-10 py-8 max-md:w-screen lg:max-w-xl md:max-w-lg h-full"
        >
            <div className="flex flex-col items-start gap-3">
                <h4 className="italic font-medium">Pathixo</h4>
                <h1 className="text-xl md:text-2xl text-wrap">{tm.headline}</h1>
                <p className="text-wrap max-md:text-[90%]">{tm.subheadline}</p>
            </div>

            <div className="flex items-center gap-3 mt-6">
                <img src={tm.avatar} alt={tm.name} className="rounded-full size-8 md:size-12" loading="lazy" />
                <div>
                    <h6 className="font-medium max-sm:text-[90%]">{tm.name}</h6>
                    <p className="text-sm text-gray-400 max-sm:text-[80%]">{tm.position}</p>
                </div>
            </div>
        </div>
    );
});
TestimonialCard.displayName = "TestimonialCard";

const Testimonials = () => {
    const globeConfig = useMemo<COBEOptions>(() => ({
        devicePixelRatio: 2, 
        width: 100,
        height: 100,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        scale: 1,
        mapSamples: 5000, 
        mapBrightness: 6,
        baseColor: [1, 1, 1],
        markerColor: [1, 0.5, 1],
        glowColor: [0.2, 0.2, 0.2],
        offset: [0, 0],
        markers: [
            { location: [37.7595, -122.4367], size: 0.03 },
            { location: [40.7128, -74.006], size: 0.1 },
        ],
        onRender: () => {},
    }), []);

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
                
                <Globe config={globeConfig} className='top-70 z-0' />
            </div>
            <div className='bg-black relative z-[100]'>
                <ScrollVelocityContainer>
                    <ScrollVelocityRow direction={1} baseVelocity={2}>
                        {
                            testimonials.map((tm, index) => (
                                <TestimonialCard tm={tm} key={`row1-${index}`} />
                            ))
                        }
                    </ScrollVelocityRow>
                    <ScrollVelocityRow direction={-1} baseVelocity={2}>
                        {
                            testimonials.map((tm, index) => (
                                <TestimonialCard tm={tm} key={`row2-${index}`} />
                            ))
                        }
                    </ScrollVelocityRow>
                </ScrollVelocityContainer>
            </div>
        </section>
    )
}

export default Testimonials