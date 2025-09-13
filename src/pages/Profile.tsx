import { ArrowLeft, ChevronRight, Edit, Shield, Bell, Accessibility, HelpCircle, Flag, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useProfile } from '@/hooks/useProfile';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { profile } = useProfile();

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });
  };

  const menuItems = [
    {
      section: 'Account',
      items: [
        { icon: Edit, label: 'Edit Profile', description: 'Manage your personal information', action: () => navigate('/edit-profile') },
        { icon: Shield, label: 'Privacy', description: 'Adjust your privacy settings', action: () => navigate('/privacy') },
      ]
    },
    {
      section: 'Settings',
      items: [
        { icon: Bell, label: 'Notifications', description: 'Customize your notification preferences', action: () => navigate('/notifications') },
        { icon: Accessibility, label: 'Accessibility', description: 'Adjust app appearance and accessibility', action: () => navigate('/accessibility') },
      ]
    },
    {
      section: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help & Support', description: 'Get help and support', action: () => navigate('/help-support') },
        { icon: Flag, label: 'Report Issue', description: 'Report a problem or provide feedback', action: () => navigate('/report-issue') },
      ]
    }
  ];

  return (
    <MobileLayout currentTab="profile">
      <div className="bg-background min-h-screen">
        <header className="flex items-center justify-between p-4 bg-card border-b">
          <Button variant="ghost" size="sm">
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-lg font-semibold">Profile</h1>
          <ThemeToggle />
        </header>

        <div className="p-4">
          {/* Profile Header */}
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src={profile.profilePhoto} alt="Profile" />
                <AvatarFallback className="text-2xl bg-primary/10 text-primary">
                  {profile.firstName.charAt(0)}{profile.lastName.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <Button 
                size="sm" 
                className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-primary text-primary-foreground p-0"
                onClick={() => navigate('/edit-profile')}
              >
                <Edit size={14} />
              </Button>
            </div>
            <h2 className="text-xl font-bold mb-1">{profile.firstName} {profile.lastName}</h2>
            <p className="text-sm text-muted-foreground">@{profile.username}</p>
            <p className="text-sm text-muted-foreground">{profile.bio}</p>
            {profile.currentMood && (
              <div className="mt-3 inline-flex items-center gap-2 bg-card border rounded-full px-3 py-1">
                <span className="text-lg">{profile.currentMood.emoji}</span>
                <span className="text-sm text-muted-foreground">Feeling {profile.currentMood.label}</span>
              </div>
            )}
          </div>

          {/* Menu Sections */}
          <div className="space-y-6">
            {menuItems.map((section) => (
              <div key={section.section}>
                <h3 className="text-sm font-medium text-muted-foreground mb-3 px-1">
                  {section.section}
                </h3>
                <Card>
                  <div className="divide-y divide-border">
                    {section.items.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={index}
                          onClick={item.action}
                          className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                              <Icon size={20} className="text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium text-sm">{item.label}</h4>
                              <p className="text-xs text-muted-foreground mt-0.5">
                                {item.description}
                              </p>
                            </div>
                          </div>
                          <ChevronRight size={16} className="text-muted-foreground" />
                        </div>
                      );
                    })}
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Logout Button */}
          <div className="mt-8">
            <Button 
              onClick={handleLogout}
              variant="destructive" 
              className="w-full py-3 rounded-xl font-medium"
            >
              <LogOut size={20} className="mr-2" />
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Profile;