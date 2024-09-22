
    // Open Modals
    document.getElementById('loginBtn').onclick = function() {
        document.getElementById('loginModal').style.display = 'block';
      };
      document.getElementById('signUpBtn').onclick = function() {
        document.getElementById('signUpModal').style.display = 'block';
      };
  
      // Close Modal
      function closeModal(modalId) {
        document.getElementById(modalId).style.display = 'none';
      }
  
      // Close modal if clicked outside of the modal content
      window.onclick = function(event) {
        if (event.target.className === 'modal') {
          event.target.style.display = 'none';
        }
      };
      function addToCart(productName, price) {
          alert(productName + ' has been added to your cart! Price: $' + price);
        }
  
  
        // Sample ordered items (can be dynamically generated in real-world scenarios)
        const items = [
          { name: 'Classic Burger', quantity: 2, price: 8.99 },
          { name: 'Margherita Pizza', quantity: 1, price: 12.99 },
          { name: 'Spaghetti Carbonara', quantity: 1, price: 10.99 }
        ];
    
        function calculateBill() {
          let subtotal = 0;
    
          // Loop through each item and calculate subtotal
          items.forEach(item => {
            const itemTotal = item.quantity * item.price;
            subtotal += itemTotal;
    
            // Insert each item in the billing table
            const row = `<tr>
                          <td>${item.name}</td>
                          <td>${item.quantity}</td>
                          <td>$${item.price.toFixed(2)}</td>
                          <td>$${itemTotal.toFixed(2)}</td>
                        </tr>`;
            document.getElementById('billingItems').innerHTML += row;
          });
    
          // Calculate tax, discount, and total
          const tax = subtotal * 0.10;  // 10% tax
          const discount = subtotal * 0.05;  // 5% discount
          const total = subtotal + tax - discount;
    
          // Update the values in the billing summary
          document.getElementById('subtotal').innerText = subtotal.toFixed(2);
          document.getElementById('tax').innerText = tax.toFixed(2);
          document.getElementById('discount').innerText = discount.toFixed(2);
          document.getElementById('total').innerText = total.toFixed(2);
        }
    
        function checkout() {
          alert('Proceeding to payment. Total: $' + document.getElementById('total').innerText);
        }
    
        // Run the billing calculation when the page loads
        window.onload = calculateBill;
      let orders = [];
  
      function placeOrder(item, price) {
        const order = { item, price, status: 'Pending' };
        orders.push(order);
        displayOrders();
      }
  
      function displayOrders() {
        const orderList = document.getElementById('orderList');
        orderList.innerHTML = ''; // Clear previous orders
        orders.forEach((order, index) => {
          const li = document.createElement('li');
          li.textContent = `Order ${index + 1}: ${order.item} - $${order.price} [${order.status}]`;
          orderList.appendChild(li);
        });
      }
  
      function makeReservation() {
        const tableId = document.getElementById('table').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        alert(`Table ${tableId} reserved for ${date} at ${time}`);
      }
  
      function calculateBilling() {
        const billingSummary = document.getElementById('billingSummary');
        billingSummary.innerHTML = ''; // Clear previous billing
        let total = 0;
        orders.forEach((order, index) => {
          const li = document.createElement('li');
          li.textContent = `Order ${index + 1}: ${order.item} - $${order.price}`;
          total += order.price;
          billingSummary.appendChild(li);
        });
        const totalLi = document.createElement('li');
        totalLi.textContent = `Total: $${total}`;
        billingSummary.appendChild(totalLi);
      }
        function submitContactForm() {
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const phone = document.getElementById('phone').value;
          const message = document.getElementById('message').value;
    
          if (name && email && phone && message) {
            document.getElementById('confirmationMessage').style.display = 'block';
            document.getElementById('contactForm').reset();
          } else {
            alert('Please fill in all fields.');
          }
        }
        'use strict';
  
  
  
  /**
   * PRELOAD
   * 
   * loading will be end after document is loaded
   */
  
  const preloader = document.querySelector("[data-preaload]");
  
  window.addEventListener("load", function () {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
  });
  
  
  
  /**
   * add event listener on multiple elements
   */
  
  const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
      elements[i].addEventListener(eventType, callback);
    }
  }
  
  
  
  /**
   * NAVBAR
   */
  
  const navbar = document.querySelector("[data-navbar]");
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const overlay = document.querySelector("[data-overlay]");
  
  const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
  }
  
  addEventOnElements(navTogglers, "click", toggleNavbar);
  
  
  
  /**
   * HEADER & BACK TOP BTN
   */
  
  const header = document.querySelector("[data-header]");
  const backTopBtn = document.querySelector("[data-back-top-btn]");
  
  let lastScrollPos = 0;
  
  const hideHeader = function () {
    const isScrollBottom = lastScrollPos < window.scrollY;
    if (isScrollBottom) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }
  
    lastScrollPos = window.scrollY;
  }
  
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 50) {
      header.classList.add("active");
      backTopBtn.classList.add("active");
      hideHeader();
    } else {
      header.classList.remove("active");
      backTopBtn.classList.remove("active");
    }
  });
  
  
  
  /**
   * HERO SLIDER
   */
  
  const heroSlider = document.querySelector("[data-hero-slider]");
  const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
  const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
  const heroSliderNextBtn = document.querySelector("[data-next-btn]");
  
  let currentSlidePos = 0;
  let lastActiveSliderItem = heroSliderItems[0];
  
  const updateSliderPos = function () {
    lastActiveSliderItem.classList.remove("active");
    heroSliderItems[currentSlidePos].classList.add("active");
    lastActiveSliderItem = heroSliderItems[currentSlidePos];
  }
  
  const slideNext = function () {
    if (currentSlidePos >= heroSliderItems.length - 1) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }
  
    updateSliderPos();
  }
  
  heroSliderNextBtn.addEventListener("click", slideNext);
  
  const slidePrev = function () {
    if (currentSlidePos <= 0) {
      currentSlidePos = heroSliderItems.length - 1;
    } else {
      currentSlidePos--;
    }
  
    updateSliderPos();
  }
  
  heroSliderPrevBtn.addEventListener("click", slidePrev);
  
  /**
   * auto slide
   */
  
  let autoSlideInterval;
  
  const autoSlide = function () {
    autoSlideInterval = setInterval(function () {
      slideNext();
    }, 7000);
  }
  
  addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
    clearInterval(autoSlideInterval);
  });
  
  addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);
  
  window.addEventListener("load", autoSlide);
  
  
  
  /**
   * PARALLAX EFFECT
   */
  
  const parallaxItems = document.querySelectorAll("[data-parallax-item]");
  
  let x, y;
  
  window.addEventListener("mousemove", function (event) {
  
    x = (event.clientX / window.innerWidth * 10) - 5;
    y = (event.clientY / window.innerHeight * 10) - 5;
  
    // reverse the number eg. 20 -> -20, -5 -> 5
    x = x - (x * 2);
    y = y - (y * 2);
  
    for (let i = 0, len = parallaxItems.length; i < len; i++) {
      x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
      y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
      parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
    }
  
  });
  
  