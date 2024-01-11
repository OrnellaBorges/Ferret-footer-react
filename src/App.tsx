import { useState } from "react";
import "./App.scss";
import "./reset.css";
import "./variables.css";

function App() {
  const [isSublistOpen, setIsSublistOpen] = useState<boolean>(false);

  return (
    <footer className="footer">
      <section className="footer__list">
        <h3 className="footer__list__title-level3">N</h3>
        <ul>
          <li>R</li>
          <li>C</li>
          <li>d</li>
          <li>F</li>
          <li>G</li>
          <li>L</li>
          <li>M</li>
          <li>T</li>
        </ul>
      </section>
      <section className="footer__foldable-list">
        <ul className="footer__foldable-list__list">
          <li
            onClick={() => setIsSublistOpen((prevState) => !prevState)}
            className="footer__foldable-list__list__element"
          >
            <h3 className="footer__foldable-list__title-level3">N</h3>
            <ul
              className={`footer__foldable-list__list__element__sublist${
                isSublistOpen ? "--active" : ""
              }`}
            >
              <li>a</li>
              <li>b</li>
              <li>c</li>
              <li>d</li>
              <li>e</li>
            </ul>
          </li>
          <li className="footer__foldable-list__list__element">
            <h3 className="footer__foldable-list__title-level3">P</h3>
          </li>
          <li className="footer__foldable-list__list__element">
            <h3 className="footer__foldable-list__title-level3">F</h3>
          </li>
        </ul>
      </section>
      <section className="footer__grid">
        <ul className="footer__grid__list">
          <li className="footer__grid__list__element">
            <img src="https://dummyimage.com/80x60" alt="marstercard logo" />
          </li>
          <li className="footer__grid__list__element">
            <img src="https://dummyimage.com/100x50" alt="visa logo" />
          </li>
          <li className="footer__grid__list__element">
            <img
              src="https://dummyimage.com/60x60"
              alt="american express logo"
            />
          </li>
          <li className="footer__grid__list__element">
            <img src="https://dummyimage.com/120x50" alt="partner logo" />
          </li>
          <li className="footer__grid__list__element">
            <img src="https://dummyimage.com/100x50" alt="paypal logo" />
          </li>
          <li className="footer__grid__list__element">
            <img src="https://dummyimage.com/100x30" alt="dhl logo" />
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default App;
