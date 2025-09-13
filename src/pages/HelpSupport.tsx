import { ArrowLeft, HelpCircle, MessageSquare, Phone, Mail, ExternalLink, Search, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const HelpSupport = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleContactSupport = (method: string) => {
    toast({
      title: "Contact initiated",
      description: `Opening ${method} support...`,
    });
  };

  const faqItems = [
    {
      question: "How do I track my mood daily?",
      category: "Mood Tracking"
    },
    {
      question: "Is my data private and secure?",
      category: "Privacy"
    },
    {
      question: "How do I join community discussions?",
      category: "Community"
    },
    {
      question: "Can I export my mood data?",
      category: "Data"
    },
    {
      question: "How to get crisis support?",
      category: "Emergency"
    },
    {
      question: "Setting up notifications",
      category: "Settings"
    }
  ];

  const contactOptions = [
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our support team',
      subtitle: 'Usually responds within 5 minutes',
      action: () => handleContactSupport('live chat')
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      subtitle: 'Response within 24 hours',
      action: () => handleContactSupport('email')
    },
    {
      icon: Phone,
      title: 'Crisis Hotline',
      description: 'Immediate crisis support',
      subtitle: '24/7 availability',
      action: () => handleContactSupport('crisis hotline')
    }
  ];

  const resources = [
    {
      title: 'User Guide',
      description: 'Complete guide to using SupportSphere',
      icon: HelpCircle
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video walkthroughs',
      icon: ExternalLink
    },
    {
      title: 'Mental Health Resources',
      description: 'Curated educational content and tools',
      icon: HelpCircle
    },
    {
      title: 'Community Guidelines',
      description: 'Rules and best practices for our community',
      icon: ExternalLink
    }
  ];

  return (
    <MobileLayout currentTab="profile">
      <div className="bg-background min-h-screen">
        <header className="flex items-center justify-between p-4 bg-card border-b">
          <Button variant="ghost" size="sm" onClick={() => navigate('/profile')}>
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-lg font-semibold">Help & Support</h1>
          <div className="w-10" />
        </header>

        <div className="p-4 space-y-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Search help articles..."
              className="pl-10"
            />
          </div>

          {/* Contact Support */}
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3 px-1">
              Contact Support
            </h3>
            <div className="space-y-3">
              {contactOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <Card key={option.title}>
                    <div
                      onClick={option.action}
                      className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon size={20} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{option.title}</h4>
                          <p className="text-xs text-muted-foreground">{option.description}</p>
                          <p className="text-xs text-primary mt-0.5">{option.subtitle}</p>
                        </div>
                      </div>
                      <ChevronRight size={16} className="text-muted-foreground" />
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3 px-1">
              Frequently Asked Questions
            </h3>
            <Card>
              <div className="divide-y divide-border">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <HelpCircle size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{item.question}</h4>
                        <p className="text-xs text-muted-foreground">{item.category}</p>
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-muted-foreground" />
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3 px-1">
              Resources
            </h3>
            <Card>
              <div className="divide-y divide-border">
                {resources.map((resource, index) => {
                  const Icon = resource.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon size={20} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{resource.title}</h4>
                          <p className="text-xs text-muted-foreground">{resource.description}</p>
                        </div>
                      </div>
                      <ExternalLink size={16} className="text-muted-foreground" />
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Emergency Support */}
          <Card className="border-destructive/20 bg-destructive/5">
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-3">
                <Phone className="text-destructive" size={24} />
                <div>
                  <h3 className="font-semibold text-sm text-destructive">Crisis Support</h3>
                  <p className="text-xs text-muted-foreground">
                    If you're in crisis, don't wait - get help immediately
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <Button 
                  variant="destructive" 
                  size="sm" 
                  className="w-full"
                  onClick={() => handleContactSupport('crisis hotline')}
                >
                  Call Crisis Hotline: 988
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => handleContactSupport('emergency')}
                >
                  Emergency Services: 911
                </Button>
              </div>
            </div>
          </Card>

          {/* App Info */}
          <Card className="p-4 text-center">
            <h3 className="font-semibold text-sm mb-2">SupportSphere v1.0.0</h3>
            <p className="text-xs text-muted-foreground mb-3">
              Your mental health companion
            </p>
            <div className="flex justify-center space-x-4 text-xs text-muted-foreground">
              <button className="hover:text-foreground transition-colors">Terms</button>
              <button className="hover:text-foreground transition-colors">Privacy</button>
              <button className="hover:text-foreground transition-colors">Feedback</button>
            </div>
          </Card>
        </div>
      </div>
    </MobileLayout>
  );
};

export default HelpSupport;