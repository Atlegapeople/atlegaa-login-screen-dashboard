// src/components/SkillRating.tsx
import { useState } from 'react';

interface SkillRatingProps {
  onAddSkill: (skill: { name: string; rating: number }) => void;
}

export default function SkillRating({ onAddSkill }: SkillRatingProps) {
  const [skillName, setSkillName] = useState('');
  const [rating, setRating] = useState(0);

  const handleAddSkill = () => {
    if (skillName.trim() !== '') {
      onAddSkill({ name: skillName, rating });
      setSkillName('');
      setRating(0);
    }
  };

  return (
    <div className="skill-rating bg-white p-4 rounded-lg shadow-md w-full max-w-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Add Your Skills</h3>
      
      {/* Skill Name Input */}
      <input
        type="text"
        value={skillName}
        onChange={(e) => setSkillName(e.target.value)}
        placeholder="Enter skill name"
        className="border p-2 rounded mb-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Rating Slider */}
      <div className="slider-container mb-4">
        <label className="block text-gray-600 mb-2">Rating: {rating}</label>
        <input
          type="range"
          min="0"
          max="10"
          value={rating}
          onChange={(e) => setRating(parseInt(e.target.value))}
          className="slider w-full"
        />
        
        {/* Rating Bar */}
        <div className="relative mt-2 h-4 rounded bg-gray-200">
          <div
            style={{ width: `${rating * 10}%` }}
            className={`h-full rounded ${
              rating <= 3 ? 'bg-red-500' : rating <= 7 ? 'bg-yellow-500' : 'bg-green-500'
            }`}
          ></div>
        </div>
      </div>

      {/* Add Skill Button */}
      <button
        onClick={handleAddSkill}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full font-semibold transition"
      >
        Add Skill
      </button>
    </div>
  );
}
