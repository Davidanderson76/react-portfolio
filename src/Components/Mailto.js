import React from 'react'; 
import Mailto from 'react-mailto';

const Mail = React.createClass({
    render: function () {
      return (
        <Mailto email="david.anderson1993@gmail.com" obfuscate={true}>
          Email me!
        </Mailto>
      );
    }
  });

  export default Mail;