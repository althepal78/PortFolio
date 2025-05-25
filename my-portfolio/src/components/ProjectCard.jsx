import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tags, 
  demoLink, 
  codeLink, 
  id 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="overflow-hidden rounded-lg bg-[var(--knicks-black)] border border-[var(--knicks-blue)] shadow-lg transition-all duration-300 hover:shadow-xl hover:border-[var(--knicks-orange)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-[var(--knicks-black)] to-transparent opacity-70`}></div>
      </div>
      
      <div className="p-5">        <h3 className="text-xl font-bold mb-2 text-[var(--knicks-white)] h-[28px] overflow-hidden">{title}</h3>
          <div className="h-[72px] mb-4">
          <p className="text-[var(--knicks-silver)] line-clamp-3">{description}</p>
        </div>
          <div className="flex flex-wrap gap-2 mb-4 min-h-[32px] items-center">
          {tags && tags.map(tag => (
            <span 
              key={tag} 
              className="px-2 py-1 text-xs rounded bg-[var(--knicks-blue)] text-[var(--knicks-white)] opacity-80"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          {demoLink && (
            <Button 
              as="a" 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="primary" 
              className="flex-1"
            >
              Demo
            </Button>
          )}
          
          {codeLink && (
            <Button 
              as="a" 
              href={codeLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="secondary" 
              className="flex-1"
            >
              Code
            </Button>
          )}
          
          {id && (
            <Link to={`/projects/${id}`}>
              <Button variant="outline" className="flex-1">Details</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;