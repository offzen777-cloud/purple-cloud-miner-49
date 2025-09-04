import { memo } from 'react';

const FloatingElements = memo(() => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Large floating orbs with complex movements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-primary opacity-20 blur-xl float-drift" />
      <div className="absolute top-3/4 right-1/3 w-24 h-24 rounded-full bg-gradient-to-r from-accent to-primary opacity-30 blur-lg float-orbit" />
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-primary/30 blur-md float-spiral" />
      
      {/* Medium particles with varied animations */}
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-accent/20 blur-sm float-delayed rotate-slow" />
      <div className="absolute bottom-1/3 left-1/2 w-12 h-12 rounded-full bg-primary/25 blur-sm float-drift" />
      <div className="absolute top-2/3 left-1/5 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent opacity-25 blur-md float-orbit" />
      
      {/* Additional moving elements */}
      <div className="absolute top-1/8 left-3/4 w-18 h-18 rounded-full bg-accent/25 blur-lg float-spiral" />
      <div className="absolute bottom-1/8 right-1/2 w-10 h-10 rounded-full bg-primary/20 blur-sm float-drift rotate-reverse" />
      
      {/* Small glowing dots with enhanced movement */}
      <div className="absolute top-1/5 right-1/5 w-3 h-3 rounded-full bg-primary glow-subtle float-orbit" />
      <div className="absolute bottom-1/5 left-2/3 w-2 h-2 rounded-full bg-accent pulse-glow float-spiral" />
      <div className="absolute top-1/2 left-1/6 w-4 h-4 rounded-full bg-primary/60 glow-subtle float-drift" />
      <div className="absolute top-3/4 left-3/4 w-3 h-3 rounded-full bg-accent/80 pulse-glow rotate-slow" />
      
      {/* Glass morphism elements with rotation */}
      <div className="absolute top-1/6 right-1/3 w-40 h-20 rounded-2xl glass opacity-40 float-drift rotate-slow" />
      <div className="absolute bottom-1/3 right-1/5 w-28 h-28 rounded-full glass opacity-30 float-orbit rotate-reverse" />
      
      {/* New dynamic background elements */}
      <div className="absolute top-1/12 left-1/2 w-6 h-6 rounded-full bg-primary/40 blur-sm float-spiral" />
      <div className="absolute bottom-1/6 left-1/8 w-8 h-8 rounded-full bg-accent/30 blur-sm float-drift pulse-glow" />
    </div>
  );
});

FloatingElements.displayName = 'FloatingElements';

export { FloatingElements };