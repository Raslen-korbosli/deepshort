import { Bot } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';

export default function SmallCard() {
  return (
    <Card>
      <CardHeader>
        <Bot className="text-blue-500 mb-4" size={48} />
        <CardTitle>AI Content Generation</CardTitle>
        <CardDescription>
          Generate unique video scripts, ideas, and narratives tailored to your
          niche.
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
