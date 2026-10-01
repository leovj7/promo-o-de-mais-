// - Product data
const products = [{

  id: 1,

  name: "Suporte Porta 4 Escova De Dente Organizador C/ Dupla Face",

  category: "casa",

  price: 19.00,

  originalPrice: 34.00,

  discount: 45,

  image: '<i class="fas fa-tooth"></i>',

  rating: 5.0,

  reviews: 4,

  badge: "Mais vendido",

  badgeClass: "",

  description: "",

  pros: [

    "Design moderno e funcional",

    "Fácil de instalar e usar",

  ],

  cons: [

  ],

  affiliateLink: "https://meli.la/1X81msa"

},

{

  id: 2,

  name: "Parafusadeira Furadeira Bivolt À Bateria 21v + Kit 134 Peças",

  category: "casa",

  price: 299.90,

  originalPrice: 459.90,

  discount: 34,

  image: '<i class="fas fa-battery-full"></i>',

  rating: 4.8,

  reviews: 42,

  badge: "Melhor Custo-Benefício",

  badgeClass: "",

  description: "parafusadeira e furadeira á bateria 21v, bivolt, acompanhando um kit com 134 peças, ideal para uso domestico e profissional.",

  pros: [

    "potente e eficiente ",

    "Fácil de usar",

    "Versátil e portátil",

  ],

  cons: [
    " "
  ],

  affiliateLink: "https://meli.la/2iQNstp"

},

{

  id: 3,

  name: "Kit 10 Potes Herméticos Vidro Tampa Bambu Seiri Para Mantimentos Cozinha",

  category: "Casa",

  price: 123.50,

  originalPrice: 208.41,

  discount: 40,

  image: '<i class="fas fa-keyboard"></i>',

  rating: 4.7,

  reviews: 27491,

  badge: "Premium",

  badgeClass: "badge-premium",

  description: "Kit com 10 potes herméticos de vidro com tampa de bambu, ideal para armazenar alimentos na cozinha.",

  pros: [

    "Design elegante e moderno",

    "Material de alta qualidade",

    "Mantém os alimentos frescos por mais tempo",

  ],

  cons: [

    "",

    "",

    " "

  ],

  affiliateLink: "https://meli.la/1NANXij"

},

{

  id: 4,

  name: "Cuba Para Pia Apoio Sobrepor Redonda 28cm Moderna Banheiro",

  category: "Casa",

  price: 37.90,

  originalPrice: 99.99,

  discount: 62,

  image: '<i class="fas fa-bath"></i>',

  rating: 4.5,

  reviews: 235,

  badge: "Melhor Custo-Benefício",

  badgeClass: "bg-blue-900",

  description: "Cuba para pia com apoio sobrepor redonda de 28cm, moderna para banheiro.",

  pros: [

    "Fácil de instalar",

    "Design moderno e elegante"

  ],

  cons: [
    "Material fragil, requer cuidado ao manusear"

  ],

  affiliateLink: "https://meli.la/2KocCWi"

},

{

  id: 5,

  name: "Cortina Box Banheiro Transparente 100% Pvc 1,40 X 1,80 Mts",

  category: "casa",

  price: 26.90,

  originalPrice: 26.90,

  discount: 0.0,

  image: '<i class="fas fa-shower"></i>',

  rating: 4.7,

  reviews: 63,

  badge: "Escolha do Especialista",

  badgeClass: "bg-blue-900",

  description: "Cortina box para banheiro transparente 100% pvc 1,40 x 1,80 mts",

  pros: [

    "Fácil de instalar e limpar",

    "Durável e resistente",

    "Design elegante",

  ],

  cons: [
    


  ],

  affiliateLink: "https://meli.la/1YkKGZM"

},

{

  id: 6,

  name: "Varão Extensível Extensor Cortina Box Banheiro 110cm A 200cm Branco",

  category: "Casa",

  price: 24.90,

  originalPrice: 39.90,

  discount: 37,

  image: '<i class="fas fa-bars"></i>',

  rating: 4.7,

  reviews: 88,

  badge: "Mais vendido",

  badgeClass: "bg-blue-900",

  description: "Varão extensível para cortina box de banheiro, 110cm a 200cm, cor branco. Ideal para uso residencial.",

  pros: [

   "Material resistente e durável"

  ],

  cons: [


  ],

  affiliateLink: "https://meli.la/27HoLcn"

},

{

  id: 7,

  name: "Cooktop Itatiaia Essencial 5 Bocas Preto",

  category: "Tecnologia",

  price: 376.60,

  originalPrice: 590.70,

  discount: 19,

  image: '<i class="fas fa-book"></i>',

  rating: 4.9,

  reviews: 22914,

  badge: "Mais vendido ",

  badgeClass: "bg-amber-600",

  description: "Cooktop Itatiaia Essencial 5 Bocas Preto. Ideal para cozinha moderna.",

  pros: [

    "Design moderno e elegante",

    "Fácil de limpar",

    "Bocas com diferentes potências",

    "Segurança com atendimento ás normas",

    "Durabilidade e resistência"

  ],

  cons: [

    "Pode ser difícil de instalar",

    "não é portátil"

  ],

  affiliateLink: "https://meli.la/2ookuio"

},

{

  id: 8,

  name: "ogo Toalhas De Algodão 4 Peças Banho E Rosto Bege Marrom Karsten",

  category: "Casa",

  price: 113.90,

  originalPrice: 213.90,

  discount: 46,

  image: '<i class="fas fa-square"></i>',

  rating: 4.5,

  reviews: 7536,

  badge: "Mais Vendido",

  badgeClass: "badge-premium",

  description: "Toalhas de algodão 4 peças para banho e rosto, cor bege marrom. Ideal para uso diário.",

  pros: [

    "Toalhas macias e absorvíveis",

    "Boa durabilidade",

    "Design elegante e moderno",

    "Compatível com diferentes estilos de banheiro",

    "Fácil de lavar e secar"

  ],

  cons: [

    " ",

  ],

  affiliateLink: "https://meli.la/1in3wgV"

}];

