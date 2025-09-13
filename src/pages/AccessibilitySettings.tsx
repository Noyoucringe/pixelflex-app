import { ArrowLeft, Accessibility, Eye, Type, Palette, Volume2, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useAccessibility } from '@/hooks/useAccessibility';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const AccessibilitySettings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { settings, updateSetting, toggleSetting } = useAccessibility();

  const handleToggle = (setting: keyof typeof settings) => {
    toggleSetting(setting);
    toast({
      title: "Accessibility updated",
      description: "Your preference has been applied.",
    });
  };

  const handleFontSizeChange = (value: number[]) => {
    updateSetting('fontSize', value[0]);
  };

  const handleVolumeChange = (value: number[]) => {
    updateSetting('volume', value[0]);
  };

  const handleColorSchemeChange = (value: string) => {
    updateSetting('colorScheme', value);
    toast({
      title: "Color scheme updated",
      description: "Your color preference has been applied.",
    });
  };

  const handleLanguageChange = (value: string) => {
    updateSetting('language', value);
    toast({
      title: "Language updated",
      description: "App language has been changed.",
    });
  };

  const accessibilityOptions = [
    {
      section: 'Visual Accessibility',
      items: [
        {
          key: 'highContrast',
          icon: Eye,
          title: 'High Contrast',
          description: 'Increase contrast for better visibility',
          value: settings.highContrast
        },
        {
          key: 'largeText',
          icon: Type,
          title: 'Large Text',
          description: 'Use larger text sizes throughout the app',
          value: settings.largeText
        },
        {
          key: 'colorBlindSupport',
          icon: Palette,
          title: 'Color Blind Support',
          description: 'Adjust colors for color vision differences',
          value: settings.colorBlindSupport
        }
      ]
    },
    {
      section: 'Motor & Navigation',
      items: [
        {
          key: 'reduceMotion',
          icon: Accessibility,
          title: 'Reduce Motion',
          description: 'Minimize animations and transitions',
          value: settings.reduceMotion
        }
      ]
    },
    {
      section: 'Audio & Screen Reader',
      items: [
        {
          key: 'screenReader',
          icon: Volume2,
          title: 'Screen Reader Support',
          description: 'Optimize for assistive technologies',
          value: settings.screenReader
        }
      ]
    },
    {
      section: 'Theme & Display',
      items: [
        {
          key: 'darkMode',
          icon: Moon,
          title: 'Dark Mode',
          description: 'Use dark theme to reduce eye strain',
          value: settings.darkMode
        }
      ]
    }
  ];

  return (
    <MobileLayout currentTab="profile">
      <div className="bg-background min-h-screen">
        <header className="flex items-center justify-between p-4 bg-card border-b">
          <Button variant="ghost" size="sm" onClick={() => navigate('/profile')}>
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-lg font-semibold">Accessibility</h1>
          <ThemeToggle />
        </header>

        <div className="p-4 space-y-6">
          {accessibilityOptions.map((section) => (
            <div key={section.section}>
              <h3 className="text-sm font-medium text-muted-foreground mb-3 px-1">
                {section.section}
              </h3>
              <Card>
                <div className="divide-y divide-border">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.key}
                        className="flex items-center justify-between p-4"
                      >
                        <div className="flex items-center space-x-4 flex-1">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icon size={20} className="text-primary" />
                          </div>
                          <div className="flex-1">
                            <Label htmlFor={item.key} className="font-medium text-sm cursor-pointer">
                              {item.title}
                            </Label>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <Switch
                          id={item.key}
                          checked={item.value}
                          onCheckedChange={() => handleToggle(item.key as keyof typeof settings)}
                        />
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          ))}

          {/* Font Size Adjustment */}
          <Card className="p-4">
            <div className="flex items-center space-x-3 mb-4">
              <Type className="text-primary" size={20} />
              <div>
                <h3 className="font-semibold text-sm">Font Size</h3>
                <p className="text-xs text-muted-foreground">Adjust text size for comfort</p>
              </div>
            </div>
              <div className="space-y-3">
                <div className="px-2">
                  <Slider
                    value={[settings.fontSize]}
                    onValueChange={handleFontSizeChange}
                    max={24}
                    min={12}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>Small</span>
                    <span>Current: {settings.fontSize}px</span>
                    <span>Large</span>
                  </div>
                </div>
                <div className="text-center p-3 bg-muted rounded-lg" style={{ fontSize: `${settings.fontSize}px` }}>
                  Sample text preview
                </div>
              </div>
          </Card>

          {/* Color Scheme Selection */}
          <Card className="p-4">
            <div className="flex items-center space-x-3 mb-3">
              <Palette className="text-primary" size={20} />
              <div>
                <h3 className="font-semibold text-sm">Color Scheme</h3>
                <p className="text-xs text-muted-foreground">Choose your preferred color palette</p>
              </div>
            </div>
            <Select value={settings.colorScheme} onValueChange={handleColorSchemeChange}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="protanopia">Protanopia Friendly</SelectItem>
                <SelectItem value="deuteranopia">Deuteranopia Friendly</SelectItem>
                <SelectItem value="tritanopia">Tritanopia Friendly</SelectItem>
                <SelectItem value="monochrome">High Contrast Monochrome</SelectItem>
              </SelectContent>
            </Select>
          </Card>

          {/* Language Settings */}
          <Card className="p-4">
            <div className="flex items-center space-x-3 mb-3">
              <Accessibility className="text-primary" size={20} />
              <div>
                <h3 className="font-semibold text-sm">Language</h3>
                <p className="text-xs text-muted-foreground">App language and region</p>
              </div>
            </div>
            <Select value={settings.language} onValueChange={handleLanguageChange}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="spanish">Español</SelectItem>
                <SelectItem value="french">Français</SelectItem>
                <SelectItem value="german">Deutsch</SelectItem>
                <SelectItem value="chinese">中文</SelectItem>
              </SelectContent>
            </Select>
          </Card>

          {/* Audio Feedback */}
          {settings.screenReader && (
            <Card className="p-4">
              <div className="flex items-center space-x-3 mb-4">
                <Volume2 className="text-primary" size={20} />
                <div>
                  <h3 className="font-semibold text-sm">Audio Feedback</h3>
                  <p className="text-xs text-muted-foreground">Adjust sound and voice settings</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="px-2">
                  <Label className="text-sm text-muted-foreground">Voice Volume</Label>
                  <Slider
                    value={[settings.volume]}
                    onValueChange={handleVolumeChange}
                    max={100}
                    min={0}
                    step={5}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>Mute</span>
                    <span>{settings.volume}%</span>
                    <span>Loud</span>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </MobileLayout>
  );
};

export default AccessibilitySettings;