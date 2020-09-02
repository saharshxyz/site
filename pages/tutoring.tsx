import Layout from '../components/Layouts/Layout';
import Post from '../components/Copy';
import CalendlyEmbed from '../components/CalendlyEmbed';

const Tutoring = () => {
  return (
    <Layout>
      <Post>
        <div>
          <p>
            <b>Thank you for considering me as a tutor!</b> I am truly grateful
            for being given the opportunity to be a tutor, and as such, I aim to
            provide the best experience possible.
          </p>
          <br />
          <p>
            If this is your first time receiving tutoring from me, I normally
            have a short introduction meeting with parents in order to ensure
            that I am able to deliver <b>the best support possible</b>. Please
            send me <a href="mailto:tutoring@saharsh.tech">an email</a> or use
            the form below to schedule a quick meeting with me.
          </p>
          <br />
          <p>
            If you have already received tutoring from me before and would just
            like to schedule another tutoring session, feel free to{' '}
            <b>request for as much time as you would like </b>
            and you can pay me based on the rate that we have previously agreed
            on. To schedule a meeting, you can{' '}
            <a href="mailto:tutoring@saharsh.tech">email me</a> or use the form
            below. If you would like to request a session longer than one hour,
            please schedule two, back-to-back, sessions.
          </p>
          <br />
          <p>
            <b>My hourly prices are negotiable</b>, so feel free to bring up a
            price that you are comfortable with during our preliminary meeting.
            You can choose to pay in cash when we meet in person, or through{' '}
            <a href="https://srsh.link/paypal">PayPal</a> (please use personal
            payments).
          </p>
        </div>
        <CalendlyEmbed
          account="saharshy29"
          eventName="tutoring?hide_event_type_details=1"
        />
      </Post>
    </Layout>
  );
};

export default Tutoring;
