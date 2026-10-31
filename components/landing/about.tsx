import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-center px-6 py-24"
    >
      <div className="mb-8 flex items-center gap-3">
        <span className="h-px w-8 bg-primary" />
        <span className="text-xs font-medium tracking-[0.25em] text-muted-foreground uppercase">
          About 2113 Solutions
        </span>
      </div>

      <h1 className="max-w-5xl text-5xl leading-[1.08] font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
        Technology should
        <br />
        make life <span className="text-muted-foreground">easier.</span>
      </h1>

      <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-end">
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          We are 2113 Solutions, a technology-driven company focused on building
          practical digital solutions that help businesses work smarter, operate
          better, and move forward.
        </p>

        <div className="flex flex-col gap-5 md:items-end">
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-right">
            From websites and business applications to workflow automation, we
            turn ideas into technology that makes a difference.
          </p>

          <Link
            href="/#services"
            className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-muted-foreground"
          >
            Explore what we do
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-2 gap-8 border-t pt-8 md:grid-cols-3">
        <div>
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Founded
          </p>
          <p className="mt-2 text-sm font-medium">Samal, Bataan</p>
        </div>

        <div>
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            What We Believe
          </p>
          <p className="mt-2 text-sm font-medium">
            Simplicity through technology
          </p>
        </div>

        <div className="col-span-2 md:col-span-1 md:text-right">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Our Focus
          </p>
          <p className="mt-2 text-sm font-medium">Building what&apos;s next.</p>
        </div>
      </div>
    </section>
  )
}
