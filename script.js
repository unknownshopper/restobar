// Datos de ejemplo: lugares con múltiples categorías
const lugares = [
  { id: 1, nombre: "La Casona", categorias: ["restaurante"], zona: "Centro", rating: 4.5, priceRange: "$$", fairPrice: 0.82,
    ubicacion: { direccion: "Av. Juárez 123, Centro, Villahermosa", mapsUrl: "https://maps.google.com/?q=La+Casona+Villahermosa" },
    servicioDomicilio: true,
    menu: {
      platillos: Array.from({ length: 35 }, (_, i) => `Platillo ${i+1}`),
      bebidas: Array.from({ length: 15 }, (_, i) => `Bebida ${i+1}`),
      postres: Array.from({ length: 8 }, (_, i) => `Postre ${i+1}`),
    }
  },
  { id: 2, nombre: "Bar Malecón", categorias: ["bar"], zona: "Malecón", rating: 4.2, priceRange: "$$", fairPrice: 0.78,
    ubicacion: { direccion: "Malecón Carlos A. Madrazo s/n", mapsUrl: "https://maps.google.com/?q=Bar+Malec%C3%B3n+Villahermosa" },
    servicioDomicilio: false,
  },
  { id: 3, nombre: "Café Tabasco", categorias: ["cafetería"], zona: "Tabasco 2000", rating: 4.6, priceRange: "$", fairPrice: 0.88,
    ubicacion: { direccion: "Paseo Tabasco 2000", mapsUrl: "https://maps.google.com/?q=Caf%C3%A9+Tabasco+Villahermosa" },
    servicioDomicilio: true,
    menu: {
      platillos: Array.from({ length: 35 }, (_, i) => `Sándwich ${i+1}`),
      bebidas: Array.from({ length: 15 }, (_, i) => `Café/Bebida ${i+1}`),
      postres: Array.from({ length: 8 }, (_, i) => `Rebanada ${i+1}`),
    }
  },
  { id: 4, nombre: "Lonchería Lupita", categorias: ["lonchería"], zona: "Tierra Colorada", rating: 4.0, priceRange: "$", fairPrice: 0.86,
    ubicacion: { direccion: "Calle 5 de Mayo 45", mapsUrl: "https://maps.google.com/?q=Loncher%C3%ADa+Lupita+Villahermosa" },
    servicioDomicilio: true,
    menu: {
      platillos: Array.from({ length: 35 }, (_, i) => `Torta ${i+1}`),
      bebidas: Array.from({ length: 15 }, (_, i) => `Agua ${i+1}`),
      postres: Array.from({ length: 8 }, (_, i) => `Postre casero ${i+1}`),
    }
  },
  { id: 5, nombre: "Tortas El Güero", categorias: ["tortería"], zona: "Centro", rating: 4.1, priceRange: "$", fairPrice: 0.83,
    ubicacion: { direccion: "Av. Méndez 200", mapsUrl: "https://maps.google.com/?q=Tortas+El+G%C3%BCero+Villahermosa" },
    servicioDomicilio: false,
  },
  { id: 6, nombre: "Taquería La Estrella", categorias: ["taquería"], zona: "Gaviotas", rating: 4.4, priceRange: "$", fairPrice: 0.9,
    ubicacion: { direccion: "Calle Estrella 12", mapsUrl: "https://maps.google.com/?q=Taquer%C3%ADa+La+Estrella+Villahermosa" },
    servicioDomicilio: true,
    menu: {
      platillos: Array.from({ length: 35 }, (_, i) => `Taco ${i+1}`),
      bebidas: Array.from({ length: 15 }, (_, i) => `Refresco ${i+1}`),
      postres: Array.from({ length: 8 }, (_, i) => `Dulce ${i+1}`),
    }
  },
  { id: 7, nombre: "Bar Nocturno", categorias: ["bar"], zona: "Tabasco 2000", rating: 4.0, priceRange: "$$", fairPrice: 0.74,
    ubicacion: { direccion: "Zona Tabasco 2000", mapsUrl: "https://maps.google.com/?q=Bar+Nocturno+Villahermosa" },
    servicioDomicilio: false,
  },
  { id: 8, nombre: "Restaurante Los Portales", categorias: ["restaurante"], zona: "Centro", rating: 4.3, priceRange: "$$$", fairPrice: 0.7,
    ubicacion: { direccion: "Portales 10, Centro", mapsUrl: "https://maps.google.com/?q=Restaurante+Los+Portales+Villahermosa" },
    servicioDomicilio: true,
    menu: {
      platillos: Array.from({ length: 35 }, (_, i) => `Especialidad ${i+1}`),
      bebidas: Array.from({ length: 15 }, (_, i) => `Bebida ${i+1}`),
      postres: Array.from({ length: 8 }, (_, i) => `Postre ${i+1}`),
    }
  },
  // Combinados
  { id: 9, nombre: "El Ocaso", categorias: ["restaurante", "bar"], zona: "Centro", rating: 4.5, priceRange: "$$$", fairPrice: 0.85,
    ubicacion: { direccion: "Zona Centro", mapsUrl: "https://maps.google.com/?q=El+Ocaso+Villahermosa" },
    servicioDomicilio: true,
    menu: {
      platillos: Array.from({ length: 35 }, (_, i) => `Platillo de autor ${i+1}`),
      bebidas: Array.from({ length: 15 }, (_, i) => `Cóctel ${i+1}`),
      postres: Array.from({ length: 8 }, (_, i) => `Postre ${i+1}`),
    }
  },
  { id: 10, nombre: "Terraza Club", categorias: ["terraza", "club", "bar"], zona: "Tabasco 2000", rating: 4.4, priceRange: "$$$", fairPrice: 0.81,
    ubicacion: { direccion: "Tabasco 2000", mapsUrl: "https://maps.google.com/?q=Terraza+Club+Villahermosa" },
    servicioDomicilio: false,
  },
  { id: 11, nombre: "La Marina Fresca", categorias: ["marisquería", "restaurante"], zona: "Miguel Hidalgo", rating: 4.3, priceRange: "$$$", fairPrice: 0.77,
    ubicacion: { direccion: "Col. Miguel Hidalgo", mapsUrl: "https://maps.google.com/?q=La+Marina+Fresca+Villahermosa" },
    servicioDomicilio: true,
    menu: {
      platillos: Array.from({ length: 35 }, (_, i) => `Marisco ${i+1}`),
      bebidas: Array.from({ length: 15 }, (_, i) => `Bebida ${i+1}`),
      postres: Array.from({ length: 8 }, (_, i) => `Postre ${i+1}`),
    }
  },
  { id: 12, nombre: "Pizzería Nápoles", categorias: ["pizzería", "restaurante"], zona: "Parque La Choca", rating: 4.2, priceRange: "$$", fairPrice: 0.84,
    ubicacion: { direccion: "Frente a Parque La Choca", mapsUrl: "https://maps.google.com/?q=Pizzer%C3%ADa+N%C3%A1poles+Villahermosa" },
    servicioDomicilio: true,
    menu: {
      platillos: Array.from({ length: 35 }, (_, i) => `Pizza ${i+1}`),
      bebidas: Array.from({ length: 15 }, (_, i) => `Refresco ${i+1}`),
      postres: Array.from({ length: 8 }, (_, i) => `Postre ${i+1}`),
    }
  },
  { id: 13, nombre: "El Pub Inglés", categorias: ["pub", "bar"], zona: "Centro", rating: 4.1, priceRange: "$$", fairPrice: 0.79,
    ubicacion: { direccion: "Centro Histórico", mapsUrl: "https://maps.google.com/?q=El+Pub+Ingl%C3%A9s+Villahermosa" },
    servicioDomicilio: false,
  },
  { id: 14, nombre: "Cantina La Tradición", categorias: ["cantina"], zona: "Centro", rating: 4.0, priceRange: "$$", fairPrice: 0.76,
    ubicacion: { direccion: "Centro", mapsUrl: "https://maps.google.com/?q=Cantina+La+Tradici%C3%B3n+Villahermosa" },
    servicioDomicilio: false,
  },
  { id: 15, nombre: "Sports & Wings", categorias: ["sports bar", "bar"], zona: "Tabasco 2000", rating: 4.2, priceRange: "$$", fairPrice: 0.8,
    ubicacion: { direccion: "Plaza Comercial Tabasco 2000", mapsUrl: "https://maps.google.com/?q=Sports+%26+Wings+Villahermosa" },
    servicioDomicilio: true,
    menu: {
      platillos: Array.from({ length: 35 }, (_, i) => `Alitas ${i+1}`),
      bebidas: Array.from({ length: 15 }, (_, i) => `Cerveza ${i+1}`),
      postres: Array.from({ length: 8 }, (_, i) => `Postre ${i+1}`),
    }
  },
  { id: 16, nombre: "Cervecería del Río", categorias: ["cervecería", "bar"], zona: "Malecón", rating: 4.3, priceRange: "$$", fairPrice: 0.83,
    ubicacion: { direccion: "Malecón", mapsUrl: "https://maps.google.com/?q=Cervecer%C3%ADa+del+R%C3%ADo+Villahermosa" },
    servicioDomicilio: false,
  },
  { id: 17, nombre: "Antojitos Doña Mary", categorias: ["antojitos", "lonchería"], zona: "Tierra Colorada", rating: 4.4, priceRange: "$", fairPrice: 0.9,
    ubicacion: { direccion: "Tierra Colorada", mapsUrl: "https://maps.google.com/?q=Antojitos+Do%C3%B1a+Mary+Villahermosa" },
    servicioDomicilio: true,
    menu: {
      platillos: Array.from({ length: 35 }, (_, i) => `Antojito ${i+1}`),
      bebidas: Array.from({ length: 15 }, (_, i) => `Agua fresca ${i+1}`),
      postres: Array.from({ length: 8 }, (_, i) => `Dulce ${i+1}`),
    }
  },
  // Casinos
  { id: 18, nombre: "Casino Tabasco", categorias: ["casino"], zona: "Tabasco 2000", rating: 4.3, priceRange: "$$", fairPrice: 0.8,
    ubicacion: { direccion: "Blvd. Adolfo Ruiz Cortines 1000, Tabasco 2000", mapsUrl: "https://maps.google.com/?q=Casino+Tabasco+Villahermosa" },
    servicioDomicilio: false,
  },
  { id: 19, nombre: "Gran Casino Malecón", categorias: ["casino", "bar"], zona: "Malecón", rating: 4.2, priceRange: "$$", fairPrice: 0.78,
    ubicacion: { direccion: "Malecón Carlos A. Madrazo 50", mapsUrl: "https://maps.google.com/?q=Gran+Casino+Malec%C3%B3n+Villahermosa" },
    servicioDomicilio: false,
  },
  { id: 20, nombre: "Casino La Estrella", categorias: ["casino"], zona: "Centro", rating: 4.1, priceRange: "$$", fairPrice: 0.79,
    ubicacion: { direccion: "Av. Juárez 250, Centro", mapsUrl: "https://maps.google.com/?q=Casino+La+Estrella+Villahermosa" },
    servicioDomicilio: false,
  },
];

