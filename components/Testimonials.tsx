import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Lifestyle Creator',
      content:
        'ShortsAI has helped me grow from 1k to 50k subscribers in just 3 months. The AI understands exactly what makes engaging content.',
      avatar: '/placeholder-avatar.jpg',
    },
    {
      name: 'Mike Chen',
      role: 'Tech Reviewer',
      content:
        'I was spending hours editing Shorts manually. Now I create 5-10 high-quality Shorts per week in a fraction of the time.',
      avatar: '/placeholder-avatar.jpg',
    },
    {
      name: 'Alexis Rodriguez',
      role: 'Marketing Agency',
      content:
        'We manage 15+ client channels and ShortsAI has been a game-changer for our content production workflow.',
      avatar: '/placeholder-avatar.jpg',
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Thousands of Creators
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Don`&apos;`t just take our word for it. Here`&apos;`s what our users
            say.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <p className="italic">`&quot;`{testimonial.content}`&quot;`</p>
              </CardContent>
              <CardHeader className="flex flex-row items-center gap-4 pt-0">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
