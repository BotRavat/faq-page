import "./pagetop.css";

export default function PageTop() {
  return (
    <div className="pagetop">
      <h1>Get in touch</h1>
      <p style={{fontWeight:'500'}}>
        We love to hear all the positives, but more importantly all the critical
        feedback that helps us improve & grow.
      </p>
      <div className="socialIcon">
        <div className="mailBox">
          <img className="emailIcon" src="assets/email.png" alt=""/>
          <p className="emailTitle">email:</p><span style={{fontWeight:'500',cursor:'pointer'}}>contact@xyz.com</span>
         
        </div>
        <div className="whatsappBox">
          <img className="whatsappIcon" src="/assets/whatsapp.jpeg" alt=""/>
          <button className="whatsappButton">Send a message</button>
        </div>
      </div>
    </div>
  );
}
