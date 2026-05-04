import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  { q: "How quickly can you respond to an emergency?", a: "Our average emergency response time is under 60 minutes. We have technicians on call 24/7, 365 days a year, ready to dispatch immediately to your location." },
  { q: "Do you provide free estimates?", a: "Yes. We provide free, no-obligation estimates for all non-emergency services. For emergency calls, we provide upfront pricing before any work begins." },
  { q: "Are your plumbers licensed and insured?", a: "Absolutely. All FlowFix technicians are fully licensed, bonded, and insured. We also invest in ongoing training to stay current with the latest plumbing technology." },
  { q: "What areas do you serve?", a: "We serve the entire Northern Virginia region including Arlington, Alexandria, Fairfax, Reston, Ashburn, Leesburg, McLean, Vienna, and surrounding communities." },
  { q: "Do you offer warranties on your work?", a: "Yes. All our repairs and installations come with a comprehensive workmanship warranty. Specific warranty terms vary by service type and are provided in writing." },
  { q: "Can you handle commercial plumbing projects?", a: "Absolutely. We provide full-service commercial plumbing for offices, restaurants, retail spaces, and multi-unit buildings. We understand the unique demands of commercial systems." },
];

export default function FAQSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-cerulean font-heading font-medium text-sm uppercase tracking-wider">Common Questions</span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mt-3">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-cerulean/30 data-[state=open]:shadow-md data-[state=open]:shadow-cerulean/5 transition-all"
            >
              <AccordionTrigger className="text-left font-heading font-medium text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}