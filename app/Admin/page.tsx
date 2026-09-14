"use client";

import { useState } from "react";

const sections = [
  { id: "dashboard", name: "Dashboard", icon: "📊" },
  { id: "banners", name: "Banners", icon: "🖼️" },
  { id: "stores", name: "Stores", icon: "🏪" },
  { id: "categories", name: "Categories", icon: "📂" },
  { id: "products", name: "Products", icon: "📦" },
  { id: "deals", name: "Deals", icon: "🔥" },
  { id: "offers", name: "Offers", icon: "🏷️" },
  { id: "coupons", name: "Coupons", icon: "🎟️" },
  { id: "price_drops", name: "Price Drops", icon: "📉" },
];

export default function AdminPage() {
  const [active, setActive] = useState("dashboard");

  return (
    <main className="admin">
      <aside className="sidebar">
        <div className="logo">
          <div className="logoIcon">L</div>
          <div>
            <strong>LutoDeals</strong>
            <span>Admin Panel</span>
          </div>
        </div>

        <nav>
          {sections.map((item) => (
            <button
              key={item.id}
              className={active === item.id ? "active" : ""}
              onClick={() => setActive(item.id)}
            >
              <span>{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>

        <div className="bottom">
          <a href="/">← Back to Website</a>
        </div>
      </aside>

      <section className="content">
        <header className="topbar">
          <div>
            <h1>
              {sections.find((x) => x.id === active)?.name}
            </h1>
            <p>Manage your LutoDeals content</p>
          </div>

          <a href="/" className="viewSite">
            View Website ↗
          </a>
        </header>

        {active === "dashboard" && <Dashboard />}

        {active !== "dashboard" && (
          <ComingSoon
            title={sections.find((x) => x.id === active)?.name || ""}
          />
        )}
      </section>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .admin {
          min-height: 100vh;
          display: flex;
          background: #f7f5fb;
          color: #17131f;
          font-family: Arial, sans-serif;
        }

        .sidebar {
          width: 250px;
          min-height: 100vh;
          background: #24113d;
          color: white;
          padding: 24px 16px;
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px;
          margin-bottom: 28px;
        }

        .logoIcon {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background: #ffd83d;
          color: #24113d;
          display: grid;
          place-items: center;
          font-size: 24px;
          font-weight: 900;
        }

        .logo strong {
          display: block;
          font-size: 18px;
        }

        .logo span {
          display: block;
          margin-top: 3px;
          font-size: 12px;
          opacity: 0.65;
        }

        nav {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        nav button {
          border: 0;
          background: transparent;
          color: #eee7f7;
          text-align: left;
          padding: 12px 14px;
          border-radius: 12px;
          cursor: pointer;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        nav button:hover {
          background: rgba(255, 255, 255, 0.08);
        }

        nav button.active {
          background: #7c3aed;
          color: white;
        }

        nav button span {
          font-size: 18px;
        }

        .bottom {
          margin-top: auto;
        }

        .bottom a {
          color: #fff;
          opacity: 0.75;
          text-decoration: none;
          font-size: 13px;
          padding: 10px;
          display: block;
        }

        .content {
          margin-left: 250px;
          width: calc(100% - 250px);
          padding: 30px;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        h1 {
          margin: 0;
          font-size: 30px;
        }

        .topbar p {
          margin: 6px 0 0;
          color: #777;
        }

        .viewSite {
          background: #ffd83d;
          color: #24113d;
          padding: 11px 16px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 700;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .card {
          background: white;
          border-radius: 18px;
          padding: 22px;
          box-shadow: 0 5px 20px rgba(40, 20, 70, 0.06);
        }

        .cardIcon {
          font-size: 28px;
        }

        .card h2 {
          margin: 15px 0 4px;
          font-size: 28px;
        }

        .card p {
          margin: 0;
          color: #777;
        }

        .empty {
          background: white;
          border-radius: 20px;
          padding: 60px 25px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(40, 20, 70, 0.06);
        }

        .emptyIcon {
          font-size: 48px;
        }

        .empty h2 {
          margin: 15px 0 8px;
        }

        .empty p {
          color: #777;
        }

        @media (max-width: 800px) {
          .sidebar {
            width: 75px;
            padding: 15px 10px;
          }

          .logo div:not(.logoIcon),
          nav button:not(.active)::after,
          nav button {
            font-size: 0;
          }

          nav button span {
            font-size: 20px;
          }

          .content {
            margin-left: 75px;
            width: calc(100% - 75px);
            padding: 18px;
          }

          .cards {
            grid-template-columns: repeat(2, 1fr);
          }

          .viewSite {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .cards {
            grid-template-columns: 1fr;
          }

          h1 {
            font-size: 24px;
          }
        }
      `}</style>
    </main>
  );
}

function Dashboard() {
  const stats = [
    ["🏪", "Stores", "0"],
    ["📦", "Products", "0"],
    ["🔥", "Deals", "0"],
    ["🎟️", "Coupons", "0"],
  ];

  return (
    <>
      <div className="cards">
        {stats.map(([icon, name, count]) => (
          <div className="card" key={name}>
            <div className="cardIcon">{icon}</div>
            <h2>{count}</h2>
            <p>{name}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 25 }} className="empty">
        <div className="emptyIcon">🚀</div>
        <h2>LutoDeals Admin</h2>
        <p>
          Your content management system will be connected to
          Supabase next.
        </p>
      </div>
    </>
  );
}

function ComingSoon({ title }: { title: string }) {
  return (
    <div className="empty">
      <div className="emptyIcon">⚙️</div>
      <h2>Manage {title}</h2>
      <p>
        The {title.toLowerCase()} editor will be connected to
        the Supabase database in the next step.
      </p>
    </div>
  );
}
