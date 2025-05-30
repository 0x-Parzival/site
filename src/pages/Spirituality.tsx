import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Chart from 'chart.js/auto';

const Spirituality: React.FC = () => {
  const [activeTab, setActiveTabState] = useState('introduction'); // Default active tab

  const handleSetActiveTab = (tabId: string) => {
    setActiveTabState(tabId);
  };

  // Define tab button data to avoid repetition in JSX
  const tabButtons = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'overview', label: 'Overview & Context' },
    { id: 'logical', label: 'Logical Aspects' },
    { id: 'illogical', label: 'Illogical Aspects' },
    { id: 'scholarly', label: 'Scholarly Interpretations' },
    { id: 'conclusion', label: 'Conclusion' },
  ];

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Interactive Bhagwatam Puran Analysis</title>
      </Head>
      <div className="container mx-auto p-4 md:p-8 max-w-5xl">
        {/* Header from issue's HTML */}
        <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#6D4C41]">Interactive Analysis of the Bhagwatam Puran</h1>
            <p className="text-md text-[#A1887F] mt-2">Exploring Logical and Illogical Aspects Through an Interactive Lens</p>
        </header>

        {/* Navigation from issue's HTML */}
        <nav className="flex flex-wrap justify-center mb-8 space-x-2 space-y-2 md:space-y-0">
            {tabButtons.map(tab => (
              <button
                key={tab.id}
                className={`tab-button px-4 py-2 rounded-md bg-[#FFF8E1] text-[#6D4C41] font-semibold shadow-sm ${activeTab === tab.id ? 'active' : ''}`}
                data-tab={tab.id} // data-tab might not be strictly needed if all logic is via React state
                onClick={() => handleSetActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
        </nav>

        {/* Main content area - to be filled in 2c */}
        <main id="main-content" className="bg-white p-6 rounded-lg shadow-lg">
            {/* Sections will be added here */}
        </main>

      </div>
      <style jsx global>{`
        body { font-family: 'Inter', sans-serif; background-color: #F5F5DC; color: #3E2723; }
        .tab-button { transition: all 0.3s ease; }
        .tab-button.active { background-color: #E07A5F; color: white; }
        .tab-button:hover:not(.active) { background-color: #A1887F; color: white; }
        .content-section { display: none; }
        .content-section.active { display: block; }
        .collapsible-header { cursor: pointer; user-select: none; }
        .collapsible-content {
            max-height: 0; /* Default hidden state */
            overflow: hidden;
            transition: max-height 0.3s ease-out;
        }
        .collapsible-content.open {
            max-height: 1000px; /* Sufficiently large to show all content */
        }
        .chart-container { position: relative; width: 100%; max-width: 400px; margin-left: auto; margin-right: auto; height: 300px; max-height: 350px; }
        @media (min-width: 768px) { .chart-container { height: 350px; max-width:450px; } }
        .comparison-item.active { background-color: #A1887F; color: white; }
        .prose-styles p { margin-bottom: 1rem; }
        .prose-styles h3 { margin-top: 1.5rem; margin-bottom: 0.75rem; font-size: 1.25rem; font-weight: 600; color: #6D4C41; }
        .prose-styles ul { list-style-position: inside; margin-left: 1rem; margin-bottom: 1rem; }
        .prose-styles li { margin-bottom: 0.5rem; }
        .card { background-color: #FFF8E1; border: 1px solid #D2B48C; }
        .card-title { color: #8D6E63; }
        .table-like { border-collapse: collapse; width: 100%; margin-bottom: 1rem; }
        .table-like th, .table-like td { border: 1px solid #D2B48C; padding: 0.75rem; text-align: left; }
        .table-like th { background-color: #EFEBE9; color: #6D4C41; }
      `}</style>
    </>
  );
};

export default Spirituality;