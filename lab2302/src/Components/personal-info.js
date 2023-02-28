import React from 'react'

export default class Bio extends React.Component{

    static info = {name: "Anatoliy", number: "0991112233", email: "example@gmail.com", city: "Kyiv", experience: "Online business", skills: "Know how to escape The Matrix"};
    state = {name: Bio.info.name, number: Bio.info.number, email: Bio.info.email, city: Bio.info.city, experience: Bio.info.experience, skills: Bio.info.skills};

    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeExperience = this.onChangeExperience.bind(this);
        this.onChangeSkills = this.onChangeSkills.bind(this);
        this.btnSubmit = this.btnSubmit.bind(this);
        this.btnReset = this.btnReset.bind(this);
    }

    onChangeName(event){
        this.setState({name: event.target.value});
    }
    onChangeNumber(event){
        this.setState({number: event.target.value});
    }
    onChangeEmail(event){
        this.setState({email: event.target.value});
    }
    onChangeCity(event){
        this.setState({city: event.target.value});
    }
    onChangeExperience(event){
        this.setState({experience: event.target.value});
    }
    onChangeSkills(event){
        this.setState({skills: event.target.value});
    }


    btnSubmit(event){
        event.preventDefault();
        alert(this.state.name + ": " + this.state.number + ", " + this.state.experience + ", " + this.state.skills);
    }

    btnReset(event){
        event.preventDefault();
        this.setState({name: Bio.info.name, number: Bio.info.number, email: Bio.info.email, city: Bio.info.city, experience: Bio.info.experience, skills: Bio.info.skills})
    }

    render()
    {
        return(
            <>
                <form>

                    <label>Name:</label>
                    <br/>
                    <input value={this.state.name} onChange={this.onChangeName} />
                    <br/>
                    <label>Number:</label>
                    <br/>
                    <input value={this.state.number} onChange={this.onChangeNumber} />
                    <br/>
                    <label>Email:</label>
                    <br/>
                    <input value={this.state.email} onChange={this.onChangeEmail} />
                    <br/>
                    <label>City:</label>
                    <br/>
                    <input value={this.state.city} onChange={this.onChangeCity} />
                    <br/>
                    <label>Experience:</label>
                    <br/>
                    <input value={this.state.experience} onChange={this.onChangeExperience} />
                    <br/>
                    <label>Skills:</label>
                    <br/>
                    <input value={this.state.skills} onChange={this.onChangeSkills} />

                    
                    <br/>
                    <button onClick={this.btnSubmit}>Submit</button>
                    <br/>
                    <button onClick={this.btnReset} >Reset</button>
                </form>
            </>
        );
    }
}