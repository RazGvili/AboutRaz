import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import Chips from './../components/Topstrip'
import Jobs from './../components/Jobs'
import LastTV from './../components/LastTV'

import Button from '@material-ui/core/Button'

import Paper from '@material-ui/core/Paper'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'


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

                                <h2 style={{fontWeight: '700'}}>
                                    About <br/>  
                                </h2>
                                
                                <div style={{display: "block !important"}}>
                                    <h4>
                                        <ul>
                                            <li>Enthusiastic about adding value with cutting-edge tech @ scale</li>
                                            <li>Learning as a hobby, passionately curious person</li>
                                            <li>Team player, happy, fun to be with</li>
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

                            <h2 style={{fontWeight: '700'}}>
                                Strengths <br/>  
                            </h2>

                            <Chips />

                        </header>

                    </section>

                    <section id="one">

                        <Paper elevation={3} style={{padding: '10px', backgroundColor: '#edefef', width: '80%' , margin: 'auto', maxWidth: '500px'}}>

                            <header className="major">

                                <div style={{textAlign: 'center'}}>
                                    <h3 style={{fontWeight: '600'}}> Working on something new... </h3> 

                                    <Button
                                        variant="outlined"
                                        style={{textTransform: 'none', fontWeight: '600'}}
                                        onClick={() => {window.open('https://deciidy.web.app/', '_blank')}}
                                        endIcon={<EmojiObjectsIcon />}
                                        size="large"                                    
                                    >
                                        deciidy
                                    </Button>
                                    
                                    <br/><br/>

                                    <h4> React, Node, Express, MongoDB, Heroku, Firebase, Docker </h4>

                                </div>
                                
                            </header>

                        </Paper>

                    </section>


                    <section id="one">

                        <header className="major">

                            <h2 style={{fontWeight: '700'}}>
                                Goodies <br/>  
                            </h2>

                            <LastTV />

                            <br />
                                
                        </header>

                    </section>

                <section id="one">

                    <header className="major">

                        <h2 style={{fontWeight: '700'}}>
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