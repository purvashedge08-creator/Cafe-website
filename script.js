const foodItems = [
  {name:"Classic Pancake Stack",category:"Breakfast",description:"Fluffy buttermilk pancakes, maple syrup and seasonal berries.",price:279,image:"photo-1528207776546-365bb710ee93"},
  {name:"Avocado Toast",category:"Breakfast",description:"Sourdough, smashed avocado, chilli flakes and a little lime.",price:329,image:"photo-1525351484163-7529414344d8"},
  {name:"English Breakfast",category:"Breakfast",description:"Eggs, herbed sausage, beans, grilled tomato and toast.",price:449,image:"photo-1533089860892-a7c6f0a88666"},
  {name:"Cheese Omelette",category:"Breakfast",description:"Three-egg omelette with cheddar, herbs and toasted sourdough.",price:289,image:"photo-1525351484163-7529414344d8"},
  {name:"Crispy French Fries",category:"Starters",description:"Golden-cut potatoes, sea salt and our house herb dip.",price:189,image:"photo-1573080496219-bb080dd4f877"},
  {name:"Loaded Nachos",category:"Starters",description:"Corn chips, melted cheese, salsa, jalapeños and sour cream.",price:299,image:"photo-1513456852971-30c0b8199d4d"},
  {name:"Garlic Bread",category:"Starters",description:"Toasted ciabatta, roasted garlic butter and fresh parsley.",price:219,image:"photo-1573140247632-f8fd74997d5c"},
  {name:"Crispy Chicken Strips",category:"Starters",description:"Buttermilk-marinated chicken with smoky honey mustard.",price:329,image:"photo-1562967914-608f82629710"},
  {name:"Creamy Alfredo Pasta",category:"Pizza & Pasta",description:"Silky parmesan cream, fettuccine and cracked black pepper.",price:389,image:"photo-1473093295043-cdd812d0e601"},
  {name:"Arrabbiata Pasta",category:"Pizza & Pasta",description:"Slow-simmered tomato, garlic, chilli and fresh basil.",price:359,image:"photo-1473093295043-cdd812d0e601"},
  {name:"Veggie Rice Bowl",category:"Main Course",description:"Brown rice, seasonal greens, pickled vegetables and sesame.",price:349,image:"photo-1512621776951-a57141f2eefd"},
  {name:"Grilled Chicken Steak",category:"Main Course",description:"Herb-grilled chicken, pepper jus and buttery mash.",price:499,image:"photo-1532550907401-a500c9a57435"},
  {name:"Creamy Mushroom Risotto",category:"Main Course",description:"Arborio rice, wild mushrooms, parmesan and thyme.",price:429,image:"photo-1476124369491-e7addf5db371"},
  {name:"Margherita Pizza",category:"Pizza & Pasta",description:"San Marzano tomato, fior di latte and fresh basil.",price:379,image:"photo-1579751626657-72bc17010498"},
  {name:"Farmhouse Pizza",category:"Pizza & Pasta",description:"Garden vegetables, olives, mozzarella and oregano.",price:439,image:"photo-1513104890138-7c749659a591"},
  {name:"BBQ Chicken Pizza",category:"Pizza & Pasta",description:"Smoky BBQ chicken, red onion and a ribbon of mozzarella.",price:479,image:"photo-1594007654729-407eedc4be65"},
  {name:"Four Cheese Pizza",category:"Pizza & Pasta",description:"Mozzarella, parmesan, gorgonzola and creamy ricotta.",price:489,image:"photo-1571407970349-bc81e7e96d47"},
  {name:"Classic Cheese Burger",category:"Burgers & Sandwiches",description:"Smash patty, aged cheddar, pickles and house burger sauce.",price:399,image:"photo-1568901346375-23c9450c58cd"},
  {name:"Crispy Chicken Burger",category:"Burgers & Sandwiches",description:"Crunchy chicken, slaw, pickles and a peppery mayo.",price:419,image:"photo-1606755962773-d324e0a13086"},
  {name:"Paneer Tikka Burger",category:"Burgers & Sandwiches",description:"Charred tikka paneer, mint chutney and crisp onion.",price:369,image:"photo-1550547660-d9450f859349"},
  {name:"Grilled Veg Sandwich",category:"Burgers & Sandwiches",description:"Grilled sourdough, market vegetables and herbed cheese.",price:299,image:"photo-1528735602780-2552fd46c7af"},
  {name:"Club Sandwich",category:"Burgers & Sandwiches",description:"Triple-decker, grilled chicken, egg, tomato and crisp lettuce.",price:379,image:"photo-1528735602780-2552fd46c7af"},
  {name:"Chocolate Brownie",category:"Desserts",description:"Deep chocolate, crisp edges and a soft, fudgy centre.",price:229,image:"photo-1606313564200-e75d5e30476c"},
  {name:"New York Cheesecake",category:"Desserts",description:"Baked vanilla cheesecake with a buttery biscuit base.",price:279,image:"photo-1533134242443-d4fd215305ad"},
  {name:"Tiramisu",category:"Desserts",description:"Espresso-soaked sponge, mascarpone and cocoa dust.",price:299,image:"photo-1571877227200-a0d98ea607e9"},
  {name:"Chocolate Lava Cake",category:"Desserts",description:"Warm cocoa cake with a molten centre and vanilla cream.",price:279,image:"photo-1606313564200-e75d5e30476c"},
  {name:"Belgian Waffle",category:"Desserts",description:"Golden waffle, whipped cream, berries and maple drizzle.",price:289,image:"photo-1562376552-0d160a2f238d"},
  {name:"Strawberry Pancake",category:"Desserts",description:"A soft pancake stack with fresh strawberries and cream.",price:299,image:"photo-1484723091739-30a097e8f929"}
];

