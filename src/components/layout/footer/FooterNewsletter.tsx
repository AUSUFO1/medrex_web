'use client';

import { useState } from 'react';

export default function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="max-w-[980px] mx-auto px-5 pb-10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="flex-1 max-w-md">
          <h3 className="text-[18px] font-semibold text-gray-900 dark:text-white tracking-[-0.3px] mb-2">
            Stay updated
          </h3>
          <p className="text-[14px] text-gray-500 dark:text-[#6e6e73] tracking-[-0.1px] leading-relaxed">
            Get the latest health tips, product updates, and exclusive offers delivered to your inbox.
          </p>
        </div>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 min-w-0 flex-1 max-w-md">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 text-[14px] bg-white dark:bg-[#1d1d1f] border border-black/[0.12] dark:border-white/[0.12] rounded-[8px] placeholder-gray-500 dark:placeholder-[#6e6e73] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-[14px] font-medium rounded-[8px] active:scale-98 transition duration-200 whitespace-nowrap"
          >
            {subscribed ? 'Subscribed!' : 'Subscribe'}
          </button>
        </form>
      </div>
      {subscribed && (
        <p className="text-[12px] text-green-600 dark:text-green-400 mt-3 tracking-[-0.1px]">
          Thanks for subscribing! Check your email for confirmation.
        </p>
      )}
    </div>
  );
}
