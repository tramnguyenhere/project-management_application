import './App.scss';
import ProjectManagement from './components/ProjectManagement/ProjectManagement';
import Heading from './components/UIComponents/Heading/Heading';

function App() {
  return (
    <div className="App">
      <Heading />
      <ProjectManagement />
    </div>
  );
}

export default App;