const coffees = [
  {name:"Espresso",description:"A short, rich shot with a golden crema.",price:129,style:"Hot",image:"photo-1510707577719-ae7c14805e3a"},
  {name:"Double Espresso",description:"Twice the shot, all the chocolatey depth.",price:159,style:"Hot",image:"photo-1510707577719-ae7c14805e3a"},
  {name:"Americano",description:"Espresso opened up with hot water.",price:159,style:"Hot",image:"photo-1517701604599-bb29b565090c"},
  {name:"Cappuccino",description:"Espresso, steamed milk and soft, airy foam.",price:189,style:"Hot",image:"photo-1570968915860-54d5c301fa9f"},
  {name:"Café Latte",description:"A smooth espresso with beautifully steamed milk.",price:199,style:"Hot",image:"photo-1461023058943-07fcbe16d735"},
  {name:"Vanilla Latte",description:"Our house latte with a touch of real vanilla.",price:229,style:"Hot",image:"photo-1461023058943-07fcbe16d735"},
  {name:"Caramel Latte",description:"Espresso and steamed milk, finished with caramel.",price:239,style:"Hot",image:"photo-1461023058943-07fcbe16d735"},
  {name:"Hazelnut Latte",description:"Toasty hazelnut, espresso and silky milk.",price:239,style:"Hot",image:"photo-1517701604599-bb29b565090c"},
  {name:"Mocha",description:"A little dark chocolate in your coffee ritual.",price:239,style:"Hot",image:"photo-1578314675249-a6910f80cc4e"},
  {name:"White Chocolate Mocha",description:"Espresso, white chocolate and soft milk foam.",price:259,style:"Hot",image:"photo-1578314675249-a6910f80cc4e"},
  {name:"Flat White",description:"A double ristretto under velvety microfoam.",price:199,style:"Hot",image:"photo-1534778101976-62847782c213"},
  {name:"Macchiato",description:"A bold espresso with just a whisper of milk.",price:159,style:"Hot",image:"photo-1510707577719-ae7c14805e3a"},
  {name:"Affogato",description:"Vanilla bean gelato, happily drowned in espresso.",price:249,style:"Hot & cold",image:"photo-1510707577719-ae7c14805e3a"},
  {name:"Cold Brew",description:"Slow-steeped for 18 hours, smooth to the last sip.",price:219,style:"Iced",image:"photo-1517701604599-bb29b565090c"},
  {name:"Iced Americano",description:"Bright espresso over ice, crisp and refreshing.",price:179,style:"Iced",image:"photo-1517701604599-bb29b565090c"},
  {name:"Iced Latte",description:"A double shot, cold milk and plenty of ice.",price:219,style:"Iced",image:"photo-1461023058943-07fcbe16d735"},
  {name:"Caramel Frappé",description:"Blended coffee, caramel and a cloud of cream.",price:269,style:"Iced",image:"photo-1572490122747-3968b75cc699"},
  {name:"Mocha Frappé",description:"Cold-blended espresso and cocoa, extra indulgent.",price:279,style:"Iced",image:"photo-1572490122747-3968b75cc699"},
  {name:"Irish Cream Latte",description:"A comforting latte with a hint of Irish cream syrup.",price:259,style:"Hot",image:"photo-1517701604599-bb29b565090c"},
  {name:"Spanish Latte",description:"Espresso and steamed milk with condensed milk sweetness.",price:249,style:"Hot",image:"photo-1461023058943-07fcbe16d735"}
];

