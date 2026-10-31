import Link from "next/link"
import { ArrowUpRight, Mail } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-32">
      <div className="mb-16 flex items-center gap-3">
        <span className="h-px w-8 bg-primary" />
        <span className="text-xs font-medium tracking-[0.25em] text-muted-foreground uppercase">
          Get in Touch
        </span>
      </div>

      <div className="border-y py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-end">
          <div>
            <h2 className="max-w-3xl text-5xl leading-[1.08] font-semibold tracking-tight sm:text-6xl md:text-7xl">
              Have an idea?
              <br />
              Let&apos;s build
              <br />
              <span className="text-muted-foreground">something great.</span>
            </h2>

            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              Whether you need a website, a custom business application, or have
              an idea waiting to happen, we&apos;d love to hear about it.
            </p>
          </div>

          <div className="flex flex-col gap-8 md:items-end">
            <Link
              href="mailto:2113solutions@gmail.com"
              className="group inline-flex w-fit items-center gap-3 rounded-md bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              Start a Conversation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            <div className="md:text-right">
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
                Email Us Directly
              </p>
              <Link
                href="mailto:hello@2113solutions.com"
                className="mt-2 inline-block text-sm font-medium transition-colors hover:text-muted-foreground"
              >
                2113solutions@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Note */}
      <div className="flex flex-col justify-between gap-4 pt-8 sm:flex-row sm:items-center">
        <p className="text-sm text-muted-foreground">
          Good ideas deserve to be built.
        </p>

        <span className="text-xs tracking-widest text-muted-foreground uppercase">
          2113 Solutions — Let&apos;s make it happen.
        </span>
      </div>
    </section>
  )
}
