import React, { Fragment } from 'react';
import Hero from './Hero';
import HomeContent from './HomeContent';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <div className="box cta">
        <p className="has-text-centered">
        <h1>What our customers have to say</h1>
        </p>
      </div>
      <HomeContent />
    </Fragment>
  )
}
