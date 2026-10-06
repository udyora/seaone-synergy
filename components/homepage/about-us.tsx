"use client";
import { motion } from "framer-motion";
import { User2 } from "lucide-react";
import SectionHeader from "../common/section-header";
import { fadeIn, staggerContainer } from "../framer/variants";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-12 lg:scroll-mt-6 py-18 lg:py-24 relative overflow-hidden"
    >
      <div className="absolute -left-40 top-1/4 w-96 h-96 bg-brand/5 pointer-events-none blur-3xl" />
      <div className="absolute -right-40 bottom-1/4 w-96 h-96 bg-brand/5 pointer-events-none blur-3xl" />

      <div className="container relative z-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-6 xl:gap-12 items-center"
        >
          <motion.div variants={fadeIn} className="space-y-4 text-left">
            <SectionHeader
              badgeText="About Us"
              badgeIcon={User2}
              title="Fast, Reliable, and Hassle-Free Loans – Anytime, Anywhere!"
              subtitle="Welcome to Seaone Fintech"
              alignment="left"
            />

            <p className="text-muted font-light leading-relaxed text-sm sm:text-base">
              Seaone Fintech is the financial solutions brand of Seaone Synergy
              Pvt Ltd, created to make financing simple, accessible, and
              hassle-free for individuals, entrepreneurs, and businesses.
            </p>
            <p className="text-muted font-light leading-relaxed text-sm sm:text-base">
              Through Seaone Fintech, we offer assistance across a wide range of
              financial requirements, including Personal Loans, Business Loans,
              Home Loans, Project Loans, Loan Against Property, Working Capital
              Finance, and other customized funding solutions.
            </p>
            <p className="text-muted font-light leading-relaxed text-sm sm:text-base">
              With a focus on transparency, reliability, and customer
              satisfaction, our team helps clients identify suitable financing
              options and guides them through the process—from understanding
              requirements and documentation to application and approval.
            </p>
            <p className="text-muted font-light leading-relaxed text-sm sm:text-base">
              At Seaone Fintech, we believe that accessing finance should be
              simple, transparent, and stress-free. Whether you are looking to
              meet a personal financial requirement, expand your business,
              purchase a property, or fund a new project, Seaone Fintech is here
              to support your financial journey.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn}
            className="relative max-sm:aspect-4/4 max-md:aspect-4/3 max-lg:aspect-4/2 w-full h-full rounded-xl overflow-hidden p-2 lg:p-3"
          >
            <motion.div
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-brand/40 blur-xl"
            />
            <img
              src="/about-us.webp"
              alt="Bespoke Consultation"
              className="relative z-10 w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