// Catálogo ampliado
const CATEGORIAS = [
  "restaurante",
  "bar",
  "cafetería",
  "lonchería",
  "tortería",
  "taquería",
  "terraza",
  "club",
  "pub",
  "cantina",
  "sports bar",
  "cervecería",
  "marisquería",
  "pizzería",
  "antojitos",
  "casino",
];

// Utilidad: normalizar texto para búsquedas (quita acentos, minúsculas)
function norm(s) {
  return (s || "")
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function priceWeight(r) {
  return r === "$" ? 1 : r === "$$" ? 2 : r === "$$$" ? 3 : 0;
}

function initExplorar() {
  const select = document.getElementById("category-filter");
  const search = document.getElementById("search-input");
  const list = document.getElementById("places-list");
  const price = document.getElementById("price-filter");
  const fair = document.getElementById("fair-filter");
  const fairValue = document.getElementById("fair-value");
  const sort = document.getElementById("sort-filter");

  // Modal refs
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  const modalClose = document.getElementById("modal-close");

  if (!select || !search || !list) return;

  // Poblar categorías (orden alfabético)
  const cats = [...CATEGORIAS].sort((a, b) => a.localeCompare(b));
  for (const cat of cats) {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    select.appendChild(opt);
  }

  function filtrar() {
    const cat = select.value;
    const q = norm(search.value);
    const priceVal = price ? price.value : "todas";
    const fairMin = fair ? Number(fair.value || 0) / 100 : 0;
    const sortVal = sort ? sort.value : "rating_desc";

    let datos = lugares.filter((l) => {
      const coincideCat = cat === "todas" || (Array.isArray(l.categorias) && l.categorias.includes(cat));
      const coincideTexto = !q || norm(l.nombre).includes(q) || norm(l.zona).includes(q);
      const coincidePrecio = priceVal === "todas" || l.priceRange === priceVal;
      const coincideFair = (l.fairPrice ?? 0) >= fairMin;
      return coincideCat && coincideTexto && coincidePrecio && coincideFair;
    });

    // Ordenamiento
    datos = [...datos].sort((a, b) => {
      switch (sortVal) {
        case "rating_asc":
          return a.rating - b.rating;
        case "price_asc":
          return priceWeight(a.priceRange) - priceWeight(b.priceRange);
        case "price_desc":
          return priceWeight(b.priceRange) - priceWeight(a.priceRange);
        case "name_asc":
          return a.nombre.localeCompare(b.nombre, "es", { sensitivity: "base" });
        case "rating_desc":
        default:
          return b.rating - a.rating;
      }
    });

    render(datos);
  }

  function badgeHTML(cat) {
    return `<span class="badge cat">${cat}</span>`;
  }

  function priceBadgeHTML(rango) {
    if (!rango) return "";
    return `<span class="badge price" title="Rango de precio">${rango}</span>`;
  }

  function fairPriceBarHTML(frac) {
    const pct = Math.round((frac || 0) * 100);
    return `
      <div class="fairprice" aria-label="${pct}% opinan precio justo" title="${pct}% opinan precio justo">
        <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}">
          <div class="bar" style="width:${pct}%"></div>
        </div>
        <span class="label">${pct}% precio justo</span>
      </div>`;
  }

  function menuSectionHTML(titulo, items, idBase, limite = 8) {
    if (!items || !items.length) return "";
    const count = items.length;
    const visible = items.slice(0, limite);
    const hidden = items.slice(limite);
    const listItems = visible.map((it) => `<li>${it}</li>`).join("");
    const hiddenItems = hidden.map((it) => `<li class="hidden">${it}</li>`).join("");
    const hasMore = hidden.length > 0;
    return `
      <div class="menu-section" id="${idBase}">
        <div class="menu-header">
          <h4>${titulo} <span class="count">(${count})</span></h4>
          ${hasMore ? `<button class="btn-link" data-toggle="#${idBase}">Ver más</button>` : ""}
        </div>
        <ul class="menu-list">${listItems}${hiddenItems}</ul>
      </div>`;
  }

  function buildCardHTML(l) {
    const badges = (l.categorias || []).map(badgeHTML).join(" ");
    const price = priceBadgeHTML(l.priceRange);
    const fairBar = fairPriceBarHTML(l.fairPrice);
    return `
      <div class="card-body">
        <h3 class="title">${l.nombre}</h3>
        <div class="meta">
          <span class="cats">${badges}</span>
          <span class="sep">•</span>
          <span class="zone">${l.zona}</span>
          <span class="sep">•</span>
          <span class="rating">⭐ ${(l.rating ?? 0).toFixed(1)}</span>
          <span class="sep">•</span>
          ${price}
        </div>
        ${fairBar}
      </div>`;
  }

  function render(items) {
    list.innerHTML = "";
    if (!items.length) {
      list.innerHTML = '<div class="empty">No hay resultados.</div>';
      return;
    }
    for (const l of items) {
      const card = document.createElement("article");
      card.className = "card clickable";
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.dataset.id = String(l.id);
      card.innerHTML = buildCardHTML(l);
      card.addEventListener("click", () => openModal(l));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(l); }
      });
      list.appendChild(card);
    }
  }

  function openModal(lugar) {
    if (!modal || !modalContent) return;

    // Ubicación
    const direccion = lugar.ubicacion?.direccion || "Ubicación no disponible";
    const mapsUrl = lugar.ubicacion?.mapsUrl || `https://maps.google.com/?q=${encodeURIComponent(lugar.nombre + " Villahermosa")}`;
    const linkMaps = `<a href="${mapsUrl}" target="_blank" rel="noopener" class="btn-link">Ver en Mapas</a>`;

    // Menú (si hay servicio a domicilio)
    const tieneMenu = !!(lugar.servicioDomicilio && lugar.menu);
    const seccionMenu = tieneMenu ? `
      <div class="modal-section">
        <h3>Menú a domicilio</h3>
        ${menuSectionHTML("Platillos", lugar.menu.platillos, "menu-platillos")}
        ${menuSectionHTML("Bebidas", lugar.menu.bebidas, "menu-bebidas")}
        ${menuSectionHTML("Postres", lugar.menu.postres, "menu-postres")}
      </div>` :
      `<div class="modal-section"><p>Sin servicio a domicilio.</p></div>`;

    // Acciones: Cómo llegar (directions) y Pedir a domicilio (WhatsApp)
    const destination = encodeURIComponent(lugar.ubicacion?.direccion || `${lugar.nombre} Villahermosa`);
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    const mensaje = `Hola, quiero pedir a domicilio en ${lugar.nombre}. ¿Me pueden compartir el menú y tiempos de entrega?`;
    // Si en el futuro agregamos lugar.whatsapp = "529991112233" se usará wa.me/numero, si no, solo texto
    const waBase = lugar.whatsapp ? `https://wa.me/${lugar.whatsapp}` : `https://wa.me/`;
    const waUrl = `${waBase}?text=${encodeURIComponent(mensaje)}`;
    const acciones = `
      <div class="actions">
        <a class="btn btn-secondary" href="${directionsUrl}" target="_blank" rel="noopener">Cómo llegar</a>
        ${lugar.servicioDomicilio ? `<a class="btn btn-primary" href="${waUrl}" target="_blank" rel="noopener">Pedir a domicilio</a>` : ""}
      </div>`;

    modalContent.innerHTML = `
      <h3 id="modal-title">${lugar.nombre}</h3>
      <div class="meta">
        ${(lugar.categorias || []).map(badgeHTML).join(" ")}
        <span class="sep">•</span>
        <span class="zone">${lugar.zona}</span>
        <span class="sep">•</span>
        <span class="rating">⭐ ${(lugar.rating ?? 0).toFixed(1)}</span>
        <span class="sep">•</span>
        ${priceBadgeHTML(lugar.priceRange)}
      </div>
      ${fairPriceBarHTML(lugar.fairPrice)}

      <div class="modal-section">
        <h3>Ubicación</h3>
        <p>${direccion} · ${linkMaps}</p>
      </div>

      ${seccionMenu}

      ${acciones}
    `;

    // Toggle ver más/menos
    modalContent.querySelectorAll('[data-toggle]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const sel = btn.getAttribute('data-toggle');
        const cont = sel ? modalContent.querySelector(sel) : null;
        if (!cont) return;
        const hidden = cont.querySelectorAll('li.hidden');
        const isCollapsed = hidden.length > 0 && hidden[0].style.display === 'none';
        hidden.forEach(li => li.style.display = isCollapsed ? 'list-item' : 'none');
        btn.textContent = isCollapsed ? 'Ver menos' : 'Ver más';
      });
      // Estado inicial: colapsado
      const sel = btn.getAttribute('data-toggle');
      const cont = sel ? modalContent.querySelector(sel) : null;
      if (cont) cont.querySelectorAll('li.hidden').forEach(li => li.style.display = 'none');
      btn.textContent = 'Ver más';
    });
    modal.classList.add("open");
    document.body.classList.add("modal-open");
    modal.setAttribute("aria-hidden", "false");
  }
  // Exponer global para uso fuera del closure
  window._openLugarModal = openModal;

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("open");
    document.body.classList.remove("modal-open");
    modal.setAttribute("aria-hidden", "true");
  }
  
  // Listeners
  select.addEventListener("change", filtrar);
  search.addEventListener("input", filtrar);
  if (price) price.addEventListener("change", filtrar);
  if (fair) fair.addEventListener("input", () => {
    if (fairValue) fairValue.textContent = `${fair.value}%`;
    filtrar();
  });
  if (sort) sort.addEventListener("change", filtrar);

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      const target = e.target;
      if (target && target.getAttribute && target.getAttribute("data-close") === "true") {
        closeModal();
      }
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // Render inicial
  filtrar();
  renderFeatured();
}

