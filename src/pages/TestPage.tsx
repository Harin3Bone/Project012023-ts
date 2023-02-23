import "../style/App.css";

function TestPage() {
 
  return (
    <div>
      <h1>test</h1>
      <label htmlFor="active" className="label__Checkbox">
          <input type="checkbox" id="active" className="input__Checkbox hidden"/>
          <span className="span__Checkbox"></span>
          <span className="span__Checkbox"></span>
          <span className="span__Checkbox"></span>
          <div className="wrapper">
            <ul>
              <li>Home</li>
              <li>About</li>
            </ul>
        </div>
      </label>
    </div>
  )
}

export default TestPage