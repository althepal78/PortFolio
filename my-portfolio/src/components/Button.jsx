const Button = ({ 
  children, 
  onClick, 
  className = "", 
  variant = "primary", 
  type = "button" 
}) => {
  // Base classes for all buttons
  const baseClasses = "px-6 py-3 rounded-full font-medium transition-all duration-300";
  
  // Style variants
  const variants = {
    primary: "bg-[var(--knicks-blue)] text-white hover:bg-[var(--knicks-blue)]/80",
    secondary: "bg-[var(--knicks-orange)] text-white hover:bg-[var(--knicks-orange)]/80",
    outline: "bg-transparent border-2 border-[var(--knicks-blue)] text-[var(--knicks-blue)] hover:bg-[var(--knicks-blue)] hover:text-white"
  };
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;