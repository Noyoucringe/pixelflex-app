import { useState } from 'react';
import { ArrowLeft, Shield, Eye, EyeOff, Lock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Privacy = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [settings, setSettings] = useState({
    profileVisibility: true,
    showOnlineStatus: false,
    allowDirectMessages: true,
    showMoodHistory: false,
    dataAnalytics: true,
    personalizedAds: false
  });

  const handleToggle = (setting: string) => {
    setSettings(prev => ({ ...prev, [setting]: !prev[setting] }));
    toast({
      title: "Setting updated",
      description: "Your privacy preference has been saved.",
    });
  };

  const privacySettings = [
    {
      section: 'Profile Privacy',
      items: [
        {
          key: 'profileVisibility',
          icon: Globe,
          title: 'Public Profile',
          description: 'Make your profile visible to other users',
          value: settings.profileVisibility
        },
        {
          key: 'showOnlineStatus',
          icon: Eye,
          title: 'Show Online Status',
          description: 'Let others see when you\'re online',
          value: settings.showOnlineStatus
        }
      ]
    },
    {
      section: 'Communication',
      items: [
        {
          key: 'allowDirectMessages',
          icon: Lock,
          title: 'Allow Direct Messages',
          description: 'Let other users send you private messages',
          value: settings.allowDirectMessages
        },
        {
          key: 'showMoodHistory',
          icon: EyeOff,
          title: 'Show Mood History',
          description: 'Display your mood check-ins on your profile',
          value: settings.showMoodHistory
        }
      ]
    },
    {
      section: 'Data & Analytics',
      items: [
        {
          key: 'dataAnalytics',
          icon: Shield,
          title: 'Usage Analytics',
          description: 'Help us improve the app with anonymous usage data',
          value: settings.dataAnalytics
        },
        {
          key: 'personalizedAds',
          icon: Eye,
          title: 'Personalized Ads',
          description: 'Show relevant ads based on your interests',
          value: settings.personalizedAds
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
          <h1 className="text-lg font-semibold">Privacy Settings</h1>
          <div className="w-10" />
        </header>

        <div className="p-4 space-y-6">
          {privacySettings.map((section) => (
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
                          onCheckedChange={() => handleToggle(item.key)}
                        />
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          ))}

          <Card className="p-4">
            <div className="flex items-center space-x-3 mb-3">
              <Shield className="text-primary" size={24} />
              <div>
                <h3 className="font-semibold text-sm">Data Protection</h3>
                <p className="text-xs text-muted-foreground">
                  Your data is encrypted and stored securely
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start">
                Download My Data
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start text-destructive">
                Delete Account
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Privacy;