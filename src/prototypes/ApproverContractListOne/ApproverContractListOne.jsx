import React, { useState } from "react";
import "./ApproverContractListOne.scss";

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

const ApproverContractListOne = () => {
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

  const handleAccept = (contractId) => {
    alert(`Contract ${contractId} Approved`);
  };

  const handleReject = (contractId) => {
    if (!reasons[contractId]?.trim()) {
      alert("Please provide a reason for rejecting the contract.");
      return;
    }
    alert(`Contract ${contractId} Rejected`);
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
        You have 5 out of 5 contracts to approve. Please click on the contract number to see the details of the contract.
      </div>

      {/* <div className="page-nav-bar">
        <span className="page-nav-label">
          <strong>Page Navigation: 1</strong>
        </span>
      </div> */}

      {/* Contract Cards */}
      <div className="contracts-container">
        {initialContracts.map((contract) => (
          <div key={contract.id} className="contract-wrapper">
            {/* Left side: Information Details */}
            <div className="contracts-header">
              <h3><a href={`#contract-${contract.id}`} className="contract-id-link">
                    Contract No: {contract.id}
                  </a></h3>
              <hr className="divider" />
            </div>
            <div className="contract-card">
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
                <span className="label">Instructor:</span>
                <span className="value bold">{contract.name}</span>
              </div>
              <div className="detail-row">
                <span className="label">Course:</span>
                <span className="value bold">{contract.course}</span>
              </div>

              <div className="detail-row">
                <span className="label">Subj/Crn:</span>
                <span className="value bold">{contract.subjCrn}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Registrants:</span>
                  <span className="value bold">{contract.registrants}</span>
              </div>

              <div className="detail-row">
                  <span className="label">Term/Site:</span>
                  <span className="value bold">{contract.termSite}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Break Even:</span>
                  <span className="value bold">{contract.breakEven}</span>
                </div>

              <div className="detail-row">
                <span className="label">Dates:</span>
                <span className="value bold">{contract.dates}</span>
              </div>
              <div className="detail-row">
                <span className="label">Days:</span>
                <span className="value bold">{contract.days}</span>
              </div>

              <div className="detail-row">
                  <span className="label">Time:</span>
                  <span className="value bold">{contract.time}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Hours:</span>
                  <span className="value bold">{contract.hours}</span>
                </div>

              <div className="detail-row">
                <span className="label">Org/Posn:</span>
                <span className="value bold">{contract.orgPosn}</span>
              </div>
              <div className="detail-row">
                <span className="label">Rate:</span>
                <span className="value bold">{contract.rate}</span>
              </div>

              <div className="detail-row">
                <span className="label">Category:</span>
                <span className="value bold">{contract.category}</span>
              </div>
              <div className="detail-row">
                <span className="label">Total Pay:</span>
                <span className="value bold">{contract.totalPay}</span>
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

             <div className="action-container">
            
         <div className="action-row">
          <h4>Approve contract on Level 2</h4>
          <button 
            type="button" 
            className="btn-accept" 
            onClick={() => handleAccept(contract.id)}
          >
            Approve Contract
          </button>
        </div>
          <div className="rejection-section">
        <h4>Reject contract</h4>
        <span className="section-header-description">To reject the contract specify the rejection reason below (mandatory). 
          </span>
        
        <div className="reject-controls">
          <textarea 
            rows="3" 
            value={reasons[contract.id] || ""}
            onChange={(e) => handleReasonChange(contract.id, e.target.value)}
          />
          <button type="button" className="btn-reject" disabled={!reasons[contract.id]?.trim()} onClick={() => handleReject(contract.id)}>
            Reject
          </button>
        </div>
        </div>
            </div>
            </div>
            
            
           
          </div>
        ))}
      </div>


      {/* Footer Navigation */}
      <div className="footer-nav-bar">
        
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

export default ApproverContractListOne;