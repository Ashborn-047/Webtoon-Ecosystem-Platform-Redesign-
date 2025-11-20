"use client";

import React, { useState } from 'react'
import ImagePlaceholder from "./ImagePlaceholder";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  category?: string | null;
  fallback?: React.ReactNode;
}

export function ImageWithFallback({ category, fallback, ...props }: ImageWithFallbackProps) {
  const [error, setError] = useState(false)

  const handleError = () => {
    setError(true)
  }

  const { src, alt, style, className, ...rest } = props

  if (error) {
    return <ImagePlaceholder />;
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      style={style} 
      {...rest} 
      onError={handleError} 
    />
  )
}