// Utilidades de selección para secciones destacadas
function topBy(array, scorer, limit) {
  return [...array]
    .sort((a, b) => scorer(b) - scorer(a))
    .slice(0, limit);
}

function scoreSabor(l) {
  // Proxy de "sabor" por rating + bonus a giros de comida
  const foodCats = ["restaurante", "marisquería", "pizzería", "antojitos", "taquería", "lonchería", "cafetería"];
  const hasFood = (l.categorias || []).some(c => foodCats.includes(c));
  return (l.rating || 0) * 10 + (hasFood ? 5 : 0);
}

function scorePrecio(l) {
  // Precio percibido: mayor fairPrice y menor precio nominal
  const fair = (l.fairPrice || 0) * 100;
  const pricePenalty = priceWeight(l.priceRange || "") * 8; // $ mejor que $$$
  return fair - pricePenalty;
}

function scoreAmbiente(l) {
  // Ambientes: bar/terraza/club/pub/cantina/sports bar + rating
  const ambientCats = ["bar", "terraza", "club", "pub", "cantina", "sports bar", "cervecería"];
  const hasAmbient = (l.categorias || []).some(c => ambientCats.includes(c));
  return (l.rating || 0) * 10 + (hasAmbient ? 6 : 0);
}

function scoreServicio(l) {
  // Servicio: rating + bonus por servicio a domicilio
  const deliveryBonus = l.servicioDomicilio ? 5 : 0;
  return (l.rating || 0) * 10 + deliveryBonus;
}

