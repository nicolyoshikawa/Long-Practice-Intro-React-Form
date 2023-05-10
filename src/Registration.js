
function Registration() {
    return (
        <form>
            <div>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" value={"name"}/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input id="email" type="text" value={"email"}/>
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input id="phoneNumber" type="text" value={"phoneNumber"}/>
                <select name="phoneType" value={"phoneType"}>
                    <option value="" disabled>Please select phone type...</option>
                    <option value="Home">Home</option>
                    <option value="Work">Work</option>
                    <option value="Mobile">Mobile</option>
                </select>
            </div>
        </form>
    )
}

export default Registration;
