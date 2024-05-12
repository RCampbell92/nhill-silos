function Contact() {
  return (
    <div className="contact section">
      <h2>Contact us</h2>
      <p>
        Ross and Jesse are the first contacts for Nhill Silos. They are always
        available to talk to farmers. Give Ross (0419 358 763) or Jesse (0429
        503 887) a call for a price on New grain silos or a quote on relocation
        of second hand silos. Send Kim an email at admin@nhillsilos.net.au for
        any information needed.
      </p>
      <br></br>
      <div className="email-form">
        <h3>Email us a question and we will get back to you</h3>
        <form>
          <ul>
            <li>
              <label htmlFor="name">Name</label>
              <input type="text" id="name"></input>
            </li>
            <li>
              <label htmlFor="email">Email address</label>
              <input type="email" id="email"></input>
            </li>
            <li>
              <label htmlFor="message">Message</label>
              <textarea id="message" className="message-input"></textarea>
            </li>
            <li>
              <button>Send</button>
            </li>
          </ul>
        </form>
      </div>

      <h3>Better yet, see us in person!</h3>
      <p>
        We are easy to find, we are the first shed on the left coming from
        Adelaide & the last shed on the right coming from Melbourne on the
        Western Highway.
      </p>
      <section className="columns">
        <div>
          <h3>Nhill Silos</h3>
          <p>110 Victoria Street, Nhill Victoria 3418, Australia</p>
        </div>
        <div>
          <h3>Hours</h3>
          <p>Mon 8:30am - 5:00pm</p>
          <p>Tue 8:30am - 5:00pm</p>
          <p>Wed 8:30am - 5:00pm</p>
          <p>Thu 8:30am - 5:00pm</p>
          <p>Fri 8:30am - 5:00pm</p>
          <p>Sat Closed</p>
          <p>Sun Closed</p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
