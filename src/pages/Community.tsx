import { useState } from 'react';
import { ArrowLeft, Search, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { useNavigate } from 'react-router-dom';

const forums = [
  {
    id: 1,
    name: 'Gaming Community',
    description: 'Connect with students who share your interest...',
    icon: '🎮',
    color: 'bg-community-gaming',
    members: 234
  },
  {
    id: 2,
    name: 'Academic Support',
    description: 'A space for students to discuss and support...',
    icon: '📚',
    color: 'bg-community-academic',
    members: 156
  },
  {
    id: 3,
    name: 'Creative Arts',
    description: 'Share your creative projects, get feedback...',
    icon: '🎨',
    color: 'bg-community-creative',
    members: 89
  },
  {
    id: 4,
    name: 'Mental Wellness',
    description: 'Discuss mental health topics, share...',
    icon: '💚',
    color: 'bg-community-wellness',
    members: 312
  },
  {
    id: 5,
    name: 'Social Advocacy',
    description: 'Connect with other students who are passionate...',
    icon: '🌍',
    color: 'bg-community-advocacy',
    members: 78
  },
];

const Community = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredForums = forums.filter(forum =>
    forum.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    forum.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MobileLayout currentTab="community">
      <div className="bg-background min-h-screen">
        <header className="flex items-center justify-between p-4 bg-card border-b">
          <Button variant="ghost" size="sm">
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-lg font-semibold">Community Forums</h1>
          <div className="w-10" />
        </header>

        <div className="p-4">
          <div className="relative mb-6">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search forums"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="space-y-4 mb-6">
            {filteredForums.map((forum) => (
              <Card 
                key={forum.id}
                className="p-4 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => navigate(`/forum/${forum.id}`)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl ${forum.color} flex items-center justify-center text-white text-xl`}>
                      {forum.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm mb-1">{forum.name}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {forum.description}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {forum.members} members
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="ml-4 text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                    Join
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <Button className="w-full bg-success hover:bg-success/90 text-success-foreground py-3 rounded-xl font-medium">
            <Plus size={20} className="mr-2" />
            Create New Forum
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Community;