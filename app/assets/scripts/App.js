// This is the main javascript file for development. It's written in Babel and compiled with Gulp to be written with vanilla javascript. The compiled App.js file is found in /temp/scripts. Babel uses import, which functions similarly to 'require', though the syntax is much easier to read. The javascript components of the website are separated into individual modules so they are organized by specific functionality. Then they are all imported here.

import MobileMenu from './modules/MobileMenu.js';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader;
var modal = new Modal();
