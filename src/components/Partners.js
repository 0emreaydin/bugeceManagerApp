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
    </div>
);

export default Partners;