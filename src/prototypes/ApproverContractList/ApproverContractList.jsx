import React, { useState } from "react";
import "./ApproverContractList.scss";

const initialContracts = [
  {
    id: "194523",
    name: "Amanda Paquette",
    course: "Emergency Nursing Clinical 2",
    subjCrn: "NSER 7920 40740",
    registrants: "14",
    termSite: "202610 Other",
    breakEven: ".00",
    dates: "19-FEB-2026 to 19-FEB-2026",
    days: "",
    time: "",
    hours: "7.50",
    orgPosn: "149505 H65X25",
    rate: "$58.71",
    category: "Lab Assistant",
    totalPay: "$440.32",
    comments: "",
    originator: "Maya Heskle",
    approver1: "Kelsey Crompton has approved this contract at Level 1.",
    approver2: "Kathy Kennedy received the email to approve at Level 2.",
  },
  {
    id: "195893",
    name: "Keith Turner",
    course: "Food Microbiology",
    subjCrn: "FOOD 1026 63821",
    registrants: "80",
    termSite: "202620 Distance / Online",
    breakEven: "13.06",
    dates: "02-JUN-2026 to 31-AUG-2026",
    days: "",
    time: "",
    hours: "180.00",
    orgPosn: "142211 H41X19",
    rate: "$39.53",
    category: "Marker",
    totalPay: "$7,115.40",
    comments: "Comments",
    originator: "Olivia Lau",
    approver1: "Eris Friesen has approved this contract at Level 1.",
    approver2: "Jennifer Elliott received the email to approve at Level 2.",
  },
  {
    id: "197000",
    name: "Caroline Frankfurter",
    course: "Digital Health Ecosystems",
    subjCrn: "DIGH 7100 66732",
    registrants: "12",
    termSite: "202620 Distance / Online",
    breakEven: "10.15",
    dates: "17-JUN-2026 to 17-JUN-2026",
    days: "",
    time: "",
    hours: "4.00",
    orgPosn: "149520 H25X46",
    rate: "$121.96",
    category: "Instructor/Lecturer",
    totalPay: "$487.84",
    comments: "",
    originator: "Maya Heskle",
    approver1: "Glynis Rees has approved this contract at Level 1.",
    approver2: "Kathy Kennedy received the email to approve at Level 2.",
  },
  {
    id: "197001",
    name: "Stuart Bowyer",
    course: "curriculum development",
    subjCrn: "DIGH 7000",
    registrants: "0",
    termSite: "202620",
    breakEven: ".00",
    dates: "21-JUN-2026 to 27-JUN-2026",
    days: "",
    time: "",
    hours: "10.00",
    orgPosn: "149520 H25X44",
    rate: "$60.98",
    category: "Curriculum Development",
    totalPay: "$609.80",
    comments: "",
    originator: "Maya Heskle",
    approver1: "Glynis Rees has approved this contract at Level 1.",
    approver2: "Kathy Kennedy received the email to approve at Level 2.",
  },
  {
    id: "197108",
    name: "Arianna Cruz Segura",
    course: "Optimizing Care Delivery and Outcomes",
    subjCrn: "DIGH 7300 69343",
    registrants: "5",
    termSite: "202620 Distance / Online",
    breakEven: "9.83",
    dates: "11-MAY-2026 to 11-MAY-2026",
    days: "",
    time: "",
    hours: "4.00",
    orgPosn: "149520 H25X46",
    rate: "$101.61",
    category: "Instructor/Lecturer",
    totalPay: "$406.44",
    comments: "",
    originator: "Maya Heskle",
    approver1: "Glynis Rees has approved this contract at Level 1.",
    approver2: "Kathy Kennedy received the email to approve at Level 2.",
  },
];

