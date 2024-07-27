import { FaGlobe, FaSearch, FaRuler, FaMedal, FaLightbulb, FaBullhorn, FaMoneyBillWave, FaKeyboard } from 'react-icons/fa';
import './ListSection.css';

const iconsData = [
  { title: "The TLD", description: "Does the domain extension match the language of the domain name?", icon: <FaGlobe /> },
  { title: "Domain Length", description: "Is the domain short enough to remember?", icon: <FaRuler /> },
  { title: "Language", description: "How complex is the actual domain name?", icon: <FaGlobe /> },
  { title: "International recognition", description: "Can the domain name be used on an international scale?", icon: <FaMedal /> },
  { title: "Search engine", description: "Does the domain follow search engine guidelines?", icon: <FaSearch /> },
  { title: "Advertising Potential", description: "Could the domain be used for advertising campaigns?", icon: <FaBullhorn /> },
  { title: "Sales Opportunities", description: "Can the domain name be used on an international scale?", icon: <FaMoneyBillWave /> },
  { title: "Typo susceptibility", description: "How high is the risk of mistyping the domain name?", icon: <FaKeyboard/> },
  { title: "Business potential", description: "Can the domain be used as your company address?", icon: <FaLightbulb /> },
];

const ListSection = () => {
  return (
    <div className="icons-container">
      {iconsData.map((item, index) => (
        <div key={index} className="icon-item">
          <span className="icon">{item.icon}</span>
          <div className="text-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListSection;
