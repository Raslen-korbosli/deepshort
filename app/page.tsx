import ExploreSection from '@/components/ExploreSection';
import { Footer } from '@/components/Footer';
import NavBar from '@/components/NavBar';
import PricingSection from '@/components/PricingSection';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import AnimatedSection from '@/lib/framer-motion';
import { Bot, Video, Zap } from 'lucide-react';

export default async function ShortsAILandingPage() {
  return (
    <div className="min-h-screen  ">
      {/* Navigation */}
      <NavBar />
      <AnimatedSection threshold={0.1}>
        <main className="container mx-auto px-4 py-2 sm:py-16 text-center">
          <div className="mt-12 mx-auto max-w-4xl">
            <div className="inline-block bg-indigo-100 text-indigo-600 font-semibold px-4 py-2 rounded-full text-sm mb-4">
              🚀 AI-Powered Content Creation
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold  mb-6">
            Create Viral YouTube Shorts with AI
          </h1>
          <p className="md:text-xl text-description dark:text-secondary-foreground/90 max-w-2xl mx-auto mb-8">
            Transform your content creation with AI-powered YouTube Shorts.
            Generate engaging, professional videos in minutes, no editing skills
            required
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="text-lg">
              Start Creating Free
            </Button>
          </div>
        </main>
      </AnimatedSection>
      {/* Features Section */}
      <AnimatedSection threshold={0.3}>
        <section className="container mx-auto px-4 py-16" id="features">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold  mb-4">
              Powerful AI-Driven Features
            </h2>
            <p className="md:text-xl text-description  dark:text-secondary-foreground/90  max-w-2xl mx-auto">
              Leverage cutting-edge AI to create YouTube Shorts that capture
              attention and drive engagement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8  ">
            <AnimatedSection threshold={0.8}>
              {' '}
              <Card className="hover:-translate-y-2 transition-transform ease-out">
                <CardHeader>
                  <Bot className="text-blue-500 mb-4" size={48} />
                  <CardTitle>AI Content Generation</CardTitle>
                  <CardDescription>
                    Generate unique video scripts, ideas, and narratives
                    tailored to your niche.
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedSection>

            <AnimatedSection threshold={0.7}>
              <Card className="hover:-translate-y-2 transition-transform ease-out">
                <CardHeader>
                  <Video className="text-green-500 mb-4" size={48} />
                  <CardTitle>Automated Editing</CardTitle>
                  <CardDescription>
                    Instant video compilation with AI-powered editing and
                    transitions.
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedSection>

            <AnimatedSection threshold={0.6}>
              {' '}
              <Card className="hover:-translate-y-2 transition-transform ease-out">
                <CardHeader>
                  <Zap className="text-yellow-500 mb-4" size={48} />
                  <CardTitle>Quick Production</CardTitle>
                  <CardDescription>
                    Create professional-quality Shorts in minutes, not hours.
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>
      <AnimatedSection threshold={0.3}>
        {/* explore */}
        <ExploreSection />
      </AnimatedSection>

      {/* pricing section */}
      <AnimatedSection threshold={0.2}>
        {' '}
        <PricingSection />
      </AnimatedSection>

      {/* Footer */}
      <AnimatedSection threshold={0.3}>
        <Footer />
      </AnimatedSection>
    </div>
  );
}
