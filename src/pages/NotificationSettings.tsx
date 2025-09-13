import { useState } from 'react';
import { ArrowLeft, Bell, BellOff, MessageSquare, Heart, Calendar, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const NotificationSettings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [settings, setSettings] = useState({
    pushNotifications: true,
    emailNotifications: false,
    communityUpdates: true,
    moodReminders: true,
    directMessages: true,
    supportReplies: true,
    weeklyDigest: false,
    emergencyAlerts: true
  });

  const [reminderTime, setReminderTime] = useState('18:00');
  const [digestDay, setDigestDay] = useState('sunday');

  const handleToggle = (setting: string) => {
    setSettings(prev => ({ ...prev, [setting]: !prev[setting] }));
    toast({
      title: "Notification updated",
      description: "Your preference has been saved.",
    });
  };

  const notificationSections = [
    {
      section: 'App Notifications',
      items: [
        {
          key: 'pushNotifications',
          icon: Bell,
          title: 'Push Notifications',
          description: 'Receive notifications on your device',
          value: settings.pushNotifications
        },
        {
          key: 'emailNotifications',
          icon: Bell,
          title: 'Email Notifications',
          description: 'Receive updates via email',
          value: settings.emailNotifications
        }
      ]
    },
    {
      section: 'Community & Social',
      items: [
        {
          key: 'communityUpdates',
          icon: MessageSquare,
          title: 'Community Updates',
          description: 'New posts and discussions in your groups',
          value: settings.communityUpdates
        },
        {
          key: 'directMessages',
          icon: MessageSquare,
          title: 'Direct Messages',
          description: 'When someone sends you a private message',
          value: settings.directMessages
        },
        {
          key: 'supportReplies',
          icon: Heart,
          title: 'Support & Replies',
          description: 'Responses to your posts and comments',
          value: settings.supportReplies
        }
      ]
    },
    {
      section: 'Wellness & Reminders',
      items: [
        {
          key: 'moodReminders',
          icon: Calendar,
          title: 'Mood Check-in Reminders',
          description: 'Daily reminders to log your mood',
          value: settings.moodReminders
        },
        {
          key: 'emergencyAlerts',
          icon: Zap,
          title: 'Crisis Support Alerts',
          description: 'Important safety and crisis resources',
          value: settings.emergencyAlerts
        },
        {
          key: 'weeklyDigest',
          icon: Bell,
          title: 'Weekly Digest',
          description: 'Summary of your weekly activity and progress',
          value: settings.weeklyDigest
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
          <h1 className="text-lg font-semibold">Notifications</h1>
          <div className="w-10" />
        </header>

        <div className="p-4 space-y-6">
          {notificationSections.map((section) => (
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

          {/* Timing Settings */}
          {settings.moodReminders && (
            <Card className="p-4">
              <h3 className="font-semibold text-sm mb-3">Reminder Timing</h3>
              <div className="space-y-3">
                <div>
                  <Label htmlFor="reminderTime" className="text-sm text-muted-foreground">
                    Daily mood check-in time
                  </Label>
                  <Select value={reminderTime} onValueChange={setReminderTime}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="09:00">9:00 AM</SelectItem>
                      <SelectItem value="12:00">12:00 PM</SelectItem>
                      <SelectItem value="18:00">6:00 PM</SelectItem>
                      <SelectItem value="21:00">9:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {settings.weeklyDigest && (
                  <div>
                    <Label htmlFor="digestDay" className="text-sm text-muted-foreground">
                      Weekly digest day
                    </Label>
                    <Select value={digestDay} onValueChange={setDigestDay}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sunday">Sunday</SelectItem>
                        <SelectItem value="monday">Monday</SelectItem>
                        <SelectItem value="friday">Friday</SelectItem>
                        <SelectItem value="saturday">Saturday</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            </Card>
          )}

          <Card className="p-4">
            <div className="flex items-center space-x-3 mb-3">
              <BellOff className="text-muted-foreground" size={20} />
              <div>
                <h3 className="font-semibold text-sm">Quiet Hours</h3>
                <p className="text-xs text-muted-foreground">
                  Pause non-urgent notifications during sleep hours
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full">
              Set Quiet Hours
            </Button>
          </Card>
        </div>
      </div>
    </MobileLayout>
  );
};

export default NotificationSettings;