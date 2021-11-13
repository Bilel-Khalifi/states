import React from 'react';
import MountedTime from './component/MountedTime';

class App extends React.Component{
  constructor(props){
      super(props);
  };
  state = {
    shows: false,
    fullName: "Bilel khlifi",
    profession: "Software Engineer",
    bio:
      "A rare species, not a stereotype",
    imgSrc: (
      <img src="https://images.unsplash.com/photo-1635903486000-f4e1e7a54929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" alt="Profile_Photo" />
    ),
  };
  render(){
    const buttonText = this.state.shows ? "Hide info" : "Show info";
      return(
        <>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button onClick={() => this.setState({ shows: !this.state.shows })}
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {buttonText}
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <h1>{this.state.fullName}</h1>
                  <h3>{this.state.profession}</h3>
                  <div>{this.state.imgSrc}</div>
                  <p>
                    <b>Bio:  </b>
                    {this.state.bio}
                  </p>
                  <MountedTime />
                </div>
              </div>
            </div>
          </div>
        </>
      );
  }
};

export default App;