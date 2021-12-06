import React from 'react'

export default function HomeContent() {
  return (
    <section className="container">
        <div className="columns features">
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <p>“This is awesome for serial movers like us! It's always such a headache to gather all these documents from different drs before a move!” -Courtney M.</p>
                            <p><a href="/">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <p>“Being able to see all of your records in one place with easy access will make life easier for the patients as well as the doctors and it is just so convenient.”  -Julia C. </p>
                            <p><a href="/">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady">
                     <div className="card-content">
                        <div className="content">
                            <p>“$5 is comparable to a Pandora account subscription. Seems well worth the value as it is more than just access to music but will help you manage your health.” -Kelsy S. </p>
                            <p><a href="/">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
