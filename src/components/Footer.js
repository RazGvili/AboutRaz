import React from 'react'
import PositionedSnackbar from './Snackbar'

class Footer extends React.Component {
    render() {
        return (
            <div style= {{ textAlign:"center"}}>
                <div id="footer">
                    <div className="inner">
                        <ul className="copyright">
                            <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                            <li><span>Development: Raz Gvili</span></li>
                        </ul>
                    </div>
                </div>
                <PositionedSnackbar />
            </div>  
            
        )
    }
}

export default Footer
