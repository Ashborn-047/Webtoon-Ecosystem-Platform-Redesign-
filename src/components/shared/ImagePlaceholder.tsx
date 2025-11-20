import React from "react";

const GRADIENTS = [
  "bg-gradient-to-br from-purple-500 to-pink-400",
  "bg-gradient-to-br from-blue-500 to-cyan-400",
  "bg-gradient-to-br from-orange-400 to-yellow-300",
  "bg-gradient-to-br from-green-500 to-teal-400",
  "bg-gradient-to-br from-red-500 to-rose-400",
];

interface ImagePlaceholderProps {
  seed?: number;
  className?: string;
}

export default function ImagePlaceholder({ seed, className = "" }: ImagePlaceholderProps = {}) {
  const gradientIndex = seed !== undefined 
    ? seed % GRADIENTS.length 
    : Math.floor(Math.random() * GRADIENTS.length);
  const gradient = GRADIENTS[gradientIndex];

  return (
    <div
      className={`w-full h-full rounded-xl ${gradient} animate-pulse ${className}`}
    />
  );
}