const ApproverContractList = () => {
  const [sortOrder, setSortOrder] = useState("Contract Number");
  const [decisions, setDecisions] = useState({});
  const [reasons, setReasons] = useState({});

  const handleDecisionChange = (contractId, action) => {
    setDecisions((prev) => ({
      ...prev,
      [contractId]: action,
    }));
  };

  const handleReasonChange = (contractId, text) => {
    setReasons((prev) => ({
      ...prev,
      [contractId]: text,
    }));
  };

  const handleSubmitBundle = () => {
    alert("Submitted Bundle for processing.");
  };

  return (
    <div className="approver-contract-list">
      {/* Top Header Navigation */}
      <header className="tone-header">
        <h1 className="tone-brand">bcit secure student information system (TONE)</h1>
        <nav className="tone-nav">
          <a href="/">Main Menu</a>
          <a href="#student">Student Self Service</a>
          <a href="#applications">Applications</a>
          <a href="#registration">Registration</a>
          <a href="#employee">Employee Self Service</a>
          <a href="#faculty">Faculty Self Service</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </header>

      {/* Title */}
      <h2 className="page-title">PTS Contract Approval Summary</h2>
      <p className="sub-title">For BCIT contracts administration use only.</p>

      {/* Greeting */}
      <div className="greeting-section">
        <p className="welcome-text">
          Welcome <strong>Shelley Fraser</strong>,
        </p>
        <a href="#search" className="search-link">
          Search for a Contract
        </a>
      </div>

      {/* Filter Controls */}
      <div className="filter-controls">
        <span className="filter-label">Sort Order:</span>
        {["Contract Number", "Start Date", "Breakeven", "Level"].map((option) => (
          <label key={option} className="radio-label">
            <input
              type="radio"
              name="sortOrder"
              value={option}
              checked={sortOrder === option}
              onChange={(e) => setSortOrder(e.target.value)}
            />
            {option}
          </label>
        ))}
      </div>

      {/* Instructional text & Navigation Header */}
      <div className="instruction-text">
        Below you will find contracts that need to be approved by you. Please click on the contract number to see the details of the contract.
      </div>

      <div className="page-nav-bar">
        <span>You have 5 out of 5 contracts to approve on this page.</span>
        <span className="page-nav-label">
          <strong>Page Navigation: 1</strong>
        </span>
      </div>

      {/* Contract Cards */}
      <div className="contracts-container">
        {initialContracts.map((contract) => (
          <div key={contract.id} className="contract-card">
            {/* Left side: Information Details */}
            <div className="contract-details">
              <div className="detail-row">
                <span className="label">Contract:</span>
                <span className="value">
                  <a href={`#contract-${contract.id}`} className="contract-id-link">
                    {contract.id}
                  </a>
                </span>
              </div>
              <div className="detail-row">
                <span className="label">Name:</span>
                <span className="value bold">{contract.name}</span>
              </div>
              <div className="detail-row">
                <span className="label">Course:</span>
                <span className="value bold">{contract.course}</span>
              </div>

              <div className="detail-row-split">
                <div className="split-col">
                  <span className="label">Subj/Crn:</span>
                  <span className="value bold">{contract.subjCrn}</span>
                </div>
                <div className="split-col align-right">
                  <span className="label">Registrants:</span>
                  <span className="value bold">{contract.registrants}</span>
                </div>
              </div>

              <div className="detail-row-split">
                <div className="split-col">
                  <span className="label">Term/Site:</span>
                  <span className="value bold">{contract.termSite}</span>
                </div>
                <div className="split-col align-right">
                  <span className="label">Break Even:</span>
                  <span className="value bold">{contract.breakEven}</span>
                </div>
              </div>

              <div className="detail-row">
                <span className="label">Dates:</span>
                <span className="value bold">{contract.dates}</span>
              </div>
              <div className="detail-row">
                <span className="label">Days:</span>
                <span className="value bold">{contract.days}</span>
              </div>

              <div className="detail-row-split">
                <div className="split-col">
                  <span className="label">Time:</span>
                  <span className="value bold">{contract.time}</span>
                </div>
                <div className="split-col align-right">
                  <span className="label">Hours:</span>
                  <span className="value bold">{contract.hours}</span>
                </div>
              </div>

              <div className="detail-row-split">
                <div className="split-col">
                  <span className="label">Org/Posn:</span>
                  <span className="value bold">{contract.orgPosn}</span>
                </div>
                <div className="split-col align-right">
                  <span className="label">Rate:</span>
                  <span className="value bold">{contract.rate}</span>
                </div>
              </div>

              <div className="detail-row-split">
                <div className="split-col">
                  <span className="label">Category:</span>
                  <span className="value bold">{contract.category}</span>
                </div>
                <div className="split-col align-right">
                  <span className="label">Total Pay:</span>
                  <span className="value bold">{contract.totalPay}</span>
                </div>
              </div>

              {contract.comments && (
                <div className="detail-row">
                  <span className="label">Comments:</span>
                  <span className="value">
                    <a href="#comments" className="comments-link">
                      {contract.comments}
                    </a>
                  </span>
                </div>
              )}

              <div className="detail-row margin-top-small">
                <span className="label">Originator:</span>
                <span className="value bold">{contract.originator}</span>
              </div>
              <div className="detail-row">
                <span className="label">Approver1:</span>
                <span className="value">{contract.approver1}</span>
              </div>
              <div className="detail-row">
                <span className="label">Approver2:</span>
                <span className="value">{contract.approver2}</span>
              </div>
            </div>

            {/* Right side: Actions (Approve / Reject) */}
            <div className="contract-actions">
              <div className="action-option">
                <input
                  type="checkbox"
                  id={`approve-${contract.id}`}
                  checked={decisions[contract.id] === "approve"}
                  onChange={() =>
                    handleDecisionChange(
                      contract.id,
                      decisions[contract.id] === "approve" ? null : "approve"
                    )
                  }
                />
                <label htmlFor={`approve-${contract.id}`}>Approve at Level 2</label>
              </div>

              <div className="action-option">
                <input
                  type="checkbox"
                  id={`reject-${contract.id}`}
                  checked={decisions[contract.id] === "reject"}
                  onChange={() =>
                    handleDecisionChange(
                      contract.id,
                      decisions[contract.id] === "reject" ? null : "reject"
                    )
                  }
                />
                <label htmlFor={`reject-${contract.id}`}>Reject (Reason required):</label>
              </div>

              <textarea
                rows="3"
                value={reasons[contract.id] || ""}
                onChange={(e) => handleReasonChange(contract.id, e.target.value)}
                disabled={decisions[contract.id] !== "reject"}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <div className="submit-section">
        <button type="button" className="btn-submit-bundle" onClick={handleSubmitBundle}>
          Submit Bundle
        </button>
      </div>

      {/* Footer Navigation */}
      <div className="footer-nav-bar">
        <span>Please note that to submit contracts for approval, you need to use the Submit Bundle button.</span>
        <span className="page-nav-label">
          <strong>Page Navigation: 1</strong>
        </span>
      </div>

      <footer className="tone-footer">
        <span className="release-tag">v1.0-4 (2026-07-17) | DB: TONE</span>
      </footer>
    </div>
  );
};

export default ApproverContractList;