import React from 'react'

class ValidateInputs extends React.Component {

    



    function controlFirstName() {
        const validFirstName = contact.firstName;
        if (/^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{3,20}$/.test(validFirstName)) {
          return true;
        } else {
          let firstNameErrorMsg = document.getElementById('firstNameErrorMsg');
          firstNameErrorMsg.innerText = "Merci de vérifier le prénom, 3 caractères minimum";
        }
      }

}
export default ValidateInputs