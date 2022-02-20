import React, { useState } from 'react'

const App = () => {
  const [userreg, setuserreg] = useState({
    username:"",
    email:"",
    phone:"",
    gender:"",
    Skills:""
  });

  const  [records, setrecords] = useState([]);

  const deleteReg = (id) => {
   console.log(id);
   const updatedItem = records.filter((currElem, index) =>{
     return index !== id;
   });
   setrecords(updatedItem);
  };

  const handleInput = (e) =>{
    
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);  

    setuserreg({...userreg, [name] : value});
    
  }

  const handleSubmit = (e) => {
   
   
    e.preventDefault();
    const newrecord = {...userreg, id : new Date().getTime().toString() };
    console.log(records);
    setrecords([...records, newrecord]);
    console.log(records);
    setuserreg({ username:"", email:"", phone:"", gender:"", Skills:"" });
      
    }

  return(
    <div className='main_div'>
      <h1> Hello, It's student Enrollment from </h1>
      <div className='container center'>
      <table>
      <td>
      <h2> Student Details </h2>
      <form class='input-part' action='' onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username' >Full Name:</label>
        <input type="text" autoComplete="off"
         value={userreg.username}
         onChange={handleInput}
         name="username" id="username"/>
      </div>

      <div>
        <label htmlFor='email' >Email :</label>
        <input type="text" autoComplete="off"
         value={userreg.email}
         onChange={handleInput}
         name="email" id="email"/>
      </div>

      <div>
        <label htmlFor='phone' >Phone :</label>
        <input type="text" autoComplete="off"
         value={userreg.phone}
         onChange={handleInput}
         name="phone" id="phone"/>
      </div>

      <div>
        <label htmlFor='gender' >Gender :</label>
        <input type="text" autoComplete="off"
         value={userreg.gender}
         onChange={handleInput}
         name="gender" id="gender"/>
      </div>

      <div>
        <label htmlFor='Skills' >Skills :</label>
        <input type="text" autoComplete="off"
         value={userreg.Skills}
         onChange={handleInput}
         name="Skills" id="Skills"/>
      </div>

       <button type='submit'>Register</button>
       </form>
       </td>
       </table>
       

       <th>
       
      
       
       <table>
       
       
       
       
       <h2>Enrolled students</h2>
       
       
       <table class="list" id='studentList' >
        
           <tbody>
        {
          
          records.map((currElem, index) => {
            return(
              
              <div key={index}>
             
              <th>Name :<p>{currElem.username}</p></th>
              
              <th>Email :<p>{currElem.email}</p></th>
              
              <th>phone :<p>{currElem.phone}</p></th>
              
              <th>Gender:<p>{currElem.gender}</p></th>
              
              <th>Skills :<p>{currElem.Skills}</p></th>
              <button className='button' type='delete Item' onClick= {() => deleteReg(index)}>Delete</button>
              
              </div>
            )}
          )
          }
        
        </tbody>
       
        </table>
       
        
        </table>
        
        
        </th>
        
        </div>
    </div>
  )
}

export default App;
