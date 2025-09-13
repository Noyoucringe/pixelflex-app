import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useProfile } from '@/hooks/useProfile';
import { useNavigate } from 'react-router-dom';

export const ProfileSection = () => {
  const { profile } = useProfile();
  const navigate = useNavigate();

  return (
    <Card className="mx-4 mb-6 p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/10">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={profile.profilePhoto} alt="Profile" />
            <AvatarFallback className="text-xl bg-primary/10 text-primary">
              {profile.firstName.charAt(0)}{profile.lastName.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-lg">{profile.firstName} {profile.lastName}</h3>
            <p className="text-sm text-muted-foreground">@{profile.username}</p>
          </div>
        </div>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => navigate('/profile')}
        >
          View Profile
        </Button>
      </div>
    </Card>
  );
};