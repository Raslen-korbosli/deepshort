import { Check } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  period?: string;
  buttonText?: string;
}

export default function PricingCard({
  title = 'Basic Plan',
  price = '$9.99',
  description = 'Perfect for individuals and small teams',
  features = ['Up to 5 users'],
  popular = false,

  buttonText = 'Get Started',
}: PricingCardProps) {
  return (
    <Card
      className={`w-full max-w-sm hover:bg-accent mx-auto ${
        popular ? 'border-primary shadow-lg relative' : ''
      }`}
    >
      {popular && (
        <Badge className="absolute -top-2 right-6 bg-primary hover:bg-primary">
          Most Popular
        </Badge>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4 flex items-baseline">
          <span className="text-3xl font-bold tracking-tight">{price}</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className={`w-full ${
            popular ? 'bg-primary hover:bg-primary/90' : ''
          }`}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