let currentFilter = "todos";
let currentSearch = "";
let selectedProductId = null;

const categoryLabels = {
  tecnologia: "Tecnologia",
  casa: "Casa & Cozinha",
  esportes: "Esportes",
  beleza: "Beleza & Saúde",
  livros: "Livros & Mídias"
};

function formatPrice(value) {
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
}

function renderStars(rating) {
  let html = "";
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) html += '<i class="fas fa-star star"></i>';
    else if (i < rating) html += '<i class="fas fa-star-half-alt star"></i>';
    else html += '<i class="far fa-star" style="color:#d1d5db"></i>';
  }
  return html;
}

function getVisibleProducts() {
  const query = currentSearch.trim().toLowerCase();

  return products.filter(product => {
    const matchesCategory =
      currentFilter === "todos" || product.category === currentFilter;

    const searchable = [
      product.name,
      product.category,
      categoryLabels[product.category] || "",
      product.badge,
      product.description,
      ...(product.pros || []),
      ...(product.cons || [])
    ].join(" ").toLowerCase();

    return matchesCategory && (!query || searchable.includes(query));
  });
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const visible = getVisibleProducts();

  if (!visible.length) {
    grid.innerHTML = `
      <div class="no-results bg-white border border-gray-200 rounded-xl p-8 text-center">
        <i class="fas fa-search text-4xl text-gray-300 mb-4"></i>
        <h3 class="text-lg font-bold text-gray-900">Nenhum produto encontrado</h3>
        <p class="text-gray-500 mt-2">Tente outro termo ou selecione outra categoria.</p>
        <button onclick="clearSearch()" class="mt-5 bg-blue-900 text-white px-5 py-2 rounded-lg font-semibold">
          Limpar busca
        </button>
      </div>`;
    updateSearchStatus(0);
    return;
  }

  grid.innerHTML = visible.map(product => `
    <article class="product-card bg-white rounded-lg overflow-hidden border border-gray-200">
      <div class="relative">
        <div class="h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-4xl text-gray-400 cursor-pointer hover:scale-110 transition"
             onclick="openModal(${product.id})">
          ${product.image}
        </div>
        <div class="discount-badge">${product.discount}% OFF</div>
        <span class="${product.badgeClass} text-white text-xs font-bold px-3 py-1 absolute top-12 left-3 rounded-full">
          ${product.badge}
        </span>
      </div>
      <div class="p-5">
        <p class="text-xs font-semibold text-blue-900 uppercase tracking-wide mb-1">
          ${categoryLabels[product.category] || product.category}
        </p>
        <h3 class="font-bold text-gray-900 mb-2 text-sm line-clamp-2 h-10">${product.name}</h3>

        <div class="rating-display">
          <div>${renderStars(product.rating)} <span class="text-sm font-semibold text-gray-800">${product.rating}</span></div>
          <span class="text-xs text-gray-500">(${product.reviews})</span>
        </div>

        <div class="mb-4 pt-3 border-t border-gray-200">
          <div class="text-2xl font-bold text-blue-900 mb-1">${formatPrice(product.price)}</div>
          <div class="text-sm price-original">${formatPrice(product.originalPrice)}</div>
        </div>

        <button onclick="openModal(${product.id})"
          class="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2 rounded-lg font-semibold hover:from-blue-800 hover:to-blue-700 transition text-sm">
          Ver Análise Completa
        </button>
      </div>
    </article>
  `).join("");

  updateSearchStatus(visible.length);
}

