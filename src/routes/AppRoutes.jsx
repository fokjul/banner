import { Routes, Route } from "react-router-dom";

import Home from "../prototypes/Home/Home";
import InstructorContractList from "../prototypes/InstructorContractList/InstructorContractList";
import InstructorContractItem from "../prototypes/InstructorContractItem/InstructorContractItem";
import ApproverContractList from "../prototypes/ApproverContractList/ApproverContractList";
import ApproverContractItem from "../prototypes/ApproverContractItem/ApproverContractItem";
import ApproverContractListOne from "../prototypes/ApproverContractListOne/ApproverContractListOne";


const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/prototypes/instructor-contract-list" element={<InstructorContractList />} />
      <Route exact path="/prototypes/instructor-contract-item" element={<InstructorContractItem />} />
      <Route exact path="/prototypes/approver-contract-list" element={<ApproverContractList />} />
      <Route exact path="/prototypes/approver-contract-item" element={<ApproverContractItem />} />
      <Route exact path="/prototypes/approver-contract-list-one" element={<ApproverContractListOne />} />
    </Routes>
  );
};

export default AppRoutes;