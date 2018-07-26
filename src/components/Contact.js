import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => (
    <div>
        <div className="container-fluid">
            <div className="row">
            <div className="col-md-12">
                <h1 className="display-3 why-title">SİSTEMDE YERİNİZİ ALIN!</h1>
                <p className="why-title-explain" style={{margin: '2% 0px'}}>
                Etkinliklerinizi hemen satmaya başlamak için formumuzu doldurun, size en kısa zamanda ulaşalım.
                </p>
                <div className="wrapper">
                <button type="button" style={{background:'#67afe0', borderColor: '#67afe0'}} className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">MANAGER/ETKİNLİK BİLGİ FORMU</button>
                </div>
                <div id="line"></div>
            </div>
            
            

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
                            <div className="col-md-2 contact-icon"><img alt="" className="content-icon" src={require('../img/Doge.png')} /></div>
                            <div className="col-md-10">destek@bugece.co</div>
                        </div>
                        <div className="row contact-content">
                            <div className="col-md-2 contact-icon"><img alt="" className="contact-content-icon" src={require('../img/Doge.png')}/></div>
                            <div className="col-md-10">Huzur Mah. Beyazıt Cad. No:15<br />Sarıyer/İstanbul 34396 Türkiye</div>
                        </div>
                    </div>
                    <div className="col-md-7 contact-right-content">
                        <img className="contact-content-img" alt="" src={require('../img/iphoneOnHand.png')}/>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="myModal" role="dialog">
                <ContactForm />
            </div>
        </div>
    </div>
);

export default Contact;