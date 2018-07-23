import React from 'react';

export const Contact = () => (
    <div>
        <nav className="navbar navbar-default">
            <a className="navbar-brand" href="#">BUGECE</a>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="aboutUs.html">HAKKIMIZDA</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="whyBugeceManager.html">NEDEN BU GECE?</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="report.html">RAPORLAMA</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="contact.html">BİZE ULAŞIN</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="partners.html">PARTNERLERİMİZ</a>
            </li>
            <li className="btn btn-primary">BİRLİKTE ÇALIŞALIM</li>
            <li className="btn btn-warning">GİRİŞ YAP</li>
            </ul>
        </nav>
        <div className="container-fluid">
            <div className="row">
            <div className="col-sm-12">
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
                <div className="col-sm-5">
                <div className="row contact-content">
                    <div className="col-sm-12"><h1>BİZE ULAŞIN</h1></div>
                </div>
                <div className="row contact-content">
                    <div className="col-sm-12"><p>Daha fazla beklemeyin:<br />bizimle iletişime geçin!</p></div>
                </div>
                <div className="row contact-content">
                    <div className="col-sm-2"><img className="content-icon" src="img/doge.png" /></div>
                    <div className="col-sm-10">destek@bugece.co</div>
                </div>
                <div className="row contact-content">
                    <div className="col-sm-2"><img class="contact-content-icon" src="img/doge.png" /></div>
                    <div className="col-sm-10">Huzur Mah. Beyazıt Cad. No:15<br />Sarıyer/İstanbul 34396 Türkiye</div>
                </div>
                </div>
                <div className="col-sm-7 contact-right-content">
                <img className="contact-content-img" src="img/iphoneOnHand.png"/>
                </div>
            </div>
            </div>
        </div>
    </div>
);