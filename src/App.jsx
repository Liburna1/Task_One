import Card from './components/Card';
import ListSection from './components/ListSection';

const cardData = [
  {
    date: "04/05/2018",
    name: "Kevin Joe",
    title: "3.3.0",
    description: "File system changed from Dokan to CBFS\nHost Cloud Drive\nCloud Drive is now a network drive\nVarious bug fixes and stability improvements\nShare permissions re-design and optimization.",
    fixType: "new"
  },
  {
    date: "20/05/2015",
    name: "Kevin Joe",
    title: "3.1.0",
    description: "Introducing Host Cloud Drive - virtual drive functionality\nNew Share options and management\nNew, more user-friendly design\nSync optimizations\nVarious performance improvements and bug fixes",
    fixType: "fix"
  },
  {
    date: "20/05/2015",
    name: "Kevin Joe",
    title: "3.1.0",
    description: "Added Settings for Auto Start\nAdded Update Notification\nSpeed Optimization\nBug Fixes",
    fixType: "improvement"
  },
  {
    date: "04/05/2018",
    name: "Kevin Joe",
    title: "3.3.0",
    description: "File system changed from Dokan to CBFS\nHost Cloud Drive\nCloud Drive is now a network drive\nVarious bug fixes and stability improvements\nShare permissions re-design and optimization.",
    fixType: "new"
  },
  {
    date: "20/05/2015",
    name: "Kevin Joe",
    title: "3.1.0",
    description: "Introducing Host Cloud Drive - virtual drive functionality\nNew Share options and management\nNew, more user-friendly design\nSync optimizations\nVarious performance improvements and bug fixes",
    fixType: "fix" 
  },
  {
    date: "20/05/2015",
    name: "Kevin Joe",
    title: "3.1.0",
    description: "Added Settings for Auto Start\nAdded Update Notification\nSpeed Optimization\nBug Fixes",
    fixType: "improvement" 
  },
];


const App = () => {
  return (
    <div>
      <h1>First Task</h1>
      <h2>List Section</h2>
      <ListSection />
      <h2>Cards Section</h2>
      <div className="cards-container">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default App;
