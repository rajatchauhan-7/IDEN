export default function Privacy() {
  return (
    <div className="legal-page">
      <nav className="legal-nav">
        <a className="legal-logo" href="/">ID<span>E</span>N</a>
        <a className="legal-back" href="/">← Back to IDEN</a>
      </nav>
      <div className="legal-container">
        <div className="legal-doc-title">Privacy Policy</div>
        <div className="legal-doc-meta">Effective: 29 May 2026 &nbsp;|&nbsp; Last Updated: 29 May 2026 &nbsp;|&nbsp; Questions: <a href="mailto:admin@useiden.com">admin@useiden.com</a></div>
        <hr/>

        <div className="legal-highlight">
          <p>We have written this policy in plain language. The short version: we collect your email to send you your licence key and product updates. We do not sell your data. We do not store the content you paste into our tools on our servers. Everything else is in the sections below.</p>
        </div>

        <span className="legal-section-label">Introduction</span>
        <h2>Your Privacy Matters</h2>
        <p>IDEN ("we", "our", "us") is a LinkedIn Personal Brand OS operated at www.useiden.com. This Privacy Policy explains what information we collect when you use our service, how we use it, who we share it with, and what rights you have over your data.</p>
        <p>By using IDEN, you agree to the practices described in this Privacy Policy. If you do not agree, please do not use our service.</p>

        <span className="legal-section-label">Section 1</span>
        <h2>What Information We Collect</h2>
        <h3>1.1 Information You Provide Directly</h3>
        <p><strong style={{color:"var(--headline)"}}>Email address:</strong> When you start a free trial, we ask for your email address. We use this to send you access information, product updates, and occasional tips. You can unsubscribe at any time.</p>
        <p><strong style={{color:"var(--headline)"}}>Licence key:</strong> If you purchase a paid plan, your licence key is delivered by email. Payments are processed by Lemon Squeezy. We never receive or store your payment card details.</p>

        <h3>1.2 Content You Paste Into the App</h3>
        <p>IDEN processes text you paste into the tools: LinkedIn posts, profile content, blog articles, and other written material. This content is sent to Anthropic's Claude API to generate AI output. We do not permanently store the content you paste on our servers. It is processed in real time and returned to your browser.</p>
        <p><strong style={{color:"var(--headline)"}}>Important:</strong> Do not paste content containing sensitive personal data (health information, financial details, government identification numbers, or third-party personal information) into IDEN.</p>

        <h3>1.3 Automatically Collected Information</h3>
        <p>When you use IDEN, our hosting provider (Vercel) may collect standard technical data including IP address, browser type, device type, and error logs. This is used for security and performance monitoring.</p>

        <h3>1.4 Data Stored in Your Browser</h3>
        <p>IDEN stores the following data in your browser's localStorage (on your device, not our servers):</p>
        <ul>
          <li>Your Voice DNA Lock profile</li>
          <li>Your generation history (last 20 outputs)</li>
          <li>Your Brand OS pillars</li>
          <li>Your email address (after trial sign-up)</li>
          <li>Your licence key and plan status</li>
        </ul>
        <p>This data lives entirely in your browser. We cannot access it. It is deleted when you clear your browser data.</p>

        <span className="legal-section-label">Section 2</span>
        <h2>How We Use Your Information</h2>
        <ul>
          <li><strong style={{color:"var(--headline)"}}>Providing the service:</strong> Processing your requests and returning AI-generated content to your browser.</li>
          <li><strong style={{color:"var(--headline)"}}>Delivering licence keys:</strong> Sending purchase confirmations and licence keys by email.</li>
          <li><strong style={{color:"var(--headline)"}}>Product communication:</strong> Sending product updates and tips. Infrequent. Unsubscribe any time.</li>
          <li><strong style={{color:"var(--headline)"}}>Security:</strong> Monitoring for abuse of the trial system.</li>
        </ul>
        <p>We do not use your data for advertising. We do not sell your data. We do not share your email with third parties for their marketing purposes.</p>

        <span className="legal-section-label">Section 3</span>
        <h2>Legal Basis for Processing</h2>
        <p>For users in the EEA, UK, or other jurisdictions with data protection laws:</p>
        <ul>
          <li><strong style={{color:"var(--headline)"}}>Contract performance:</strong> Processing your email and licence key to fulfil our service agreement.</li>
          <li><strong style={{color:"var(--headline)"}}>Legitimate interests:</strong> Collecting technical logs for security and performance.</li>
          <li><strong style={{color:"var(--headline)"}}>Consent:</strong> Sending marketing emails. Withdraw consent by unsubscribing at any time.</li>
        </ul>
        <p>For users in India, we process your data in accordance with the Digital Personal Data Protection Act 2023 (DPDPA).</p>

        <span className="legal-section-label">Section 4</span>
        <h2>Third-Party Services We Use</h2>
        <ul>
          <li><strong style={{color:"var(--headline)"}}>Payhip:</strong> Processes payments and delivers licence keys. Subject to Payhip's privacy policy.</li>
          <li><strong style={{color:"var(--headline)"}}>Razorpay / PayPal:</strong> Payment processors depending on your region. We do not store card or bank details.</li>
          <li><strong style={{color:"var(--headline)"}}>Anthropic (Claude API):</strong> Processes text you paste to generate AI output. Does not use your inputs for model training by default.</li>
          <li><strong style={{color:"var(--headline)"}}>Vercel:</strong> Hosts our application and collects standard server logs.</li>
          <li><strong style={{color:"var(--headline)"}}>Lemon Squeezy:</strong> Processes payments. We do not receive your payment card details.</li>
          <li><strong style={{color:"var(--headline)"}}>Brevo:</strong> Manages our email list and sends transactional emails.</li>
        </ul>
        <p>We do not sell, rent, or trade your personal data to any third party for their commercial purposes.</p>

        <span className="legal-section-label">Section 5</span>
        <h2>How Long We Keep Your Data</h2>
        <ul>
          <li><strong style={{color:"var(--headline)"}}>Email address:</strong> Until you unsubscribe or request deletion (within 30 days of request).</li>
          <li><strong style={{color:"var(--headline)"}}>Licence key records:</strong> 7 years for accounting and legal compliance.</li>
          <li><strong style={{color:"var(--headline)"}}>Server logs:</strong> Up to 30 days (Vercel standard).</li>
          <li><strong style={{color:"var(--headline)"}}>Browser data:</strong> On your device only. Delete by clearing browser storage.</li>
        </ul>

        <span className="legal-section-label">Section 6</span>
        <h2>Your Rights</h2>
        <p>Depending on your location, you may have rights including: access, rectification, erasure, restriction, objection, data portability, and withdrawal of consent.</p>
        <p>To exercise any of these rights, email <a href="mailto:admin@useiden.com" style={{color:"var(--lime)"}}>admin@useiden.com</a>. We will respond within 30 days.</p>

        <span className="legal-section-label">Section 7</span>
        <h2>Security</h2>
        <p>We take reasonable measures to protect your data. All data in transit is encrypted via HTTPS. API keys are stored in environment variables, never in client-side code. Payments are handled entirely by Lemon Squeezy.</p>
        <p>If you discover a security vulnerability, please disclose it responsibly to <a href="mailto:admin@useiden.com" style={{color:"var(--lime)"}}>admin@useiden.com</a>.</p>

        <span className="legal-section-label">Section 8</span>
        <h2>Cookies and Local Storage</h2>
        <p>IDEN does not use tracking cookies, advertising cookies, analytics cookies, or social media pixels.</p>
        <p>The app uses your browser's localStorage to store application data. This is not a cookie and is not transmitted to our servers. Vercel may set a strictly necessary technical routing cookie.</p>

        <span className="legal-section-label">Section 9</span>
        <h2>Children's Privacy</h2>
        <p>IDEN is not intended for anyone under 16. We do not knowingly collect data from children under 16. Contact us at <a href="mailto:admin@useiden.com" style={{color:"var(--lime)"}}>admin@useiden.com</a> if you believe a child has provided us with information.</p>

        <span className="legal-section-label">Section 10</span>
        <h2>Changes to This Policy</h2>
        <p>We may update this policy. We will update the "Last Updated" date and notify users of significant changes by email or in the app. Continued use after changes constitutes acceptance.</p>

        <span className="legal-section-label">Contact</span>
        <h2>Contact Us</h2>
        <p>For privacy questions: <a href="mailto:admin@useiden.com" style={{color:"var(--lime)"}}>admin@useiden.com</a></p>
        <p>Website: <a href="https://www.useiden.com" style={{color:"var(--lime)"}}>www.useiden.com</a></p>
      </div>
      <footer className="legal-footer">
        <p>IDEN &nbsp;|&nbsp; <a href="/">Home</a> &nbsp;|&nbsp; <a href="/terms">Terms of Service</a> &nbsp;|&nbsp; <a href="mailto:admin@useiden.com">admin@useiden.com</a></p>
        <p style={{marginTop:"6px"}}>Privacy Policy v1.0 &nbsp;|&nbsp; 29 May 2026</p>
      </footer>
    </div>
  );
}
