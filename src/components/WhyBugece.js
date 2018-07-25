import React from 'react';
import { Link } from 'react-router-dom';

const WhyBugece = () => (
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
                    <h1 className="display-3 why-title">NEDEN BU GECE</h1>
                    <p className="why-title-explain">
                    Müsterilerinizin ihtiyaçları doğrultusunda geliştirdiğimiz<br /> 2.0.0 yeni sürümü ile sorunsuz bir şekilde etkinliklerinizi 360° yönetin.
                    </p>
                </div>
            </div>
            <div className="row why-content">
                <div className="col-md-4">
                    <div className="node">
                        <div className="node-icon">
                            <img alt="" src={require('../img/Doge.png')} />
                        </div>
                        <div className=" node-title">
                            QR KOD TARAMASI
                        </div>
                        <div className="node-content">
                            Bilet QR kodlarını kolaylıkla tarayabilir ve kapı operasyonunuzu hızlandırabilirsiniz.
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="node">
                        <div className="node-icon">
                            <img alt="" src={require('../img/Doge.png')} />
                        </div>
                        <div className="node-title">
                            DAVETLİ LİSTESİ YÖNETİMİ
                        </div>
                        <div className="node-content">
                            Her an tek tuşla farklı davetli listeleri oluşturabilir; ekleme/çıkarma yapabilir ve davetli girişlerini anlık takip edebilirsiniz.
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="node">
                        <div className="node-icon">
                            <img alt="" src={require('../img/Doge.png')} />
                        </div>
                        <div className="node-title">
                            İSTATİKSEL RAPORLAMA
                        </div>
                        <div className="node-content">
                            Etkinlik analizi ve satış istatiklerini takip edebilir ve katılımcılar hakkında demografik bilgileri inceleyebilirsiniz.
                        </div>
                    </div>
                </div>
            </div>
            <div className="row why-content">
                <div className="col-md-2"></div>
                <div className="col-md-4">
                    <div className="node">
                        <div className="node-icon">
                            <img alt="" src={require('../img/Doge.png')} />
                        </div>
                        <div className="node-title">
                            ANINDA ERİŞİM
                        </div>
                        <div className="node-content">
                            Günlük satışları takip edebilir, yeni etkinlik biletleri yaratabilir, satış kanallarınızı anında güncelleyebilirsiniz.
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="node">
                        <div className="node-icon">
                            <img alt="" src={require('../img/Doge.png')} />
                        </div>
                        <div className="node-title">
                            EKİP YÖNETİMİ
                        </div>
                        <div className="node-content">
                            Ekibinizi kurup, ekip üyelerine özel görevler atayabilir, erişim kısıtlamaları getirebilirsiniz.
                        </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    </div>
);

export default WhyBugece;