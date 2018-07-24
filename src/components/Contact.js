import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => (
    <div>
        <nav className="navbar navbar-default">
            <a className="navbar-brand" href="">BUGECE</a>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link style={{transform:'translateY(30%)'}} className="nav-link nav-link-buttons"  to='/'>HAKKIMIZDA</Link>
            </li>
            <li className="nav-item">
                <Link to='/info' style={{transform:'translateY(30%)'}} className="nav-link nav-link-buttons" >NEDEN BU GECE?</Link>
            </li>
            <li className="nav-item">
                <Link to='/report' style={{transform:'translateY(30%)'}} className="nav-link nav-link-buttons" >RAPORLAMA</Link>
            </li>
            <li className="nav-item">
                <Link to='/contact' style={{transform:'translateY(30%)'}} className="nav-link nav-link-buttons" >BİZE ULAŞIN</Link>
            </li>
            <li className="nav-item">
                <Link to='/partners' style={{transform:'translateY(30%)'}} className="nav-link nav-link-buttons" >PARTNERLERİMİZ</Link>
            </li>
            <li className="btn btn-primary" style={{background:'#67afe0', borderColor: '#67afe0'}}>BİRLİKTE ÇALIŞALIM</li>
            <li className="btn btn-warning">GİRİŞ YAP</li>
            </ul>
        </nav>
        <div className="container-fluid">
            <div className="row">
            <div className="col-md-12">
                <h1 className="display-3 why-title">SİSTEMDE YERİNİZİ ALIN!</h1>
                <p className="why-title-explain" style={{margin: '2% 0px'}}>
                Etkinliklerinizi hemen satmaya başlamak için formumuzu doldurun, size en kısa zamanda ulaşalım.
                </p>
                <div className="wrapper">
                <button type="button" className="btn btn-primary btn-lg">MANAGER/ETKİNLİK BİLGİ FORMU</button>
                </div>
            </div>
            <div id="line"></div>

            </div>
            <div className="row contact-content" style={{marginTop: '3%'}}>
            <div className="contact-left-content">
                <div className="col-md-5">
                <div className="row contact-content">
                    <div className="col-md-12"><h1>BİZE ULAŞIN</h1></div>
                </div>
                <div className="row contact-content">
                    <div className="col-md-12"><p>Daha fazla beklemeyin:<br />bizimle iletişime geçin!</p></div>
                </div>
                <div className="row contact-content">
                    <div className="col-md-2"><img alt="" className="content-icon" src={require('../img/Doge.png')} /></div>
                    <div className="col-md-10">destek@bugece.co</div>
                </div>
                <div className="row contact-content">
                    <div className="col-md-2"><img alt="" className="contact-content-icon" src={require('../img/Doge.png')}/></div>
                    <div className="col-md-10">Huzur Mah. Beyazıt Cad. No:15<br />Sarıyer/İstanbul 34396 Türkiye</div>
                </div>
                </div>
                <div className="col-md-7 contact-right-content">
                <img className="contact-content-img" alt="" src={require('../img/iphoneOnHand.png')}/>
                </div>
            </div>
            </div>
        </div>
    </div>
);

export default Contact;