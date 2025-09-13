import { useState } from 'react';
import { ArrowLeft, Heart, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const messages = [
  {
    id: 1,
    user: 'WanderingCloud',
    avatar: 'WC',
    time: '2 hours ago',
    content: "I'm feeling really overwhelmed with my coursework and personal life right now. It's hard to balance everything, and I'm starting to feel burnt out. Any advice for managing stress and staying motivated?",
    likes: 15
  },
  {
    id: 2,
    user: 'KindCoyote',
    avatar: 'KC',
    time: '1 hour ago',
    content: "Hey, I totally get it. I've been there too. Try breaking down your tasks into smaller, manageable chunks. Also, make sure to schedule some downtime for yourself, even if it's just 10 minutes each day. It helps a lot!",
    likes: 8
  },
  {
    id: 3,
    user: 'ZenFox',
    avatar: 'ZF',
    time: '30 minutes ago',
    content: "Adding to that, consider practicing mindfulness or meditation. There are some great apps out there that guide you through it. It's been a game-changer for me in managing stress.",
    likes: 12
  }
];

const Discussion = () => {
  const [newMessage, setNewMessage] = useState('');
  const [likedMessages, setLikedMessages] = useState<number[]>([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();

  const handleLike = (messageId: number) => {
    setLikedMessages(prev => 
      prev.includes(messageId) 
        ? prev.filter(id => id !== messageId)
        : [...prev, messageId]
    );
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    toast({
      title: "Message sent!",
      description: "Your reply has been added to the discussion.",
    });
    
    setNewMessage('');
  };

  return (
    <div className="mobile-container bg-background min-h-screen">
      <header className="flex items-center justify-between p-4 bg-card border-b sticky top-0 z-10">
        <Button variant="ghost" size="sm" onClick={() => navigate('/community')}>
          <ArrowLeft size={20} />
        </Button>
        <h1 className="text-lg font-semibold">Discussion Thread</h1>
        <div className="w-10" />
      </header>

      <div className="flex-1 p-4 pb-20">
        <div className="space-y-4">
          {messages.map((message) => (
            <Card key={message.id} className="p-4">
              <div className="flex space-x-3">
                <Avatar className="w-10 h-10 flex-shrink-0">
                  <AvatarFallback className="text-sm bg-primary/10 text-primary">
                    {message.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-semibold text-sm">{message.user}</h4>
                    <span className="text-xs text-muted-foreground">{message.time}</span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed mb-3">
                    {message.content}
                  </p>
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLike(message.id)}
                      className="h-8 px-2 text-muted-foreground hover:text-primary"
                    >
                      <Heart 
                        size={16} 
                        className={likedMessages.includes(message.id) ? 'fill-primary text-primary' : ''} 
                      />
                      <span className="ml-1 text-xs">{message.likes}</span>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Reply Input */}
      <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-sm p-4 bg-background border-t">
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Write a reply..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button
            onClick={handleSendMessage}
            size="sm"
            className="px-3 bg-primary hover:bg-primary-hover"
          >
            <Send size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Discussion;