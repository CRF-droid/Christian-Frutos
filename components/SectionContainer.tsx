import React from 'react';

interface SectionContainerProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ id, className = "", children }) => {
  return (
    <section id={id} className={`py-20 md:py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
};

export default SectionContainer;