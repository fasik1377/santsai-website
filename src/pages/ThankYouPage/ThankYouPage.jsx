import React from 'react';
import SocialLink from './SocialLink';

function ThankYouPage() {
  const socialLinks = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/87a100044b847fbad4a6a63ffc545e55f778c87d6999092794ba54485608c831?placeholderIfAbsent=true&apiKey=82abcb2e8ceb4ef8b305aa097e031da3",
      alt: "Social media icon",
      username: "artspire_jay"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d3eb4c70359e48e37075f04c3036480e3a5467aa4e9ec435e7c88706b228b0e2?placeholderIfAbsent=true&apiKey=82abcb2e8ceb4ef8b305aa097e031da3",
      alt: "LinkedIn icon",
      username: "linkedin.com/in/artspirejay/"
    }
  ];

  return (
    <main className="flex overflow-hidden flex-col justify-center items-center px-20 py-56 text-4xl text-white bg-zinc-950 max-md:px-5 max-md:py-24">
      <section className="flex flex-col items-center max-w-full w-[1016px]">
        <h1 className="self-stretch text-6xl font-bold max-md:max-w-full max-md:text-4xl">
          Thank You For Taking The Time
        </h1>
        {socialLinks.map((link, index) => (
          <SocialLink
            key={index}
            icon={link.icon}
            alt={link.alt}
            username={link.username}
          />
        ))}
      </section>
    </main>
  );
}

export default ThankYouPage;