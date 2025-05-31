import React from 'react';

interface Testimonial {
  client: string;
  quote: string;
  agent?: string;
}

const testimonials: Testimonial[] = [
  {
    client: 'CLIENT: ████████ CORPORATION',
    quote: '"Data-Treya\'s predictive defense prevented a ransomware breach that even our SOC missed."',
  },
  {
    client: 'CLIENT: [REDACTED]',
    agent: 'AGENT: @thewatcher',
    quote: '"Feels like installing a digital Shiva—omniscient, omnipresent, omnidefensive."',
  },
  {
    client: 'CLIENT: [REDACTED]',
    quote: '"The adaptive learning is unlike anything we\'ve seen. It caught a zero-day that bypassed three other systems."',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-neon-green">Hacker Scrolls (Testimonials)</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#0a0a0a] border border-neon-green/50 p-6 rounded-lg shadow-md shadow-neon-green/20
                       font-mono text-neon-green/90 relative overflow-hidden"
          >
            {/* Glitchy line effect - simple version */}
            <div className="absolute top-0 left-0 w-full h-1 bg-neon-green opacity-30 animate-pulse"></div>

            {testimonial.client && <p className="text-sm text-neon-green/70 mb-2">{testimonial.client}</p>}
            {testimonial.agent && <p className="text-sm text-neon-green/70 mb-2">{testimonial.agent}</p>}

            <blockquote className="text-lg italic leading-relaxed">
              {testimonial.quote.split('').map((char, i) => (
                <span key={i} style={{ animationDelay: `${i * 0.01}s` }} className="opacity-0 animate-fadeInChar">
                  {char}
                </span>
              ))}
            </blockquote>

            <div className="absolute bottom-0 right-0 w-1/2 h-px bg-neon-green opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-px h-1/2 bg-neon-green opacity-20"></div>
          </div>
        ))}
      </div>
      <style global>
        @keyframes fadeInChar {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .testimonials .char {
          animation: fadeInChar 0.5s ease-out forwards;
          opacity: 0;
        }
      </style>
    </section>
  );
};

export default Testimonials;
