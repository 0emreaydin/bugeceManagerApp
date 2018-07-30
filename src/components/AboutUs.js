import React from 'react';
import ContactForm from './ContactForm';

class AboutUs extends React.Component{
    render(){
        return(
            <div style={{height:'100%'}}>
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
                                <div className="row" id="store">
                                    <div className="col-md-1"></div>
                                    <div className="col-md-5">
                                        <a href="https://play.google.com/store/apps/details?id=com.app.bugece&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"><img alt="Google Play'den indirin" className="store-img" src="https://play.google.com/intl/en_us/badges/images/generic/tr_badge_web_generic.png"/></a>
                                    </div>
                                    <div className="col-md-5">
                                        <a href="https://itunes.apple.com/tr/app/bugece/id1161536177?l=tr&mt=8"><img alt="App Store'dan indirin" className="store-img" src={require('../img/appStore.svg')}/></a>
                                    </div>
                                    <div className="col-md-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 about-img">
                        <img alt="" className="img-fluid" src={require('../img/hakkimizda.png')}/>
                    </div>
                    </div>
                    <div className="modal fade" id="myModal" role="dialog">
                        <ContactForm />
                    </div>
                </div>
            </div>
        );
    }
}
export default AboutUs;