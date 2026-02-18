import { ReactNode } from "react";

type CardSize = "card-xs" | "card-sm" | "card-md" | "card-lg" | "card-xl";

interface CardProps {
  title: string;
  description: string;
  mobileSize?: CardSize;
  desktopSize?: CardSize;
  bgColor?: string;
  actions?: ReactNode;
}

export default function Card({ 
  title, 
  description, 
  mobileSize = "card-xs", 
  desktopSize,
  bgColor = "bg-base-100",
  actions 
}: CardProps) {
  // Build complete class strings so Tailwind can detect them
  const getSizeClasses = () => {
    if (!desktopSize) return mobileSize;
    
    // Return complete class strings for Tailwind to detect
    const sizeMap: Record<string, string> = {
      'card-xs-card-xs': 'card-xs md:card-xs',
      'card-xs-card-sm': 'card-xs md:card-sm',
      'card-xs-card-md': 'card-xs md:card-md',
      'card-xs-card-lg': 'card-xs md:card-lg',
      'card-xs-card-xl': 'card-xs md:card-xl',
      'card-sm-card-xs': 'card-sm md:card-xs',
      'card-sm-card-sm': 'card-sm md:card-sm',
      'card-sm-card-md': 'card-sm md:card-md',
      'card-sm-card-lg': 'card-sm md:card-lg',
      'card-sm-card-xl': 'card-sm md:card-xl',
      'card-md-card-xs': 'card-md md:card-xs',
      'card-md-card-sm': 'card-md md:card-sm',
      'card-md-card-md': 'card-md md:card-md',
      'card-md-card-lg': 'card-md md:card-lg',
      'card-md-card-xl': 'card-md md:card-xl',
      'card-lg-card-xs': 'card-lg md:card-xs',
      'card-lg-card-sm': 'card-lg md:card-sm',
      'card-lg-card-md': 'card-lg md:card-md',
      'card-lg-card-lg': 'card-lg md:card-lg',
      'card-lg-card-xl': 'card-lg md:card-xl',
      'card-xl-card-xs': 'card-xl md:card-xs',
      'card-xl-card-sm': 'card-xl md:card-sm',
      'card-xl-card-md': 'card-xl md:card-md',
      'card-xl-card-lg': 'card-xl md:card-lg',
      'card-xl-card-xl': 'card-xl md:card-xl',
    };
    
    return sizeMap[`${mobileSize}-${desktopSize}`] || mobileSize;
  };
    
  return (
    <div className={`card w-1/2 md:w-96 ${bgColor} ${getSizeClasses()} shadow-sm`}>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        {actions && (
          <div className="justify-end card-actions mt-1 md:mt-4">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}
