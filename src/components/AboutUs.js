import React from 'react';
import { Link } from 'react-router-dom';

class AboutUs extends React.Component{
    componentWillMount(){
        document.body.classList.toggle('about-background');
    }

    componentWillUnmount() {
        document.body.classList.remove('about-background');
    }

    render(){
        return(
            <div>
                <nav className="navbar navbar-default about-page-nav">
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
                <div id="about-line"></div>
                <div className="container-fluid about-page-nav">
                    <div className="row about-page">
                    <div className="col-md-6">
                        <div className="row">
                        <div className="col-md-12 about-text">
                            <h1>Etkinliklerinizi yönetmenin en pratik yoluyla tanışın! </h1><br />
                            <p>BUGECE Manager, gece kulübü kütürünü, mekan işletmecilerini ve organizatörlerini anlayan, hedef kitle odaklı yeni nesil bilet platformudur.</p>
                            <p>Uygulamamız, gelişmiş web paneli ve kullanımı kolay özelliklerle, etkinlikleriniz en verimli şekilde yönetirken hizmet kalitenizi yükseltir.</p>
                            <p style={{fontWeight:'bold'}}>En köklü gece kulübü ve markaları tarafından kullanılan, sektör lideri biletleme platformunda, Türkiye'nin en geniş çevrimiçi elektronik müzik topluluğuna hitap ederek, etkinliklerinizin görünürlüğünü arttırın!</p>
                            <div className="row">
                            <div className="col-md-6">

                            </div>
                            <div className="col-md-6">

                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 about-img">
                        <img alt="" className="img-fluid" src={require('../img/iphone.png')}/>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AboutUs;