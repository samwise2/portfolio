import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">
            <h2>Get In Touch.</h2>
            <p className="leadTwo">{message}</p>
             <p className="leadContact">
            <div className="emailThing">
                <a href="mailto:samuel.orend@uwaterloo.ca">
                    <i className="fa fa-envelope" aria-hidden="true" />
                    &nbsp; samuel.orend@uwaterloo.ca
                </a></div></p>
        
            <div className="two columns header-col">

            </div>
        

            <div className="ten columns">

            </div>

         </div>

   </section>
    );
  }
}

export default Contact;
