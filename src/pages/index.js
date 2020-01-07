import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import Chips from './../components/Topstrip'
import Jobs from './../components/Jobs'
import LastTV from './../components/LastTV'

// <div className="icons" style={{display:"inline"}}><span className="icon fa-space-shuttle"></span></div>
// <div className="icons" style={{display:"inline"}}><span className="icon fa-grav"></span></div>
// <div className="icons" style={{display:"inline"}}><span className="icon fa-briefcase"></span></div>

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Gatsby Starter - Strata"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                <section id="one">

                    <header className="major">

                            <h2 >
                                About <br/>  
                            </h2>
                            
                            <div style={{display: "block !important"}}>
                            <h4>
                                I'm a "passionately curious" person, always carrying a book, just in case. <br />
                                The above goes well with my tendency to be data-informed. 
                                
                                <br/><br/>
                                Since I was a kid, learning new things was exciting. I use to wait anxiously for the monthly popular science magazine, which never let down with unusual technological solutions for various problems. <br/><br/>

                                Presently im looking for a new environment to utilize my diverse set of skills. <br/>
                                An ideal fit will be a blend of innovation, great people, cool tech, data-orientation, continually growing & improving. <br/><br/>

                                For non-professional fun, I love spending time with my amazing wife, traveling, meeting friends, reading, watching crime/sci-fi TV series/movies, working out, coding. <br/> 
                            </h4>
                            </div>
                            
                    </header>

                    </section>

                    <section id="one">

                        <header className="major">

                            <h2>
                                Strengths <br/>  
                            </h2>

                            <Chips />
                            
                        </header>

                    </section>

                <section id="one">

                    <header className="major">

                        <h2 >
                            Experience <br/>  
                        </h2>

                        <Jobs />
                            
                    </header>

                </section>


                <section id="one">

                    <header className="major">

                        <h2 >
                            Latest & Greatest <br/>  
                        </h2>

                        <LastTV />

                        <br />
                            
                    </header>

                </section>


            </div>

            </Layout>
        )
    }
}

export default HomeIndex