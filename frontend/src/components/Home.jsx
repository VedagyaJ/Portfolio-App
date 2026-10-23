import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <main className="home">
      <Link className="converter-tile" to="/converter">
        <span className="tile-art" aria-hidden="true">
          <svg viewBox="0 0 180 180" role="presentation">
            <rect x="22" y="18" width="136" height="144" rx="28" fill="#fff" />
            <rect
              x="39"
              y="35"
              width="102"
              height="34"
              rx="10"
              fill="#192747"
            />
            <text
              x="90"
              y="59"
              textAnchor="middle"
              fill="#fff"
              fontSize="20"
              fontWeight="700"
              fontFamily="monospace"
            >
              1010
            </text>
            <rect x="39" y="84" width="44" height="30" rx="9" fill="#9fe870" />
            <rect x="97" y="84" width="44" height="30" rx="9" fill="#ffbd66" />
            <rect x="39" y="126" width="44" height="18" rx="9" fill="#b39aff" />
            <rect x="97" y="126" width="44" height="18" rx="9" fill="#ff8f8f" />
            <path
              d="M90 88v38m-8-8 8 8 8-8"
              fill="none"
              stroke="#192747"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="tile-copy">
          <span className="tile-title">Number Converter</span>
          <span className="tile-description">
            Decimal to binary & hexadecimal
          </span>
        </span>
        <span className="tile-arrow" aria-hidden="true">
          ↗
        </span>
      </Link>
    </main>
  );
};

export default Home;
