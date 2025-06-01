import React from 'react';
import styles from './Testimonials.module.css';

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
          <div key={index} className={styles.testimonialContainer}>
            <div className={styles.topLine}></div>
            
            {testimonial.client && <p className={styles.clientInfo}>{testimonial.client}</p>}
            {testimonial.agent && <p className={styles.clientInfo}>{testimonial.agent}</p>}

            <blockquote className={styles.quoteText}>
              {testimonial.quote.split('').map((char, i) => (
                <span 
                  key={i} 
                  className={styles.testimonialChar}
                  style={{ animationDelay: `${i * 0.01}s` }}
                >
                  {char}
                </span>
              ))}
            </blockquote>

            <div className={styles.bottomRightLine}></div>
            <div className={styles.bottomRightLineVertical}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
