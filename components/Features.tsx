import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import {
  Brain,
  ChartArea,
  LayoutTemplate,
  Upload,
  VideoIcon,
  Zap,
} from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      title: 'AI-Powered Script Generation',
      description:
        'Our AI writes engaging scripts based on your topic or existing content.',
      icon: <Brain className="h-6 w-6 text-primary" />,
    },
    {
      title: 'Auto Video Creation',
      description:
        'Transform scripts into complete Shorts with visuals, captions, and music.',
      icon: <VideoIcon className="h-6 w-6 text-primary" />,
    },
    {
      title: 'Trending Templates',
      description: 'Choose from proven templates that perform well on YouTube.',
      icon: <LayoutTemplate className="h-6 w-6 text-primary" />,
    },
    {
      title: 'One-Click Export',
      description: 'Directly upload to YouTube or download for editing.',
      icon: <Upload className="h-6 w-6 text-primary" />,
    },
    {
      title: 'Performance Analytics',
      description: 'Track how your Shorts perform and get optimization tips.',
      icon: <ChartArea className="h-6 w-6 text-primary" />,
    },
    {
      title: 'Batch Processing',
      description:
        'Create multiple Shorts at once for consistent content flow.',
      icon: <Zap className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need to Dominate YouTube Shorts
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Our AI handles the heavy lifting so you can focus on growing your
            channel.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
