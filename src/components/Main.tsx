import { useState } from "react";
import Banner from "./Banner";
import CardsSection from "./CardsSection";
import Form from "./Form";
import LinksList from "./LinksList";
import { type Link } from "../types/Types";

const Main = () => {
  const [links, setLinks] = useState<Link[]>([]);
  return (
    <main>
      <article className="article article--top">
        <div className="article__inner">
          <section className="section">
            <h1 className="section__title">More than just shorter links</h1>
            <p className="section__text section__text--bigger">
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <span>
              <a href="#get" className="button button--hero">
                Get Started
              </a>
            </span>
          </section>
          <div className="hero">
            <img
              className="hero__img"
              src="/images/illustration-working.svg"
              alt="working"
            />
          </div>
        </div>
        <Form setLinks={setLinks} links={links} />
      </article>
      <article className="article article--bottom">
        <div className="article__inner">
          <section className="section section--links-list">
            <LinksList Links={links} />
          </section>
          <section className="section section--dash">
            <h2 className="section__title section__title--small">
              Advanced Statistics
            </h2>
            <p className="section__text">
              Track how your links are performing across the web with our
              advanced statistics dashboard
            </p>
          </section>
          <CardsSection />
        </div>
      </article>
      <Banner />
    </main>
  );
};

export default Main;
