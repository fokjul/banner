import React, { useState } from "react";
import "./ApproverContractItem.scss";

const ApproverContractItem = () => {
  const [rejectionReason, setRejectionReason] = useState("");

  const isRejectDisabled = !rejectionReason.trim();
  const isAcceptDisabled = false;

  const handleApprove = () => {
    alert("Contract 194523 Approved");
  };

  const handleAccept = handleApprove;

  const handleReject = () => {
    if (!rejectionReason.trim()) {
      alert("Please provide a reason for rejecting the contract.");
      return;
    }
    alert("Contract 194523 Rejected");
  };

  return (
    <div className="approver-contract-item">
      {/* Top Header Links */}
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

      {/* Contract Title Banner */}
      <div className="contract-title-bar">
        <h2>PTS Contract Approval Details</h2>
      </div>

      {/* Personal Info Grid */}
      <section className="contract-section">
                <h3>Instructor details</h3>
                <hr className="divider" />
        <div className="info-row">
          <span className="label-box">Name:</span>
          <span className="value-text">Chris Gresat</span>
        </div>
        <div className="info-row">
          <span className="label-box">BCIT ID:</span>
          <span className="value-text">A00561485</span>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="contract-section">
        <h3>Course details</h3>
        <hr className="divider" />
        <div className="two-column-grid">
          <div className="grid-column">
            <div className="info-row"><span className="label-box">Term:</span><span className="value-text">202610</span></div>
            <div className="info-row"><span className="label-box">Subj/Crse No:</span><span className="value-text">NSER 7500</span></div>
            <div className="info-row"><span className="label-box">Course Ref No:</span><span className="value-text">45746</span></div>
            <div className="info-row"><span className="label-box">Department:</span><span className="value-text">Specialty Nursing</span></div>
            <div className="info-row"><span className="label-box">Subject:</span><span className="value-text">Emergency Nursing Clinical 2</span></div>
          </div>

          <div className="grid-column">
            <div className="info-row"><span className="label-box">Site:</span><span className="value-text">Other</span></div>
            <div className="info-row"><span className="label-box">Weekdays:</span><span className="value-text"></span></div>
            <div className="info-row"><span className="label-box">Time:</span><span className="value-text">-</span></div>
            <div className="info-row"><span className="label-box">Start - End Date:</span><span className="value-text">19-FEB-2026 to 19-FEB-2026</span></div>
            <div className="info-row"><span className="label-box">Registrants:</span><span className="value-text">14</span></div>
            <div className="info-row"><span className="label-box">Break Even:</span><span className="value-text">0.0</span></div>
            <div className="info-row"><span className="label-box">Position No:</span><span className="value-text">H65X25</span></div>
          </div>
        </div>
      </section>

      {/* Contract Details Section */}
      <section className="contract-section">
        <h3>Contract details</h3>
        <hr className="divider" />
        <div className="two-column-grid">
          <div className="grid-column">
            <div className="info-row"><span className="label-box">Job Category:</span><span className="value-text">Lab Assistant</span></div>
            <div className="info-row"><span className="label-box">Union:</span><span className="value-text">FSA</span></div>
            <div className="info-row"><span className="label-box">Int/Ext:</span><span className="value-text"></span></div>
            <div className="info-row"><span className="label-box">Substitute:</span><span className="value-text">N</span></div>
            <div className="info-row"><span className="label-box">Timesheet:</span><span className="value-text">N</span></div>
            <div className="info-row"><span className="label-box">Pick up Cheque:</span><span className="value-text">N</span></div>
            <div className="info-row"><span className="label-box">Mail Cheque:</span><span className="value-text">N</span></div>
            <div className="info-row"><span className="label-box">Direct Deposit:</span><span className="value-text">Y</span></div>
            <div className="info-row"><span className="label-box">Parking:</span><span className="value-text">N</span></div>
            <div className="info-row"><span className="label-box">Permit no:</span><span className="value-text"></span></div>
            <div className="info-row"><span className="label-box">Originator:</span><span className="value-text">Maya Heskia</span></div>
            <div className="info-row"><span className="label-box">Approver 1:</span><span className="value-text">Kelsey Crompton</span></div>
            <div className="info-row"><span className="label-box">Approver 2:</span><span className="value-text">Kathy Kennedy</span></div>
            <div className="info-row"><span className="label-box">BCIT Contact:</span><span className="value-text">Maya Heskia</span></div>
            <div className="info-row"><span className="label-box">Comments:</span><span className="value-text"></span></div>
          </div>

          <div className="grid-column">
            <div className="info-row"><span className="label-box">Fund:</span><span className="value-text">101</span></div>
            <div className="info-row"><span className="label-box">Organization:</span><span className="value-text">149505</span></div>
            <div className="info-row"><span className="label-box">Account Code:</span><span className="value-text">5325</span></div>
            <div className="info-row"><span className="label-box">Program:</span><span className="value-text">261</span></div>
            <div className="info-row"><span className="label-box">No. weeks:</span><span className="value-text">1.0</span></div>
            <div className="info-row"><span className="label-box">Weekly Hours:</span><span className="value-text">0.0</span></div>
            <div className="info-row"><span className="label-box">Total Hours:</span><span className="value-text">7.5</span></div>
            <div className="info-row"><span className="label-box">Rate of Pay:</span><span className="value-text">$58.71</span></div>
            <div className="info-row"><span className="label-box">Total Pay:</span><span className="value-text">$440.32</span></div>
            
            <div className="approval-status-group">
              <div className="info-row"><span className="label-box">Approved 1:</span><span className="value-text">Y</span></div>
              <div className="info-row"><span className="label-box">Approved 2:</span><span className="value-text">N</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Approve Button */}
      <section className="contract-section">
        <h3>Contract actions</h3>
        <hr className="divider" />
        <div className="action-container">
            
         <div className="action-row">
          <h4>Approve contract</h4>
          <button 
            type="button" 
            className="btn-accept" 
            disabled={isAcceptDisabled}
            onClick={handleAccept}
          >
            Approve Contract
          </button>
        </div>
          <div className="rejection-section">
        <h4>Reject contract</h4>
        <span className="section-header-description">To reject the contract specify the rejection reason below (mandatory). 
          <br/>
        Your comments will be returned to the originator along with the contract.</span>
        
        <div className="reject-controls">
          <textarea 
            rows="3" 
            value={rejectionReason}
            onChange={(e) => setRejectionReason(e.target.value)}
          />
          <button type="button" className="btn-reject" disabled={isRejectDisabled} onClick={handleReject}>
            Reject
          </button>
        </div>
        </div>
        </div>
       
      </section>
      {/* <div className="approve-action-row">
        <button type="button" className="btn-approve" onClick={handleApprove}>
          Approve Contract
        </button>
      </div>

      <hr className="divider" /> */}

      {/* Rejection Section */}
      {/* <div className="rejection-section">
        <p className="hint-text">
          If rejecting the contract, please indicate why below. Your comments will be returned to the originator along with the contract.
        </p>
        <div className="reject-controls">
          <textarea 
            rows="4" 
            value={rejectionReason}
            onChange={(e) => setRejectionReason(e.target.value)}
          />
          <button type="button" className="btn-reject" onClick={handleReject}>
            Reject Contract
          </button>
        </div>
      </div> */}

      {/* Footer Navigation */}
      <footer className="tone-footer">
        <a href="#approvals" className="back-link">&larr; back to Approvals Summary</a>
        <span className="release-tag">Release: BCIT</span>
      </footer>
    </div>
  );
};

export default ApproverContractItem;