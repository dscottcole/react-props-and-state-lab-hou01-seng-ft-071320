import React from 'react'

class Pet extends React.Component {
  genderDecision = () => {
    if (this.props.pet.gender === "female") {
      return '♀'
    } else {
      return '♂'
    }
  }
  adoptThisAngel = () => {
   this.props.onAdoptPet(this.props.pet.id)
  }

  toggleAdoption = () => {
    if (this.props.pet.isAdopted === true) {
      return (
          <button className="ui disabled button">Already adopted</button>
      )
    } else {
      return (
          <button onClick={this.adoptThisAngel} className="ui primary button">Adopt pet</button>
      )
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.genderDecision()}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
            { this.toggleAdoption() }
        </div>
      </div>
    )
  }
}

export default Pet
