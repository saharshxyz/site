import { useEffect } from 'react';

const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';
export interface CalendlyEmbedProps {
  account: string;
  eventName: string;
}
const createScript = () => {
  const script = document.createElement('script');
  script.src = SCRIPT_SRC;
  return script;
};
const CalendlyEmbed = ({ account, eventName }: CalendlyEmbedProps) => {
  useEffect(() => {
    const script = document.body.appendChild(createScript());
    return script.remove.bind(script);
  }, []);
  return (
    <div id="schedule_form">
      <div
        className="calendly-inline-widget"
        data-url={`https://calendly.com/${account}/${eventName}`}
        style={{ minWidth: '480px', height: '700px' }}
      />
    </div>
  );
};
export default CalendlyEmbed;
