import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

export const MoodCheckIn = () => {
  const navigate = useNavigate();

  return (
    <Card className="mx-4 mb-6">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Daily Mood Check-in</CardTitle>
        <p className="text-sm text-muted-foreground">How are you feeling today?</p>
      </CardHeader>
      <CardContent>
        <Button 
          className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-3 rounded-xl font-medium"
          onClick={() => navigate('/mood-check-in')}
        >
          Start Check-in
        </Button>
      </CardContent>
    </Card>
  );
};