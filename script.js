/* Navbar active */
function setActive(el) {
  document
    .querySelectorAll(".nav-links a")
    .forEach((a) => a.classList.remove("active"));
  el.classList.add("active");
}

/* Products */
const products = [
  {
    desc: "Brand's Essence of Prune adalah suplemen kesehatan populer kaya serat yang dirancang untuk membantu pencernaan, meningkatkan kesehatan kulit, dan meningkatkan kesejahteraan dengan ekstrak buah plum California dan Vitamin E. Bersertifikasi halal, rendah lemak, dan bebas kolesterol.",
    tip: "Kandungan alami di BRAND'S Essence of Prune bukan hanya akan membantu menyehatkan tubuhmu, akan tetapi juga menjaga tubuh tetap bugar di tengah rutinitas sehari-hari.",
  },
  {
    desc: "BRAND'S Essence of Chicken adalah Suplemen makanan yang berasal dari bahan alami yang diekstrak dari ayam berkualitas, mengandung asam amino dan peptide-peptida yang mudah dicerna, yang BEBAS LEMAK dan BEBAS KOLESTEROL.",
    tip: "BRAND'S® Essence of Chicken harus langsung dihabiskan segera setelah tutup dibuka atau disimpan dalam lemari es dan dihabiskan dalam waktu 24 jam.",
  },
  {
    desc: "BRAND'S Bird's Nest adalah tonik kesehatan premium siap minum yang tersedia sejak tahun 1982, terbuat dari sarang burung walet asli. Dikenal karena khasiatnya untuk mencerahkan kulit, memperkuat kekebalan tubuh, dan mendukung pernapasan.",
    tip: "BRAND'S® Essence of Bird's Nest dapat dikonsumsi langsung dari botol pada suhu ruangan, didinginkan, dihangatkan atau dicampur dengan air hangat.",
  },
];
let currentProduct = 1;

function selectProduct(idx) {
  document
    .querySelectorAll(".product-item")
    .forEach((el, i) => el.classList.toggle("active", i === idx));
  currentProduct = idx;
  document.getElementById("product-desc").textContent = products[idx].desc;
  document.getElementById("product-tip").textContent = products[idx].tip;
}
function nextProduct() {
  selectProduct((currentProduct + 1) % products.length);
}
function prevProduct() {
  selectProduct((currentProduct - 1 + products.length) % products.length);
}

/* News */
const newsData = [
  {
    icon: "🏆",
    bg: "linear-gradient(135deg,#1b5e20,#388e3c)",
    title: "Kejar BRAND'S 2024",
    body: "Terimakasih Branders yang sudah ikutan Kejar BRAND'S dari September 2024 sampai Januari 2025 kemarin. Proses pengiriman hadiah akan dilakukan segera ya! Program Kejar BRAND'S 2024 merupakan program loyalitas eksklusif kami untuk menghargai pelanggan setia yang telah mengkonsumsi produk BRAND'S secara rutin. Hadiah-hadiah menarik seperti Huawei Fit 3, Moshi Premium Tumbler, Bateus TWS Mini Earbuds, Portable Treadmill, Philips Air Purifier, dan Shopping Voucher Sodexo/MAP telah disiapkan untuk para pemenang.",
  },
  {
    icon: "⭐",
    bg: "linear-gradient(135deg,#4caf50,#2e7d32)",
    title: "Tahun Baru, BRAND'S punya Brand Ambassador baru!",
    body: "Tahun baru, BRAND'S punya wajah baru! Selamat bergabung Hiroaki Kato & Arina Ephipania sebagai Brand Ambassador resmi Suntory BRAND'S Indonesia 2025! Siapa Branders di sini yang fans mereka? Nantikan keseruan BRAND'S dengan Brand Ambassador di tahun ini ya!",
  },
];
function openNews(idx) {
  const n = newsData[idx];
  document.getElementById("news-detail-icon").textContent = n.icon;
  document.getElementById("news-detail-img").style.background = n.bg;
  document.getElementById("news-detail-title").textContent = n.title;
  document.getElementById("news-detail-body").textContent = n.body;
  document.getElementById("news-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeNews(e) {
  if (e.target === document.getElementById("news-overlay")) closeNewsBtn();
}
function closeNewsBtn() {
  document.getElementById("news-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

/* Scroll reveal */
const obs = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    }),
  { threshold: 0.1 },
);
document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));

/* Navbar scroll highlight */
window.addEventListener("scroll", () => {
  const sections = ["product", "our-customer", "about-us", "news"];
  let found = "";
  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el && window.scrollY + 100 >= el.offsetTop) found = id;
  });
  document.querySelectorAll(".nav-links a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href && href !== "#")
      a.classList.toggle("active", href === "#" + found);
  });
});
