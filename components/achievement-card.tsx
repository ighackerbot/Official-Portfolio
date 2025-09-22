'use client';

import { motion } from 'framer-motion';
import { Award, Trophy, Medal, Star, Zap, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

type Achievement = {
  id: number;
  title: string;
  description: string;
  icon: 'award' | 'trophy' | 'medal' | 'star' | 'zap' | 'target';
  year: string;
};

const iconMap = {
  award: Award,
  trophy: Trophy,
  medal: Medal,
  star: Star,
  zap: Zap,
  target: Target,
};

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

export function AchievementCard({ achievement, index }: AchievementCardProps) {
  const Icon = iconMap[achievement.icon];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="h-full border border-border hover:border-[#00C896] transition-all duration-300 bg-card overflow-hidden group">
        <CardContent className="p-4 sm:p-6 h-full flex flex-col">
          <div className="mb-4 flex items-center justify-between">
            <div className="w-12 h-12 rounded-full bg-[#00C896]/10 flex items-center justify-center border border-[#00C896] group-hover:bg-[#00C896]/20 transition-colors">
              <Icon className="w-6 h-6 text-[#00C896]" />
            </div>
            <div className="text-sm font-medium text-muted-foreground bg-background/50 px-3 py-1 rounded-full">
              {achievement.year}
            </div>
          </div>
          
          <h3 className="text-lg font-bold mb-2 group-hover:text-[#00C896] transition-colors">
            {achievement.title}
          </h3>
          
          <p className="text-sm text-muted-foreground flex-grow">
            {achievement.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}