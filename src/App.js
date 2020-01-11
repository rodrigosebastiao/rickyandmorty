import React from 'react';
import './App.css';

class Character extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      data: []
    }
  }

  componentWillMount() {
    this.getCharacter();
  }  

  passResult (data){
    console.log("?", data);
  }

  async getCharacter(){   
    await fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => { return response.json() })
    .then((data) => {
      console.log("data", data);
      this.setState({data: data})
    })
  }

  render(){
    const {data} = this.state;
    const character = data.results;  
    if(!character){
      return <div className="loading" style={{position: "absolute", top: "30%", left: "0", right: 0, textAlign: "center"}}>
        "...Loading"</div>
    }
    return(
      <section className="Character-Board">
        <h1>Ricky and Morty Character Board</h1>
          <div className="Character-Board-Wrap">
          { character.map(function(char, index){
              return  <div className="character-card" key={char.id} >
                          <img src={char.image} />
                          <div className="text">
                            <p><strong> {char.name} </strong></p>
                            <p> {char.species} </p>
                            <p> {char.status} </p>
                          </div>
                      </div>
            })}
          </div>
      </section>
    )
  }
}

export default Character;
