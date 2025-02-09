// ********** set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
// calculate heights

//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function () {

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

//about
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tap-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
//slider
let pos=0;
function move(i) {
  pos=i*-100;
  gal.style.left= pos + "%";
  // body...
}

right.onclick=function () {
  if (pos > -400){
    pos = pos - 100;
    gal.style.left= pos + "%";
  }
  else if(pos == -400){
    pos = 0;
    gal.style.left= pos + "%";
  }
}

left.onclick=function () {
  if (pos < 0){
    pos = pos + 100;
    gal.style.left= pos + "%";
  }

}
//Galery
let products = [
  { image: "1.jpg", name: "Full SEO Package", description: "Complete on-page and off-page SEO", price: "400$ / Project" },
  { image: "2.jpg", name: "Google Ads Package", description: "PPC Campaign Management", price: "300$ / Month" },
  { image: "3.jpg", name: "Social Media Management", description: "Facebook, Instagram, Twitter Marketing", price: "250$ / Month" },
  { image: "4.jpg", name: "Website Development", description: "Custom Website with WordPress", price: "700$ / Project" },
  { image: "5.jpg", name: "Content Writing", description: "SEO-Optimized Articles & Blog Posts", price: "50$ / Article" },
  { image: "6.jpg", name: "Graphic Design", description: "Logo, Banners, and Branding", price: "150$ / Design" },
  { image: "7.jpg", name: "Email Marketing", description: "Newsletter Campaigns & Automation", price: "200$ / Campaign" },
  { image: "8.jpg", name: "Local SEO Services", description: "Optimize Business for Local Search", price: "350$ / Project" }
];

function popup(i){
  let product = products[i]; // Fix: Get product data

  document.getElementById("overlay").className = "show";
  document.getElementById("pop").className = "show";

  document.getElementById("big_img").src = "img/" + product.image;
  document.getElementById("pop_title").innerHTML = product.name;
  document.getElementById("pop_desc").innerHTML = product.description;
  document.getElementById("pop_cta").href = "#"; // Change this to a real product link
  document.getElementById("pop_cta").innerHTML = "Learn More";
}

function closeAll(){
  document.getElementById("overlay").className = "hide";
  document.getElementById("pop").className = "hide";
}
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeAll(); // Hide the popup when ESC is pressed
  }
});

function creation(image, title, price){
  let it = document.createElement("div");
  it.className = "items hide";

  let im = document.createElement("img");
  im.src = "img/" + image;

  let mas = document.createElement("div");
  mas.className = "info";

  let h = document.createElement("h2");
  h.innerHTML = title;

  let sp = document.createElement("span");
  sp.innerHTML = price;

  let anc = document.createElement("a");
  anc.innerHTML = "Buy";
  anc.href = "#";

  mas.appendChild(h);
  mas.appendChild(sp);
  mas.appendChild(anc);

  it.appendChild(im);
  it.appendChild(mas);
  return it;
}

let cols = document.querySelectorAll("#all > .sut");
function attachment(i){
  if (i >= products.length) return;

  let product = products[i];
  let el = creation(product.image, product.name, product.price);

  el.className = "items show";
  el.onclick = function(){
      popup(i); // Pass index to popup function
  };

  cols[i % 4].appendChild(el);
}

for (let i = 0; i < products.length; i++){
  setTimeout(() => attachment(i), 300 * i);
}



// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Ayda Yazdani',
    job: 'Designer',
    img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'Havin Fathi',
    job: 'intern',
    img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'Yaser Tayyebi',
    job: 'web developer',
    img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'Erfan Mosayebi',
    job: 'the boss',
    img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

const linkss = document.querySelectorAll('a[href^="#"]');
linkss.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});




// Temporary page
// Countdown Timer
const countdownDate = new Date("September 30, 2025 00:00:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "<h2>We're Live!</h2>";
    }
};

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();




//Ajax code for subscribers
document.querySelector('.subscribe-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload

  const form = this;
  const email = form.querySelector('input[name="EMAIL"]').value;
  const actionURL = form.getAttribute('action');

  if (email) {
      fetch(actionURL, {
          method: "POST",
          body: new FormData(form),
          mode: "no-cors"
      }).then(() => {
          alert("Thank you! You've been subscribed.");
          form.reset(); // Reset the form after submission
      }).catch(error => console.error("Error:", error));
  }
});


// Function to open the modal
function openModal() {
  document.getElementById("about-modal").style.display = "flex";
}

// Function to close the modal
function closeModal() {
  document.getElementById("about-modal").style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById("about-modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};
document.querySelectorAll('li').forEach((item, index) => {
  item.addEventListener('mouseover', () => move(index));
});


