import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAccessibility } from '@/hooks/useAccessibility';

export const ThemeToggle = () => {
  const { settings, toggleSetting } = useAccessibility();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => toggleSetting('darkMode')}
      className="w-9 h-9 p-0"
    >
      {settings.darkMode ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};