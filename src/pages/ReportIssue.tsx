import { useState } from 'react';
import { ArrowLeft, Flag, Camera, Paperclip, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const ReportIssue = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    type: '',
    subject: '',
    description: '',
    priority: 'medium',
    includeData: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!formData.type || !formData.subject || !formData.description) {
      toast({
        title: "Please fill all required fields",
        description: "Type, subject, and description are required.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Report submitted successfully",
      description: "We'll review your report and get back to you within 24 hours.",
    });
    navigate('/profile');
  };

  const issueTypes = [
    { value: 'bug', label: 'Bug Report', description: 'Something isn\'t working as expected' },
    { value: 'feature', label: 'Feature Request', description: 'Suggest a new feature or improvement' },
    { value: 'content', label: 'Inappropriate Content', description: 'Report harmful or inappropriate content' },
    { value: 'harassment', label: 'Harassment', description: 'Report harassment or abuse' },
    { value: 'privacy', label: 'Privacy Concern', description: 'Data privacy or security issue' },
    { value: 'other', label: 'Other', description: 'Something else we should know about' }
  ];

  const priorityLevels = [
    { value: 'low', label: 'Low', description: 'Minor issue, not urgent' },
    { value: 'medium', label: 'Medium', description: 'Moderate impact on experience' },
    { value: 'high', label: 'High', description: 'Significant impact, needs attention' },
    { value: 'urgent', label: 'Urgent', description: 'Critical issue, immediate attention needed' }
  ];

  return (
    <MobileLayout currentTab="profile">
      <div className="bg-background min-h-screen">
        <header className="flex items-center justify-between p-4 bg-card border-b">
          <Button variant="ghost" size="sm" onClick={() => navigate('/profile')}>
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-lg font-semibold">Report Issue</h1>
          <Button onClick={handleSubmit} size="sm" disabled={!formData.type || !formData.subject || !formData.description}>
            <Send size={16} className="mr-2" />
            Send
          </Button>
        </header>

        <div className="p-4 space-y-6">
          {/* Issue Type */}
          <Card className="p-4">
            <Label className="text-sm font-medium mb-3 block">What type of issue are you reporting? *</Label>
            <Select value={formData.type} onValueChange={(value) => handleInputChange('type', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select issue type..." />
              </SelectTrigger>
              <SelectContent>
                {issueTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    <div>
                      <div className="font-medium">{type.label}</div>
                      <div className="text-xs text-muted-foreground">{type.description}</div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Card>

          {/* Subject */}
          <Card className="p-4 space-y-3">
            <Label htmlFor="subject" className="text-sm font-medium">Subject *</Label>
            <Input
              id="subject"
              placeholder="Brief description of the issue..."
              value={formData.subject}
              onChange={(e) => handleInputChange('subject', e.target.value)}
            />
          </Card>

          {/* Description */}
          <Card className="p-4 space-y-3">
            <Label htmlFor="description" className="text-sm font-medium">Detailed Description *</Label>
            <Textarea
              id="description"
              placeholder="Please provide as much detail as possible. Include steps to reproduce if it's a bug..."
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows={5}
              className="resize-none"
            />
            <p className="text-xs text-muted-foreground">
              The more details you provide, the better we can help you.
            </p>
          </Card>

          {/* Priority */}
          <Card className="p-4 space-y-3">
            <Label className="text-sm font-medium">Priority Level</Label>
            <Select value={formData.priority} onValueChange={(value) => handleInputChange('priority', value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {priorityLevels.map((level) => (
                  <SelectItem key={level.value} value={level.value}>
                    <div>
                      <div className="font-medium">{level.label}</div>
                      <div className="text-xs text-muted-foreground">{level.description}</div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Card>

          {/* Attachments */}
          <Card className="p-4 space-y-3">
            <Label className="text-sm font-medium">Attachments (Optional)</Label>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="flex-1">
                <Camera size={16} className="mr-2" />
                Add Screenshot
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <Paperclip size={16} className="mr-2" />
                Attach File
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Screenshots and logs can help us understand the issue better.
            </p>
          </Card>

          {/* Data Inclusion */}
          <Card className="p-4">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="includeData"
                checked={formData.includeData}
                onCheckedChange={(checked) => handleInputChange('includeData', checked)}
              />
              <div className="space-y-1">
                <Label
                  htmlFor="includeData"
                  className="text-sm font-medium cursor-pointer"
                >
                  Include diagnostic data
                </Label>
                <p className="text-xs text-muted-foreground">
                  Help us debug by including anonymous usage data and error logs. 
                  No personal information will be shared.
                </p>
              </div>
            </div>
          </Card>

          {/* Safety Notice */}
          {formData.type === 'harassment' || formData.type === 'content' ? (
            <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800">
              <div className="p-4">
                <div className="flex items-start space-x-3">
                  <Flag className="text-amber-600 dark:text-amber-400 mt-0.5" size={20} />
                  <div>
                    <h3 className="font-semibold text-sm text-amber-800 dark:text-amber-200">Safety Notice</h3>
                    <p className="text-xs text-amber-700 dark:text-amber-300 mt-1">
                      If you're in immediate danger, please contact emergency services (911) or a crisis hotline immediately. 
                      This report will be reviewed, but may not receive immediate attention.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ) : null}

          {/* Guidelines */}
          <Card className="p-4">
            <h3 className="font-semibold text-sm mb-2">Reporting Guidelines</h3>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Be specific and provide clear steps to reproduce issues</li>
              <li>• Include your device model and app version when reporting bugs</li>
              <li>• For content reports, include specific examples or links</li>
              <li>• All reports are reviewed by our team within 24-48 hours</li>
              <li>• False reports may result in account restrictions</li>
            </ul>
          </Card>
        </div>
      </div>
    </MobileLayout>
  );
};

export default ReportIssue;