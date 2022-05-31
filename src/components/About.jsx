import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const About = () => {
  return (
    <div>
      <Button className='homeButton' variant='outlined'>
                <Link className='buttonText' to='/'>Back</Link>
      </Button>
      <div className="aboutDiv">
      <p className='about1'>Frontend focused web developer with experience building web applications in JavaScript (React), HTML, and CSS. I have experience integrating RESTful APIs and incorporating authentication and authorization with NodeJS (Express). I'm currently enrolled in Flatiron School's software engineering program, learning Ruby to further grow my skills into backend web development.</p>
      
      <p className='about2'>Previously, I was a student and semi-professional orchestral trumpet player. I studied at the Peabody Institute of the Johns Hopkins University and held a substitute position at the New World Symphony. Prior to attending Peabody, I toured as a member of the National Youth Orchestra of the United States (NYO-USA) under the direction of Michael Tilson Thomas. I have been actively studying and practicing music for 14 years.</p>

      <iframe className='musicvid'
              src="https://youtube.com/embed/Xwn1PRNG5c8?t=474"  
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen" 
              msallowfullscreen="msallowfullscreen" 
              oallowfullscreen="oallowfullscreen" 
              webkitallowfullscreen="webkitallowfullscreen">
      </iframe>
      </div>
    </div>
  )
}

export default About;
