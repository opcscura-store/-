/* ===========================================================
   Wasted — Test page logic
   - 4 case products, 4 frame products
   - Renders into the Frames section and the Cases section
   - Cart (localStorage), checkout, Telegram bot notification
   =========================================================== */

(() => {
  "use strict";

  const CART_KEY = "opscura_cart_v1";
  const CUSTOMERS_KEY = "opscura_customers_v1";
  const OFFERS_KEY = "opscura_offers_sent_v1";
  const SIZE_OPTIONS = [
    { id: "20x30", label: "20 × 30 cm", price: 260 },
    { id: "30x40", label: "30 × 40 cm", price: 340 },
    { id: "40x50", label: "40 × 50 cm", price: 480 }
  ];

  function getSizeOption(sizeId) {
    return SIZE_OPTIONS.find((option) => option.id === sizeId) || SIZE_OPTIONS[0];
  }

  const CATALOG = {
    sports: [
      { id: "sp1", title: "CR7 Legacy", art: "sport.jpg" },
      { id: "sp2", title: "Messi Moment", art: "sport6.jpg" },
      { id: "sp3", title: "Salah Energy", art: "sport4.jpg" },
      { id: "sp4", title: "Champion Spirit", art: "sport13.jpg" }
    ],
    cars: [
      { id: "car1", title: "Porsche 911", art: "car4.jpg" },
      { id: "car2", title: "Ferrari Icons", art: "car5.jpg" },
      { id: "car3", title: "GT3 RS", art: "car3.jpg" },
      { id: "car4", title: "Mustang Fire", art: "car2.jpg" }
    ],
    gaming: [
      { id: "gm1", title: "Arcade Legends", art: "game1.jpg" },
      { id: "gm2", title: "Neon Pulse", art: "game2.jpg" },
      { id: "gm3", title: "Console Glow", art: "game3.jpg" },
      { id: "gm4", title: "Game Night", art: "game4.jpg" }
    ],
    rap: [
      { id: "rap1", title: "Rap Energy", art: "rap1.jpg" }
    ]
  };
})();

      (() => {
        "use strict";

        const CART_KEY = "opscura_cart_v1";
        const DISCOUNT_RATE = Number(window.OPSCURA_CONFIG?.promoRate ?? 0.3);
        const SIZE_OPTIONS = [
          { id: "20x30", label: "20 × 30 cm", price: 340 },
          { id: "30x40", label: "30 × 40 cm", price: 260 },
          { id: "40x50", label: "40 × 50 cm", price: 480 }
        ];

        const CATALOG = {
          sports: [
            { id: "sp1", title: "CR7 Legacy", art: "sport.jpg" },
            { id: "sp2", title: "Gallery Heat", art: "sport1.jpg" },
            { id: "sp3", title: "Messi Moment", art: "sport6.jpg" },
            { id: "sp4", title: "Salah Energy", art: "sport4.jpg" },
            { id: "sp5", title: "Champion Spirit", art: "sport13.jpg" },
            { id: "sp6", title: "Stadium Night", art: "sport10.jpg" },
            { id: "sp7", title: "Matchday Aura", art: "sport21.jpg" },
            { id: "sp8", title: "Victory Frame", art: "sport27.jpg" }
          ],
          cars: [
            { id: "car1", title: "Turbo Night", art: "car1.jpg" },
            { id: "car2", title: "Porsche 911", art: "car4.jpg" },
            { id: "car3", title: "Ferrari Icons", art: "car5.jpg" },
            { id: "car4", title: "GT3 RS", art: "car3.jpg" },
            { id: "car5", title: "Mustang Fire", art: "car2.jpg" },
            { id: "car6", title: "Speedline", art: "car7.jpg" },
            { id: "car7", title: "Track Spec", art: "car9.jpg" },
            { id: "car8", title: "Midnight Engine", art: "car12.jpg" }
          ],
          gaming: [
            { id: "gm1", title: "Arcade Legends", art: "game1.jpg" },
            { id: "gm2", title: "Neon Pulse", art: "game2.jpg" },
            { id: "gm3", title: "Console Glow", art: "game3.jpg" },
            { id: "gm4", title: "Game Night", art: "game4.jpg" },
            { id: "gm5", title: "Boss Fight", art: "game5.jpg" },
            { id: "gm6", title: "Level Up", art: "game6.jpg" },
            { id: "gm7", title: "Shadow Raid", art: "game7.jpg" },
            { id: "gm8", title: "Final Round", art: "game 8.jpg" }
          ],
          rap: [
            { id: "rap1", title: "Rap Energy", art: "rap1.jpg" },
            { id: "rap2", title: "Street Pulse", art: "rap2.jpg" },
            { id: "rap3", title: "Golden Bars", art: "rap3.jpg" },
            { id: "rap4", title: "Bassline Mood", art: "rap4.jpg" },
            { id: "rap5", title: "Night Verse", art: "rap5.jpg" },
            { id: "rap6", title: "Dark Flow", art: "rap6.jpg" },
            { id: "rap7", title: "Mic Smoke", art: "rap7.jpg" },
            { id: "rap8", title: "Backstage Gold", art: "rap8.jpg" }
          ],
          quotes: [
            { id: "q1", title: "Stay Focused", art: "quotes1.jpg" },
            { id: "q2", title: "Mindset Frame", art: "quotes2.jpg" },
            { id: "q3", title: "Rise Again", art: "quotes3.jpg" },
            { id: "q4", title: "Daily Power", art: "quotes4.jpg" }
          ],
          movies: [
            { id: "mv1", title: "Cinematic Night", art: "mov1.jpg" },
            { id: "mv2", title: "Iconic Scene", art: "mov2.jpg" },
            { id: "mv3", title: "Series Mood", art: "mov3.jpg" },
            { id: "mv4", title: "Golden Frame", art: "mov4.jpg" },
            { id: "mv5", title: "Director Cut", art: "mov5.jpg" },
            { id: "mv6", title: "Night Credits", art: "mov6.jpg" },
            { id: "mv7", title: "Scene Shift", art: "mov8.jpg" },
            { id: "mv8", title: "Silver Screen", art: "mov10.jpg" }
          ],
          gym: [
            { id: "gym1", title: "Iron Focus", art: "gym1.jpg" },
            { id: "gym2", title: "No Excuses", art: "gym2.jpg" },
            { id: "gym3", title: "Strength Daily", art: "gym3.jpg" },
            { id: "gym4", title: "Train Hard", art: "gym4.jpg" },
            { id: "gym5", title: "Lift Mode", art: "gym5.jpg" },
            { id: "gym6", title: "Power Reps", art: "gym6.jpg" },
            { id: "gym7", title: "Muscle Signal", art: "gym7.jpg" }
          ],
          custom: [
            { id: "custom1", title: "Upload image", art: "upload.jpg" }
          ]
        };

        const state = { cart: loadCart() };
        let toastTimer = null;

        const $ = (sel, parent = document) => parent.querySelector(sel);
        const $$ = (sel, parent = document) => Array.from(parent.querySelectorAll(sel));
        const fmt = (value) => `${Math.round(value)} EGP`;
        const uid = () => Math.random().toString(36).slice(2, 10);
        const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (m) => ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        }[m]));

        function getSizeOption(sizeId) {
          return SIZE_OPTIONS.find((option) => option.id === sizeId) || SIZE_OPTIONS[0];
        }

        function getImageLabel(art, fallback) {
          if (!art) return fallback;
          if (art.startsWith("data:image")) return `Custom upload - ${fallback}`;
          return art.split("/").pop() || fallback;
        }

        function loadCart() {
          try {
            return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
          } catch {
            return [];
          }
        }

        function saveCart() {
          localStorage.setItem(CART_KEY, JSON.stringify(state.cart));
          renderCart();
        }

        function getCartSubtotal() {
          return state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
        }

        function getDiscountValue(subtotal) {
          return Math.round(subtotal * DISCOUNT_RATE);
        }

        function getDiscountedSubtotal(subtotal) {
          return Math.max(0, subtotal - getDiscountValue(subtotal));
        }

        function getSelectedCustomState() {
          const customSize = document.getElementById("customSize");
          const customFinish = document.getElementById("customFinish");
          const customDescription = document.getElementById("customDescription");
          const customizerPreview = document.getElementById("customizerPreview");
          const size = customSize?.value || "30x40";
          const finish = customFinish?.value || "Matte walnut";
          const description = customDescription?.value?.trim() || "Uploaded artwork";
          const preview = customizerPreview?.src || "upload.jpg";
          return { size, finish, description, preview, selectedSize: getSizeOption(size) };
        }

        function renderProducts() {
          renderSection("sportsGrid", CATALOG.sports);
          renderSection("carsGrid", CATALOG.cars);
          renderSection("gamingGrid", CATALOG.gaming);
          renderSection("rapGrid", CATALOG.rap);
          renderSection("quotesGrid", CATALOG.quotes);
          renderSection("moviesGrid", CATALOG.movies);
          renderSection("gymGrid", CATALOG.gym);
          renderSection("customGrid", CATALOG.custom);
        }

        function renderSection(rootId, items) {
          const root = document.getElementById(rootId);
          if (!root) return;
          root.innerHTML = items.map((item) => productCardHTML(item)).join("");
          bindProductEvents(root);
        }

        function productCardHTML(item) {
          const optionsHTML = SIZE_OPTIONS.map((opt, index) => `<option value="${opt.id}" data-price="${opt.price}" ${index === 0 ? "selected" : ""}>${opt.label} · ${opt.price} EGP</option>`).join("");
          const helperText = item.id === "custom1"
            ? "Upload your image above, then add this custom frame like any other product."
            : "Premium framed print ready for your wall.";
          return `
            <article class="product" data-id="${item.id}">
              <div class="product__art">
                <img src="${item.art}" alt="${escapeHTML(item.title)}" />
              </div>
              <div class="product__body">
                <h3 class="product__title">${escapeHTML(item.title)}</h3>
                <div class="product__subcopy">${escapeHTML(helperText)}</div>
                <div class="product__opts">
                  <label>
                    <span>Size</span>
                    <select class="opt-select">${optionsHTML}</select>
                  </label>
                </div>
                <div class="product__price"><span class="price">${fmt(SIZE_OPTIONS[0].price)}</span></div>
                <button class="btn btn--solid product__add" type="button">Add to cart</button>
              </div>
            </article>
          `;
        }

        function bindProductEvents(root) {
          $$(".product", root).forEach((card) => {
            const select = $(".opt-select", card);
            const priceEl = $(".price", card);
            const addBtn = $(".product__add", card);

            select?.addEventListener("change", () => {
              const option = select.selectedOptions[0];
              priceEl.textContent = fmt(Number(option.dataset.price));
            });

            addBtn?.addEventListener("click", () => {
              const option = select?.selectedOptions[0];
              const product = findCatalogItem(card.dataset.id);
              if (!product || !option) return;

              if (product.id === "custom1") {
                const customState = getSelectedCustomState();
                state.cart.push({
                  uid: uid(),
                  type: "custom",
                  title: `Custom frame · ${customState.description}`,
                  option: `${customState.selectedSize.label} • ${customState.finish}`,
                  price: customState.selectedSize.price,
                  qty: 1,
                  art: customState.preview,
                  imageLabel: getImageLabel(customState.preview, customState.description),
                  imageType: customState.preview.startsWith("data:image") ? "custom-upload" : "catalog"
                });
                saveCart();
                toast("Custom frame added to cart");
                return;
              }

              const selectedSize = getSizeOption(option.value);
              state.cart.push({
                uid: uid(),
                type: "print",
                title: product.title,
                option: `${selectedSize.label} · Framed`,
                price: selectedSize.price,
                qty: 1,
                art: product.art,
                imageLabel: getImageLabel(product.art, product.title),
                imageType: "catalog"
              });
              saveCart();
              toast(`Added to cart · ${product.title}`);
            });
          });
        }

        function findCatalogItem(id) {
          return Object.values(CATALOG).flat().find((item) => item.id === id);
        }

        function renderCart() {
          const count = state.cart.reduce((sum, item) => sum + item.qty, 0);
          const countEl = document.getElementById("cartCount");
          if (countEl) countEl.textContent = count;

          const itemsRoot = document.getElementById("drawerItems");
          if (!itemsRoot) return;

          if (state.cart.length === 0) {
            itemsRoot.innerHTML = '<div class="empty"><strong>Your cart is empty</strong>Pick a print or upload your own image to get started.</div>';
            document.getElementById("cartbar").hidden = true;
          } else {
            itemsRoot.innerHTML = state.cart.map(cartItemHTML).join("");
            document.getElementById("cartbar").hidden = false;
            bindCartItemEvents();
          }

          const subtotal = getCartSubtotal();
          const discount = getDiscountValue(subtotal);
          const total = getDiscountedSubtotal(subtotal);
          const subtotalEl = document.getElementById("drawerSubtotal");
          const discountEl = document.getElementById("drawerDiscount");
          const totalEl = document.getElementById("drawerTotal");
          if (subtotalEl) subtotalEl.textContent = fmt(subtotal);
          if (discountEl) discountEl.textContent = `- ${fmt(discount)}`;
          if (totalEl) totalEl.textContent = fmt(total);

          const cartbarMsg = document.getElementById("cartbarMsg");
          if (cartbarMsg) {
            cartbarMsg.textContent = total >= 600
              ? "30% discount applied and free shipping unlocked"
              : `30% discount applied. Add ${Math.max(0, 600 - total)} EGP more for free shipping`;
          }
        }

        function cartItemHTML(item) {
          const artMarkup = item.art
            ? `<div class="cart-item__artframe"><img src="${item.art}" alt="${escapeHTML(item.title)}" /></div>`
            : '<div class="cart-item__artframe">🖼</div>';
          return `
            <div class="cart-item" data-uid="${item.uid}">
              <div class="cart-item__art">${artMarkup}</div>
              <div class="cart-item__body">
                <div class="cart-item__title">${escapeHTML(item.title)}</div>
                <div class="cart-item__sub">${escapeHTML(item.option)}</div>
                <div class="cart-item__sub cart-item__sub--muted">${escapeHTML(item.imageLabel || item.title)}</div>
                <div class="cart-item__row">
                  <div class="qty">
                    <button type="button" data-act="dec">−</button>
                    <span>${item.qty}</span>
                    <button type="button" data-act="inc">+</button>
                  </div>
                  <strong>${fmt(item.price * item.qty)}</strong>
                </div>
                <button class="cart-item__remove" type="button" data-act="rm">Remove</button>
              </div>
            </div>
          `;
        }

        function bindCartItemEvents() {
          $$(".cart-item").forEach((node) => {
            const uidValue = node.dataset.uid;
            const item = state.cart.find((entry) => entry.uid === uidValue);
            if (!item) return;

            $("[data-act='inc']", node)?.addEventListener("click", () => {
              item.qty += 1;
              saveCart();
            });

            $("[data-act='dec']", node)?.addEventListener("click", () => {
              item.qty = Math.max(1, item.qty - 1);
              saveCart();
            });

            $("[data-act='rm']", node)?.addEventListener("click", () => {
              state.cart = state.cart.filter((entry) => entry.uid !== uidValue);
              saveCart();
            });
          });
        }

        function syncBodyLock() {
          const drawerOpen = document.getElementById("drawer")?.getAttribute("aria-hidden") === "false";
          const modalOpen = document.getElementById("checkoutModal")?.getAttribute("aria-hidden") === "false";
          document.body.style.overflow = drawerOpen || modalOpen ? "hidden" : "";
        }

        function openDrawer() {
          document.getElementById("drawer")?.setAttribute("aria-hidden", "false");
          syncBodyLock();
        }

        function closeDrawer() {
          document.getElementById("drawer")?.setAttribute("aria-hidden", "true");
          syncBodyLock();
        }

        function openModal(id) {
          closeDrawer();
          const modal = document.getElementById(id);
          modal?.setAttribute("aria-hidden", "false");
          syncBodyLock();
          setTimeout(() => {
            const firstInput = $("input, textarea, select", modal);
            firstInput?.focus();
          }, 50);
        }

        function closeModal(id) {
          document.getElementById(id)?.setAttribute("aria-hidden", "true");
          syncBodyLock();
        }

        function toast(message) {
          const toastEl = document.getElementById("toast");
          if (!toastEl) return;
          toastEl.textContent = message;
          toastEl.hidden = false;
          clearTimeout(toastTimer);
          toastTimer = setTimeout(() => {
            toastEl.hidden = true;
          }, 2600);
        }

        function renderCheckoutSummary(shippingCost = 0) {
          const summary = document.getElementById("checkoutSummary");
          if (!summary) return;

          const subtotal = getCartSubtotal();
          const discount = getDiscountValue(subtotal);
          const discountedSubtotal = getDiscountedSubtotal(subtotal);
          const total = discountedSubtotal + shippingCost;

          const rows = state.cart.map((item) => `
            <div class="checkout-summary__row">
              <span>${escapeHTML(item.title)} <small>× ${item.qty}</small><br /><small>${escapeHTML(item.imageLabel || item.title)}</small></span>
              <span>${fmt(item.price * item.qty)}</span>
            </div>
          `).join("");

          summary.innerHTML = `
            ${rows}
            <div class="checkout-summary__row">
              <span>Subtotal</span>
              <span>${fmt(subtotal)}</span>
            </div>
            <div class="checkout-summary__row checkout-summary__row--discount">
              <span>Discount 30%</span>
              <span>- ${fmt(discount)}</span>
            </div>
            <div class="checkout-summary__row">
              <span>After discount</span>
              <span>${fmt(discountedSubtotal)}</span>
            </div>
            <div class="checkout-summary__row">
              <span>Shipping</span>
              <span>${fmt(shippingCost)}</span>
            </div>
            <div class="checkout-summary__row checkout-summary__total">
              <span>Total</span>
              <span>${fmt(total)}</span>
            </div>
          `;
        }

        function openCheckout() {
          if (state.cart.length === 0) {
            toast("Your cart is empty");
            return;
          }
          renderCheckoutSummary(Number(document.getElementById("shipping-zone")?.value || 0));
          openModal("checkoutModal");
        }

        function updateShippingCost() {
          renderCheckoutSummary(Number(document.getElementById("shipping-zone")?.value || 0));
        }

        function handleCheckoutSubmit(event) {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const shippingCost = Number(document.getElementById("shipping-zone")?.value || 0);
          const subtotal = getCartSubtotal();
          const discount = getDiscountValue(subtotal);
          const discountedSubtotal = getDiscountedSubtotal(subtotal);

          const order = {
            id: `OP-${Date.now().toString().slice(-6)}`,
            customer: {
              name: (formData.get("name") || "").toString().trim(),
              phone: (formData.get("phone") || "").toString().trim(),
              email: (formData.get("email") || "").toString().trim(),
              address: (formData.get("address") || "").toString().trim(),
              notes: (formData.get("notes") || "").toString().trim()
            },
            items: state.cart.map((item) => ({
              title: item.title,
              option: item.option,
              qty: item.qty,
              price: item.price,
              subtotal: item.price * item.qty,
              imageLabel: item.imageLabel || item.title,
              imageType: item.imageType || "catalog",
              art: item.art || ""
            })),
            subtotal,
            discount,
            discountedSubtotal,
            shipping: shippingCost,
            total: discountedSubtotal + shippingCost,
            createdAt: new Date().toISOString()
          };

          if (!order.customer.name || !order.customer.phone || !order.customer.address) {
            toast("Please fill in name, phone, and address");
            return;
          }

          localStorage.setItem("opscura_last_order", JSON.stringify(order));
          Promise.allSettled([sendOrderToBackend(order)]).finally(() => finalizeOrder(order));
        }

        async function sendOrderToBackend(order) {
          const cfg = window.OPSCURA_CONFIG || {};
          const endpoint = cfg.backendEndpoint || "";
          const token = cfg.telegramBotToken || "";
          const chatId = cfg.telegramChatId || "";

          if (!endpoint && (!token || !chatId)) {
            console.info("No backend endpoint or Telegram credentials configured yet.");
            return;
          }

          if (endpoint) {
            await fetch(endpoint, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ order, config: { telegramBotToken: token, telegramChatId: chatId } })
            });
            return;
          }

          await sendTelegramMessage(token, chatId, buildTelegramText(order));
          for (const item of order.items) {
            await sendTelegramPhoto(token, chatId, item);
          }
        }

        async function sendTelegramMessage(token, chatId, text) {
          const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: chatId, text })
          });
          if (!response.ok) throw new Error("Telegram delivery failed");
        }

        async function sendTelegramPhoto(token, chatId, item) {
          if (!item.art) return;

          try {
            const photoResponse = await fetch(item.art);
            if (!photoResponse.ok) throw new Error("Photo load failed");
            const photoBlob = await photoResponse.blob();
            const formData = new FormData();
            formData.append("chat_id", chatId);
            formData.append("caption", `${item.title}\n${item.option}\n${item.imageLabel}`);
            formData.append("photo", photoBlob, item.imageLabel || "product.jpg");

            const response = await fetch(`https://api.telegram.org/bot${token}/sendPhoto`, {
              method: "POST",
              body: formData
            });

            if (!response.ok) {
              await sendTelegramMessage(token, chatId, `Image upload failed for ${item.title}, but the item is still included in the order.`);
            }
          } catch {
            await sendTelegramMessage(token, chatId, `Image preview unavailable for ${item.title}. Title and item details were still delivered.`);
          }
        }

        function buildTelegramText(order) {
          const lines = order.items.map((item) => `• ${item.title} (${item.option}) × ${item.qty} = ${item.subtotal} EGP\n  🖼 ${item.imageLabel}`).join("\n");
          return `🛒 NEW OPSCURA ORDER — ${order.id}\n──────────────\n👤 ${order.customer.name}\n📞 ${order.customer.phone}\n${order.customer.email ? `✉️ ${order.customer.email}\n` : ""}📍 ${order.customer.address}\n${order.customer.notes ? `📝 ${order.customer.notes}\n` : ""}──────────────\n${lines}\n──────────────\n💸 Subtotal: ${order.subtotal} EGP\n🏷 Discount: ${order.discount} EGP\n🚚 Shipping: ${order.shipping} EGP\n💰 TOTAL: ${order.total} EGP\n🕒 ${new Date(order.createdAt).toLocaleString("en-GB")}`;
        }

        function finalizeOrder(order) {
          state.cart = [];
          saveCart();
          closeModal("checkoutModal");
          closeDrawer();
          showSuccess(order);
        }

        function showSuccess(order) {
          toast(`Order ${order.id} confirmed. Telegram has been notified.`);
        }

        function bindEvents() {
          document.getElementById("navCart")?.addEventListener("click", openDrawer);
          document.getElementById("cartbarOpen")?.addEventListener("click", openDrawer);
          document.getElementById("drawerClose")?.addEventListener("click", closeDrawer);
          document.getElementById("drawerScrim")?.addEventListener("click", closeDrawer);
          document.getElementById("checkoutBtn")?.addEventListener("click", (event) => {
            event.preventDefault();
            openCheckout();
          });
          document.getElementById("checkoutClose")?.addEventListener("click", () => closeModal("checkoutModal"));
          document.getElementById("checkoutModal")?.addEventListener("click", (event) => {
            if (event.target.id === "checkoutModal" || event.target.id === "checkoutScrim") {
              closeModal("checkoutModal");
            }
          });
          document.querySelector("#checkoutModal .modal__panel")?.addEventListener("click", (event) => {
            event.stopPropagation();
          });
          document.getElementById("checkoutForm")?.addEventListener("submit", handleCheckoutSubmit);
          document.getElementById("shipping-zone")?.addEventListener("change", updateShippingCost);

          document.getElementById("navMenu")?.addEventListener("click", () => {
            document.getElementById("sideMenu")?.setAttribute("aria-hidden", "false");
          });
          document.getElementById("sideMenuClose")?.addEventListener("click", () => {
            document.getElementById("sideMenu")?.setAttribute("aria-hidden", "true");
          });
          document.getElementById("sideMenuBackdrop")?.addEventListener("click", () => {
            document.getElementById("sideMenu")?.setAttribute("aria-hidden", "true");
          });

          document.querySelectorAll(".collection-card, .side-menu__panel a").forEach((element) => {
            element.addEventListener("click", () => {
              const section = element.dataset.section;
              if (!section) return;
              const targetMap = {
                custom: "customizer",
                cars: "section-cars",
                gaming: "section-gaming",
                sports: "section-sports",
                rap: "section-rap",
                quotes: "section-quotes",
                movies: "section-movies",
                gym: "section-gym"
              };
              const targetId = targetMap[section] || "collections";
              document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
              document.getElementById("sideMenu")?.setAttribute("aria-hidden", "true");
            });
          });

          const customImageInput = document.getElementById("customImageInput");
          const customizerPreview = document.getElementById("customizerPreview");
          const customSize = document.getElementById("customSize");
          const customizerPrice = document.getElementById("customizerPrice");
          const addCustomBtn = document.getElementById("addCustomBtn");

          const syncCustomizerPrice = () => {
            const selectedSize = getSizeOption(customSize?.value || "30x40");
            if (customizerPrice) customizerPrice.textContent = fmt(selectedSize.price);
          };

          syncCustomizerPrice();
          customSize?.addEventListener("change", syncCustomizerPrice);

          customImageInput?.addEventListener("change", (event) => {
            const file = event.target.files?.[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (loadEvent) => {
              if (customizerPreview && typeof loadEvent.target?.result === "string") {
                customizerPreview.src = loadEvent.target.result;
              }
            };
            reader.readAsDataURL(file);
          });

          addCustomBtn?.addEventListener("click", () => {
            const customState = getSelectedCustomState();
            state.cart.push({
              uid: uid(),
              type: "custom",
              title: `Custom frame · ${customState.description}`,
              option: `${customState.selectedSize.label} • ${customState.finish}`,
              price: customState.selectedSize.price,
              qty: 1,
              art: customState.preview,
              imageLabel: getImageLabel(customState.preview, customState.description),
              imageType: customState.preview.startsWith("data:image") ? "custom-upload" : "catalog"
            });
            saveCart();
            toast("Custom frame added to cart");
          });

          document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
              closeDrawer();
              closeModal("checkoutModal");
              document.getElementById("sideMenu")?.setAttribute("aria-hidden", "true");
            }
          });
        }

        function init() {
          renderProducts();
          renderCart();
          bindEvents();
          syncBodyLock();
        }

        document.addEventListener("DOMContentLoaded", init);
      })();