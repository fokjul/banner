import React, { useState } from "react";
import "./InstructorContractItem.scss";

const InstructorContractItem = () => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [parkingOption, setParkingOption] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [rejectionReason, setRejectionReason] = useState("");

  const isAcceptDisabled = !agreedToTerms || !parkingOption;
  const isRejectDisabled = !rejectionReason.trim();

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
        <h2>Agreement to Perform Services</h2>
      </div>

      {/* Main Info Block */}
      <section className="contract-section">
                <h3>Instructor details</h3>
                <hr className="divider" />
        <div className="info-row">
          <span className="label">Name:</span>
          <span className="value">Chris Gresat</span>
        </div>
        <div className="info-row">
          <span className="label">BCIT ID:</span>
          <span className="value">A00561485</span>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="contract-section">
        <h3>Course details</h3>
        <hr className="divider" />
        <div className="two-column-grid">
          <div className="grid-column">
            <div className="info-row">
              <span className="label">Term:</span>
              <span className="value">202630</span>
            </div>
            <div className="info-row">
              <span className="label">Subject/Course:</span>
              <span className="value">FMOT 1195</span>
            </div>
            <div className="info-row">
              <span className="label">Course Ref No:</span>
              <span className="value">52583</span>
            </div>
            <div className="info-row">
              <span className="label">Description:</span>
              <span className="value">CIRO Retail Securities Exam (RSE) Preparation Course</span>
            </div>
          </div>

          <div className="grid-column">
            <div className="info-row">
              <span className="label">Site:</span>
              <span className="value">Burnaby</span>
            </div>
            <div className="info-row">
              <span className="label">Weekdays:</span>
              <span className="value">Wed;</span>
            </div>
            <div className="info-row">
              <span className="label">Time:</span>
              <span className="value">1800–2200</span>
            </div>
            <div className="info-row">
              <span className="label">Start/End Date:</span>
              <span className="value">09-SEP-2026 to 25-NOV-2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Details Section */}
      <section className="contract-section">
        <h3>Contract details</h3>
        <hr className="divider" />
        <div className="two-column-grid">
          <div className="grid-column">
            <div className="info-row"><span className="label">Contract No:</span><span className="value">194654</span></div>
            <div className="info-row"><span className="label">Job Category:</span><span className="value">Instructor/Lecturer</span></div>
            <div className="info-row"><span className="label">Union:</span><span className="value">FSA</span></div>
            <div className="info-row"><span className="label">Int/Ext:</span><span className="value"></span></div>
            <div className="info-row"><span className="label">Substitute:</span><span className="value">N</span></div>
            <div className="info-row"><span className="label">Timesheet:</span><span className="value">N</span></div>
            <div className="info-row"><span className="label">Pick up Cheque:</span><span className="value">N</span></div>
            <div className="info-row"><span className="label">Mail Cheque:</span><span className="value">N</span></div>
            <div className="info-row"><span className="label">Direct Deposit:</span><span className="value">Y</span></div>
          </div>

          <div className="grid-column">
            <div className="info-row"><span className="label">Position No:</span><span className="value">B71X43</span></div>
            <div className="info-row"><span className="label">Fund:</span><span className="value">101</span></div>
            <div className="info-row"><span className="label">Organization:</span><span className="value">114202</span></div>
            <div className="info-row"><span className="label">Account Code:</span><span className="value">5343</span></div>
            <div className="info-row"><span className="label">Program:</span><span className="value">201</span></div>
            <div className="info-row"><span className="label">No. weeks:</span><span className="value">10.0</span></div>
            <div className="info-row"><span className="label">Weekly Hours:</span><span className="value">0.0</span></div>
            <div className="info-row"><span className="label">Total Hours:</span><span className="value">40.0</span></div>
            <div className="info-row"><span className="label">Rate of Pay:</span><span className="value">$121.96</span></div>
            <div className="info-row"><span className="label">Total Pay:</span><span className="value">$4,878.40</span></div>
          </div>
        </div>
      </section>

      {/* Contact & Comments Section */}
      <section className="contract-section">
        <h3>Contact & comments</h3>
        <hr className="divider" />
        <div className="info-row"><span className="label">BCIT Contact:</span><span className="value">Stacey Lu</span></div>
        <div className="info-row"><span className="label">Department:</span><span className="value"></span></div>
        <div className="info-row">
          <span className="label">Comments:</span>
          <span className="value">
            Class WILL NOT be held on Wednesday, September 30th (National Day for Truth and Reconciliation), and Wednesday, November 11th (Remembrance Day).
          </span>
        </div>
      </section>

      {/* Privacy Notice Box */}
      <section className="contract-section">
        <h3>Privacy notice & consent</h3>
        <hr className="divider" />
        <div >
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

      </div>
      <div className="checkbox-field">
        <h4>Agree to terms</h4>
          <input 
            type="checkbox" 
            id="agreeTerms" 
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)} 
          />
          <label htmlFor="agreeTerms">I agree to the above privacy notice and consent statement.</label>
        </div>
      </section>

      {/* Parking Permit Form Section */}
      <section className="contract-section">
        <h3>Parking permit</h3>
        <hr className="divider" />
        <div className="parking-section">
        <p className="section-header-description">Please choose one (mandatory)</p>
        
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
            <label htmlFor="plate">Enter your licence plate number: </label>
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
      </div>
      </section>



      <section className="contract-section">
        <h3>Contract actions</h3>
              <hr className="divider" />
        <div className="action-container">
           <div className="rejection-section">
        <h4>Accept contract</h4>
        <span className="section-header-description">To accept the contract, agree to the conditions and choose a parking option above.</span>
         <div className="action-row">
          <button 
            type="button" 
            className="btn-accept" 
            disabled={isAcceptDisabled}
            onClick={handleAccept}
          >
            Accept Contract
          </button>
        </div>
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
      

      {/* Footer Navigation */}
      <footer className="tone-footer">
        <a href="#back" className="back-link">&larr; back to PTS Contracts Summary</a>
        <span className="release-tag">Release: BCIT</span>
      </footer>
    </div>
  );
};

export default InstructorContractItem;