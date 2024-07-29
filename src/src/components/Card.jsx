import PropTypes from 'prop-types';
import './Card.css';
import { FaUserCircle } from 'react-icons/fa';

const Card = ({ date, name, title, description, fixType, bgColor }) => {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <h4>{title} ({date})</h4>
      <div className="card-header">
        <button className={`fix-btn ${fixType}`}>
          {fixType === 'new' ? 'New' : fixType === 'improvement' ? 'Improvement' : 'Fix'}
        </button>
        <FaUserCircle size={50} />
        <h5>{name}</h5>
      </div>
      <p className="card-description">{description}</p>
      <button className="btn">Download</button>
    </div>
  );
};

Card.propTypes = {
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fixType: PropTypes.oneOf(['new', 'fix', 'improvement']).isRequired,
  bgColor: PropTypes.string,
};

Card.defaultProps = {
  bgColor: '#ffffff',
};

export default Card;
