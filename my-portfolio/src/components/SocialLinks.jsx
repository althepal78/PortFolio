import * as Icons from '../assets/icons';

const SocialLinks = ({ className = "" }) => {
  const socialLinks = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/@AlThePal78",
      icon: Icons.youtube,
      iconHover: Icons.youtubeO
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/althepal78",
      icon: Icons.twitter,
      iconHover: Icons.twitterO
    },
    {
      name: "GitHub",
      url: "https://github.com/althepal78",
      icon: Icons.github,
      iconHover: Icons.githubO
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/AlThePal78/",
      icon: Icons.facebook,
      iconHover: Icons.facebookO
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/althepal78/",
      icon: Icons.linkedin,
      iconHover: Icons.linkedinO
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/albertcardonaii/",
      icon: Icons.instagram,
      iconHover: Icons.instagramO
    }
  ];

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          title={link.name}
          className="group relative inline-block"
        >
          <div className="relative w-5 h-5">
            <img 
              src={link.icon} 
              alt={link.name} 
              className="w-full h-full transition-all duration-300 group-hover:scale-140 group-hover:opacity-0 absolute top-0 left-0" 
            />
            <img 
              src={link.iconHover} 
              alt={`${link.name} (hover)`}
              className="w-full h-full transition-all duration-1000 group-hover:scale-140 opacity-0 group-hover:opacity-100 absolute top-0 left-0" 
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;