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
        const siteTitle = "Raz Gvili"
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

    <h2>
        Strengths <br/>  
    </h2>

    <Chips />
    
</header>

</section>

                <section id="one">

                    <header className="major">

                            <h2 >
                                About <br/>  
                            </h2>
                            
                            <div style={{display: "block !important"}}>
                            <h4>
                                <ul>
                                    <li>Enthusiastic about adding value with cutting-edge tech @ scale</li>
                                    <li>Learning as a hobby, passionately curious person</li>
                                    <li>Enjoy solving problems in collaboration with others</li>
                                </ul>

                                Looking for a new env to join the "Idea, Validate, implement, Optimize" cycle :)  <br/>
                                An ideal fit will be a blend of innovation, great people, large scale, and cool tech (preferably AI related). <br/><br/>

                                For non-professional fun, I love spending time with my amazing wife, traveling, meeting friends, reading, watching crime/sci-fi TV series/movies, working out, coding, gaming. <br/> 
                            </h4>
                            </div>
                            
                    </header>

                    </section>


                    
                <section id="one">

                <header className="major">

                    <h2 >
                        Favorites <br/>  
                    </h2>

                    <LastTV />

                    <br />
                        
                </header>

                </section>

                <section id="one">

                    <header className="major">

                        <h2 >
                            Experience &  Education <br/>  
                        </h2>

                        <Jobs />
                            
                    </header>

                </section>




            </div>

            </Layout>
        )
    }
}

export default HomeIndex