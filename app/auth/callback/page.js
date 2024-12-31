import dynamic from 'next/dynamic';

// Dynamically import GmailCallback component with ssr: false to disable SSR for this component
const GmailCallback = dynamic(() => import('../../Components/GmailCallback'), { ssr: false });

const CallbackPage = () => {
  return <GmailCallback />;
};

export default CallbackPage;
