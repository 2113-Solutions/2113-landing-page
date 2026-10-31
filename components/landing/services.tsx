import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Modern, responsive websites that establish your online presence, communicate your brand, and turn visitors into customers.",
    tags: ["Business Websites", "Landing Pages", "E-commerce"],
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "Custom-built applications designed around your business processes, helping you manage operations and deliver better experiences.",
    tags: ["Custom Applications", "Dashboards", "SaaS Development"],
  },
  {
    number: "03",
    title: "Business Automation",
    description:
      "Reduce repetitive work and streamline everyday operations through intelligent workflows and connected systems.",
    tags: ["Workflow Automation", "System Integration", "Process Optimization"],
  },
  {
    number: "04",
    title: "Custom Digital Solutions",
    description:
      "Have a problem that existing software cannot solve? We turn unique business requirements into practical digital solutions.",
    tags: ["Internal Tools", "Business Systems", "Custom Software"],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-32">
      <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-medium tracking-[0.25em] text-muted-foreground uppercase">
              What We Do
            </span>
          </div>

          <h2 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Solutions built around
            <span className="text-muted-foreground"> your business.</span>
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          We combine technology and thoughtful problem-solving to create digital
          solutions that make businesses work better.
        </p>
      </div>

      {/* Services List */}
      <div className="border-t">
        {services.map((service) => (
          <div
            key={service.number}
            className="group grid gap-6 border-b py-10 transition-colors md:grid-cols-[80px_1fr_1fr_40px] md:items-center md:gap-10"
          >
            {/* Number */}
            <span className="text-sm text-muted-foreground">
              {service.number}
            </span>

            {/* Title */}
            <h3 className="text-2xl font-medium tracking-tight transition-colors group-hover:text-muted-foreground sm:text-3xl">
              {service.title}
            </h3>

            {/* Description & Tags */}
            <div>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <ArrowUpRight className="hidden h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 md:block" />
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
          Not sure what your business needs? Let&apos;s talk about your ideas
          and find the right solution.
        </p>

        <Link
          href="/#contact"
          className="group inline-flex w-fit items-center gap-2 text-sm font-medium"
        >
          Discuss a project
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </section>
  )
}
