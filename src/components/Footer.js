import React from 'react';

const Footer = () => (        
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
                                <a href="https://itunes.apple.com/tr/app/bugece/id1161536177?l=tr&mt=8"><img alt="App Store'dan indirin" className="store-img" src={require('../img/appStore.png')}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
);

export default Footer;