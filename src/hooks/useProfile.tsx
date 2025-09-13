import { useState, createContext, useContext } from 'react';

interface ProfileData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  bio: string;
  location: string;
  profilePhoto: string;
  currentMood?: {
    id: string;
    emoji: string;
    label: string;
    timestamp: string;
  } | null;
}

interface ProfileContextType {
  profile: ProfileData;
  updateProfile: (data: Partial<ProfileData>) => void;
  updateMood: (mood: { id: string; emoji: string; label: string }) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
  const [profile, setProfile] = useState<ProfileData>({
    firstName: 'Sophia',
    lastName: 'Carter',
    username: 'sophia.carter',
    email: 'sophia@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Student at State University passionate about mental health advocacy.',
    location: 'New York, NY',
    profilePhoto: '',
    currentMood: null,
  });

  const updateProfile = (data: Partial<ProfileData>) => {
    setProfile(prev => ({ ...prev, ...data }));
  };

  const updateMood = (mood: { id: string; emoji: string; label: string }) => {
    setProfile(prev => ({
      ...prev,
      currentMood: {
        ...mood,
        timestamp: new Date().toISOString(),
      }
    }));
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile, updateMood }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};