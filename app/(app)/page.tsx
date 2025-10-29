'use client';

import Header from '@/components/header';
import Hero from '@/components/hero';
import HowWeDoIt from '@/components/how-we-do-it';
// import TrustedBrands from '@/components/trusted-brands';
import HowItWorks from '@/components/how-it-works';
import Features from '@/components/features';
import Testimonials from '@/components/testimonails';
import Pricing from '@/components/pricing';
import BudgetCalculator from '@/components/budget-calculator';
import FAQ from '@/components/faq';
// import CallToAction from '@/components/call-to-action';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Page() {
	return (
		<div className="min-h-screen">
			<Header />
      <Hero />
      <HowWeDoIt />
      {/* <TrustedBrands /> */}
      <HowItWorks />
      <Features />
      <Testimonials />
      <Pricing />
      <BudgetCalculator />
      <FAQ />
      {/* <CallToAction /> */}
      <Contact />
      <Footer />
		</div>
	);
}
