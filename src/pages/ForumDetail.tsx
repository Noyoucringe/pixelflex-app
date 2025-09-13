import { useState } from 'react';
import { ArrowLeft, MessageCircle, Plus, Heart, Reply } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { useNavigate, useParams } from 'react-router-dom';

const forumData = {
  1: {
    name: 'Gaming Community',
    description: 'Connect with students who share your interest in gaming and esports.',
    icon: '🎮',
    color: 'bg-community-gaming',
    members: 234
  },
  2: {
    name: 'Academic Support',
    description: 'A space for students to discuss and support each other academically.',
    icon: '📚',
    color: 'bg-community-academic',
    members: 156
  },
  3: {
    name: 'Creative Arts',
    description: 'Share your creative projects, get feedback and collaborate.',
    icon: '🎨',
    color: 'bg-community-creative',
    members: 89
  },
  4: {
    name: 'Mental Wellness',
    description: 'Discuss mental health topics, share experiences and support.',
    icon: '💚',
    color: 'bg-community-wellness',
    members: 312
  },
  5: {
    name: 'Social Advocacy',
    description: 'Connect with other students who are passionate about social change.',
    icon: '🌍',
    color: 'bg-community-advocacy',
    members: 78
  }
};

const samplePosts = [
  {
    id: 1,
    author: 'Sarah M.',
    time: '2h ago',
    content: 'Anyone else struggling with time management between gaming and studies? Looking for tips!',
    likes: 12,
    replies: 5
  },
  {
    id: 2,
    author: 'Mike R.',
    time: '4h ago',
    content: 'Just discovered this amazing study playlist that helps me focus. Anyone want the link?',
    likes: 8,
    replies: 3
  },
  {
    id: 3,
    author: 'Emma L.',
    time: '6h ago',
    content: 'Organizing a study group for upcoming finals. DM me if interested!',
    likes: 15,
    replies: 7
  }
];

const ForumDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newPost, setNewPost] = useState('');
  const [posts, setPosts] = useState(samplePosts);
  
  const forum = forumData[parseInt(id || '0') as keyof typeof forumData];
  
  if (!forum) {
    return <div>Forum not found</div>;
  }

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        author: 'You',
        time: 'now',
        content: newPost,
        likes: 0,
        replies: 0
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  };

  return (
    <MobileLayout currentTab="community">
      <div className="bg-background min-h-screen">
        <header className="flex items-center justify-between p-4 bg-card border-b">
          <Button variant="ghost" size="sm" onClick={() => navigate('/community')}>
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-lg font-semibold">{forum.name}</h1>
          <div className="w-10" />
        </header>

        <div className="p-4">
          {/* Forum Info */}
          <Card className="p-4 mb-6">
            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 rounded-xl ${forum.color} flex items-center justify-center text-white text-2xl`}>
                {forum.icon}
              </div>
              <div className="flex-1">
                <h2 className="font-semibold text-lg">{forum.name}</h2>
                <p className="text-sm text-muted-foreground mb-2">{forum.description}</p>
                <p className="text-xs text-muted-foreground">{forum.members} members</p>
              </div>
            </div>
          </Card>

          {/* New Post */}
          <Card className="p-4 mb-6">
            <h3 className="font-semibold mb-3">Create New Post</h3>
            <Textarea
              placeholder="Share your thoughts..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="mb-3"
            />
            <Button onClick={handlePostSubmit} disabled={!newPost.trim()}>
              <Plus size={16} className="mr-2" />
              Post
            </Button>
          </Card>

          {/* Posts */}
          <div className="space-y-4">
            <h3 className="font-semibold">Recent Posts</h3>
            {posts.map((post) => (
              <Card key={post.id} className="p-4">
                <div className="flex items-start space-x-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="text-xs">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-semibold text-sm">{post.author}</span>
                      <span className="text-xs text-muted-foreground">{post.time}</span>
                    </div>
                    <p className="text-sm mb-3">{post.content}</p>
                    <div className="flex items-center space-x-4">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleLike(post.id)}
                        className="text-xs"
                      >
                        <Heart size={14} className="mr-1" />
                        {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs">
                        <Reply size={14} className="mr-1" />
                        {post.replies}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default ForumDetail;