//

// In ES6, the name of the imported module is arbitray, though it is common practice to keep it the same name as the requirement.
import $ from 'jquery';

// Classes are a special part of ES6. The base is a constructor, which is an object where you can create the attributes of the class that can be maniuplated. This is where javascript becomes Object Oriented Programming.
class MobileMenu {
  constructor() {
    this.siteHeader = $(".site-header");
    this.menuIcon = $(".site-header__menu-icon");
    this.menuContent = $(".site-header__menu-content");
    this.events();
  }

  // In addition to the constructor, you can also create unique functions that can be applied towards the class. Again, this is where javascript becomes Object Oriented Programming.
  events() {
    this.menuIcon.click(this.toggleMenu.bind(this));
  }

  toggleMenu() {
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
    this.siteHeader.toggleClass("site-header--is-expanded");
    this.menuIcon.toggleClass("site-header__menu-icon--close-x");
  }
}

function windowH() {
   var wH = $(window).height();
   $('.large-hero__image').css({"height": "100%"});
}

windowH();
// Export allows you import this module into another js file.
export default MobileMenu;
