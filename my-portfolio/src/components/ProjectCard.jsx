import Button from './Button';

const ProjectCard = ({
  title,
  description,
  image,
  tags = [],
  demoLink,
  codeLink,
  className = ""
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 text-xs rounded text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Description */}
        <p className="text-gray-600 mb-4">{description}</p>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {demoLink && (
            <Button 
              variant="primary" 
              onClick={() => window.open(demoLink, '_blank')}
              className="text-sm px-4 py-2"
            >
              Live Demo
            </Button>
          )}
          
          {codeLink && (
            <Button 
              variant="outline" 
              onClick={() => window.open(codeLink, '_blank')}
              className="text-sm px-4 py-2"
            >
              View Code
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;