import React, { useState } from "react";
import "./InstructorContractItem.scss";

const InstructorContractItem = () => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [parkingOption, setParkingOption] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [rejectionReason, setRejectionReason] = useState("");

  const isAcceptDisabled = !agreedToTerms || !parkingOption;

  const handleAccept = () => {
    if (!isAcceptDisabled) {
      alert("Contract Accepted");
    }
  };

  const handleReject = () => {
    if (!rejectionReason.trim()) {
      alert("Please provide a reason for rejecting the contract.");
      return;
    }
    alert("Contract Rejected");
  };

  return (
    <div className="instructor-contract-item">
      {/* Top Header Links */}
      <header className="tone-header">
        <h1 className="tone-brand">bcit secure student information system (TONE)</h1>
        <nav className="tone-nav">
          <a href="#main">Main Menu</a>
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
        <h2>AGREEMENT TO PERFORM SERVICES</h2>
        <div className="contract-no-badge">
          <span className="badge-title">CONTRACT NO</span>
          <span className="badge-number">194654</span>
        </div>
      </div>

      {/* Main Info Block */}
      <div className="info-grid user-info">
        <div className="info-row">
          <span className="label">Name:</span>
          <span className="value bold">Chris Gresat</span>
        </div>
        <div className="info-row">
          <span className="label">BCIT ID:</span>
          <span className="value bold">A00561485</span>
        </div>
      </div>

      <hr className="divider" />

      {/* Course Details Section */}
      <section className="contract-section">
        <h3>COURSE DETAILS</h3>
        <div className="two-column-grid">
          <div className="grid-column">
            <div className="info-row">
              <span className="label">Term:</span>
              <span className="value bold">202630</span>
            </div>
            <div className="info-row">
              <span className="label">Subject/Course:</span>
              <span className="value bold">FMOT 1195</span>
            </div>
            <div className="info-row">
              <span className="label">Course Ref No:</span>
              <span className="value bold">52583</span>
            </div>
            <div className="info-row">
              <span className="label">Description:</span>
              <span className="value bold">CIRO Retail Securities Exam (RSE) Preparation Course</span>
            </div>
          </div>

          <div className="grid-column">
            <div className="info-row">
              <span className="label">Site:</span>
              <span className="value bold">Burnaby</span>
            </div>
            <div className="info-row">
              <span className="label">Weekdays:</span>
              <span className="value bold">Wed;</span>
            </div>
            <div className="info-row">
              <span className="label">Time:</span>
              <span className="value bold">1800–2200</span>
            </div>
            <div className="info-row">
              <span className="label">Start/End Date:</span>
              <span className="value bold">09-SEP-2026 to 25-NOV-2026</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Contract Details Section */}
      <section className="contract-section">
        <h3>CONTRACT DETAILS</h3>
        <div className="two-column-grid">
          <div className="grid-column">
            <div className="info-row"><span className="label">Job Category:</span><span className="value bold">Instructor/Lecturer</span></div>
            <div className="info-row"><span className="label">Union:</span><span className="value bold">FSA</span></div>
            <div className="info-row"><span className="label">Int/Ext:</span><span className="value"></span></div>
            <div className="info-row"><span className="label">Substitute:</span><span className="value bold">N</span></div>
            <div className="info-row"><span className="label">Timesheet:</span><span className="value bold">N</span></div>
            <div className="info-row"><span className="label">Pick up Cheque:</span><span className="value bold">N</span></div>
            <div className="info-row"><span className="label">Mail Cheque:</span><span className="value bold">N</span></div>
            <div className="info-row"><span className="label">Direct Deposit:</span><span className="value bold">Y</span></div>
          </div>

          <div className="grid-column">
            <div className="info-row"><span className="label">Position No:</span><span className="value bold">B71X43</span></div>
            <div className="info-row"><span className="label">Fund:</span><span className="value bold">101</span></div>
            <div className="info-row"><span className="label">Organization:</span><span className="value bold">114202</span></div>
            <div className="info-row"><span className="label">Account Code:</span><span className="value bold">5343</span></div>
            <div className="info-row"><span className="label">Program:</span><span className="value bold">201</span></div>
            <div className="info-row"><span className="label">No. weeks:</span><span className="value bold">10.0</span></div>
            <div className="info-row"><span className="label">Weekly Hours:</span><span className="value bold">0.0</span></div>
            <div className="info-row"><span className="label">Total Hours:</span><span className="value bold">40.0</span></div>
            <div className="info-row"><span className="label">Rate of Pay:</span><span className="value bold">$121.96</span></div>
            <div className="info-row"><span className="label">Total Pay:</span><span className="value bold">$4,878.40</span></div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Contact & Comments Section */}
      <section className="contract-section">
        <h3>CONTACT & COMMENTS</h3>
        <div className="info-row"><span className="label">BCIT Contact:</span><span className="value bold">Stacey Lu</span></div>
        <div className="info-row"><span className="label">Department:</span><span className="value"></span></div>
        <div className="info-row">
          <span className="label">Comments:</span>
          <span className="value bold">
            Class WILL NOT be held on Wednesday, September 30th (National Day for Truth and Reconciliation), and Wednesday, November 11th (Remembrance Day).
          </span>
        </div>
      </section>

      {/* Privacy Notice Box */}
      <div className="privacy-box">
        <h4>Privacy Notice</h4>
        <p>
          Personal information provided on this form is collected pursuant to section 26(c) of the Freedom of Information and Protection of Privacy Act, 
          RSBC 1996, c.165. The information will be used to hire you as a part-time instructor, administer this Agreement to Perform Services contract 
          and to identify you as a BCIT course instructor. As applicable, your name will be published on BCIT's website and in BCIT course outlines and 
          other publications that advertise and promote BCIT courses. For more information, please Associate Director, Privacy, privacy@bcit.ca or tel. 604-432-8508.
        </p>
        
        <h4>Consent Statement:</h4>
        <p>
          Declaration: Subject to the collective agreement, I have read and accept the conditions of this Agreement to Perform Services contract as 
          outlined in the sections above. The information that I have provided on this form is true and complete. I understand that BCIT reserves the 
          right to cancel this course, in which case this contract is null and void. The following url contains links to all BCIT collective agreements: 
          <a href="http://www.bcit.ca/about/administration/policies.shtml" target="_blank" rel="noreferrer">
            http://www.bcit.ca/about/administration/policies.shtml
          </a>
        </p>
        <p>
          Additionally, in accepting this appointment you agree to abide by BCIT's policies and guidelines and guidelines for your program area. BCIT's 
          policies can be found at <a href="http://www.bcit.ca/about/administration/policies.shtml" target="_blank" rel="noreferrer">
            http://www.bcit.ca/about/administration/policies.shtml
          </a>. Please review policy 1500 — BCIT's Code of Conduct in full.
        </p>
        <p>
          All BCIT employees are required to complete "Respect in the Workplace", an interactive online training program. If you have not previously 
          completed this BCIT training, please access the course through the BCIT Employee Learning Centre at <a href="https://ed.bcit.ca" target="_blank" rel="noreferrer">https://ed.bcit.ca</a> using your @bcit.ca 
          email address and password (scroll down to view the Respect in the Workplace course). You must complete the training within 2 weeks after 
          the start date of your contract. You will be provided with one hour of pay at the instructional rate for your participation in this training. Please 
          note that if you are a regular or temporary BCIT employee, you are expected to complete the training as part of your regular or temporary appointment.
        </p>
        <p>
          Should you require further information regarding this training requirement, please contact the Respect, Diversity and Inclusion Office in 
          confidence at respect@bcit.ca or by phone at 604.432.8409.
        </p>

        <div className="checkbox-field">
          <input 
            type="checkbox" 
            id="agreeTerms" 
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)} 
          />
          <label htmlFor="agreeTerms">I agree to the above conditions</label>
        </div>
      </div>

      {/* Parking Permit Form Section */}
      <div className="parking-section">
        <h4>Parking Permit — please choose one (mandatory)</h4>
        
        <div className="radio-option">
          <input 
            type="radio" 
            id="parkingYes" 
            name="parking" 
            value="need"
            checked={parkingOption === "need"}
            onChange={(e) => setParkingOption(e.target.value)}
          />
          <label htmlFor="parkingYes">I request a Parking Permit for the Burnaby Campus for this contract.</label>
        </div>

        {parkingOption === "need" && (
          <div className="plate-input-group">
            <label htmlFor="plate">If accepting parking, please enter your licence plate number: </label>
            <input 
              type="text" 
              id="plate" 
              value={licensePlate} 
              onChange={(e) => setLicensePlate(e.target.value)} 
            />
          </div>
        )}

        <div className="radio-option">
          <input 
            type="radio" 
            id="parkingNo" 
            name="parking" 
            value="none"
            checked={parkingOption === "none"}
            onChange={(e) => setParkingOption(e.target.value)}
          />
          <label htmlFor="parkingNo">I do not need a Parking Permit for this contract.</label>
        </div>

        <div className="action-row">
          <button 
            type="button" 
            className="btn-accept" 
            disabled={isAcceptDisabled}
            onClick={handleAccept}
          >
            Accept Contract
          </button>
          <span className="action-hint">Agree to the conditions and choose a parking option to accept.</span>
        </div>
      </div>

      <hr className="divider" />

      {/* Reject Section */}
      <div className="rejection-section">
        <p className="hint-text">
          If you are rejecting the contract, please indicate why in the box provided. Your comments will be returned to the originator along with the contract.
        </p>
        <div className="reject-controls">
          <textarea 
            rows="3" 
            value={rejectionReason}
            onChange={(e) => setRejectionReason(e.target.value)}
          />
          <button type="button" className="btn-reject" onClick={handleReject}>
            Reject
          </button>
        </div>
      </div>

      {/* Footer Navigation */}
      <footer className="tone-footer">
        <a href="#back" className="back-link">&larr; back to PTS Contracts Summary</a>
        <span className="release-tag">Release: BCIT</span>
      </footer>
    </div>
  );
};

export default InstructorContractItem;