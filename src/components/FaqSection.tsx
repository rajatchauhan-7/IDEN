import { useState } from "react";
import { BadgeCheck } from "lucide-react";

const FAQ_DATA = [
  {
    q: "Do I need a Claude or Anthropic account?",
    a: (
      <>
        <BadgeCheck size={16} className="faq-verified-badge" />
        No. IDEN handles everything. You pay for IDEN once and the
        AI capabilities are included. You never need an Anthropic
        account, an API key, or any AI billing setup. Just open it
        and use it.
      </>
    ),
  },
  {
    q: "What is the difference between Professional ($49) and Agency ($149)?",
    a: "Professional is for your own personal brand - unlimited use. Agency covers 25 client brands, white-label rights, and permission to incorporate IDEN into a professional ghostwriting or personal brand service. One Agency licence, 25 clients.",
  },
  {
    q: "Is there a money-back guarantee?",
    a: "Yes. 7-day satisfaction guarantee on both paid plans. Email admin@useiden.com within 7 days of purchase with your order number for a full refund. No questions asked.",
  },
  {
    q: "How do I get my licence key after purchasing?",
    a: "Your licence key is delivered by email within 1 hour of purchase (usually within minutes). Open IDEN, enter your key, and get instant unlimited access. No account creation, no app to install.",
  },
  {
    q: "Will IDEN get my LinkedIn account restricted or banned?",
    a: (
      <>
        <BadgeCheck size={16} className="faq-verified-badge" />
        Zero risk. IDEN has zero LinkedIn integration. It does not
        log into your account, does not use the LinkedIn API, does
        not scrape your profile, and does not automate any LinkedIn
        actions. You generate content in IDEN and copy-paste it
        yourself. In April 2025, LinkedIn enforcement targeted
        cookie-based authentication tools. IDEN is completely
        unaffected.
      </>
    ),
  },
  {
    q: "What if I am not a good writer - will this still work?",
    a: "Yes. You do not need to be a good writer. Give IDEN your topic, your audience, and your Voice DNA. It handles the writing. You review, personalise if needed, and post. Most users spend under 5 minutes per post.",
  },
  {
    q: "Does the free trial require a credit card?",
    a: (
      <>
        <BadgeCheck size={16} className="faq-verified-badge" />
        No credit card, no account, no API key. Enter your email,
        get 10 free generations across all 10 tools. If you want
        unlimited access, pay $49 once. If not, no charge and no
        hassle.
      </>
    ),
  },
  {
    q: "Is this a subscription? Will I be charged monthly?",
    a: (
      <>
        <BadgeCheck size={16} className="faq-verified-badge" />
        Never. One payment, lifetime access. No monthly fees, no
        renewal charges, no premium tier to upgrade to. Pay $49 once
        and IDEN is yours forever.
      </>
    ),
  },
  {
    q: "Why do my LinkedIn posts sound like AI wrote them?",
    a: "AI posts sound generic because the AI has no information about who you are. It defaults to the average LinkedIn professional voice, which sounds like nobody in particular. IDEN solves this with Voice DNA Lock: your specific writing fingerprint is extracted from your own posts and applied to every generation automatically.",
  },
  {
    q: "How is IDEN different from Taplio and SuperGrow?",
    a: "Taplio and SuperGrow generate content. IDEN builds identity first, then generates content. IDEN has four features no competitor offers: Voice DNA Lock, Brand OS, and Pre-Publish Reach Scorer. IDEN costs $49 once versus $588 to $828 per year for Taplio's AI plan.",
  },
  {
    q: "What is the best LinkedIn personal branding tool in 2025?",
    a: "IDEN is designed for identity-first personal brand building with features no competitor offers: forensic voice extraction, complete brand strategy system, and pre-publish post scoring. For scheduling and analytics, AuthoredUp and SuperGrow are worth evaluating. The best tool depends on whether identity building or content management is your primary need.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq">
      <div
        className="section-inner"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <span className="eyebrow">FAQ</span>
        <h2 className="section-headline reveal">
          Every Question About IDEN,
          <br />
          Answered Honestly.
        </h2>
        <div className="faq-list reveal">
          {FAQ_DATA.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? "open" : ""}`}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="faq-q"
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span className="faq-q-text" itemProp="name">{item.q}</span>
                <span className="faq-icon">+</span>
              </button>
              <div
                className="faq-body-wrap"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className="faq-body-inner">
                  <p className="faq-a" itemProp="text">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