const specials = [
  {name:"Truffle Mushroom Pasta",description:"Wild mushrooms, silky cream, parmesan and a finishing touch of truffle oil.",price:529,image:"photo-1476124369491-e7addf5db371"},
  {name:"Peri Peri Chicken Steak",description:"Flame-grilled chicken, bright peri peri butter and crisp seasonal greens.",price:589,image:"photo-1532550907401-a500c9a57435"},
  {name:"Creamy Pesto Pasta",description:"Basil pesto folded through fresh pasta with toasted pine nuts and parmesan.",price:469,image:"photo-1473093295043-cdd812d0e601"},
  {name:"Signature Brew & Bite Burger",description:"Our house-ground patty, aged cheddar, onion jam and secret café sauce.",price:549,image:"photo-1568901346375-23c9450c58cd"}
];

const imageUrl = (id, width = 700) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
const rupees = value => `₹${value.toLocaleString("en-IN")}`;
const menuGrid = document.querySelector("#menu-grid");
const coffeeGrid = document.querySelector("#coffee-grid");
const specialsGrid = document.querySelector("#specials-grid");
const cart = new Map();
let activeCategory = "All";
let toastTimer;

function renderFood() {
  const query = document.querySelector("#menu-search").value.trim().toLowerCase();
  const beverageItems = coffees.map(item => ({...item, category:"Beverages"}));
  const items = activeCategory === "Beverages" || (activeCategory === "All" && query) ? [...foodItems, ...beverageItems] : foodItems;
  const matches = items.filter(item => (activeCategory === "All" || item.category === activeCategory) && `${item.name} ${item.category} ${item.description}`.toLowerCase().includes(query));
  menuGrid.innerHTML = matches.length ? matches.map(item => `<article class="food-card"><div class="food-image-wrap"><img src="${imageUrl(item.image)}" alt="${item.name}" loading="lazy"><span class="food-category">${item.category}</span></div><div class="food-card-body"><div class="food-card-top"><h3>${item.name}</h3><span class="food-price">${rupees(item.price)}</span></div><p>${item.description}</p><div class="food-card-foot"><small>PREPARED FRESH</small><button class="add-button" type="button" data-add="${item.name}" aria-label="Add ${item.name} to your order">Order now <span>+</span></button></div></div></article>`).join("") : `<p class="no-results">Nothing on the menu by that name just yet. Try another search.</p>`;
}

function renderCoffee() {
  coffeeGrid.innerHTML = coffees.map(item => `<article class="coffee-card"><div class="coffee-image"><img src="${imageUrl(item.image, 500)}" alt="${item.name}" loading="lazy"><span class="coffee-badge">${item.style}</span></div><div class="coffee-card-body"><div class="coffee-title-row"><h3>${item.name}</h3><span class="coffee-price">${rupees(item.price)}</span></div><p>${item.description}</p><div class="food-card-foot"><small>BARISTA MADE</small><button class="add-button" type="button" data-add="${item.name}" aria-label="Add ${item.name} to your order">Add to order <span>+</span></button></div></div></article>`).join("");
}

function renderSpecials() {
  specialsGrid.innerHTML = specials.map((item, index) => `<article class="special-card"><img src="${imageUrl(item.image, 900)}" alt="${item.name}" loading="lazy"><div class="special-card-content"><span class="special-number">CHEF’S PICK · 0${index + 1}</span><h3>${item.name}</h3><p>${item.description}</p><div class="special-card-foot"><strong>${rupees(item.price)}</strong><button type="button" data-add="${item.name}">Try today’s special ↗</button></div></div></article>`).join("");
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

function addToCart(name) {
  const item = [...foodItems, ...coffees, ...specials].find(entry => entry.name === name);
  if (!item) return;
  const current = cart.get(name);
  cart.set(name, {...item, quantity: (current?.quantity || 0) + 1});
  renderCart();
  showToast(`${name} added to your order`);
}

function renderCart() {
  const count = [...cart.values()].reduce((sum, item) => sum + item.quantity, 0);
  const total = [...cart.values()].reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.querySelector(".cart-count").textContent = count;
  document.querySelector("#cart-total").textContent = rupees(total);
  document.querySelector("#cart-empty").hidden = count > 0;
  document.querySelector("#cart-items").innerHTML = [...cart.values()].map(item => `<article class="cart-line"><div><h3>${item.name}</h3><small>${item.category || item.style || "CHEF’S SPECIAL"}</small><div class="quantity-control"><button type="button" data-quantity="${item.name}" data-delta="-1" aria-label="Remove one ${item.name}">−</button><span>${item.quantity}</span><button type="button" data-quantity="${item.name}" data-delta="1" aria-label="Add one ${item.name}">+</button></div></div><span class="cart-line-price">${rupees(item.price * item.quantity)}</span></article>`).join("");
  document.querySelector("#checkout-button").disabled = count === 0;
}

function openCart() {
  document.querySelector("#cart-drawer").classList.add("is-open");
  document.querySelector("#cart-drawer").setAttribute("aria-hidden", "false");
  document.querySelector("#drawer-scrim").classList.add("is-visible");
  document.body.classList.add("no-scroll");
  document.querySelector(".drawer-close").focus();
}

function closeCart() {
  document.querySelector("#cart-drawer").classList.remove("is-open");
  document.querySelector("#cart-drawer").setAttribute("aria-hidden", "true");
  document.querySelector("#drawer-scrim").classList.remove("is-visible");
  document.body.classList.remove("no-scroll");
}

document.addEventListener("click", event => {
  const addButton = event.target.closest("[data-add]");
  if (addButton) addToCart(addButton.dataset.add);
  const quantityButton = event.target.closest("[data-quantity]");
  if (quantityButton) {
    const name = quantityButton.dataset.quantity;
    const item = cart.get(name);
    if (item) {
      item.quantity += Number(quantityButton.dataset.delta);
      if (item.quantity <= 0) cart.delete(name);
      renderCart();
    }
  }
});

document.querySelectorAll(".filter-chip").forEach(button => button.addEventListener("click", () => {
  activeCategory = button.dataset.filter;
  document.querySelectorAll(".filter-chip").forEach(chip => {
    const selected = chip === button;
    chip.classList.toggle("is-active", selected);
    chip.setAttribute("aria-pressed", String(selected));
  });
  renderFood();
}));
document.querySelector("#menu-search").addEventListener("input", renderFood);
document.querySelector("#menu-search").addEventListener("keydown", event => {
  if (event.key === "Escape") event.currentTarget.value = "";
  if (event.key === "Enter") document.querySelector("#menu").scrollIntoView({behavior:"smooth"});
  renderFood();
});
document.addEventListener("keydown", event => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    document.querySelector("#menu-search").focus();
    document.querySelector("#menu").scrollIntoView({behavior:"smooth"});
  }
  if (event.key === "Escape") closeCart();
});

