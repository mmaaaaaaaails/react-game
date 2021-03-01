import React from 'react';
import './Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <>
                <footer className="footer">
                    <div className="footer__rss">
                        <a href="https://rs.school/react/" className="footer__info">RS School 2021 Q1</a>
                        <span className="footer__icon"></span>
                    </div>
                    <div className="footer__author">
                        <a href="https://github.com/mmaaaaaaaails" className="footer__info">Vadim Dudko</a>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer;