function scoreCalidad(l) {
  // Calidad ~ rating + percepción de precio justo
  return (l.rating || 0) * 10 + (l.fairPrice || 0) * 10;
}

function renderFeatured() {
  const ulDestacados = document.getElementById("featured-destacados");
  const ulMes = document.getElementById("featured-mes");
  const ulSabor = document.getElementById("featured-sabor");
  const ulPrecio = document.getElementById("featured-precio");
  const ulAmbiente = document.getElementById("featured-ambiente");
  const ulServicio = document.getElementById("featured-servicio");
  const ulCalidad = document.getElementById("featured-calidad");

  function mount(ul, items) {
    if (!ul) return;
    ul.innerHTML = items.map(l => `
      <li data-id="${l.id}">
        <article class="card small">
          <div class="card-body">
            <h3 class="title">${l.nombre}</h3>
            <div class="meta">
              <span class="zone">${l.zona || ''}</span>
              <span class="sep">•</span>
              <span class="rating">⭐ ${(l.rating ?? 0).toFixed(1)}</span>
            </div>
          </div>
        </article>
      </li>`).join("");
    ul.querySelectorAll("li").forEach(li => {
      li.style.cursor = "pointer";
      li.addEventListener("click", () => {
        const id = Number(li.getAttribute("data-id"));
        const lugar = lugares.find(x => x.id === id);
        if (lugar) window._openLugarModal && window._openLugarModal(lugar);
      });
    });
  }

  // Destacados generales: top rating
  mount(ulDestacados, topBy(lugares, l => l.rating || 0, 6));
  // Del mes: top por fairPrice (mejor percepción de valor)
  mount(ulMes, topBy(lugares, l => (l.fairPrice || 0), 4));
  // Sabor
  mount(ulSabor, topBy(lugares, scoreSabor, 6));
  // Precio
  mount(ulPrecio, topBy(lugares, scorePrecio, 6));
  // Ambiente
  mount(ulAmbiente, topBy(lugares, scoreAmbiente, 6));
  // Servicio
  mount(ulServicio, topBy(lugares, scoreServicio, 6));
  // Calidad
  mount(ulCalidad, topBy(lugares, scoreCalidad, 6));
}

// Inicializar cuando el DOM esté listo
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initExplorar);
} else {
  initExplorar();
}

// Toggle de navegación móvil
(function () {
  function initNavToggle() {
    const btn = document.getElementById('nav-toggle');
    const nav = document.getElementById('primary-nav');
    if (!btn || !nav) return;
    btn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavToggle);
  } else {
    initNavToggle();
  }
})();