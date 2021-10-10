import React from 'react';
import ReactDOM from 'react-dom';
 import App from './App';
 import Contact from './components/contact';
 import {ContactComponent} from './components/contact';
 import Education from './components/education';
 import {EducationComponent} from './components/education';
  
 
     ReactDOM.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        document.getElementById('root')
      );
  
 
      ReactDOM.render(
        <React.StrictMode>
          <Contact  />
           <ContactComponent />
        </React.StrictMode>,
        document.getElementById('contact')
      );
    
      ReactDOM.render(
        <React.StrictMode>
            <Education/>
           <EducationComponent />
        </React.StrictMode>,
        document.getElementById('education')
      );
    