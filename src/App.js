import './App.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const App = () => {
 
  return (
    <div className='introdiv'>
      <h1 className='heading'>Sam Stout</h1>
      <h3 className='description'>React Focused Software Engineer</h3>
      <Button variant='outlined' className='projectButton'>
        <Link to='/projects' className='buttonText'>Projects</Link>
      </Button>
      <a href='//www.linkedin.com/in/samwstout' className='linkedin' target='_blank'><img src={'linkedin1.png'}></img></a>
      <a href='//www.github.com/samuelwstout' className='github' target='_blank'><img src={'github1.png'}></img></a>
    </div>
  );
}

export default App;



