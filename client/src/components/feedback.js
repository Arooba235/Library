// // import "../styles/feedback.css";
// import "./feedback.css";
// import { Link, useNavigate  } from "react-router-dom";
// import React, { useState } from 'react';

// function Feedback(props) {
//     //const [myString, setMyString] = useState('');
//     //Here I have to read the books table 
//     //when user clicks on submit button, add book info and student info to the checkout table and one of the staff id
//     const nav = useNavigate();
    
//     const handleAsyncSubmit = async (formData) => {
//         try {
//             // Make a POST request to the server
//             const response = await fetch('http://localhost:3000/feedback', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });
//             const responseData = await response.json();

//             console.log(responseData)
//             if (responseData.message==="Feedback submitted successfully") {
//                 // If the server returns a success status, navigate to the home page or do something else
//                 nav('/studenthomepage');
//             } else {
//                 // Handle errors here
//                 console.error('Server error:', response.statusText);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };
//     const handleSubmit = (event) => {
//         // Validate inputs
//         event.preventDefault();
        
//         const studentId = document.getElementById('studentId').value;
//         const staffId = document.getElementById('staffId').value;
//         const staffRating = document.getElementById('staffRating').value;
//         const bookQuality = document.getElementById('bookQuality').value;
//         const bookVariety = document.getElementById('bookVariety').value;
//         const checkoutExperience = document.getElementById('checkoutExperience').value;
//         if(studentId && staffId && staffRating  && bookQuality && bookVariety &&checkoutExperience){
//             if (studentId && staffId && staffRating>=0 && staffRating<=10 && bookQuality>=0&& bookQuality<=10  && bookVariety>=0 && bookVariety<=10 &&checkoutExperience>=0 &&checkoutExperience<=10) {
//                 console.log('handlesubmit done');
//                 handleAsyncSubmit({
//                     studentId,
//                     staffId,
//                     staffRating,
//                     bookQuality,
//                     bookVariety,
//                     checkoutExperience,
//                 });
//             }
//         }
//         /* else {
//             alert('Please fill in all required fields.');
//         }*/
//     };
//     return (        
//         <form id="feedbackForm" onSubmit={handleSubmit}>
//             <label htmlFor="studentId">Student ID:</label>
//             <input type="text" id="studentId" name="studentId" required />

//             <label htmlFor="staffId">Staff ID:</label>
//             <input type="text" id="staffId" name="staffId" required />

//             <label htmlFor="staffRating">Staff Rating (0-10):</label>
//             <input type="number" id="staffRating" name="staffRating" min="0" max="10" required />

//             <label htmlFor="bookQuality">Book Quality (0-10):</label>
//             <input type="number" id="bookQuality" name="bookQuality" min="0" max="10" required />

//             <label htmlFor="bookVariety">Book Variety (0-10):</label>
//             <input type="number" id="bookVariety" name="bookVariety" min="0" max="10" required />

//             <label htmlFor="checkoutExperience">Checkout Experience (0-10):</label>
//             <input type="number" id="checkoutExperience" name="checkoutExperience" min="0" max="10" required />
//             <input className="button1" type="submit" value="Submit" />
//             {/*<Link to={'/'} className="button1" onClick={handleSubmit}>Submit</Link> */}

//         </form>

//     );
// }

// export default Feedback;


// import React, { useState } from 'react';
// import './feedback.css';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// function Feedback() {
//   const [studentId, setStudentId] = useState('');
//   const [staffId, setStaffId] = useState('');
//   const [staffRating, setStaffRating] = useState('');
//   const [bookQuality, setBookQuality] = useState('');
//   const [bookVariety, setBookVariety] = useState('');
//   const [checkoutExperience, setCheckoutExperience] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const nav = useNavigate();

//   const handleAsyncSubmit = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/feedback', {
//         studentId,
//         staffId,
//         staffRating,
//         bookQuality,
//         bookVariety,
//         checkoutExperience,
//       });

//       console.log(response.data);

