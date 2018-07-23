import React from 'react';
import '../about.css';

export const AboutUs = () => (
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
        <div id="line"></div>
        <div className="container-fluid">
            <div className="row about-page">
            <div className="col-sm-6">
                <div className="row">
                <div className="col-sm-12 about-text">
                    <h1>Etkinliklerinizi yönetmenin en pratik yoluyla tanışın! </h1><br />
                    <p>BUGECE Manager, gece kulübü kütürünü, mekan işletmecilerini ve organizatörlerini anlayan, hedef kitle odaklı yeni nesil bilet platformudur.</p>
                    <p>Uygulamamız, gelişmiş web paneli ve kullanımı kolay özelliklerle, etkinlikleriniz en verimli şekilde yönetirken hizmet kalitenizi yükseltir.</p>
                    <p style={{fontWeight:'bold'}}>En köklü gece kulübü ve markaları tarafından kullanılan, sektör lideri biletleme platformunda, Türkiye'nin en geniş çevrimiçi elektronik müzik topluluğuna hitap ederek, etkinliklerinizin görünürlüğünü arttırın!</p>
                    <div className="row">
                    <div className="col-sm-6">

                    </div>
                    <div className="col-sm-6">

                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-sm-6 about-img">
                <img className="img-fluid" src="img/iphone.png"/>
            </div>
            </div>
        </div>
    </div>
);