import React from 'react'
import PositionedSnackbar from './Snackbar'
import PageView from './Analytics'

class Footer extends React.Component {
    render() {
        return (
            <div style= {{ textAlign:"center"}}>
                <div id="footer">

                    <span style={{fontSize:'70px'}}>🚀</span>
                    <br/><br/><br/>
                    <div className="inner">
                        <ul className="copyright">
                            <li>Design: <a href="http://html5up.net" target="_blank">HTML5 UP</a></li>
                            <li>Development: <a href="https://www.linkedin.com/in/raz-gvili/" target="_blank">Raz Gvili</a></li>
                        </ul>
                        <br/>
                    </div> 
                </div>
                <PositionedSnackbar />
                <PageView />
                
            </div>  
        )
    }
}

export default Footer
