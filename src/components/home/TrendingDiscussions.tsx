import { ChevronRight, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const discussions = [
  {
    id: 1,
    title: 'Dealing with Exam Anxiety',
    replies: 12,
    color: 'bg-mood-anxious/10 text-mood-anxious',
    icon: '🧠'
  },
  {
    id: 2,
    title: 'Finding Motivation in Online...',
    replies: 3,
    color: 'bg-info/10 text-info',
    icon: '💪'
  },
  {
    id: 3,
    title: 'Balancing Academics and...',
    replies: 15,
    color: 'bg-warning/10 text-warning',
    icon: '⚖️'
  },
];

export const TrendingDiscussions = () => {
  const navigate = useNavigate();

  return (
    <Card className="mx-4 mb-6">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Trending Discussions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {discussions.map((discussion) => (
          <div
            key={discussion.id}
            onClick={() => navigate(`/discussion/${discussion.id}`)}
            className="flex items-center justify-between p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-xl ${discussion.color} flex items-center justify-center text-lg`}>
                {discussion.icon}
              </div>
              <div>
                <h4 className="font-medium text-sm">{discussion.title}</h4>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground mt-1">
                  <MessageCircle size={12} />
                  <span>{discussion.replies} replies</span>
                </div>
              </div>
            </div>
            <ChevronRight size={16} className="text-muted-foreground" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};