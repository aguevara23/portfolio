import $ from 'jquery';

class ContactForm {
    // using formspree to send email
    $('#contact-form').submit(function(e) {
      var num = document.getElementById('inputNum'),
          name = document.getElementById('inputName'),
          email = document.getElementById('inputEmail'),
          message = document.getElementById('inputMessage');

      if(!name.value || !email.value || !message.value) {
        alertify.error('Please fill out the required fields')
      } else {
        $.ajax({
            url: "http://formspree.io/alexguevaramedia@gmail.com",
            method: "POST",
            data: $(this).serialize(),
            dataType: "json"
        });

        e.preventDefault()
        $(this).get(0).reset()
        alertify.success('Message Sent');
      }
  });
}

export default ContactForm;
