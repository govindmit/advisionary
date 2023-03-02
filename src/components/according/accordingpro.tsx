import React from "react";
import MultiAccordion from "./according";

const Multiacc = () => {
  const accordionData = [
    {
      btn:"1",
      title: "Comprehensive analysis of risk assessment",
      content:
        "Business wide risk management involves taking proactive steps to identify potential risks analysing the potential impact of those risks and determining the best ways to mitigate or eliminate them. Advisionary helps an organisation achieve its goals and objectives by ensuring that it is prepared for any potential risks that could arise. Risk management strategies can include establishing policies procedures, and processes to ensure that risks are managed effectively'",
    },
    {
      btn:"2",
      title: "Policies",
      content:
        "Advisionary will help you draft policies and procedures that are effective and compliant, based on the outcome of a risk assessment. This approach will ensure that the policies reflect the true risk environment and target real deficiencies in the control framework. It will also help to achieve the right level of governance that is tailored to the business, risk appetite, and a dynamic assessment of how effective the group wide controls are performing.",
    },
    {
      btn:"3",
      title: "Know Your Customer",
      content:
        "Knowing Your Customer (KYC) is a fundamental process that businesses must undertake to reduce the chances of fraudulent activities and unethical behaviour. It is essential for businesses in all industries to understand the customer’s identity, background, and any potential risks that may arise through the business relationship. In the current business climate, KYC is essential when performing risk assessments to reduce the chances of money laundering, bribery, fraud, or terrorism financing. Our goal is to help you optimise KYC/KYB processes to enable a safer business.",
    },
    {
      btn:"4",
      title: "Transaction Monitoring",
      content:
        "Transaction monitoring is a process that helps detect and prevent fraudulent activity in financial transactions. It involves the analysis of suspicious transactions and alerts organisations when suspicious activity is detected. It is used to identify any suspicious activity, such as money laundering, terrorist financing, and other illegal activities. We can offer a plug-in transaction monitoring module both for Fiat transactions and Crypto transactions.",
    },
  ];

  return (
    <div className="App text-white">
      <MultiAccordion data={accordionData} />
    </div>
  );
};

export default Multiacc;
