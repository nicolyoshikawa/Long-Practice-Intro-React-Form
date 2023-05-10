import { useState } from "react";

function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneType, setPhoneType] = useState("");
    const [staff, setStaff] = useState("");
    const [bio, setBio] = useState("");
    const [signUp, setSignUp] = useState(false);

    function onSubmit(e) {
        e.preventDefault();

        const form = {
            name,
            email,
            phoneNumber,
            phoneType,
            staff,
            bio,
            signUp
        };

        console.log(form)

        setName("");
        setEmail("");
        setPhoneNumber("");
        setPhoneType("");
        setStaff("");
        setBio("");
        setSignUp(false);
    }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" value={name} onChange={e => setName(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" type="text" value={email} onChange={e => setEmail(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input id="phoneNumber" type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
        <select name="phoneType" value={phoneType} onChange={e => setPhoneType(e.target.value)}>
          <option value="" disabled>
            Please select phone type...
          </option>
          <option value="Home">Home</option>
          <option value="Work">Work</option>
          <option value="Mobile">Mobile</option>
        </select>
      </div>
      <div>
        <label htmlFor="instructor">Instructor</label>
        <input id="instructor" type="radio" value={staff} onChange={e => setStaff(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="student">Student</label>
        <input id="student" type="radio" value={staff} onChange={e => setStaff(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="bio">Bio:</label>
        <textarea id="bio" value={bio} onChange={e => setBio(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="emailNotifications">Sign up for email notifications</label>
        <input type="checkbox" id="checkbox" name="notifications" value={signUp} onChange={e => setSignUp(true)}/>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default Registration;
