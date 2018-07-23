import React from 'react';

export const Report = () => (
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
                    <h1 className="display-3 why-title">DETAYLI RAPORLAMA</h1>
                    <p className="why-title-explain">
                    Etkinlik ve mekan sahipleri ile organizatörler, anında ve detaylı rapolamayla<br /> satış kanallarına ve katılımcıların demografik verilerine ulaşabilirler.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4 report-content">
                    <img src="img/iphone.png" align="right"/>
                </div>
                <div className="col-sm-4">
                    <div className="row">
                        <div className="col-sm-12 report-content-text">
                            <h3 style={{textAlign:'center'}}> HIZLI TAKİP </h3>
                            <p className="report-content-explain">
                            Tek tuşla katılımcı verilerine ve satış istatiklerine ulaşın.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 report-content-text">
                            <h3 style={{textAlign:'center'}}> SATIŞ İSTATİSTİKLERİ </h3>
                            <p className="report-content-explain">
                            Kolay arayüzümüz ile satış kanallarınızı tek ekrandan kontrol edin.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 style={{textAlign:'center'}}> DEMOGRAFİK VERİ </h3>
                            <p className="report-content-explain">
                            Anında güncellenen verilerle katılımcılarınız hakkında detaylı bilgiye sahip olun.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 report-content">
                    <img src="img/iphone.png" align="left" />
                </div>
            </div>
        </div>
    </div>
);