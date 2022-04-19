import React from "react";

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const nameValidator = /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{3,20}$/;
const addressValidator = /^((^[0-9]*).?((BIS)|(TER)|(QUATER))?)?((\W+)|(^))(([a-z]+.)*)([0-9]{5})?.(([a-z\'']+.)*)$/;


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

      firstNameError: "",
      lastNameError: "",
      addressError: "",
      emailError: "",
      passwordError: "",

      isFormSubmitted : false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateFirstName = this.validateFirstName.bind(this);
    this.validateLastName = this.validateLastName.bind(this);
    this.validateAddress = this.validateAddress.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });

    return
  }

  handleSubmit(event) {
    event.preventDefault();

    let formFields = [
      "firstName",
      "lastName",
      "address",
      "email",
      "password"
    ];

    let isValid = true;
    formFields.forEach(field => {
      isValid = this.validateField(field) && isValid;
    });

    if (isValid) this.setState({ isFormSubmitted: true });
    else this.setState({ isFormSubmitted: false });

    return this.state.isFormSubmitted;
  }

  validateField(name) {
    let isValid = false;

    if (name === "firstName") isValid = this.validateFirstName();
    else if (name === "lastName") isValid = this.validateLastName();
    else if (name === "address") isValid = this.validateAddress();
    else if (name === "email") isValid = this.validateEmail();
    else if (name === "password") isValid = this.validatePassword();
    
    return isValid;
  }

  validateFirstName() {
    let firstNameError = "";
    const value = this.state.firstName;
    if (value.trim() === "") firstNameError = "Prénom requis";
    else if (!nameValidator.test(value)) firstNameError = "Prénom non valide, 3 caractères minimum avec des lettres uniquement";

    this.setState({
      firstNameError
    });
    return firstNameError === "";
  }

  validateLastName() {
    let lastNameError = "";
    const value = this.state.lastName;
    if (value.trim() === "") lastNameError = "Nom requis";
    else if (!nameValidator.test(value)) lastNameError = "Nom non valide, 3 caractères minimum avec des lettres uniquement";

    this.setState({
      lastNameError
    });
    return lastNameError === "";
  }

  validateAddress() {
    let addressError = "";
    const value = this.state.address;
    if (value.trim === "") addressError = "Email requis";
    else if (!addressValidator.test(value)) addressError = "Merci de vérifier l'adresse, alphanumérique et sans caractères spéciaux";

    this.setState({
      addressError
    });
    return addressError === "";
  }

  validateEmail() {
    let emailError = "";
    const value = this.state.email;
    if (value.trim === "") emailError = "Email requis";
    else if (!emailValidator.test(value)) emailError = "Erreur ! Email non valide";

    this.setState({
      emailError
    });
    return emailError === "";
  }

  validatePassword() {
    let passwordError = "";
    const value = this.state.password;
    if (value.trim === "") passwordError = "Mot de passe requis";
    else if (!passwordValidator.test(value))
      passwordError =
        "Mot de passe avec 8 caractères minimum, 1 nombre, 1 majuscule, 1 minuscule !";

    this.setState({
      passwordError
    });
    return passwordError === "";
  }

  render() {
    return (
      <section className="form-content-right">

        { this.state.isFormSubmitted ? (
          <section className="form-submitted">
              <h3>Merci pour votre inscription ! {this.state.firstName} {this.state.lastName}</h3>
              <p>Votre email d'utilisateur : {this.state.email}</p>
          </section>
        ) : (
          <form action="" className="form" onSubmit={this.handleSubmit}>
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
                onChange={this.handleChange}
              />
              <p className="firstNameError">{this.state.firstNameError}</p>
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
                onChange={this.handleChange}
              />
              <p className="lastNameError">{this.state.lastNameError}</p>
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
                onChange={this.handleChange}
              />
              <p className="addressError">{this.state.addressError}</p>
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
                onChange={this.handleChange}
              />
              <p className="emailError">{this.state.emailError}</p>
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
                onChange={this.handleChange}
              />
              <p className="passwordError">{this.state.passwordError}</p>
            </div>

            <button className="form-input-btn" type="submit">
              Continuer
            </button>
          </form>

        )
      }
      </section>
    );
  }
}

export default FormSignup;
