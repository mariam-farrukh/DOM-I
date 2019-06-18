const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//Nav

const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelector("nav");
let navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link, i) => {
  link.innerHTML = siteContent.nav[`nav-item-${i + 1}`];
});

//end Nav

//cta

let ctaText = document.getElementsByClassName("cta-text")[0];

ctaText.getElementsByTagName("h1")[0].innerHTML = siteContent["cta"]["h1"];
let topContent = document.querySelector('.cta-text h1');
topContent.innerHTML = 'DOM<br> is<br> awesome';

ctaText.getElementsByTagName("button")[0].innerHTML = siteContent["cta"]["button"];
let ctaButton = document.querySelector('button');
ctaButton.style.borderRadius = '15px'
ctaButton.style.backgroundColor = '#D7F9D7'

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

//end cta

//middle section//
let middleText = document.querySelectorAll(".text-content");

middleText[0].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["features-h4"];
middleText[0].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["features-content"];

middleText[1].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["about-h4"];
middleText[1].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["about-content"];

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

middleText[2].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["services-h4"];
middleText[2].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["services-content"];

middleText[3].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["product-h4"];
middleText[3].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["product-content"];

middleText[4].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["vision-h4"];
middleText[4].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["vision-content"];

//end middle section

//contact

let contactText = document.querySelectorAll(".contact");
contactText[0].getElementsByTagName("h4")[0].innerHTML = siteContent["contact"]["contact-h4"];
contactText[0].getElementsByTagName("p")[0].innerHTML = siteContent["contact"]["address"];
let addressContent = document.querySelector('.contact p');
addressContent.innerHTML = '123 Way 456 Street<br> Somewhere, USA';
contactText[0].getElementsByTagName("p")[1].innerHTML = siteContent["contact"]["phone"];
contactText[0].getElementsByTagName("p")[2].innerHTML = siteContent["contact"]["email"];

//end contact section

//footer

let footerText = document.getElementsByTagName("footer")[0];
footerText.getElementsByTagName("p")[0].innerHTML = siteContent["footer"]["copyright"];

//end footer section

//Task 3 - Add New Content
  //Change the color of the navigation text to be green.
  navLinks.forEach((links,i) => {
    links.style.color = "green";
  })
  //Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
  let newNavLink1 = document.createElement('a');
  newNavLink1.innerHTML = 'Our Team';
  newNavLink1.style.color = 'green';
  nav.prepend(newNavLink1);

  let newNavLink2 = document.createElement('a');
  newNavLink2.innerHTML = 'Blog';
  newNavLink2.style.color = 'green';
  nav.appendChild(newNavLink2);