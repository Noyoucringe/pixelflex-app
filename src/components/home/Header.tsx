import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-card">
      <h1 className="text-2xl font-bold text-foreground">SupportSphere</h1>
      <Button variant="ghost" size="sm" className="p-2">
        <Settings size={20} className="text-muted-foreground" />
      </Button>
    </header>
  );
};