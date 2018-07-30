import React from 'react';
import ContactForm from './ContactForm';

const WhyBugece = () => (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-3 why-title">NEDEN BUGECE</h1>
                    <p className="why-title-explain">
                    Müsterilerinizin ihtiyaçları doğrultusunda geliştirdiğimiz<br /> 2.0.0 yeni sürümü ile sorunsuz bir şekilde etkinliklerinizi 360° yönetin.
                    </p>
                </div>
            </div>
            <div className="row why-content">
                <center>
                    <div className="col-md-4">
                        <div className="node">
                            <div className="node-icon">
                                <img alt="" src={require('../img/qr.png')} />
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
                                <img alt="" src={require('../img/davetli.png')} />
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
                                <img alt="" src={require('../img/istatistik.png')} />
                            </div>
                            <div className="node-title">
                                İSTATİKSEL RAPORLAMA
                            </div>
                            <div className="node-content">
                                Etkinlik analizi ve satış istatiklerini takip edebilir ve katılımcılar hakkında demografik bilgileri inceleyebilirsiniz.
                            </div>
                        </div>
                    </div>
                </center>
            </div>
            <div className="row why-content">
                <div className="col-md-2"></div>
                <div className="col-md-4">
                    <div className="node">
                        <div className="node-icon">
                            <img alt="" src={require('../img/bilet.png')} />
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
                            <img alt="" src={require('../img/ekip.png')} />
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
            <div className="modal fade" id="myModal" role="dialog">
                <ContactForm />
            </div>
        </div>
    </div>
);

export default WhyBugece;