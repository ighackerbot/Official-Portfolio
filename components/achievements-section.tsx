'use client';

import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { AchievementCard } from './achievement-card';

type Achievement = {
  id: number;
  title: string;
  description: string;
  icon: 'award' | 'trophy' | 'medal' | 'star' | 'zap' | 'target';
  year: string;
};

const achievementsData: Achievement[] = [
  {
    id: 1,
    title: 'Participated in Scratchathon .(finalist)',
    description: 'Made a scratch game in given theme in just 2 hrs.',
    icon: 'trophy',
    year: '2024'
  },
  {
    id: 2,
    title: 'Participated in CLI Tresure Hunt',
    description: 'A tresure Hunt where we have to solve questions on terminal and find the location.',
    icon: 'award',
    year: '2024'
  },
  {
    id: 3,
    title: 'Participated in 100 days of NST .',
    description: 'team based hackerthon [code by 1 person a time]',
    icon: 'star',
    year: '2024'
  },
  {
    id: 4,
    title: 'Open Source Contributor',
    description: 'Hactober,Gsoc and many more.',
    icon: 'zap',
    year: '2024-Present'
  },
  {
    id: 5,
    title: 'Unstop Talent Park 2025.',
    description: 'Unstop Daily Day Quiz (57th Rank),Unstop Weekly coding challage.(8032th Rank),Unstop Tresure Hunt Contest.(4023th Rank) Among 4 lakhs students.',
    icon: 'medal',
    year: '2025'
  },
];

export function AchievementsSection() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
          <Trophy className="inline-block w-8 h-8 mr-3 text-[#00C896]" />
          Achievements & Recognition
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Highlights of my professional journey and recognition in the tech community
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {achievementsData.map((achievement, index) => (
          <AchievementCard 
            key={achievement.id} 
            achievement={achievement} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
}