"use client";

import { useState } from "react";

type Product = {
  name: string;
  store: string;
  price: string;
  oldPrice: string;
  discount: string;
  emoji: string;
};

type Offer = {
  title: string;
  subtitle: string;
  discount: string;
  emoji: string;
};

const trending: Product[] = [
  {
    name: "Men's Running Shoes",
    store: "Myntra",
    price: "₹999",
    oldPrice: "₹2,499",
    discount: "-60%",
    emoji: "👟",
  },
  {
    name: "Wireless Headphones",
    store: "Amazon",
    price: "₹1,999",
    oldPrice: "₹3,699",
    discount: "-45%",
    emoji: "🎧",
  },
  {
    name: "Skincare Combo",
    store: "Nykaa",
    price: "₹799",
    oldPrice: "₹2,699",
    discount: "-70%",
    emoji: "🧴",
  },
  {
    name: "Smart Watch",
    store: "Flipkart",
    price: "₹2,499",
    oldPrice: "₹4,999",
    discount: "-50%",
    emoji: "⌚",
  },
  {
    name: "Laptop",
    store: "Amazon",
    price: "₹32,999",
    oldPrice: "₹54,999",
    discount: "-40%",
    emoji: "💻",
  },
];

const myntraOffers: Offer[] = [
  { title: "Women's Dresses", subtitle: "Fashion picks", discount: "Up to 70% OFF", emoji: "👗" },
  { title: "Men's T-Shirts", subtitle: "Fresh styles", discount: "Min. 50% OFF", emoji: "👕" },
  { title: "Footwear", subtitle: "Step into deals", discount: "Up to 60% OFF", emoji: "👟" },
  { title: "Beauty & Personal Care", subtitle: "Beauty picks", discount: "Up to 65% OFF", emoji: "💄" },
  { title: "Bags & Backpacks", subtitle: "Carry in style", discount: "Up to 65% OFF", emoji: "👜" },
  { title: "Kids Fashion", subtitle: "Cute styles", discount: "Up to 60% OFF", emoji: "🧒" },
];

const ajioOffers: Offer[] = [
  { title: "Men's Fashion", subtitle: "Trending styles", discount: "Up to 60% OFF", emoji: "🧥" },
  { title: "Women's Fashion", subtitle: "New arrivals", discount: "Up to 70% OFF", emoji: "👚" },
  { title: "Footwear", subtitle: "Best sellers", discount: "Up to 60% OFF", emoji: "👟" },
  { title: "Bags & Luggage", subtitle: "Travel ready", discount: "Up to 50% OFF", emoji: "👜" },
  { title: "Home & Living", subtitle: "Upgrade home", discount: "Up to 55% OFF", emoji: "🏠" },
  { title: "Beauty & Grooming", subtitle: "Daily essentials", discount: "Up to 50% OFF", emoji: "✨" },
];

const nykaaOffers: Offer[] = [
  { title: "Makeup", subtitle: "Beauty favourites", discount: "Up to 40% OFF", emoji: "💋" },
  { title: "Skincare", subtitle: "Glow essentials", discount: "Up to 50% OFF", emoji: "🧴" },
  { title: "Haircare", subtitle: "Hair essentials", discount: "Up to 45% OFF", emoji: "💇" },
  { title: "Fragrance", subtitle: "Smell amazing", discount: "Up to 35% OFF", emoji: "🌸" },
  { title: "Personal Care", subtitle: "Daily care", discount: "Up to 55% OFF", emoji: "🫧" },
];

const priceDrops: Product[] = [
  {
    name: "Smart TV",
    store: "Amazon",
    price: "₹12,999",
    oldPrice: "₹22,999",
    discount: "-45%",
    emoji: "📺",
  },
  {
    name: "Running Shoes",
    store: "Myntra",
    price: "₹1,799",
    oldPrice: "₹4,499",
    discount: "-50%",
    emoji: "👟",
  },
  {
    name: "Laptop",
    store: "Flipkart",
    price: "₹32,999",
    oldPrice: "₹54,999",
    discount: "-48%",
    emoji: "💻",
  },
  {
    name: "Handbag",
    store: "AJIO",
    price: "₹1,299",
    oldPrice: "₹2,699",
    discount: "-52%",
    emoji: "👜",
  },
  {
    name: "Skincare Set",
    store: "Nykaa",
    price: "₹899",
    oldPrice: "₹1,999",
    discount: "-55%",
    emoji: "🧴",
  },
];

const categories = [
  ["👗", "Fashion"],
  ["📱", "Electronics"],
  ["💄", "Beauty"],
  ["🏠", "Home"],
  ["✈️", "Travel"],
  ["🏋️", "Sports"],
  ["🎮", "Games"],
  ["❤️", "Health"],
  ["•••", "More"],
];

