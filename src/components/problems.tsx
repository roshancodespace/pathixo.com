"use client"

import React from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";

export function Problems () {
  return (
    <section className="h-[105vh] w-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h3
              initial={{ x: -12, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="text-2xl font-bold"
            >
              The problem businesses keep bumping into
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.45 }}
              className="mt-4 text-slate-600 max-w-lg"
            >
              Disconnected vendors, brittle infra, and long release cycles slow down growth.
              Building and maintaining websites, apps, and cloud platforms across multiple
              vendors creates friction, increases cost, and steals focus from product work.
            </motion.p>

            <motion.div
              initial={{ y: 8, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
              className="mt-6 space-y-4"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-indigo-50 flex items-center justify-center font-semibold text-black">1</div>
                <div>
                  <div className="font-semibold">Single partner</div>
                  <div className="text-sm text-slate-500">One team for web, app and cloud — less context switching.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center font-semibold text-black">2</div>
                <div>
                  <div className="font-semibold">Faster launches</div>
                  <div className="text-sm text-slate-500">Opinionated stacks and best-practice pipelines to ship quickly.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-rose-50 flex items-center justify-center font-semibold text-black">3</div>
                <div>
                  <div className="font-semibold">Predictable scaling</div>
                  <div className="text-sm text-slate-500">Cloud-native patterns and SLAs so growth doesn’t break things.</div>
                </div>
              </div>
            </motion.div>
          </div>

          <aside className="h-full">
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl p-6 bg-gradient-to-br from-slate-50 to-white border border-slate-100 shadow-sm h-full"
            >
              <h4 className="font-semibold">Our approach</h4>
              <p className="mt-2 text-sm text-slate-600">We act as your engineering partner — building the product, owning the platform, and setting up a repeatable delivery process.</p>

              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>• Tailored architecture & migration planning</li>
                <li>• CI/CD pipelines and observability</li>
                <li>• Security & compliance best practices</li>
                <li>• 24/7 support for critical incidents</li>
              </ul>

              <div className="mt-5">
                <Button variant="default" onClick={() => alert('Contact sales')}>Talk to an engineer</Button>
              </div>
            </motion.div>
          </aside>
        </div>
      </section>
  );
}
