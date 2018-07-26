import React from 'react';
import ContactForm from './ContactForm';

const Report = () => (
    <div>
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
            <div className="modal fade" id="myModal" role="dialog">
                <ContactForm />
            </div>
        </div>
    </div>
);

export default Report;