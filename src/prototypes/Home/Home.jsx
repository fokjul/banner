import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <ul>
        <li><Link to="/prototypes/instructor-contract-list">Instructor Contract List</Link></li>
        <li><Link to="/prototypes/instructor-contract-item">Instructor Contract Item</Link></li>
        <li><Link to="/prototypes/approver-contract-list">Approver Contract List</Link></li>
        <li><Link to="/prototypes/approver-contract-item">Approver Contract Item</Link></li>
        <li><Link to="/prototypes/approver-contract-list-one">Approver Contract List One</Link></li>
      </ul>
    </div>
  )
}

export default Home
