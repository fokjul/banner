import React from "react";
import "./InstructorContractList.scss";

const awaitingContracts = [
  { contractNo: "194654", term: "202630", subject: "FMGT", courseNo: "1195", startDate: "09-SEP-2026", endDate: "25-NOV-2026", totalPay: "$4,878.40" },
  { contractNo: "195907", term: "202620", subject: "FMGT", courseNo: "1810", startDate: "07-APR-2026", endDate: "23-JUN-2026", totalPay: "$1,219.60" },
];

const acceptedContracts = [
  { contractNo: "61034", term: "201120", subject: "FMGT", courseNo: "4620", startDate: "27-JUN-2011", endDate: "08-AUG-2011", totalPay: "$3,634.26" },
  { contractNo: "61411", term: "201120", subject: "FMGT", courseNo: "4810", startDate: "27-APR-2011", endDate: "20-JUL-2011", totalPay: "$3,937.12" },
  { contractNo: "62051", term: "201120", subject: "FMGT", courseNo: "4620", startDate: "30-MAY-2011", endDate: "22-AUG-2011", totalPay: "$3,374.67" },
  { contractNo: "66277", term: "201130", subject: "FMGT", courseNo: "3510", startDate: "31-OCT-2011", endDate: "05-DEC-2011", totalPay: "$1,557.54" },
  { contractNo: "69356", term: "201220", subject: "FMGT", courseNo: "4620", startDate: "25-JUN-2012", endDate: "08-AUG-2012", totalPay: "$3,428.32" },
  { contractNo: "78136", term: "201320", subject: "FMGT", courseNo: "4620", startDate: "24-JUN-2013", endDate: "07-AUG-2013", totalPay: "$3,428.32" },
  { contractNo: "78145", term: "201320", subject: "FMGT", courseNo: "4810", startDate: "22-MAY-2013", endDate: "14-AUG-2013", totalPay: "$3,937.12" },
  { contractNo: "80395", term: "201320", subject: "FMGT", courseNo: "4620", startDate: "27-MAY-2013", endDate: "19-AUG-2013", totalPay: "$3,408.60" },
  { contractNo: "99447", term: "201520", subject: "FMGT", courseNo: "", startDate: "31-AUG-2015", endDate: "07-SEP-2015", totalPay: "$3,601.60" },
  { contractNo: "121329", term: "201810", subject: "FMGT", courseNo: "4810", startDate: "21-MAR-2018", endDate: "21-MAR-2018", totalPay: "$327.32" },
];

const InstructorContractList = () => {
  return (
    <div className="instructor-contract-list">
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

      {/* Main Title */}
      <h2 className="page-title">PTS Contracts Summary</h2>

      {/* Welcome Banner Box */}
      <div className="welcome-box">
        <h3>Welcome Chris Gresat,</h3>
        <p>
          Below you will find contracts that need to be accepted by you. The past 10 contracts previously accepted are displayed on this page; for the full history go to: <a href="#history">Full History</a>
        </p>
      </div>

      {/* Table 1: Contracts awaiting acceptance */}
      <section className="contract-table-section">
        <div className="section-header">
          <h3>Contracts awaiting your acceptance</h3>
          <span className="badge awaiting-badge">2 awaiting</span>
        </div>

        <table className="contracts-table">
          <thead>
            <tr>
              <th>CONTRACT NO.</th>
              <th>TERM</th>
              <th>SUBJECT</th>
              <th>COURSE NO.</th>
              <th>START DATE</th>
              <th>END DATE</th>
              <th className="text-right">TOTAL PAY</th>
            </tr>
          </thead>
          <tbody>
            {awaitingContracts.map((row) => (
              <tr key={row.contractNo}>
                <td>
                  <a href={`#contract-${row.contractNo}`} className="contract-link">
                    {row.contractNo}
                  </a>
                </td>
                <td>{row.term}</td>
                <td>{row.subject}</td>
                <td>{row.courseNo}</td>
                <td>{row.startDate}</td>
                <td>{row.endDate}</td>
                <td className="text-right bold">{row.totalPay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Table 2: Contracts accepted */}
      <section className="contract-table-section">
        <div className="section-header">
          <h3>Contracts accepted by you</h3>
          <span className="badge accepted-badge">10 accepted</span>
        </div>

        <table className="contracts-table">
          <thead>
            <tr>
              <th>CONTRACT NO.</th>
              <th>TERM</th>
              <th>SUBJECT</th>
              <th>COURSE NO.</th>
              <th>START DATE</th>
              <th>END DATE</th>
              <th className="text-right">TOTAL PAY</th>
            </tr>
          </thead>
          <tbody>
            {acceptedContracts.map((row) => (
              <tr key={row.contractNo}>
                <td>
                  <a href={`#contract-${row.contractNo}`} className="contract-link">
                    {row.contractNo}
                  </a>
                </td>
                <td>{row.term}</td>
                <td>{row.subject}</td>
                <td>{row.courseNo}</td>
                <td>{row.startDate}</td>
                <td>{row.endDate}</td>
                <td className="text-right bold">{row.totalPay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Footer Tag */}
      <footer className="tone-footer">
        <span className="release-tag">v1.0-4 (2026-07-17) | DB: TONE</span>
      </footer>
    </div>
  );
};

export default InstructorContractList;