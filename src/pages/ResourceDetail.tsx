import { ArrowLeft, Play, Download, BookOpen, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { useNavigate, useParams } from 'react-router-dom';

const resourceData = {
  1: {
    title: 'Stress Management Guide',
    description: 'Learn comprehensive techniques to manage stress effectively in academic and personal life.',
    category: 'Stress Management',
    duration: '15 min read',
    users: '1.2k users',
    content: `
# Complete Stress Management Guide

## Understanding Stress
Stress is a natural response to challenging situations. While some stress can be motivating, chronic stress can negatively impact your academic performance and overall well-being.

## Key Techniques

### 1. Deep Breathing Exercises
- Practice 4-7-8 breathing: Inhale for 4, hold for 7, exhale for 8
- Use this technique before exams or presentations
- Practice daily for 5-10 minutes

### 2. Time Management
- Use the Pomodoro Technique (25 min work, 5 min break)
- Prioritize tasks using the Eisenhower Matrix
- Set realistic daily goals

### 3. Physical Activity
- Regular exercise reduces cortisol levels
- Even 10 minutes of walking can help
- Try yoga or stretching between study sessions

### 4. Mindfulness and Meditation
- Practice mindful awareness of thoughts and feelings
- Use guided meditation apps
- Try progressive muscle relaxation

## When to Seek Help
- Persistent anxiety or worry
- Sleep disturbances
- Difficulty concentrating
- Physical symptoms like headaches or stomach issues

Remember: Seeking help is a sign of strength, not weakness.
    `,
    relatedResources: [2, 3]
  },
  2: {
    title: 'Effective Study Strategies',
    description: 'Proven methods to improve your study skills and academic performance.',
    category: 'Study Habits',
    duration: '20 min read',
    users: '2.1k users',
    content: `
# Effective Study Strategies

## Active Learning Techniques

### 1. The Feynman Technique
- Explain concepts in simple terms
- Identify knowledge gaps
- Refine your understanding

### 2. Spaced Repetition
- Review material at increasing intervals
- Use flashcards effectively
- Schedule regular review sessions

### 3. Interleaving
- Mix different types of problems
- Switch between subjects
- Enhances problem-solving skills

## Study Environment

### Creating the Perfect Study Space
- Choose a quiet, well-lit area
- Remove distractions (phone, social media)
- Keep necessary materials within reach
- Use ergonomic furniture

### Time Management
- Use time-blocking techniques
- Set specific goals for each session
- Take regular breaks
- Track your progress

## Memory Enhancement

### Techniques for Better Retention
- Use mnemonics and acronyms
- Create visual associations
- Connect new information to existing knowledge
- Practice retrieval instead of re-reading

## Exam Preparation
- Start studying well in advance
- Create a study schedule
- Practice with past papers
- Form study groups for discussion
    `,
    relatedResources: [4, 5]
  },
  3: {
    title: 'Mindfulness Meditation',
    description: 'Practice mindfulness for better mental clarity and emotional regulation.',
    category: 'Stress Management',
    duration: '10 min practice',
    users: '856 users',
    content: `
# Mindfulness Meditation Guide

## What is Mindfulness?
Mindfulness is the practice of being fully present and engaged in the current moment, without judgment.

## Getting Started

### Basic Mindfulness Meditation
1. Find a comfortable, quiet place
2. Sit with your back straight
3. Close your eyes or soften your gaze
4. Focus on your breath
5. When your mind wanders, gently return to your breath

### 5-Minute Daily Practice
- Morning: Set intention for the day
- Midday: Brief body scan
- Evening: Gratitude reflection

## Benefits for Students
- Improved focus and concentration
- Reduced anxiety and stress
- Better emotional regulation
- Enhanced self-awareness
- Improved sleep quality

## Mindful Study Techniques
- Begin study sessions with 2-3 mindful breaths
- Take mindful breaks between subjects
- Practice mindful reading (full attention to text)
- Use mindful walking between classes

## Advanced Practices
- Body scan meditation
- Loving-kindness meditation
- Mindful movement and yoga
- Walking meditation

## Apps and Resources
- Headspace (guided meditations)
- Calm (sleep stories and meditations)
- Insight Timer (community and variety)
- Ten Percent Happier (practical approach)
    `,
    relatedResources: [1, 4]
  },
  4: {
    title: 'Sleep Hygiene Tips',
    description: 'Essential tips for improving your sleep quality and academic performance.',
    category: 'Study Habits',
    duration: '12 min read',
    users: '1.8k users',
    content: `
# Sleep Hygiene for Students

## Why Sleep Matters
Quality sleep is crucial for memory consolidation, learning, and overall academic performance.

## The Science of Sleep
- Sleep occurs in cycles (90-120 minutes each)
- REM sleep is essential for memory formation
- Deep sleep helps with physical recovery
- Most students need 7-9 hours per night

## Creating the Perfect Sleep Environment

### Your Bedroom
- Keep it cool (65-68°F)
- Make it as dark as possible
- Minimize noise or use white noise
- Invest in comfortable bedding
- Remove electronic devices

### Pre-Sleep Routine
- Stop caffeine 6 hours before bed
- Avoid large meals 3 hours before sleep
- Dim lights 1 hour before bedtime
- Try relaxing activities (reading, gentle stretching)
- Keep a consistent sleep schedule

## Common Sleep Disruptors

### Academic Stress
- Practice stress-reduction techniques
- Avoid studying in bed
- Write down tomorrow's tasks before sleep
- Use relaxation techniques

### Technology
- Use blue light filters after sunset
- Avoid screens 1 hour before bed
- Keep phones out of the bedroom
- Use analog clocks instead of phone alarms

## Sleep and Learning
- Review material before sleep for better retention
- Avoid all-nighters (they're counterproductive)
- Take power naps (20-30 minutes max)
- Study during your natural alert times

## When to Seek Help
- Consistent difficulty falling asleep
- Frequent night wakings
- Daytime fatigue despite adequate sleep
- Snoring or breathing issues during sleep
    `,
    relatedResources: [1, 3]
  },
  5: {
    title: 'Focus Enhancement Audio',
    description: 'Curated collection of binaural beats and nature sounds for enhanced concentration.',
    category: 'Study Habits',
    duration: 'Various lengths',
    users: '3.2k users',
    content: `
# Focus Enhancement Audio Collection

## What are Binaural Beats?
Binaural beats are auditory illusions created when two slightly different frequencies are played in each ear, potentially influencing brainwave activity.

## Types of Focus Audio

### Alpha Waves (8-14 Hz)
- Best for: Creative tasks, light studying
- Effect: Relaxed awareness, reduced anxiety
- Duration: 30-60 minutes
- Sample tracks available

### Beta Waves (14-30 Hz)
- Best for: Active concentration, problem-solving
- Effect: Enhanced focus and alertness
- Duration: 25-90 minutes
- Sample tracks available

### Gamma Waves (30-100 Hz)
- Best for: Complex cognitive tasks
- Effect: Peak mental performance
- Duration: 15-45 minutes
- Sample tracks available

## Nature Sounds Collection

### Rain and Thunderstorms
- Consistent background noise
- Masks distracting sounds
- Promotes calm focus
- Various intensities available

### Ocean Waves
- Rhythmic and soothing
- Great for reading
- Reduces stress
- Multiple beach environments

### Forest Ambience
- Bird songs and rustling leaves
- Natural and refreshing
- Enhances creativity
- Seasonal variations

## How to Use Effectively

### Best Practices
- Use good quality headphones
- Start with lower volumes
- Experiment with different types
- Combine with study techniques
- Take regular breaks

### Study Session Setup
1. Choose your audio type based on task
2. Set comfortable volume (not too loud)
3. Start audio before beginning work
4. Maintain consistent use during session
5. Gradually fade out during breaks

## Scientific Evidence
- Studies show potential benefits for attention
- Individual responses vary
- Not a substitute for good study habits
- Works best combined with other techniques

## Audio Recommendations
- Brown noise for deep focus
- White noise for general concentration
- Pink noise for learning and memory
- Classical music for creative tasks
    `,
    relatedResources: [2, 4]
  }
};

const ResourceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const resource = resourceData[parseInt(id || '0') as keyof typeof resourceData];
  
  if (!resource) {
    return <div>Resource not found</div>;
  }

  return (
    <MobileLayout currentTab="resources">
      <div className="bg-background min-h-screen">
        <header className="flex items-center justify-between p-4 bg-card border-b">
          <Button variant="ghost" size="sm" onClick={() => navigate('/resources')}>
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-lg font-semibold">Resource</h1>
          <div className="w-10" />
        </header>

        <div className="p-4">
          {/* Resource Header */}
          <Card className="p-6 mb-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl">{resource.title}</CardTitle>
              <p className="text-muted-foreground">{resource.description}</p>
            </CardHeader>
            
            <div className="flex items-center space-x-4 mb-4 text-xs text-muted-foreground">
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                {resource.duration}
              </div>
              <div className="flex items-center">
                <Users size={14} className="mr-1" />
                {resource.users}
              </div>
              <div className="bg-primary/10 text-primary px-2 py-1 rounded">
                {resource.category}
              </div>
            </div>

            <div className="flex space-x-2">
              <Button className="flex-1">
                <Play size={16} className="mr-2" />
                Start Learning
              </Button>
              <Button variant="outline">
                <Download size={16} className="mr-2" />
                Save
              </Button>
            </div>
          </Card>

          {/* Content */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="prose prose-sm max-w-none">
                <div className="whitespace-pre-line text-sm leading-relaxed">
                  {resource.content}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Resources */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Related Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {resource.relatedResources.map((relatedId) => {
                const related = resourceData[relatedId as keyof typeof resourceData];
                return (
                  <div 
                    key={relatedId}
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-lg cursor-pointer hover:bg-muted/80 transition-colors"
                    onClick={() => navigate(`/resource/${relatedId}`)}
                  >
                    <div className="flex items-center space-x-3">
                      <BookOpen size={16} className="text-muted-foreground" />
                      <div>
                        <h4 className="font-medium text-sm">{related.title}</h4>
                        <p className="text-xs text-muted-foreground">{related.category}</p>
                      </div>
                    </div>
                    <ArrowLeft size={14} className="text-muted-foreground rotate-180" />
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </MobileLayout>
  );
};

export default ResourceDetail;