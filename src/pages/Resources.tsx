import { useState } from 'react';
import { ArrowLeft, ChevronRight, Brain, BookOpen, Heart, Moon, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { useNavigate } from 'react-router-dom';

const categories = ['All', 'Stress Management', 'Study Habits'];

const resources = [
  {
    id: 1,
    title: 'Stress Management Guide',
    description: 'Learn techniques to manage stress effectively.',
    icon: Brain,
    color: 'bg-community-wellness/10 text-community-wellness',
    category: 'Stress Management'
  },
  {
    id: 2,
    title: 'Effective Study Strategies',
    description: 'Improve your study skills and academic performance.',
    icon: BookOpen,
    color: 'bg-community-academic/10 text-community-academic',
    category: 'Study Habits'
  },
  {
    id: 3,
    title: 'Mindfulness Meditation',
    description: 'Practice mindfulness for better mental clarity.',
    icon: Heart,
    color: 'bg-community-creative/10 text-community-creative',
    category: 'Stress Management'
  },
  {
    id: 4,
    title: 'Sleep Hygiene Tips',
    description: 'Tips for improving your sleep quality.',
    icon: Moon,
    color: 'bg-info/10 text-info',
    category: 'Study Habits'
  },
  {
    id: 5,
    title: 'Focus Enhancement Audio',
    description: 'Binaural beats and nature sounds for concentration.',
    icon: Headphones,
    color: 'bg-community-gaming/10 text-community-gaming',
    category: 'Study Habits'
  },
];

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const filteredResources = selectedCategory === 'All' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  return (
    <MobileLayout currentTab="resources">
      <div className="bg-background min-h-screen">
        <header className="flex items-center justify-between p-4 bg-card border-b">
          <Button variant="ghost" size="sm">
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-lg font-semibold">Resources</h1>
          <div className="w-10" />
        </header>

        <div className="p-4">
          <div className="mb-6">
            <h2 className="text-sm font-medium mb-3 text-muted-foreground">Categories</h2>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Featured Resources</h2>
            <div className="space-y-3">
              {filteredResources.map((resource) => {
                const Icon = resource.icon;
                return (
                  <Card 
                    key={resource.id} 
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => navigate(`/resource/${resource.id}`)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-xl ${resource.color} flex items-center justify-center`}>
                            <Icon size={24} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-sm mb-1">{resource.title}</h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {resource.description}
                            </p>
                          </div>
                        </div>
                        <ChevronRight size={16} className="text-muted-foreground ml-2" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Resources;