// This is the main javascript file for development. It's written in Babel and compiled with Gulp to be written with vanilla javascript. The compiled App.js file is found in /temp/scripts. Babel uses import, which functions similarly to 'require', though the syntax is much easier to read. The javascript components of the website are separated into individual modules so they are organized by specific functionality. Then they are all imported here.

import MobileMenu from './modules/MobileMenu.js';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import ContactForm from './modules/ContactForm';

var mobileMenu = new MobileMenu();
new RevealOnScroll($("#web-portfolio"), "85%");
new RevealOnScroll($("#photo-portfolio"), "60%");
var stickyHeader = new StickyHeader;
var modal = new Modal();
var contactForm = new ContactForm();

$("#contact-form").submit(function(e){
  var name = document.getElementById("inputName"),
      email = document.getElementById("inputEmail"),
      num = document.getElementById("inputNum"),
      message = document.getElementById("inputMessage")

      if (!name.value || !email.value || !message.value){
        alertify.error("Please fill in the required fields");
        return false;
      } else {
        $.ajax({
          url: "http://formspree.io/alexguevaramedia@gmail.com",
          method: "POST",
          data: $("#contact-form").serialize(),
          dataType: "json"
        })

        e.preventDefault()
        $(this).get(0).reset()
        alertify.success("Message Sent!");
      }
})
