import React from 'react';
import { Link } from 'react-router-dom';

const Report = () => (
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
            <li className="btn btn-warning" style={{color: '#fff', backgroundColor:'#f0c713'}}>GİRİŞ YAP</li>
            </ul>
        </nav>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-3 why-title">DETAYLI RAPORLAMA</h1>
                    <p className="why-title-explain">
                    Etkinlik ve mekan sahipleri ile organizatörler, anında ve detaylı rapolamayla<br /> satış kanallarına ve katılımcıların demografik verilerine ulaşabilirler.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-2 report-content">
                    <img alt="" src={require('../img/iphone.png')}/>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-12 report-content-text">
                            <h3 style={{textAlign:'center'}}> HIZLI TAKİP </h3>
                            <p className="report-content-explain">
                            Tek tuşla katılımcı verilerine ve satış istatiklerine ulaşın.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 report-content-text">
                            <h3 style={{textAlign:'center'}}> SATIŞ İSTATİSTİKLERİ </h3>
                            <p className="report-content-explain">
                            Kolay arayüzümüz ile satış kanallarınızı tek ekrandan kontrol edin.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h3 style={{textAlign:'center'}}> DEMOGRAFİK VERİ </h3>
                            <p className="report-content-explain">
                            Anında güncellenen verilerle katılımcılarınız hakkında detaylı bilgiye sahip olun.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 report-content">
                    <img alt="" src={require('../img/iphone.png')}/>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    </div>
);

export default Report;