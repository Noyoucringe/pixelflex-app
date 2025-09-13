import { ChevronRight, Brain, BookOpen, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const resources = [
  {
    id: 1,
    title: 'Stress Management',
    description: 'Techniques to cope with academic pressure.',
    icon: Brain,
    color: 'bg-community-wellness/10 text-community-wellness'
  },
  {
    id: 2,
    title: 'Study Habits',
    description: 'Tips for effective learning and time management.',
    icon: BookOpen,
    color: 'bg-community-academic/10 text-community-academic'
  },
  {
    id: 3,
    title: 'Mindfulness Exercises',
    description: 'Practice to enhance focus and reduce stress.',
    icon: Heart,
    color: 'bg-community-creative/10 text-community-creative'
  },
];

export const CuratedResources = () => {
  const navigate = useNavigate();

  return (
    <Card className="mx-4 mb-6">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Curated Resources</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {resources.map((resource) => {
          const Icon = resource.icon;
          return (
            <div
              key={resource.id}
              onClick={() => navigate('/resources')}
              className="flex items-center justify-between p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-xl ${resource.color} flex items-center justify-center`}>
                  <Icon size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-sm">{resource.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{resource.description}</p>
                </div>
              </div>
              <ChevronRight size={16} className="text-muted-foreground" />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};