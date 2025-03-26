import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Create Viral YouTube Shorts{' '}
                <span className="text-primary">with AI</span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Generate high-quality, engaging YouTube Shorts in minutes. Grow
                your channel faster with our automated Shorts creation tool.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Input
                className="max-w-md"
                placeholder="Enter your video topic or script..."
                type="text"
              />
              <Button className="bg-primary hover:bg-primary/90">
                Generate Short
              </Button>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex -space-x-2">
                <Image
                  alt="User"
                  className="rounded-full border-2 border-white dark:border-gray-800"
                  height={32}
                  src="/placeholder-users.jpg"
                  style={{
                    aspectRatio: '32/32',
                    objectFit: 'cover',
                  }}
                  width={32}
                />
                <Image
                  alt="User"
                  className="rounded-full border-2 border-white dark:border-gray-800"
                  height={32}
                  src="/placeholder-users.jpg"
                  style={{
                    aspectRatio: '32/32',
                    objectFit: 'cover',
                  }}
                  width={32}
                />
                <Image
                  alt="User"
                  className="rounded-full border-2 border-white dark:border-gray-800"
                  height={32}
                  src="/placeholder-users.jpg"
                  style={{
                    aspectRatio: '32/32',
                    objectFit: 'cover',
                  }}
                  width={32}
                />
              </div>
              <span>Join 10,000+ creators growing with ShortsAI</span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-lg"
              height="450"
              src="/placeholder-hero.jpg"
              width="800"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