function updateSearchStatus(count) {
  const status = document.getElementById("searchStatus");
  if (!status) return;
  status.textContent = currentSearch
    ? `${count} produto(s) encontrado(s) para "${currentSearch}"`
    : `${count} produto(s) em destaque`;
}

function filterCategory(category, clickedButton = null) {
  currentFilter = category;

  document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
  if (clickedButton) clickedButton.classList.add("active");

  renderProducts();
  document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function performSearch() {
  const input = document.getElementById("searchInput");
  currentSearch = input ? input.value : "";

  // If the search names a category, activate that category automatically.
  const normalized = currentSearch.trim().toLowerCase();
  const category = Object.entries(categoryLabels).find(
    ([key, label]) => key === normalized || label.toLowerCase() === normalized
  );

  if (category) {
    currentFilter = category[0];
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.category === category[0]);
    });
  } else if (!normalized) {
    currentFilter = "todos";
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.category === "todos");
    });
  }

  renderProducts();
  document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function clearSearch() {
  const input = document.getElementById("searchInput");
  if (input) input.value = "";
  currentSearch = "";
  currentFilter = "todos";
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === "todos");
  });
  renderProducts();
}

function searchByCategory(category) {
  currentFilter = category;
  currentSearch = "";
  const input = document.getElementById("searchInput");
  if (input) input.value = "";

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === category);
  });

  renderProducts();
  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
}

function openModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  selectedProductId = productId;
  document.getElementById("modalTitle").textContent = product.name;
  document.getElementById("modalImage").innerHTML =
    `<i class="fas ${product.image.match(/fa-[a-z-]+/)[0]} text-8xl text-blue-900"></i>`;
  document.getElementById("modalPrice").textContent = formatPrice(product.price);
  document.getElementById("modalOriginalPrice").textContent = formatPrice(product.originalPrice);
  document.getElementById("modalDiscount").textContent = `-${product.discount}%`;
  document.getElementById("modalReviews").textContent = `${product.reviews} avaliações`;
  document.getElementById("modalRating").innerHTML =
    `${renderStars(product.rating)} <span class="text-lg font-bold text-gray-900 ml-2">${product.rating}/5</span>`;
  document.getElementById("modalDescription").textContent = product.description;
  document.getElementById("modalPros").innerHTML =
    product.pros.map(pro => `<li>${pro}</li>`).join("");
  document.getElementById("modalCons").innerHTML =
    product.cons.map(con => `<li>${con}</li>`).join("");

  document.getElementById("affiliateBtn").dataset.productId = productId;
  document.getElementById("productModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("productModal")?.classList.remove("active");
  document.body.style.overflow = "";
}

function handleAffiliate() {
  const product = products.find(p => p.id === selectedProductId);
  if (!product) return;

  if (!product.affiliateLink || product.affiliateLink === "#") {
    alert(`Link de afiliado ainda não configurado para "${product.name}".`);
    return;
  }

  window.open(product.affiliateLink, "_blank", "noopener,noreferrer");
}

function toggleMobileMenu() {
  document.getElementById("mobileMenu")?.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();

  document.getElementById("searchButton")?.addEventListener("click", performSearch);
  document.getElementById("searchInput")?.addEventListener("keydown", e => {
    if (e.key === "Enter") performSearch();
  });

  document.getElementById("mobileMenuButton")?.addEventListener("click", toggleMobileMenu);

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => filterCategory(btn.dataset.category, btn));
  });

  document.querySelectorAll("[data-close-modal]").forEach(btn => {
    btn.addEventListener("click", closeModal);
  });

  document.getElementById("productModal")?.addEventListener("click", e => {
    if (e.target.id === "productModal") closeModal();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });
});
