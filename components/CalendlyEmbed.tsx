import Head from 'next/head';

const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';

export interface CalendlyEmbedProps {
  account: string;
  eventName: string;
}

const CalendlyEmbed = ({ account, eventName }: CalendlyEmbedProps) => (
  <div id="schedule_form">
    <Head>
      <script key="calendly-script" src={SCRIPT_SRC} async />
    </Head>
    <div
      className="calendly-inline-widget"
      data-url={`https://calendly.com/${account}/${eventName}`}
      style={{ minWidth: '480px', height: '700px' }}
    />
  </div>
);

export default CalendlyEmbed;
