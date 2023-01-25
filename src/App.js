import React, { Component } from 'react'
import Table from './Table'
import Form  from './Form'

class App extends Component {

    state = {
        characters : [],
        
    }

    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character] })
    }
   
    render() {

        
        const { characters } = this.state
  
        return (
          <div className="container">
            <Table characterData={characters} removeCharacter={this.removeCharacter} />
            <Form handleSubmit=  {this.handleSubmit} />
          </div>
        )
        
    }

   

removeCharacter = (index) => {
    const { characters } = this.state
    console.log(index);
    this.setState({
        characters: characters.filter((character, i) => {
            return i !== index 
        }),
    })
}
  
}



export default App