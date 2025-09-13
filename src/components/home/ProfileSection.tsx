import { User } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const ProfileSection = () => {
  return (
    <Card className="mx-4 mb-6 p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/10">
      <div className="flex items-center justify-center">
        <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center">
          <User size={32} className="text-muted-foreground" />
        </div>
      </div>
    </Card>
  );
};