const coupons = [
  {
    store: "Myntra",
    title: "₹500 OFF",
    code: "LUTOMYN500",
    condition: "On orders above ₹2,999",
    color: "pink",
  },
  {
    store: "AJIO",
    title: "20% OFF",
    code: "AJIO20",
    condition: "On selected products",
    color: "purple",
  },
  {
    store: "Nykaa",
    title: "₹200 OFF",
    code: "NYKAA200",
    condition: "On orders above ₹1,999",
    color: "pink",
  },
];

function SectionTitle({
  icon,
  title,
  subtitle,
  onView,
}: {
  icon: string;
  title: string;
  subtitle: string;
  onView?: () => void;
}) {
  return (
    <div className="section-title">
      <div className="section-title-left">
        <div className="section-icon">{icon}</div>
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>

      {onView && (
        <button className="view-all" onClick={onView}>
          View All <span>→</span>
        </button>
      )}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <div className="discount-badge">{product.discount}</div>

      <div className="product-image">
        <span>{product.emoji}</span>
      </div>

      <div className="product-content">
        <h3>{product.name}</h3>

        <div className="price-row">
          <strong>{product.price}</strong>
          <del>{product.oldPrice}</del>
        </div>

        <div className="store-name">
          <span className="store-dot" />
          {product.store}
        </div>

        <button className="shop-button">
          Shop Now <span>→</span>
        </button>
      </div>
    </article>
  );
}

function OfferCard({ offer }: { offer: Offer }) {
  return (
    <article className="offer-card">
      <div className="offer-image">
        <span>{offer.emoji}</span>
      </div>

      <h3>{offer.title}</h3>
      <p>{offer.subtitle}</p>

      <strong>{offer.discount}</strong>

      <button className="mini-shop">
        Explore →
      </button>
    </article>
  );
}

function OfferCarousel({
  data,
  title,
  icon,
  subtitle,
}: {
  data: Offer[];
  title: string;
  icon: string;
  subtitle: string;
}) {
  return (
    <section className="section">
      <SectionTitle
        icon={icon}
        title={title}
        subtitle={subtitle}
        onView={() => alert(`Opening all ${title}`)}
      />

      <div className="horizontal-scroll">
        {data.map((offer, index) => (
          <OfferCard key={index} offer={offer} />
        ))}
      </div>
    </section>
  );
}

