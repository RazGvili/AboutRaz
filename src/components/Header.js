import React from 'react'
import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'
//import Button   from '@material-ui/core/Button'
//import {CopyToClipboard} from 'react-copy-to-clipboard'

/*
<CopyToClipboard text={"razik.gvili@gmail.com"} onCopy={() => alert("d")}>
<Button style={{color: "rgba(255, 255, 255, 0.4)", textTransform: "none"}}>Copy my mail to clipboard</Button>
</CopyToClipboard> 
*/

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div style= {{ textAlign:"center"}}>
                    <div className="image avatar"><img src={avatar} alt="" /></div>
                    {/* <h1><strong style= {{fontSize: "1.5rem"}}> Raz Gvili </strong></h1> */}
                    <div id="footer">
                        <ul className="icons">
                            <li><a href="https://www.linkedin.com/in/raz-gvili/" target="_blank" className="icon fa-linkedin"><span className="label">Linkedin</span></a></li>
                            <li><a href="mailto:razik.gvili@gmail.com" target="_top" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                            <li><a href="https://github.com/RazGvili" target="_blank" className="icon fa-git"><span className="label">GitHub</span></a></li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
