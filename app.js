// ********** set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();



document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const linksContainer = document.querySelector(".links-container");

  navToggle.addEventListener("click", () => {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    if (containerHeight === 0) {
      linksContainer.style.height = `${linksContainer.scrollHeight}px`;
    } else {
      linksContainer.style.height = 0;
    }
  });
  
});




// JavaScript for Navbar Toggle
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const linksContainer = document.querySelector(".links-container");

  navToggle.addEventListener("click", () => {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    if (containerHeight === 0) {
      linksContainer.style.height = `${linksContainer.scrollHeight}px`;
    } else {
      linksContainer.style.height = 0;
    }
  });

    // Close menu when clicking outside the header
  document.addEventListener("click", (e) => {
    const isClickInsideHeader = e.target.closest("header");
    if (!isClickInsideHeader) {
      linksContainer.style.height = 0;
    }
  });
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

function popup(i){
  overlay.className= "show"
  pop.className= "show" 
  big_img.src= "img/" + i + ".jpg"
}
function closeAll(){
  overlay.className= "hide"
  pop.className= "hide"    
}
function creation(image, title, des, price){
  let it = document.createElement("div")
    it.className = "items hide"
        
      let im = document.createElement("img")
          im.src = "img/" + image
      let mas = document.createElement("div")
          mas.className = "info"

          let h = document.createElement("h2")
          h.innerHTML = title
          let par = document.createElement("p")
          par.innerHTML = des
          let sp = document.createElement("span")
          sp.innerHTML = price
          let anc = document.createElement("a")
          anc.innerHTML = "Buy"
          anc.href = "#"
mas.appendChild(h)
mas.appendChild(par)
mas.appendChild(sp)
mas.appendChild(anc)

it.appendChild(im)
it.appendChild(mas)
return it
}


let cols = document.querySelectorAll("#all > .sut")
function attachment(i){
  let p1 = (i % 14 + 1) + ".jpg"
  let p2 = "Product" + (i + 1)
  let p3 = "Detals" + (i + 1)
  let p4 = (Math.floor(Math.random() * 20))*1000 + "Ft"

  let el = creation(p1,p2,p3,p4)
  el.className = "items show"
  el.onclick = function(){
      popup(i % 14 + 1)
  }

  cols[i % 4].appendChild(el)
}
for (i=0; i<8; i++){
  setTimeout ("attachment(" + i +  ")", 300*i)
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


document.addEventListener("DOMContentLoaded", () => {
  const scrollLinks = document.querySelectorAll(".scroll-link");
  const linksContainer = document.querySelector(".links-container");

  // Smooth scrolling with offset for sticky header
  scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      const id = e.currentTarget.getAttribute("href").slice(1);
      const section = document.getElementById(id);

      if (section) {
        const headerHeight = document.querySelector("nav").offsetHeight;
        const position = section.offsetTop - headerHeight;

        window.scrollTo({
          top: position,
          behavior: "smooth",
        });

        // Close the menu after clicking
        linksContainer.style.height = 0;
      }
    });
  });
});





