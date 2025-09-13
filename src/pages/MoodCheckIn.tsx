import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useProfile } from '@/hooks/useProfile';

const moods = [
  { id: 'happy', emoji: '😊', label: 'Happy', color: 'bg-mood-happy/20 border-mood-happy text-mood-happy' },
  { id: 'anxious', emoji: '😰', label: 'Anxious', color: 'bg-mood-anxious/20 border-mood-anxious text-mood-anxious' },
  { id: 'stressed', emoji: '😫', label: 'Stressed', color: 'bg-mood-stressed/20 border-mood-stressed text-mood-stressed' },
  { id: 'neutral', emoji: '😐', label: 'Neutral', color: 'bg-mood-neutral/20 border-mood-neutral text-mood-neutral' },
];

const MoodCheckIn = () => {
  const [selectedMood, setSelectedMood] = useState<string>('');
  const [notes, setNotes] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();
  const { updateMood } = useProfile();

  const handleSubmit = () => {
    if (!selectedMood) {
      toast({
        title: "Please select a mood",
        description: "Choose how you're feeling today before submitting.",
        variant: "destructive",
      });
      return;
    }

    const selectedMoodData = moods.find(m => m.id === selectedMood);
    if (selectedMoodData) {
      updateMood({
        id: selectedMoodData.id,
        emoji: selectedMoodData.emoji,
        label: selectedMoodData.label
      });
    }

    toast({
      title: "Mood check-in completed!",
      description: "Thank you for sharing how you're feeling today.",
    });

    navigate('/');
  };

  return (
    <div className="mobile-container bg-background min-h-screen">
      <header className="flex items-center justify-between p-4 bg-card border-b">
        <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
          <ArrowLeft size={20} />
        </Button>
        <div className="text-center">
          <span className="text-sm text-muted-foreground">1 / 3</span>
        </div>
        <div className="w-10" />
      </header>

      <div className="p-4 pt-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Daily Mood Check-in</h1>
          <h2 className="text-xl text-foreground mb-8">How are you feeling today?</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {moods.map((mood) => (
            <Card
              key={mood.id}
              className={`p-4 cursor-pointer transition-all border-2 ${
                selectedMood === mood.id 
                  ? mood.color
                  : 'border-border hover:border-muted-foreground/50'
              }`}
              onClick={() => setSelectedMood(mood.id)}
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{mood.emoji}</div>
                <span className="font-medium">{mood.label}</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium mb-3 text-muted-foreground">
            What's on your mind?
          </label>
          <Textarea
            placeholder="Tell us a little more... (optional)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="min-h-[100px] resize-none"
          />
        </div>

        <Button 
          onClick={handleSubmit}
          className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-3 rounded-xl font-medium"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default MoodCheckIn;