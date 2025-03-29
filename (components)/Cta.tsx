import { Button } from '@/(components)/ui/button';

export function CtaSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl rounded-xl bg-primary/10 p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Grow Your Channel with AI?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join thousands of creators saving time and increasing views with
            ShortsAI.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row justify-center">
            <Button className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg">
              Start Free Trial
            </Button>
            <Button variant="outline" className="px-8 py-4 text-lg">
              See Demo
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            No credit card required. 7-day free trial.
          </p>
        </div>
      </div>
    </section>
  );
}
