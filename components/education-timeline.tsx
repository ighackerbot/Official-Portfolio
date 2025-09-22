'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

type EducationItem = {
  id: number;
  institution: string;
  degree: string;
  location: string;
  period: string;
  achievements: string[];
};

const educationData: EducationItem[] = [
  {
    id: 1,
    institution: 'Mar Thoma Gram Jyoti Senior Secondry School',
    degree: 'Intermediate[Class XII]',
    location: 'Sihora-Jabalpur(M.P),India',
    period: '2009 - 2023',
    achievements: [
      'consecutive 3 years winner of science exhibition',
      'Led the school chess club'
    ]
  },
  {
    id: 2,
    institution: 'Allen Carrer Institute',
    degree: '',
    location: 'Kota-Rajasthan, India',
    period: '2023 - 2024',
    achievements: []
  },
  {
    id: 3,
    institution: 'Newton School of Technology',
    degree: 'Bachelor of Technology (Computer Science) ',
    location: 'Pune-Maharstra, India',
    period: '2024 - 2028',
    achievements: []
  }
];

export function EducationTimeline() {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Educational Journey</h2>
      
      <div className="max-w-3xl mx-auto">
        {educationData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="mb-12 relative"
          >
            {/* Timeline connector */}
            {index < educationData.length - 1 && (
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#00C896] to-transparent h-full"></div>
            )}
            
            <div className="flex">
              {/* Icon */}
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#00C896]/20 flex items-center justify-center border border-[#00C896]">
                  <GraduationCap className="w-6 h-6 text-[#00C896]" />
                </div>
              </div>
              
              {/* Content */}
              <div className="ml-4 sm:ml-6 flex-1">
                <div className="bg-card p-4 sm:p-6 rounded-lg shadow-md border border-border hover:border-[#00C896] transition-all duration-300">
                  <h3 className="text-xl font-bold mb-1">{item.institution}</h3>
                  <h4 className="text-lg font-semibold mb-3 text-[#00C896]">{item.degree}</h4>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {item.location}
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h5 className="font-medium flex items-center mb-2">
                      <Award className="w-4 h-4 mr-2 text-[#00C896]" />
                      Key Achievements
                    </h5>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="text-muted-foreground">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}