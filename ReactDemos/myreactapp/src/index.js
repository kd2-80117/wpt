import React from 'react';
import ReactDOM from 'react-dom/client';

// import Home from './Home';
// import Contact from './Contact';
// import About from './About';
import Combined from './Combined';
import Test from './Test';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<><Test></Test></>)

// root.render(<>
//               <Home />
//               <About/>
//               <Contact />
//               </>
//             ) ;
//below root.render will overwrite above root.render

//debugger;
// root.render(<>
//         <Combined></Combined>
    
// </>)

