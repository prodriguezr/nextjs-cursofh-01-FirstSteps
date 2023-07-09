import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'This page show price list of our products',
  keywords: ['Pricing', 'list', 'products'],
};

const PricingPage = () => {
  return <span className='text-7xl'>PricingPage</span>;
};

export default PricingPage;
