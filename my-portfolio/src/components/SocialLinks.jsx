import { youtube, twitter, github, facebook, linkedin, instagram } from '../assets/icons';

const SocialLinks = ({ className = "" }) => {
  const socialLinks = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/@AlThePal78",
      icon: youtube
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/althepal78",
      icon: twitter
    },
    {
      name: "GitHub",
      url: "https://github.com/althepal78",
      icon: github
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/AlThePal78/",
      icon: facebook
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/althepal78/",
      icon: linkedin
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/albertcardonaii/",
      icon: instagram
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
          className="transition-transform hover:scale-110"
          title={link.name}
        >
          <img 
            src={link.icon} 
            alt={link.name} 
            className="w-5 h-5 brightness-0 invert" 
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;