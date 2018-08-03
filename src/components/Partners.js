import React from 'react';
import ContactForm from './ContactForm';

const Partners = () => (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-3 why-title">PARTNERLERİMİZ</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/zorlupsm.png')} alt="" /></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/suma.png')} alt="" /></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/kafes.png')} alt="" /></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/hypnos.png')} alt="" /></div>
                <div className="col-md-2"></div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/fg.png')} alt="" /></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/geziMakinasi.png')} alt="" /></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/analogKultur.png')} alt="" /></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/labelProject.png')} alt="" /></div>
                <div className="col-md-2"></div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/isolate.png')} alt="" /></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/beatgate.png')} alt="" /></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/jetOn.png')} alt="" /></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/btn.png')} alt="" /></div>
                <div className="col-md-2"></div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/mm.png')} alt="" /></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/studio.png')} alt="" /></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/mu.png')} alt="" /></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/wIst.png')} alt="" /></div>
                <div className="col-md-2"></div>
            </div>
            <div className="col-md-12">
                <h1 className="partner-end">VE DAHA FAZLASI...</h1>
            </div>
            <div className="modal fade" id="myModal" role="dialog">
                <ContactForm/>
            </div>
        </div>
        <footer className="page-footer font-small indigo">
            <div className="container text-center text-md-left">
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <a href="https://www.facebook.com/bugececo/" className="fa fa-facebook"></a>
                        <a href="https://twitter.com/bugececo" className="fa fa-twitter"></a>
                        <a href="https://www.instagram.com/bugececo/" className="fa fa-instagram"></a>
                    </div>
                    <div className="col-md-4 mx-auto">
                        <img className="footer-img"/> <br/><br/>
                        Copyright © BUGECE Turizm ve Organizasyon A.Ş.<br /> All rights reserved.
                    </div>
                    <div className="col-md-4 mx-auto">
                        <div className="row" id="footer-store">
                            <div className="col-md-5">
                                <a href="https://play.google.com/store/apps/details?id=com.app.bugece&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"><img alt="Google Play'den indirin" className="store-img" src="https://play.google.com/intl/en_us/badges/images/generic/tr_badge_web_generic.png"/></a>
                            </div>
                            <div className="col-md-5">
                                <a href="https://itunes.apple.com/tr/app/bugece/id1161536177?l=tr&mt=8"><img alt="App Store'dan indirin" className="store-img" src={require('../img/appStore.svg')}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
);

export default Partners;