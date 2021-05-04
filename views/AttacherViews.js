
/* eslint-disable */
import React, { Fragment } from "react";
import "../src/index.css";


import Game from "../src/components/Game";
import Board from '../src/components/Board'
import { calculateWinner } from "../src/helper";

const exports = {};

exports.Wrapper = class extends React.Component {
    render() {
        const { content } = this.props;
        return (
            <div className="Player">
                <h2 style={{ marginLeft: "50px" }} className="header-main-sub">
                    Oyuncu
          </h2>
                {content}
            </div>
        );
    }
};

exports.Attach = class extends React.Component {
    render() {
        const { parent } = this.props;
        const { ctcInfoStr } = this.state || {};
        return (
            <Fragment>
                <div className="container">
                    <div className="row j-center flex-column w-400 m-auto mt-5">
                        Lütfen kontrat bilgilerini buraya yapıştırın:
                        <br />
                        <br />
                        <textarea
                            className="ContractInfo"
                            onChange={(e) =>
                                this.setState({ ctcInfoStr: e.currentTarget.value })
                            }
                            placeholder="{}"
                        />
                        <br />
                        <button
                            className="attach-button mt-2"
                            disabled={!ctcInfoStr}
                            onClick={() => parent.attach(ctcInfoStr)}
                        >
                            Bağlan
                         </button>
                    </div>
                </div>
            </Fragment>
        );
    }
};


exports.Attaching = class extends React.Component {
    render() {
        const { parent } = this.props;
        return (
            <div className="container">
                <div className="row j-center">
                    <h3 className="game-finished">Bağlanıyor, lütfen bekleyin...</h3>
                </div>
            </div>
        );
    }
};

