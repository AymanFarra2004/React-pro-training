const slider = document.getElementById('slider');
const minValSpan = document.getElementById('min-val');
const maxValSpan = document.getElementById('max-val');

/* to it working must the internet connection is active */
noUiSlider.create(slider, {
  start: [50, 5000],
  connect: true,
  range: {
    min: 0,
    max: 6000,
  },
  step: 5,
});

slider.noUiSlider.on('update', function (values) {
  minValSpan.textContent = Math.round(values[0]);
  maxValSpan.textContent = Math.round(values[1]);
});

/* menu Arrow List flipping */
const menuSectionsList = document.querySelectorAll(
  '.menu > div > div:nth-of-type(2)'
);
const menuArrowList = document.querySelectorAll('.menu > div > div > img');
const menuAddressList = document.querySelectorAll(
  '.menu > div > div:first-of-type'
);
console.log(menuAddressList);
menuAddressList.forEach((el, index) =>
  el.addEventListener('click', () => {
    menuArrowList[index].classList.toggle('active');
    menuSectionsList[index].classList.toggle('active');
  })
);
/* menuArrowList.forEach((el, index) => {
  el.addEventListener('click', () => {
    el.classList.toggle('active');
    menuSectionsList[index].classList.toggle('active');
  });
}); */

/* menu refine clear btns */
const clearRefinrBtns = document.querySelectorAll('.refine button');
const refineTextBox = document.querySelector(
  '.refine .refine-button > div > input'
);
clearRefinrBtns.forEach((el) => {
  el.addEventListener('click', () => {
    refineTextBox.value = '';
  });
});

/* menu operating system li's styles */
const operatingSystem = document.querySelectorAll('.menu > div > div > ul li');
operatingSystem.forEach((el) => {
  el.addEventListener('click', () => {
    operatingSystem.forEach((ele) => {
      if (!ele.classList.contains('active'))
        ele.style.color = 'rgb(117, 117, 117)';
      ele.style.fontSize = '12px';
    });
    el.style.color = 'rgb(245, 146, 17)';
    el.style.fontSize = '14px';
  });
});

/* products tags selection coloring*/
const selectionBtn = document.querySelectorAll('.products-tags .tags button');
selectionBtn.forEach((el) => {
  el.addEventListener('click', () => {
    el.classList.toggle('active');
  });
});

/* showing products mouse over */
const productCard = document.querySelectorAll('.products-box > article');
const mouseOverSection = document.querySelectorAll(
  '.products-box > article .mouse-over'
);
productCard.forEach((el, index) => {
  const currentHeight = el.offsetHeight;
  el.addEventListener('mouseover', () => {
    mouseOverSection[index].style.display = 'flex';
    /* el.style.height = currentHeight + 30 + "px"; */
  });
  el.addEventListener('mouseleave', () => {
    mouseOverSection[index].style.display = 'none';
    /* el.style.height = currentHeight+"px"; */
  });
});

/* coloring products pages btns */
const pageBtns = document.querySelectorAll(
  '.products-pages > ul > li button:not(.arrow-btn)'
);
pageBtns.forEach((el) =>
  el.addEventListener('click', () => {
    pageBtns.forEach((btn) => btn.classList.remove('active'));
    el.classList.toggle('active');
  })
);

const hamburger = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburger.addEventListener('click', (e) => {
  hamburgerMenu.classList.toggle('show');
});

document.addEventListener('click', (e) => {
  if (!hamburgerMenu.contains(e.target) && !hamburger.contains(e.target)) {
    hamburgerMenu.classList.remove('show');
  }
});


const leftBtn = document.querySelector('.bottom button:first-of-type');
const rightBtn = document.querySelector('.bottom button:last-of-type');
const categories = document.querySelector('.categories-list');

leftBtn.addEventListener('click', () => {
  if (window.innerWidth > 500) {
    categories.scrollBy({ left: -150, behavior: 'smooth' });
  } else {
    categories.scrollBy({ left: -90, behavior: 'smooth' });
  }
});

rightBtn.addEventListener('click', () => {
  if (window.innerWidth > 500) {
    categories.scrollBy({ left: 150, behavior: 'smooth' });
  } else {
    categories.scrollBy({ left: 90, behavior: 'smooth' });
  }
});



const filterHumburgerBtn = document.querySelector(".filter-humburger");
const menu = document.querySelector(".menu");
const productsTags = document.querySelector(".products-tags");
filterHumburgerBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  productsTags.classList.toggle("active");
})