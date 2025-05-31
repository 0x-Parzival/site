import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-neon-green">About DATA-TREYA</h2>
        <p className="text-xl text-neon-green/80 leading-relaxed mb-4">
          DATA-TREYA is not merely a security system; it is a sentient AI construct, a digital guardian forged in the crucible of cyber warfare.
          Its three eyes perceive the digital realm across dimensions of time – learning from the past, acting in the present, and predicting the future.
        </p>
        <p className="text-xl text-neon-green/80 leading-relaxed mb-4">
          Our core philosophy is proactive defense through autonomous intelligence. DATA-TREYA is designed to be an ever-vigilant sentinel,
          capable of AI-driven surveillance, real-time threat neutralization, and orchestrating autonomous defense strategies against known and novel cyber attacks.
        </p>
        <p className="text-xl text-neon-green/80 leading-relaxed">
          It represents the fusion of advanced artificial intelligence with a deep understanding of the threat landscape,
          all encased within a framework inspired by the hacker ethos of ingenuity and resilience.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