function CouponCard({
  coupon,
  onCopy,
}: {
  coupon: (typeof coupons)[number];
  onCopy: () => void;
}) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(coupon.code);
    } catch {
      // Clipboard may be unavailable in preview environments.
    }

    setCopied(true);
    onCopy();

    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <article className={`coupon-card ${coupon.color}`}>
      <div className="coupon-top">
        <div className="coupon-logo">{coupon.store[0]}</div>

        <div>
          <small>{coupon.store}</small>
          <span className="hot-tag">HOT DEAL</span>
        </div>
      </div>

      <h3>{coupon.title}</h3>
      <p>{coupon.condition}</p>

      <div className="coupon-code">
        <span>{coupon.code}</span>

        <button onClick={copyCode}>
          {copied ? "✓ Copied" : "Copy Code"}
        </button>
      </div>

      <button className="coupon-shop">
        Shop Now →
      </button>
    </article>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <main className="site">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-inner">

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            ☰
          </button>

          <div className="brand">
            <div className="brand-mascot">👾</div>

            <div>
              <div className="brand-name">
                Luto<span>Deals</span>
              </div>
              <div className="brand-tagline">
                Shop Smarter. Save More.
              </div>
            </div>
          </div>

          <div className="search-box">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for deals, stores, products..."
            />
            <span>⌕</span>
          </div>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a className="active" href="#home">⌂ Home</a>
            <a href="#deals">◉ Deals</a>
            <a href="#coupons">♢ Coupons</a>
            <a href="#stores">◈ Stores</a>
            <a href="#categories">▦ Categories</a>
            <a href="#more">More⌄</a>
          </nav>

          <button className="theme-button">☾</button>

          <button className="login-button">
            👤 Login
          </button>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />

        <div className="hero-content">

          <div className="hero-pill">
            🔥 Big Savings. Happier You!
          </div>

          <h1>
            Today&apos;s Best Deals
            <br />
            <span>Worth Checking!</span>
          </h1>

          <p>
            Top offers, exclusive coupons, and smarter ways to save.
          </p>

          <button className="hero-button">
            Explore Deals <span>→</span>
          </button>

          <div className="trust-row">
            <span>⚡ Best Prices</span>
            <i />
            <span>🛡 Verified Deals</span>
            <i />
            <span>🔒 Secure Shopping</span>
          </div>
        </div>

        <div className="hero-luto">
          <div className="sale-sticker">
            UP TO
            <strong>70%</strong>
            OFF
          </div>

          {/* Replace this emoji with your actual Luto PNG later */}
          <div className="luto-character">
            👾
          </div>

          <div className="shopping-bag">
            🛍️
            <span>Luto</span>
          </div>
        </div>

        <div className="hero-dots">
          <span className="active" />
          <span />
          <span />
          <span />
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="section categories-section">

        <SectionTitle
          icon="🛍️"
          title="Shop by Category"
          subtitle="Find what you love, at the best prices!"
          onView={() => alert("Opening all categories")}
        />

        <div className="category-scroll">
          {categories.map(([emoji, name]) => (
            <button className="category-card" key={name}>
              <div className="category-icon">{emoji}</div>
              <span>{name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* TRENDING */}
      <section id="deals" className="section">
        <SectionTitle
          icon="🔥"
          title="Trending Deals"
          subtitle="Handpicked deals just for you!"
          onView={() => alert("Opening all deals")}
        />

        <div className="horizontal-scroll product-scroll">
          {trending.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>

      {/* MYNTRA */}
      <section id="stores" className="section">
        <OfferCarousel
          data={myntraOffers}
          title="Myntra Offers"
          icon="🛍️"
          subtitle="Fashion. Beauty. Lifestyle. More."
        />
      </section>

      {/* AJIO */}
      <section className="section">
        <OfferCarousel
          data={ajioOffers}
          title="AJIO Offers"
          icon="◉"
          subtitle="Trendy Styles. Great Deals."
        />
      </section>

      {/* NYKAA */}
      <section className="section">
        <OfferCarousel
          data={nykaaOffers}
          title="Nykaa Offers"
          icon="💄"
          subtitle="Beauty. Skincare. Haircare. More."
        />
      </section>

      {/* COUPONS */}
      <section id="coupons" className="section coupon-section">

        <SectionTitle
          icon="🎟️"
          title="Coupon Codes"
          subtitle="Save more with verified coupon codes"
          onView={() => alert("Opening all coupons")}
        />

        <div className="coupon-grid">
          {coupons.map((coupon, index) => (
            <CouponCard
              key={index}
              coupon={coupon}
              onCopy={() => {}}
            />
          ))}

          <div className="coupon-banner">
            <div className="mini-luto">👾</div>
            <strong>More Coupons.</strong>
            <span>More Savings!</span>

            <button>
              View All →
            </button>
          </div>
        </div>
      </section>

      {/* PRICE DROPS */}
      <section className="section">

        <SectionTitle
          icon="⚡"
          title="Price Drops"
          subtitle="Big discounts. Limited time!"
          onView={() => alert("Opening all price drops")}
        />

        <div className="horizontal-scroll price-scroll">
          {priceDrops.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>

      {/* MEET LUTO */}
      <section className="meet-luto">

        <div className="meet-character">
          👾
        </div>

        <div className="meet-text">
          <h2>
            Meet Luto <span>👋</span>
          </h2>

          <p>
            Your guide to smarter shopping.
          </p>

          <button>
            Discover Luto →
          </button>
        </div>

        <div className="luto-benefits">

          <div className="benefit">
            <div>⚡</div>
            <strong>Best Deals</strong>
            <span>Handpicked offers</span>
          </div>

          <div className="benefit">
            <div>%</div>
            <strong>Exclusive Coupons</strong>
            <span>Save more with codes</span>
          </div>

          <div className="benefit">
            <div>🔔</div>
            <strong>Price Drop Alerts</strong>
            <span>Get notified instantly</span>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-brand">
          <div className="footer-logo">
            👾
          </div>

          <div>
            <h2>Luto<span>Deals</span></h2>
            <p>Shop Smarter. Save More.</p>
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#deals">Deals</a>
          <a href="#coupons">Coupons</a>
          <a href="#stores">Stores</a>
          <a href="#categories">Categories</a>
        </div>

        <div className="footer-column">
          <h3>Help</h3>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
          <a href="#faq">FAQ</a>
          <a href="#terms">Terms & Conditions</a>
          <a href="#privacy">Privacy Policy</a>
        </div>

        <div className="footer-newsletter">
          <h3>Stay Connected</h3>
          <p>Get the best deals straight to your inbox!</p>

          <div className="newsletter">
            <input placeholder="Enter your email" />
            <button>➤</button>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 LutoDeals. All rights reserved.</span>
          <span>Better Deals. Brighter Days. 💜</span>
        </div>

      </footer>

      {/* MOBILE BOTTOM NAV */}
      <div className="mobile-bottom-nav">
        <a href="#home">
          <span>⌂</span>
          Home
        </a>

        <a href="#deals">
          <span>🔥</span>
          Deals
        </a>

        <a href="#coupons">
          <span>🎟️</span>
          Coupons
        </a>

        <a href="#stores">
          <span>🏪</span>
          Stores
        </a>

        <a href="#categories">
          <span>☰</span>
          More
        </a>
      </div>

      <style jsx global>{`

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
          background: #f6f3ff;
          color: #24104f;
        }

        button,
        input {
          font: inherit;
        }

        button {
          cursor: pointer;
        }

        .site {
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 10% 20%,
              rgba(180, 130, 255, 0.12),
              transparent 28%
            ),
            #f7f5ff;
        }

        /* NAVBAR */

        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          height: 72px;
          background: rgba(31, 10, 77, 0.96);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(255,255,255,.12);
        }

        .nav-inner {
          max-width: 1440px;
          height: 100%;
          margin: auto;
          padding: 0 30px;
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .brand {
          display: flex;
          align-items: center;
          min-width: 175px;
          color: white;
        }

        .brand-mascot {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          margin-right: 9px;
          font-size: 27px;
          background: linear-gradient(135deg, #a44dff, #6321c9);
          box-shadow: 0 8px 30px rgba(137, 57, 255, .4);
        }

        .brand-name {
          font-size: 23px;
          line-height: 22px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .brand-name span {
          color: #ffe32b;
        }

        .brand-tagline {
          margin-top: 3px;
          font-size: 9px;
          color: #ddd0ff;
          font-weight: 700;
        }

        .search-box {
          flex: 1;
          max-width: 360px;
          height: 44px;
          background: #f9f7ff;
          border-radius: 24px;
          display: flex;
          align-items: center;
          padding: 0 16px;
          color: #311266;
        }

        .search-box input {
          width: 100%;
          border: none;
          outline: none;
          background: transparent;
          color: #311266;
          font-size: 13px;
        }

        .search-box span {
          font-size: 23px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 19px;
          flex: 1;
          justify-content: center;
        }

        .nav-links a {
          color: #eee7ff;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          padding: 25px 0;
          transition: .25s;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: #ffe32b;
        }

        .nav-links a.active {
          border-bottom: 3px solid #ffe32b;
        }

        .theme-button {
          width: 40px;
          height: 40px;
          border: 1px solid rgba(255,255,255,.15);
          border-radius: 50%;
          background: #32116e;
          color: #ffe32b;
        }

        .login-button {
          border: 0;
          border-radius: 22px;
          background: #ffe32b;
          color: #24104f;
          padding: 11px 17px;
          font-weight: 900;
          white-space: nowrap;
          transition: .25s;
        }

        .login-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 227, 43, .25);
        }

        .mobile-menu {
          display: none;
          border: 0;
          background: transparent;
          color: white;
          font-size: 24px;
        }

        /* HERO */

        .hero {
          min-height: 370px;
          position: relative;
          overflow: hidden;
          color: white;
          background:
            radial-gradient(circle at 80% 40%, #8438d6, transparent 28%),
            radial-gradient(circle at 60% 100%, #5c17b3, transparent 45%),
            linear-gradient(115deg, #24104f, #49168d 55%, #29105b);
          display: flex;
          align-items: center;
          padding: 45px max(5vw, 30px);
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: .16;
          background-image:
            radial-gradient(#fff 1px, transparent 1px);
          background-size: 28px 28px;
          animation: stars 18s linear infinite;
        }

        @keyframes stars {
          from { transform: translateX(0); }
          to { transform: translateX(28px); }
        }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(10px);
          animation: floatGlow 7s ease-in-out infinite;
        }

        .glow-one {
          width: 260px;
          height: 260px;
          right: 30%;
          top: -120px;
          background: #a744ff;
          opacity: .35;
        }

        .glow-two {
          width: 300px;
          height: 300px;
          left: -100px;
          bottom: -180px;
          background: #7c2cff;
          opacity: .25;
          animation-delay: 2s;
        }

        @keyframes floatGlow {
          50% {
            transform: translateY(25px) scale(1.08);
          }
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 650px;
          animation: heroEnter .8s ease both;
        }

        @keyframes heroEnter {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-pill {
          display: inline-block;
          padding: 7px 14px;
          border-radius: 20px;
          background: rgba(142,72,255,.4);
          border: 1px solid rgba(255,255,255,.15);
          font-size: 12px;
          font-weight: 800;
          margin-bottom: 15px;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(38px, 5vw, 65px);
          line-height: .95;
          letter-spacing: -3px;
          font-weight: 950;
        }

        .hero h1 span {
          color: #ffe32b;
        }

        .hero p {
          color: #ddd0ff;
          font-size: 15px;
          margin: 18px 0;
        }

        .hero-button {
          border: 0;
          background: #ffe32b;
          color: #29105b;
          border-radius: 28px;
          padding: 14px 24px;
          font-weight: 950;
          box-shadow: 0 10px 30px rgba(255,227,43,.18);
          transition: .25s;
        }

        .hero-button:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 16px 35px rgba(255,227,43,.3);
        }

        .hero-button span {
          margin-left: 8px;
        }

        .trust-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 30px;
          color: #eee8ff;
          font-size: 11px;
          font-weight: 700;
        }

        .trust-row i {
          width: 1px;
          height: 15px;
          background: rgba(255,255,255,.25);
        }

        .hero-luto {
          position: absolute;
          right: 9%;
          top: 25px;
          width: 400px;
          height: 320px;
          display: grid;
          place-items: center;
          z-index: 2;
        }

        .luto-character {
          width: 245px;
          height: 245px;
          border-radius: 30% 30% 34% 34%;
          display: grid;
          place-items: center;
          font-size: 135px;
          background:
            radial-gradient(circle at 35% 28%, #d293ff, transparent 20%),
            linear-gradient(145deg, #a94dff, #651bc5);
          box-shadow:
            inset 0 -20px 30px rgba(46,5,100,.3),
            0 30px 70px rgba(0,0,0,.3);
          animation: lutoFloat 4s ease-in-out infinite;
        }

        @keyframes lutoFloat {
          50% {
            transform: translateY(-12px) rotate(1deg);
          }
        }

        .sale-sticker {
          position: absolute;
          top: 15px;
          left: 10px;
          z-index: 3;
          transform: rotate(-8deg);
          background: #ffe32b;
          color: #35106e;
          width: 85px;
          height: 85px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 900;
          box-shadow: 0 15px 30px rgba(0,0,0,.2);
        }

        .sale-sticker strong {
          font-size: 23px;
          line-height: 20px;
        }

        .shopping-bag {
          position: absolute;
          right: 20px;
          bottom: 30px;
          background: #ffe32b;
          color: #35106e;
          border-radius: 9px;
          padding: 10px 13px;
          font-size: 25px;
          transform: rotate(7deg);
          box-shadow: 0 12px 30px rgba(0,0,0,.25);
        }

        .shopping-bag span {
          display: block;
          font-size: 11px;
          font-weight: 900;
          text-align: center;
        }

        .hero-dots {
          position: absolute;
          z-index: 5;
          bottom: 14px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 7px;
        }

        .hero-dots span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(255,255,255,.4);
        }

        .hero-dots span.active {
          width: 25px;
          border-radius: 8px;
          background: white;
        }

        /* SECTIONS */

        .section {
          max-width: 1370px;
          margin: auto;
          padding: 30px 30px 10px;
        }

        .section-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 18px;
        }

        .section-title-left {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .section-icon {
          width: 42px;
          height: 42px;
          border-radius: 13px;
          display: grid;
          place-items: center;
          background: #fff;
          box-shadow: 0 6px 20px rgba(66,20,130,.1);
          font-size: 22px;
        }

        .section-title h2 {
          margin: 0;
          color: #331067;
          font-size: 23px;
          letter-spacing: -.8px;
        }

        .section-title p {
          margin: 2px 0 0;
          color: #7d7098;
          font-size: 11px;
          font-weight: 600;
        }

        .view-all {
          border: 0;
          background: transparent;
          color: #4e18ad;
          font-size: 12px;
          font-weight: 900;
          white-space: nowrap;
        }

        .view-all span {
          margin-left: 5px;
        }

        /* CATEGORIES */

        .category-scroll {
          display: grid;
          grid-template-columns: repeat(9, 1fr);
          gap: 10px;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .category-scroll::-webkit-scrollbar,
        .horizontal-scroll::-webkit-scrollbar {
          display: none;
        }

        .category-card {
          min-width: 100px;
          border: 1px solid #ebe5fb;
          border-radius: 14px;
          background: white;
          padding: 13px 8px;
          color: #3a126f;
          transition: .25s;
          box-shadow: 0 4px 15px rgba(45,17,90,.04);
        }

        .category-card:hover {
          transform: translateY(-5px);
          border-color: #b783ff;
          box-shadow: 0 12px 28px rgba(76,27,145,.13);
        }

        .category-icon {
          width: 45px;
          height: 45px;
          margin: auto auto 8px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: #f3edff;
          font-size: 23px;
        }

        .category-card span {
          font-size: 11px;
          font-weight: 900;
        }

        /* CAROUSELS */

        .horizontal-scroll {
          display: flex;
          gap: 13px;
          overflow-x: auto;
          scrollbar-width: none;
          scroll-snap-type: x proximity;
          padding: 4px 2px 16px;
        }

        .horizontal-scroll > * {
          scroll-snap-align: start;
        }

        /* PRODUCT */

        .product-card {
          position: relative;
          min-width: 220px;
          width: 220px;
          overflow: hidden;
          border: 1px solid #e7defb;
          background: white;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(51,18,105,.06);
          transition: .3s;
        }

        .product-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 16px 35px rgba(60,20,120,.14);
        }

        .discount-badge {
          position: absolute;
          z-index: 2;
          top: 9px;
          right: 9px;
          background: #ff1764;
          color: white;
          border-radius: 14px;
          padding: 5px 8px;
          font-size: 10px;
          font-weight: 950;
        }

        .product-image {
          height: 145px;
          margin: 9px 9px 0;
          border-radius: 10px;
          display: grid;
          place-items: center;
          background:
            radial-gradient(circle at center, #fff, #f0edfa);
        }

        .product-image span {
          font-size: 76px;
          filter: drop-shadow(0 12px 10px rgba(60,20,100,.15));
          transition: .3s;
        }

        .product-card:hover .product-image span {
          transform: scale(1.08) rotate(-3deg);
        }

        .product-content {
          padding: 11px;
        }

        .product-content h3 {
          margin: 0 0 6px;
          font-size: 13px;
          color: #301064;
        }

        .price-row {
          display: flex;
          align-items: baseline;
          gap: 7px;
        }

        .price-row strong {
          color: #ed1761;
          font-size: 17px;
        }

        .price-row del {
          color: #aaa;
          font-size: 10px;
        }

        .store-name {
          margin: 6px 0 9px;
          font-size: 10px;
          color: #6d6380;
          font-weight: 700;
        }

        .store-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          background: #ff216b;
          border-radius: 50%;
          margin-right: 5px;
        }

        .shop-button {
          width: 100%;
          border: 0;
          background: linear-gradient(90deg, #5420c2, #7023d5);
          color: white;
          border-radius: 14px;
          padding: 8px;
          font-size: 10px;
          font-weight: 900;
          transition: .25s;
        }

        .shop-button:hover {
          background: #ffe32b;
          color: #321067;
        }

        /* OFFER CARDS */

        .offer-card {
          min-width: 190px;
          width: 190px;
          padding: 8px;
          border-radius: 15px;
          background: white;
          border: 1px solid #e9e0fa;
          box-shadow: 0 5px 18px rgba(45,17,90,.05);
          transition: .3s;
        }

        .offer-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(63,21,130,.12);
        }

        .offer-image {
          height: 105px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          background:
            linear-gradient(135deg, #fff1fb, #f2eaff);
        }

        .offer-image span {
          font-size: 55px;
        }

        .offer-card h3 {
          margin: 9px 3px 2px;
          color: #36116f;
          font-size: 12px;
        }

        .offer-card p {
          margin: 0 3px 5px;
          color: #8c829d;
          font-size: 9px;
        }

        .offer-card strong {
          display: block;
          margin: 0 3px 8px;
          color: #ee1d6a;
          font-size: 11px;
        }

        .mini-shop {
          border: 0;
          background: #f0eaff;
          color: #4f18a9;
          width: 100%;
          padding: 7px;
          border-radius: 10px;
          font-size: 9px;
          font-weight: 900;
        }

        /* COUPONS */

        .coupon-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .coupon-card {
          position: relative;
          overflow: hidden;
          border-radius: 17px;
          padding: 16px;
          background: white;
          border: 1px solid #eadffc;
          box-shadow: 0 6px 20px rgba(47,15,100,.06);
        }

        .coupon-card::before {
          content: "";
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          right: -35px;
          top: -45px;
          background: rgba(164,86,255,.08);
        }

        .coupon-card.pink {
          border-top: 4px solid #ff2480;
        }

        .coupon-card.purple {
          border-top: 4px solid #7127d6;
        }

        .coupon-top {
          display: flex;
          gap: 9px;
          align-items: center;
        }

        .coupon-logo {
          width: 35px;
          height: 35px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          background: #f2eaff;
          color: #4c16a7;
          font-weight: 950;
        }

        .coupon-top small {
          display: block;
          font-weight: 900;
          color: #36106f;
        }

        .hot-tag {
          font-size: 7px;
          color: #ff1c68;
          font-weight: 950;
        }

        .coupon-card h3 {
          margin: 13px 0 3px;
          font-size: 21px;
          color: #35106e;
        }

        .coupon-card > p {
          margin: 0 0 12px;
          color: #837894;
          font-size: 10px;
        }

        .coupon-code {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
          padding: 6px;
          border: 1px dashed #c5b4e9;
          border-radius: 9px;
          background: #faf8ff;
        }

        .coupon-code span {
          font-size: 10px;
          font-weight: 950;
          letter-spacing: .5px;
        }

        .coupon-code button {
          border: 0;
          background: #ffe32b;
          color: #31105f;
          border-radius: 7px;
          padding: 6px 8px;
          font-size: 8px;
          font-weight: 950;
        }

        .coupon-shop {
          width: 100%;
          border: 0;
          margin-top: 9px;
          border-radius: 10px;
          padding: 8px;
          color: white;
          background: #5620bd;
          font-size: 9px;
          font-weight: 900;
        }

        .coupon-banner {
          min-height: 215px;
          border-radius: 17px;
          padding: 18px;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          background:
            radial-gradient(circle at 70% 30%, #9439ef, transparent 30%),
            linear-gradient(145deg, #321064, #5c18b6);
          box-shadow: 0 10px 30px rgba(65,20,130,.15);
        }

        .mini-luto {
          font-size: 55px;
          margin-bottom: 4px;
          animation: lutoFloat 3s ease-in-out infinite;
        }

        .coupon-banner strong {
          font-size: 17px;
        }

        .coupon-banner span {
          color: #ffe32b;
          font-weight: 950;
          margin-top: 2px;
        }

        .coupon-banner button {
          margin-top: 14px;
          border: 0;
          border-radius: 18px;
          background: #ffe32b;
          color: #341067;
          padding: 8px 14px;
          font-size: 9px;
          font-weight: 950;
        }

        /* MEET LUTO */

        .meet-luto {
          max-width: 1370px;
          margin: 35px auto 0;
          padding: 25px 50px;
          min-height: 170px;
          border-radius: 25px 25px 0 0;
          display: flex;
          align-items: center;
          gap: 25px;
          color: white;
          background:
            radial-gradient(circle at 10% 20%, #b65bff, transparent 22%),
            linear-gradient(110deg, #3d087d, #6220b7);
        }

        .meet-character {
          font-size: 110px;
          animation: lutoFloat 4s ease-in-out infinite;
        }

        .meet-text {
          min-width: 260px;
        }

        .meet-text h2 {
          margin: 0;
          font-size: 25px;
        }

        .meet-text p {
          margin: 4px 0 13px;
          color: #e2d8ff;
          font-size: 12px;
        }

        .meet-text button {
          border: 0;
          background: #ffe32b;
          color: #35106b;
          border-radius: 18px;
          padding: 9px 14px;
          font-size: 10px;
          font-weight: 950;
        }

        .luto-benefits {
          display: flex;
          gap: 10px;
          flex: 1;
        }

        .benefit {
          flex: 1;
          min-height: 90px;
          border: 1px solid rgba(255,255,255,.15);
          background: rgba(255,255,255,.09);
          border-radius: 13px;
          padding: 13px;
        }

        .benefit > div {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: #7a35dc;
          margin-bottom: 7px;
          font-weight: 950;
        }

        .benefit strong,
        .benefit span {
          display: block;
        }

        .benefit strong {
          font-size: 10px;
        }

        .benefit span {
          color: #d8ccf5;
          margin-top: 3px;
          font-size: 8px;
        }

        /* FOOTER */

        .footer {
          padding: 35px 5% 80px;
          background: #180635;
          color: white;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
          gap: 40px;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-logo {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          background: #6422be;
          border-radius: 13px;
          font-size: 27px;
        }

        .footer h2 {
          margin: 0;
        }

        .footer h2 span {
          color: #ffe32b;
        }

        .footer-brand p {
          margin: 3px 0;
          color: #a997c7;
          font-size: 9px;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-column h3,
        .footer-newsletter h3 {
          margin: 0 0 8px;
          color: white;
          font-size: 12px;
        }

        .footer-column a {
          color: #a997c7;
          text-decoration: none;
          font-size: 10px;
        }

        .footer-column a:hover {
          color: #ffe32b;
        }

        .footer-newsletter p {
          color: #a997c7;
          font-size: 9px;
        }

        .newsletter {
          display: flex;
          height: 38px;
          border-radius: 10px;
          overflow: hidden;
          background: #2b0c59;
          border: 1px solid #48207c;
        }

        .newsletter input {
          min-width: 0;
          flex: 1;
          border: 0;
          outline: 0;
          padding: 0 12px;
          background: transparent;
          color: white;
          font-size: 10px;
        }

        .newsletter button {
          width: 42px;
          border: 0;
          background: #ffe32b;
          color: #341067;
          font-weight: 950;
        }

        .footer-bottom {
          grid-column: 1 / -1;
          border-top: 1px solid rgba(255,255,255,.1);
          padding-top: 17px;
          display: flex;
          justify-content: space-between;
          color: #8d79aa;
          font-size: 9px;
        }

        /* MOBILE BOTTOM NAV */

        .mobile-bottom-nav {
          display: none;
        }

        /* TABLET */

        @media (max-width: 1100px) {

          .nav-links {
            gap: 10px;
          }

          .nav-links a {
            font-size: 10px;
          }

          .hero-luto {
            right: 2%;
            transform: scale(.82);
          }

          .coupon-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .category-scroll {
            display: flex;
          }

          .category-card {
            flex: 0 0 100px;
          }
        }

        /* MOBILE */

        @media (max-width: 760px) {

          body {
            padding-bottom: 65px;
          }

          .navbar {
            height: 64px;
          }

          .nav-inner {
            padding: 0 13px;
            gap: 8px;
          }

          .mobile-menu {
            display: block;
          }

          .brand {
            min-width: 0;
            flex: 1;
          }

          .brand-mascot {
            width: 37px;
            height: 37px;
            font-size: 22px;
          }

          .brand-name {
            font-size: 18px;
          }

          .brand-tagline {
            display: none;
          }

          .search-box {
            display: none;
          }

          .nav-links {
            position: absolute;
            left: 8px;
            right: 8px;
            top: 61px;
            padding: 15px;
            display: none;
            flex-direction: column;
            align-items: stretch;
            gap: 0;
            background: #27104f;
            border-radius: 0 0 15px 15px;
            box-shadow: 0 15px 35px rgba(0,0,0,.25);
          }

          .nav-links.open {
            display: flex;
          }

          .nav-links a {
            padding: 13px;
            border-bottom: 1px solid rgba(255,255,255,.08);
          }

          .nav-links a.active {
            border-bottom: 1px solid rgba(255,255,255,.08);
          }

          .theme-button {
            width: 34px;
            height: 34px;
          }

          .login-button {
            padding: 9px 11px;
            font-size: 10px;
          }

          /* HERO */

          .hero {
            min-height: 490px;
            padding: 30px 20px;
            align-items: flex-start;
          }

          .hero-content {
            max-width: 100%;
            z-index: 4;
          }

          .hero h1 {
            font-size: 42px;
            letter-spacing: -2px;
          }

          .hero p {
            max-width: 260px;
            font-size: 12px;
          }

          .hero-luto {
            top: 215px;
            right: 50%;
            transform: translateX(50%) scale(.72);
            width: 330px;
          }

          .trust-row {
            display: none;
          }

          .hero-dots {
            bottom: 13px;
          }

          /* SECTIONS */

          .section {
            padding: 23px 14px 5px;
          }

          .section-title h2 {
            font-size: 19px;
          }

          .section-title p {
            font-size: 9px;
          }

          .section-icon {
            width: 37px;
            height: 37px;
            font-size: 18px;
          }

          .view-all {
            font-size: 10px;
          }

          .category-scroll {
            margin-right: -14px;
            padding-right: 14px;
          }

          .category-card {
            min-width: 88px;
            padding: 10px 6px;
          }

          .category-icon {
            width: 39px;
            height: 39px;
            font-size: 20px;
          }

          /* PRODUCTS */

          .product-card {
            min-width: 185px;
            width: 185px;
          }

          .product-image {
            height: 120px;
          }

          .product-image span {
            font-size: 62px;
          }

          .offer-card {
            min-width: 160px;
            width: 160px;
          }

          .offer-image {
            height: 90px;
          }

          .offer-image span {
            font-size: 45px;
          }

          /* COUPONS */

          .coupon-grid {
            display: flex;
            overflow-x: auto;
            scrollbar-width: none;
            padding-bottom: 10px;
          }

          .coupon-card,
          .coupon-banner {
            min-width: 250px;
          }

          .coupon-banner {
            min-height: 215px;
          }

          /* MEET LUTO */

          .meet-luto {
            margin-top: 30px;
            border-radius: 0;
            padding: 25px 18px;
            display: grid;
            grid-template-columns: 80px 1fr;
            gap: 10px;
          }

          .meet-character {
            font-size: 70px;
          }

          .meet-text {
            min-width: 0;
          }

          .meet-text h2 {
            font-size: 20px;
          }

          .luto-benefits {
            grid-column: 1 / -1;
            overflow-x: auto;
          }

          .benefit {
            min-width: 145px;
          }

          /* FOOTER */

          .footer {
            padding: 30px 20px 90px;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }

          .footer-newsletter {
            grid-column: 1 / -1;
          }

          .footer-bottom {
            grid-column: 1 / -1;
            flex-direction: column;
            gap: 6px;
          }

          /* MOBILE NAV */

          .mobile-bottom-nav {
            position: fixed;
            z-index: 2000;
            bottom: 0;
            left: 0;
            right: 0;
            height: 63px;
            background: rgba(31, 8, 66, .98);
            backdrop-filter: blur(18px);
            display: flex;
            align-items: center;
            justify-content: space-around;
            border-top: 1px solid rgba(255,255,255,.1);
          }

          .mobile-bottom-nav a {
            color: #b9a9d4;
            text-decoration: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 3px;
            font-size: 8px;
            font-weight: 800;
          }

          .mobile-bottom-nav a:first-child {
            color: #ffe32b;
          }

          .mobile-bottom-nav span {
            font-size: 18px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }

      `}</style>
    </main>
  );
}
