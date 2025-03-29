'use client';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from './ui/card';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import { EmblaOptionsType } from 'embla-carousel';
import { useRef } from 'react';

export default function ExploreSection() {
  const plugin = useRef(
    Autoplay({
      delay: 0,
      stopOnInteraction: false,
    })
  );
  const options: EmblaOptionsType = {
    align: 'start',
    loop: true,
    skipSnaps: true,
    duration: 5000,
  };
  return (
    <section className="container mx-auto px-4 py-16 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold  mb-4">
          Explore AI-Generated Shorts
        </h2>
        <p className="md:text-xl text-description dark:text-secondary-foreground/90  max-w-2xl mx-auto">
          Discover the incredible variety of content you can create with
          ShortsAI across different niches.
        </p>
      </div>

      <Carousel plugins={[plugin.current]} className=" " opts={options}>
        <CarouselContent>
          {Array.from({ length: 15 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/8"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