document.querySelector(".cart-trigger").addEventListener("click", openCart);
document.querySelector(".drawer-close").addEventListener("click", closeCart);
document.querySelector("[data-close-cart]").addEventListener("click", closeCart);
document.querySelector("#drawer-scrim").addEventListener("click", closeCart);
document.querySelector("#checkout-button").addEventListener("click", () => {
  if (cart.size === 0) return;
  const itemCount = [...cart.values()].reduce((sum, item) => sum + item.quantity, 0);
  cart.clear();
  renderCart();
  closeCart();
  showToast(`Demo order for ${itemCount} ${itemCount === 1 ? "item" : "items"} ready. Call us to confirm: +91 20 4123 4567`);
});

const bookingDialog = document.querySelector("#booking-dialog");
document.querySelectorAll("[data-open-booking]").forEach(button => button.addEventListener("click", () => {
  const date = document.querySelector("#booking-date");
  date.min = new Date().toISOString().slice(0, 10);
  bookingDialog.showModal();
}));
document.querySelector("#booking-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = document.querySelector("#booking-status");
  if (!form.reportValidity()) return;
  status.textContent = "Thanks! Your table request is noted. Our team will call to confirm shortly.";
  status.classList.remove("is-error");
  form.reset();
});

function validateForm(form, statusElement, successMessage) {
  if (!form.reportValidity()) {
    statusElement.textContent = "Please check the highlighted fields and try again.";
    statusElement.classList.add("is-error");
    return false;
  }
  statusElement.textContent = successMessage;
  statusElement.classList.remove("is-error");
  form.reset();
  return true;
}
document.querySelector("#contact-form").addEventListener("submit", event => {
  event.preventDefault();
  validateForm(event.currentTarget, document.querySelector("#contact-message-status"), "Thanks for reaching out. We’ll get back to you soon.");
});
document.querySelector("#newsletter-form").addEventListener("submit", event => {
  event.preventDefault();
  const status = document.querySelector("#newsletter-status");
  const submitted = validateForm(event.currentTarget, status, "You’re on the list. Keep an eye on your inbox for something good.");
  if (submitted) status.classList.remove("is-error");
});

const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector("#primary-nav");
navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  navToggle.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
  primaryNav.classList.toggle("is-open", !expanded);
});
primaryNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  primaryNav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation");
}));

const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add("is-visible");
    revealObserver.unobserve(entry.target);
  }
}), {threshold:0.12});
document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));
const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => backToTop.classList.toggle("is-visible", window.scrollY > 600), {passive:true});
backToTop.addEventListener("click", () => window.scrollTo({top:0,behavior:"smooth"}));

document.querySelectorAll("img").forEach(image => image.addEventListener("error", () => {
  image.src = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80";
}, {once:true}));

renderFood();
renderCoffee();
renderSpecials();
renderCart();