class Team extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shots: 0,
      score: 0,
    };

    this.shotSound = new Audio("./assets/audio/hockeystick.wav");
    this.scoreSound = new Audio("./assets/audio/Vanc2.wav");
  }

  shotHandler = () => {
    let score = this.state.score;
    this.shotSound.play();

    if (Math.random() > 0.5) {
      score += 1;
      this.scoreSound.play();
    }

    this.setState((state, props) => ({
      shots: state.shots + 1,
      score,
    }));
  };

  render() {
    let shotPercentageDiv;
    if (this.state.shots) {
      const shotPercentage = Math.round(
        (this.state.score / this.state.shots) * 100
      );
      shotPercentageDiv = (
        <div>
          <strong>Shooting %:{shotPercentage}</strong>
        </div>
      );
    }
    return (
      <div className="Team">
        <h2>{this.props.name}</h2>

        <div className="identity">
          <img src={this.props.logo} alt={this.props.name} />
        </div>

        <div>
          <strong>Shots:</strong>
          {this.state.shots}
        </div>

        <div>
          <strong>Score:</strong>
          {this.state.score}
        </div>

        {shotPercentageDiv}

        <button onClick={this.shotHandler}>Shoot!</button>
      </div>
    );
  }
}

function Game(props) {
  return (
    <div className="Game">
      <h1>Welcome to {props.venue}</h1>
      <div className="stats">
        <Team
          name="Odessa Jackalopes"
          logo="assets\images\1200px-Odessa_Jackalopes_Logo.svg.png"
        />
        <div className="versus">
          <h1>VS</h1>
        </div>
        <Team
          name="Akron Rubber Ducks"
          logo="assets\images\akron_main_large_3.png"
        />
      </div>
    </div>
  );
}
// Deafault App component that all other compents are rendered through
function App(props) {
  return (
    <div className="App">
      <Game venue="Super Hockey Arena" />
    </div>
  );
}

//Render the application
ReactDOM.render(<App />, document.getElementById("root"));