//       if (response.data.message === 'Feedback submitted successfully') {
//         nav('/studenthomepage');
//       } else {
//         setErrorMessage('Server error');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setErrorMessage('Error submitting feedback');
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (
//       studentId &&
//       staffId &&
//       staffRating >= 0 &&
//       staffRating <= 10 &&
//       bookQuality >= 0 &&
//       bookQuality <= 10 &&
//       bookVariety >= 0 &&
//       bookVariety <= 10 &&
//       checkoutExperience >= 0 &&
//       checkoutExperience <= 10
//     ) {
//       handleAsyncSubmit();
//     } else {
//       setErrorMessage('Please fill in all required fields.');
//     }
//   };

//   return (
//     <div>
//       <h2>Feedback Form</h2>
//       {errorMessage && <div>{errorMessage}</div>}
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="studentId">Student ID:</label>
//         <input type="text" id="studentId" name="studentId" required />

//         <label htmlFor="staffId">Staff ID:</label>
//         <input type="text" id="staffId" name="staffId" required />

//         <label htmlFor="staffRating">Staff Rating (0-10):</label>
//         <input type="number" id="staffRating" name="staffRating" min="0" max="10" required />

//         <label htmlFor="bookQuality">Book Quality (0-10):</label>
//         <input type="number" id="bookQuality" name="bookQuality" min="0" max="10" required />

//         <label htmlFor="bookVariety">Book Variety (0-10):</label>
//         <input type="number" id="bookVariety" name="bookVariety" min="0" max="10" required />

//         <label htmlFor="checkoutExperience">Checkout Experience (0-10):</label>
//         <input type="number" id="checkoutExperience" name="checkoutExperience" min="0" max="10" required />

//         <button type="submit" onClick={handleSubmit}>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Feedback;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// function Feedback() {
//   const [studentId, setStudentId] = useState('');
//   const [staffId, setStaffId] = useState('');
//   const [staffRating, setStaffRating] = useState('');
//   const [bookQuality, setBookQuality] = useState('');
//   const [bookVariety, setBookVariety] = useState('');
//   const [checkoutExperience, setCheckoutExperience] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const nav = useNavigate();

//   const handleAsyncSubmit = async () => {
//     try {
//       const response = await axios.post('http://localhost:3000/feedback', {
//         studentId,
//         staffId,
//         staffRating,
//         bookQuality,
//         bookVariety,
//         checkoutExperience,
//       });

//       if (response.data.message === 'Feedback submitted successfully') {
//         nav('/studenthomepage');
//       } else {
//         setErrorMessage('Server error');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setErrorMessage('Error submitting feedback');
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (
//       studentId &&
//       staffId &&
//       staffRating >= 0 &&
//       staffRating <= 10 &&
//       bookQuality >= 0 &&
//       bookQuality <= 10 &&
//       bookVariety >= 0 &&
//       bookVariety <= 10 &&
//       checkoutExperience >= 0 &&
//       checkoutExperience <= 10
//     ) {
//       handleAsyncSubmit();
//     } else {
//       setErrorMessage('Please fill in all required fields and ensure values are between 0 and 10.');
//     }
//   };

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// function Feedback() {
//   const [studentId, setStudentId] = useState('');
//   const [staffId, setStaffId] = useState('');
//   const [staffRating, setStaffRating] = useState('');
//   const [bookQuality, setBookQuality] = useState('');
//   const [bookVariety, setBookVariety] = useState('');
//   const [checkoutExperience, setCheckoutExperience] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

// //   const handleAsyncSubmit = async () => {
// //     try {
// //       const response = await axios.post('http://localhost:3000/feedback', {
// //         studentId,
// //         staffId,
// //         staffRating,
// //         bookQuality,
// //         bookVariety,
// //         checkoutExperience,
// //       });

// //       if (response.data.message === 'Feedback submitted successfully') {
// //         // Redirect to '/studenthomepage'
// //         window.location.href = '/studenthomepage';
// //       } else {
// //         setErrorMessage('Server error');
// //       }
// //     } catch (error) {
// //       console.error('Error:', error);
// //       setErrorMessage('Error submitting feedback');
// //     }
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();

// //     if (
// //       studentId &&
// //       staffId &&
// //       staffRating >= 0 &&
// //       staffRating <= 10 &&
// //       bookQuality >= 0 &&
// //       bookQuality <= 10 &&
// //       bookVariety >= 0 &&
// //       bookVariety <= 10 &&
// //       checkoutExperience >= 0 &&
// //       checkoutExperience <= 10
// //     ) {
// //       handleAsyncSubmit();
// //     } else {
// //       setErrorMessage('Please fill in all required fields and ensure values are between 0 and 10.');
// //     }
// //   };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         axios.post('http://localhost:5000/feedback', { studentId: studentId, staffId: staffId, staffRating: staffRating, bookQuality: bookQuality, bookVariety: bookVariety, checkoutExperience: checkoutExperience })
//             .then(response => {
//                 localStorage.setItem('token', response.data.token);
//                 window.location.href = '/studenthome';
//                 // Redirect based on usertype
//                 // switch (response.data.usertype) {
//                 // case 'student':
//                 //     window.location.href = '/studenthome';
//                 //     break;
//                 // case 'staff':
//                 //     window.location.href = '/staffhome';
//                 //     break;
//                 // case 'manager':
//                 //     window.location.href = '/managerhome';
//                 //     break;
//                 // default:
//                 //     window.location.href = '/';
//                 // }
//             })
//             .catch(error => {
//             setErrorMessage(error.response.data.error);
//             });
//     }


//   return (
//     <div>
//       <h2>Feedback Form</h2>
//       {errorMessage && <div>{errorMessage}</div>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="studentId">Student ID:</label>
//           <input type="text" id="studentId" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
//         </div>
//         <div>
//           <label htmlFor="staffId">Staff ID:</label>
//           <input type="text" id="staffId" value={staffId} onChange={(e) => setStaffId(e.target.value)} />
//         </div>
//         <div>
//           <label htmlFor="staffRating">Staff Rating (0-10):</label>
//           <input
//             type="number"
//             id="staffRating"
//             value={staffRating}
//             onChange={(e) => setStaffRating(e.target.value)}
//             min="0"
//             max="10"
//           />
//         </div>
//         <div>
//           <label htmlFor="bookQuality">Book Quality (0-10):</label>
//           <input
//             type="number"
//             id="bookQuality"
//             value={bookQuality}
//             onChange={(e) => setBookQuality(e.target.value)}
//             min="0"
//             max="10"
//           />
//         </div>
//         <div>
//           <label htmlFor="bookVariety">Book Variety (0-10):</label>
//           <input
//             type="number"
//             id="bookVariety"
//             value={bookVariety}
//             onChange={(e) => setBookVariety(e.target.value)}
//             min="0"
//             max="10"
//           />
//         </div>
//         <div>
//           <label htmlFor="checkoutExperience">Checkout Experience (0-10):</label>
//           <input
//             type="number"
//             id="checkoutExperience"
//             value={checkoutExperience}
//             onChange={(e) => setCheckoutExperience(e.target.value)}
//             min="0"
//             max="10"
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       {/* <Link to="/studenthomepage" className="nav-link">
//         Back to Student Homepage
//       </Link> */}
//     </div>
//   );
// }

// export default Feedback;


// FeedbackForm.js

import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    staffId: '',
    staffRating: 0,
    bookQuality: 0,
    bookVariety: 0,
    checkoutExperience: 0,
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input (between 0 and 10)
    const isValidInput = Object.values(formData).every((value) => value = "5");
    if (!isValidInput) {
      alert('Please enter values between 0 and 10 for ratings.');
      return;
    }


    axios.post('http://localhost:5000/feedback', formData)
      .then(response => {
        window.location.href = '/studenthome';
      })
      .catch(error => {
        setErrorMessage(error.response.data.error);
    });


    // try {
    //   // Send feedback data to the backend API
    //   await axios.post('http://localhost:5000/feedback', formData);
    //   alert('Feedback submitted successfully!');
      
    //   // Redirect to '/studenthome' using window.location.href
    //   window.location.href = '/studenthome';
    // } catch (error) {
    //   console.error('Error submitting feedback:', error);
    // }


  };

  return (
    <div>
      <h1>Feedback Form</h1>
      {errorMessage && <div>{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Student Name:
          <input type="text" name="studentId" value={formData.studentId} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Staff Name:
          <input type="text" name="staffId" value={formData.staffId} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Staff Rating (0-10):
          <input type="number" name="staffRating" value={formData.staffRating} onChange={handleChange} min="0" max="10" required />
        </label>
        <br />
        <label>
          Book Quality (0-10):
          <input type="number" name="bookQuality" value={formData.bookQuality} onChange={handleChange} min="0" max="10" required />
        </label>
        <br />
        <label>
          Book Variety (0-10):
          <input type="number" name="bookVariety" value={formData.bookVariety} onChange={handleChange} min="0" max="10" required />
        </label>
        <br />
        <label>
          Checkout Experience (0-10):
          <input type="number" name="checkoutExperience" value={formData.checkoutExperience} onChange={handleChange} min="0" max="10" required />
        </label>
        <br />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
