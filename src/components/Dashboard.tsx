import { FC } from 'react';
import OverviewSection from './sections/OverviewSection';
import ResultsSection from './sections/ResultsSection';
import PricingSection from './sections/PricingSection';
import OutreachSection from './sections/OutreachSection';
import MarketingSection from './sections/MarketingSection';
import PhoneSection from './sections/PhoneSection';
import TrendsSection from './sections/TrendsSection';
import GrowthSection from './sections/GrowthSection';

interface DashboardProps {
  activeSection: string;
}

const Dashboard: FC<DashboardProps> = ({ activeSection }) => {
  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <OverviewSection />;
      case 'results':
        return <ResultsSection />;
      case 'pricing':
        return <PricingSection />;
      case 'outreach':
        return <OutreachSection />;
      case 'marketing':
        return <MarketingSection />;
      case 'phone':
        return <PhoneSection />;
      case 'trends':
        return <TrendsSection />;
      case 'growth':
        return <GrowthSection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {renderSection()}
    </div>
  );
};

export default Dashboard;
