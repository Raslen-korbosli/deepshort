import PricingCard from './pricingCard';

export default function PricingSection() {
  return (
    <section
      className="container mx-auto sm:px-4 py-16 text-center px-12"
      id="pricing"
    >
      <h2 className="text-3xl md:text-5xl font-bold  mb-4">
        Flexible Pricing for Creators
      </h2>
      <p className="text-xl text-description dark:text-secondary-foreground/90  max-w-2xl mx-auto">
        Choose a credit plan that fits your content creation needs and scale.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-8 mx-auto py-16">
        <PricingCard
          title=" Starter Pack"
          price="$0.00"
          description="Perfect for individuals just getting started"
          features={['3 credits']}
        />

        <PricingCard
          title="Basic Bundle"
          price="$5"
          description="Ideal for growing teams and businesses"
          features={['50 credits']}
        />

        <PricingCard
          title="Pro Package"
          price="$15"
          description="For large organizations with advanced needs"
          features={['200 credits']}
          popular={true}
        />
        <PricingCard
          title="Ultimate Plan"
          price="$30"
          description="For large organizations with advanced needs"
          features={['500 credits']}
        />
      </div>
    </section>
  );
}
