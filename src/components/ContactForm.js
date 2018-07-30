import React from 'react';

const ContactForm = () => (
    <div>
        <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title" style={{textAlign:'center'}}></h4>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" className="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios"/>
                                                    <label className="custom-control-label" htmlFor="defaultUnchecked">Mekan İşletmecisi</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" className="custom-control-input" id="defaultChecked" name="defaultExampleRadios" checked/>
                                                    <label className="custom-control-label" htmlFor="defaultChecked">Organizatör</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><br /> 
                                <h4>KİŞİSEL BİLGİLERİNİZ</h4>
                                <div className="row">
                                    <div className="col-md-5">Adınız Soyadınız</div>
                                    <div className="col-md-7">
                                        <input className="form-control input-sm" id="inputsm" type="text"/>
                                    </div> 
                                </div>
                                <div className="row">
                                    <div className="col-md-5">Firmanızın Adı</div>
                                    <div className="col-md-7">
                                        <input className="form-control input-sm" id="inputsm" type="text"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5">Telefon Numarası</div>
                                    <div className="col-md-7">
                                        <input className="form-control input-sm" id="inputsm" type="text"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5">E-posta Adresi</div>
                                    <div className="col-md-7">
                                        <input className="form-control input-sm" id="inputsm" type="text"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5">Firmanızdaki Görev/Rol</div>
                                    <div className="col-md-7">
                                        <input className="form-control input-sm" id="inputsm" type="text"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-7">Yılda kaç etkinlik düzenliyorsunuz ?</div>
                                    <div className="col-md-5">
                                        <input className="form-control input-sm" id="inputsm" type="text"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5">Referans etkinlik linki</div>
                                    <div className="col-md-7">
                                        <input className="form-control input-sm" id="inputsm" type="text"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h4>ETKINLIK BİLGİLERİNİZ</h4>
                                <div className="row">
                                    <div className="col-md-5">Etkinlik Adı</div>
                                    <div className="col-md-7">
                                        <input className="form-control input-sm" id="inputsm" type="text"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5">Etkinlik Tarihi</div>
                                    <div className="col-md-7">
                                        <input className="form-control input-sm" id="inputsm" type="text"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5">Mekan Adı</div>
                                    <div className="col-md-7">
                                        <input className="form-control input-sm" id="inputsm" type="text"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5">Adres</div>
                                    <div className="col-md-7">
                                        <input className="form-control input-sm" id="inputsm" type="text"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5">Şehir</div>
                                    <div className="col-md-7">
                                        <input className="form-control input-sm" id="inputsm" type="text"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5">Mekan Kapesitesi</div>
                                    <div className="col-md-7">
                                        <input className="form-control input-sm" id="inputsm" type="text"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5">İlk etkinlik tarihi nedir ?</div>
                                    <div className="col-md-7">
                                        <input className="form-control input-sm" id="inputsm" type="text"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5">Biletlerinizi ne zaman satışa sunmayı planlıyorsunuz?</div>
                                    <div className="col-md-7">
                                        <input className="form-control input-sm" id="inputsm" type="text"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5">Ortalama bilet hedefiniz nedir?</div>
                                    <div className="col-md-7">
                                        <input className="form-control input-sm" id="inputsm" type="text"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5">Ortalama bilet fiyatınız nedir?</div>
                                    <div className="col-md-7">
                                        <input className="form-control input-sm" id="inputsm" type="text"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5">Eklemek istediğiniz notlar</div>
                                    <div className="col-md-7">
                                        <input className="form-control input-sm" id="inputsm" type="text"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                            <br/>
                                <div style={{position: 'absolute', transform: 'translateX(-40%)', left:'45%',marginBottom:'50px'}}>
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">BUGECE Kullanım Koşullarını ve gizlilik kurallarını kabul ediyorum.</label>
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default">Gönder</button>
                    </div>
                </div>
            </div>
    </div>
);
export default ContactForm;