import { useEffect, useRef, useState, ReactNode } from 'react';

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out' | 'none';

interface LazyLoadProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
}

const LazyLoad = ({
  children,
  threshold = 0.1,
  rootMargin = '0px',
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 800
}: LazyLoadProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  // Generate the appropriate styles based on the animation type
  const getAnimationStyles = () => {
    // Base styles that apply to all animations
    const baseStyles = {
      opacity: isVisible ? '1' : '0',
      transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
      transitionDelay: `${delay}ms`
    };

    // Animation-specific transform styles
    const transformStyles = {
      'fade-up': {
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
      },
      'fade-down': {
        transform: isVisible ? 'translateY(0)' : 'translateY(-40px)'
      },
      'fade-left': {
        transform: isVisible ? 'translateX(0)' : 'translateX(40px)'
      },
      'fade-right': {
        transform: isVisible ? 'translateX(0)' : 'translateX(-40px)'
      },
      'zoom-in': {
        transform: isVisible ? 'scale(1)' : 'scale(0.9)'
      },
      'zoom-out': {
        transform: isVisible ? 'scale(1)' : 'scale(1.1)'
      },
      'none': {
        transform: 'none'
      }
    };

    return {
      ...baseStyles,
      ...transformStyles[animation]
    };
  };

  return (
    <div 
      ref={ref} 
      className={className}
      style={getAnimationStyles()}
    >
      {isVisible && children}
    </div>
  );
};

export default LazyLoad;