exports.HamleYap = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hamle: 0,
            hamleListesi: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            index: 0,
            fireCounter: 0,
            squares : Array(100).fill(null),
            history:Array(100).fill(null),
            created: 0,
            numShips : 5,
            boardSize : 10,
            winner: 0,
            stepNumber: 0,
            firedPoints: [],
            isGameEnded: false,
            ships: [{
              name: "Carrier",
              locations: [0, 0, 0, 0, 0],
              hits: 0,
              length: 5,
              isGone: false,
            },
            {
              name: "Battleship",
              locations: [0, 0, 0, 0],
              hits: 0,
              length: 4,
              isGone: false,
            },
            {
              name: "Cruiser",
              locations: [0, 0, 0],
              hits: 0,
              length: 3,
              isGone: false,
            },
            {
              name: "Submarine",
              locations: [0, 0, 0],
              hits: 0,
              length: 3,
              isGone: false,
            },
            {
              name: "Destroyer",
              locations: [0, 0],
              hits: 0,
              length: 2,
              isGone: false,
            },],
            hittedShips: 0,
            buttonValue : 0,


            
        };

        if ( this.state.created === 0)
                  {
                    this.generateShipLocations();
                    this.setState((state) => ({
                      created: 1,
                   }));
                    console.log("Thiss", this.state.created);
                  }
    }
        generateShipLocations = () => {
          var locations;
          for (var i = 0; i < this.state.numShips; i++) {
            do {
              locations = this.generateShip(this.state.ships[i]);
            } while (this.collision(locations));
            this.state.ships[i].locations = locations;
          }
          console.log("SHIPS LOCATED ");

        console.log("ARRAYYY", this.state.history);
        };
        
        generateShip = (ship) => {
          var direction = Math.floor(Math.random() * 2);
          var row, col;
        
          if (direction === 1) {
            row = Math.floor(Math.random() * this.state.boardSize);
            col = Math.floor(Math.random() * (this.state.boardSize - ship.length));
          } else {
            row = Math.floor(Math.random() * (this.state.boardSize - ship.length));
            col = Math.floor(Math.random() * this.state.boardSize);
          }
        
          var newShipLocations = [];
          for (var i = 0; i < ship.length; i++) {
            if (direction === 1) {
              newShipLocations.push(row + "" + (col + i));
            } else {
              newShipLocations.push(row + i + "" + col);
            }
          }
          //console.log(newShipLocations);
          return newShipLocations;
        };
        
        collision = (locations) => {
          for (var i = 0; i < this.state.numShips; i++) {
            var ship = this.state.ships[i];
            for (var j = 0; j < locations.length; j++) {
              if (ship.locations.indexOf(locations[j]) >= 0) {
                return true;
              }
            }
          }
          return false;
        };
        
        fire = (guess) => {
          if (guess < 10) {
            guess = "0" + guess.toString();
          }
          for (var i = 0; i < this.state.numShips; i++) {
            var ship = this.state.ships[i];
            //console.log(ship.locations);
        
            for (var j = 0; j < ship.length; j++) {
              var index = ship.locations[j];
              //console.log("GUESS : ", guess);
              //console.log("Index: ", index);
        
              if (guess.toString() === index) {
                //console.log("A BIG HIT!!");
                ship.hits = ship.hits + 1;
                //console.log(ship.hits);
                if (ship.hits === ship.length) {
                  ship.isGone = true;
                  console.log("HIT ", this.state.hittedShips);
                  this.setState({hittedShips: this.state.hittedShips+1});
                  if ( this.state.hittedShips === (this.state.numShips-1))
                  {
                    console.log("CALC WINNER", this.state.fireCounter);
                    var winnerRate = calculateWinner(this.state.ships, this.state.fireCounter);
                    console.log("WINNER RATE", winnerRate);
                    this.setState({winner: winnerRate});
                    console.log("WINNER", this.state.winner);
                    var sendToTheAdmin = [this.state.fireCounter, 0,0,0,0,0,0,0,0,0];
                    this.setState ({hamleListesi: sendToTheAdmin});
                    console.log(sendToTheAdmin);
                    this.setState({buttonValue: 1});
                    //hamleYapBelirle(sendToTheAdmin);
                  }
                  //console.log("SHIP IS GONE");
                }
                return true;
              }
            }
          }
          return false;
        };
        refreshPage() {
          //console.log("WINN" , this.state.winner);
          window.location.reload();
        }
        handleClick = (i) => {
          if (this.state.winner) {
            //const win = [...this.state.winner, 0,0,0,0,0,0,0,0,0];
           //this.state.hamleYapBelirle(win);
            //return this.state.winner;
            return;
          }
          if (this.state.firedPoints.includes(i)) {
            console.log("Already hitted");
            return;
          }
         // console.log("Selected index", i);
          this.state.firedPoints[this.state.index] = i;
          //console.log("this index", this.state.index);
          this.state.index = this.state.index+1;
          //console.log("Fired points", this.state.firedPoints);
        
          this.setState({fireCounter: this.state.fireCounter+1});
          //console.log("Fire counter", fireCounter);
          const isThisAHit = this.fire(i) ? "O" : "X";
        
          const historyPoint = this.state.history.slice(0, this.state.stepNumber + 1);
          const current = historyPoint[this.state.stepNumber];
          //const squares = [...current];
          // return if won or occupied
          //if (winner) return;
          // select square
          //this.state.squares[0][i] = isThisAHit;
        
          var arr = this.state.squares;
          //console.log("This is an arrayyy", arr);
          arr[i] = isThisAHit;

          var arr2 = this.state.firedPoints;
          arr2[this.state.index] = i;
          this.setState((state) => ({
              squares: arr,
              history: arr,
              firedPoints: arr2,
              index: state.index+1,
              stepNumber: historyPoint.length,
          }));
        
          //this.setState({squares: this.state.squares})
          //setHistory([...historyPoint, squares]);
          //this.state.stepNumber = historyPoint.length;
          //console.log("Step no", this.state.stepNumber);
          //setHittedShips(1);
        
          //setXisNext(shipPlaces[i] === 1);
        };
        getHittedShips = () => {
          for (var shipIndex = 0; shipIndex < this.state.ships.length; shipIndex++) {
            if (this.state.ships[shipIndex].isGone === true) {
              //console.log("This ship battı! with ", fireCounter, " hits");
              //this.setState({hittedShips: this.state.hittedShips+1});

            }
            //console.log("Hitted ships ", hittedShips);
            if (this.state.hittedShips === this.state.ships.length) {
              //console.log("All ships sunk! ", (11 / fireCounter) * 100, "%");
              // eslint-disable-next-line
              this.state.isGameEnded = true;
            }
          }
          return this.hittedShips;
        };
        Game = () => {
          //var isGameEnded = false;
          //const [stepNumber, setStepNumber] = useState(0);
          // eslint-disable-next-line
          //const [fireCounter, setFireCounter] = useState(1);
          //const [hittedShips, setHittedShips] = useState(1);
          winner = calculateWinner(ships, this.state.fireCounter - 1);
          if ( winner ){
            //this.state({view:'GameEnded', gameVal: winner});
          }
          //const xO = xIsNext ? "X" : "O";
                       
                }
                
                //this.generateShipLocations();
                render() {
                  
                  const { parent, oncekiHamle, bakiye } = this.props;
        return ( 
          
          <Fragment>
  <h4>Güncel Bakiye : {bakiye}</h4>
      <div className="column">
        <h4>
          {this.state.ships[0].isGone ? (
            <del> {this.state.ships[0].name} battı! </del>
          ) : (
            `${this.state.ships[0].name} hayatta!`
          )}{" "}
        </h4>
        <h4>
          {this.state.ships[1].isGone ? (
            <del> {this.state.ships[1].name} battı! </del>
          ) : (
            `${this.state.ships[1].name} hayatta!`
          )}{" "}
        </h4>
        <h4>
          {this.state.ships[2].isGone ? (
            <del> {this.state.ships[2].name} battı! </del>
          ) : (
            `${this.state.ships[2].name} hayatta!`
          )}{" "}
        </h4>
        <h4>
          {this.state.ships[3].isGone ? (
            <del> {this.state.ships[3].name} battı! </del>
          ) : (
            `${this.state.ships[3].name} hayatta!`
          )}{" "}
        </h4>
        <h4>
          {this.state.ships[4].isGone ? (
            <del> {this.state.ships[4].name} battı! </del>
          ) : (
            `${this.state.ships[4].name} hayatta!`
          )}{" "}
        </h4>
      </div>
        <br/>
        <div className="info-wrapper">
        <h3>
          {this.state.winner
            ? "Gemilerin hepsini %" + this.state.winner + " ile batırdın! Sonucunu gönder."
            : "Gemileri batırmaya devam..."}
        </h3>
        <h3>{"Batırılan Gemiler: " + this.state.hittedShips}</h3>
      </div>

      <h5>Atılan Atış Sayısı: {this.state.fireCounter}</h5>
      <Board squares={this.state.history} onClick={this.handleClick} />

      <button disabled = {!this.state.buttonValue} id="send-all-button" type="button" 
              onClick={() => {parent.hamleYapBelirle(this.state.hamleListesi);}}>GÖNDER</button>
      
        </Fragment>
         )
    }
  };

export default exports;
