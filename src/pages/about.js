import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function About() {
  return (
    <Layout
      title="About Danish Javed"
      description="About Danish Javed, Senior Software Engineer and author of Works in Prod.">
      <main className="wip-about-page">
        <section className="wip-about-hero" aria-labelledby="about-title">
          <p className="wip-eyebrow">About the author</p>
          <h1 id="about-title">Danish Javed</h1>
          <p>
            Senior Software Engineer writing about the parts of software delivery
            that survive contact with production.
          </p>
          <div className="wip-about-links" aria-label="Author links">
            <a
              href="https://github.com/ambersariya"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/danish-javed/"
              target="_blank"
              rel="noopener noreferrer">
              LinkedIn
            </a>
            <Link to="/">Read Works in Prod</Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
