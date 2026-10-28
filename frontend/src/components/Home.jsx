import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <main className="home">
      <Link className="tool-tile" to="/converter">
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
      <Link className="tool-tile" to="/decipher">
        <span className="tile-art decipher-art" aria-hidden="true">
          <svg viewBox="0 0 180 180" role="presentation">
            <rect x="25" y="23" width="130" height="134" rx="25" fill="#fff" />
            <rect x="43" y="43" width="94" height="37" rx="10" fill="#192747" />
            <text
              x="90"
              y="68"
              textAnchor="middle"
              fill="#fff"
              fontSize="18"
              fontWeight="700"
              fontFamily="monospace"
            >
              KHOOR
            </text>
            <path
              d="M57 100h66m-8-8 8 8-8 8"
              fill="none"
              stroke="#192747"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="51"
              y="121"
              width="78"
              height="20"
              rx="10"
              fill="#9fe870"
            />
            <text
              x="90"
              y="136"
              textAnchor="middle"
              fill="#192747"
              fontSize="12"
              fontWeight="700"
              fontFamily="monospace"
            >
              HELLO
            </text>
          </svg>
        </span>
        <span className="tile-copy">
          <span className="tile-title">Caesar Cipher Solver</span>
          <span className="tile-description">
            Decode messages with an automatic shift
          </span>
        </span>
        <span className="tile-arrow" aria-hidden="true">
          ↗
        </span>
      </Link>
      <Link className="tool-tile" to="/pathfinder">
        <span className="tile-art pathfinder-art" aria-hidden="true">
          <svg viewBox="0 0 180 180" role="presentation">
            <rect x="22" y="22" width="136" height="136" rx="22" fill="#fff" />
            <path
              d="M52 42v96m32-96v96m32-96v96M42 52h96M42 84h96m-96 32h96"
              fill="none"
              stroke="#dce3ef"
              strokeWidth="4"
            />
            <path
              d="M52 116h32V84h32V52"
              fill="none"
              stroke="#f4c84e"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="42" y="106" width="20" height="20" rx="5" fill="#55c98b" />
            <rect x="106" y="42" width="20" height="20" rx="5" fill="#f27878" />
            <rect x="74" y="42" width="20" height="20" rx="5" fill="#263650" />
            <rect x="106" y="106" width="20" height="20" rx="5" fill="#263650" />
          </svg>
        </span>
        <span className="tile-copy">
          <span className="tile-title">Pathfinder</span>
          <span className="tile-description">
            Find a route around the walls
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
