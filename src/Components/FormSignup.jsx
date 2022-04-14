import React from "react";

class FormSignup extends React.Component {
  /* sans ce constructeur, on va juste avoir un code HTML normal dans le render,
        ce qu'on souhaite, c'est de pouvoir contrôler la validation des entrées
        il nous faut ce constrcuteur avec les props et les les states qui vont 
        contrôler et mettre à jour les valeurs de nos éléments inputs.

        Une fois les states(variables dynamiques) configurées, il faut les assigner
        à notre code dans le render -> input.

        Il faut maintenant gérer l'écouteur d'évenement onChange dans input
        et créer la méthode.

    */
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      password: "",
    };
  }


  handleFirstNameChange = (event) => {
    /* on doit mettre à jour ici la valeur des inputs, avec setState */
    this.setState({
        firstName: event.target.value
    })
  }

  handleLastNameChange = (event) => {
    /* on doit mettre à jour ici la valeur des inputs, avec setState */
    this.setState({
        lastName: event.target.value
    })
  }

  handleAddressChange = (event) => {
    /* on doit mettre à jour ici la valeur des inputs, avec setState */
    this.setState({
        address: event.target.value
    })
  }

  handleEmailChange = (event) => {
    /* on doit mettre à jour ici la valeur des inputs, avec setState */
    this.setState({
        email: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    /* on doit mettre à jour ici la valeur des inputs, avec setState */
    this.setState({
        password: event.target.value
    })
  }


  render() {
    return (
      <section className="form-content-right">
        <form action="" className="form">
          <h1>bienvenue</h1>
          <div className="form-inputs">
            <label htmlFor="firstName">Prénom : </label>
            <input
              className="form-input"
              id="firstName"
              type="text"
              name="firstName"
              placeholder="prénom"
              value={this.state.firstName}
              onChange={this.handleFirstNameChange}
            />
            <p className="firstNameError"></p>
          </div>
          <div className="form-inputs">
            <label htmlFor="lastName">Nom : </label>
            <input
              className="form-input"
              id="lastName"
              type="text"
              name="lastName"
              placeholder="nom"
              value={this.state.lastName}
              onChange={this.handleLastNameChange}
            />
            <p className="lastNameError"></p>
          </div>
          <div className="form-inputs">
            <label htmlFor="address">Addresse : </label>
            <input
              className="form-input"
              id="address"
              type="text"
              name="address"
              placeholder="adresse postale"
              value={this.state.address}
              onChange={this.handleAddressChange}
            />
            <p className="addressError"></p>
          </div>
          <div className="form-inputs">
            <label htmlFor="email">Email : </label>
            <input
              className="form-input"
              id="email"
              type="email"
              name="email"
              placeholder="adresse email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
            <p className="emailError"></p>
          </div>
          <div className="form-inputs">
            <label htmlFor="password">Mot de passe : </label>
            <input
              className="form-input"
              id="password"
              type="password"
              name="password"
              placeholder="mot de passe"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
            <p className="passwordError"></p>
          </div>

          <button className="form-input-btn" type="submit">
            Continuer
          </button>
        </form>
      </section>
    );
  }
}

export default FormSignup;
