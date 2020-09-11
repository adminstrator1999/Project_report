import React, { Component } from "react";
import Footer from "./footer";

class Index extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section className="home_banner_area">
          <div className="banner_inner d-flex align-items-center">
            <div className="overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-6 col-xl-5 offset-xl-7">
                  <div className="banner_content">
                    <h3>
                      Biznesinggizdagi hisob kitoblarni
                      <br />
                      tezroq & aniqroq
                      <br />
                      hisoblang
                    </h3>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="service-area area-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="single-service">
                  <div className="service-icon">
                    <i className="ti-pencil-alt"></i>
                  </div>
                  <div className="service-content">
                    <h5>O'ziga xos dizayn</h5>
                    <p>
                      Biz mijozlarimizning talabidan kelib chiqqan holda o'ziga
                      hos dizaynlar yaratamiz, qanday biznes faoliyati bilan
                      shug`ullansangiz shunga mos ajoyib dizaynlar.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="single-service">
                  <div className="service-icon">
                    <i className="ti-image"></i>
                  </div>
                  <div className="service-content">
                    <h5>Oson yechim</h5>
                    <p>
                      Biznesingiz jarayonida hisob kitob qilishdan
                      charchadingizmi? Demak bu qulaylik aynan siz uchun,
                      kerakli ma'lumotlarni kiritsangiz bas, natijasi sizni
                      qoyil qoldiradi?!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="single-service">
                  <div className="service-icon">
                    <i className="ti-headphone-alt"></i>
                  </div>
                  <div className="service-content">
                    <h5>Mijozlarga ko'mak</h5>
                    <p>
                      Agarda dasturimizni ishlatishda qandaydir tushunmovchilik
                      yoki qiyinchiliklarga duch keladigan bo'lsangiz biz sizga
                      ko'maklashishdan mamnun bo'lamiz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-area area-padding-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="area-heading">
                  <h4>Ultimate & Perfect </h4>
                  <h6>
                    Continue improving till it <b>PERFECT</b>{" "}
                  </h6>

                  <p>
                    Turli xil saytlar, online platformalar, turli xil dasturlar
                    yaratish va ularni optimallashtirish uchun harakat qilamiz.
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-6 col-lg-6">
                    <div className="single-about">
                      <div className="about-icon">
                        <i className="ti-thought"></i>
                      </div>
                      <div className="single-about-content">
                        <h5>Xavfsizlik</h5>
                        <p>
                          Sizning ruxsatingizsiz hech kim mahsulotingizni ko`ra
                          olmaydi hamda sota olmaydi.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="single-about">
                      <div className="about-icon">
                        <i className="ti-truck"></i>
                      </div>
                      <div className="single-about-content">
                        <h5>Mukammallik</h5>
                        <p>
                          Qandaydir xatolik ro`y berganini aniqlasangiz bizga
                          bog`laning.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="feature-area area-padding bg_one">
          <div className="container">
            <div className="row align-items-center">
              <div className="offset-lg-6 col-lg-6">
                <div className="area-heading light">
                  <h4>
                    Dasturni telefon orqali <br></br>ishlata olasiz
                  </h4>
                  <p style={{ paddingLeft: "20px" }}>
                    Bu dastur telefon orqali ishlashga ham mo`ljallangan bo'lib,
                    uning dizayni ham telefon hajmiga qarab o'zgaradi.
                  </p>
                </div>
                <div className="row">
                  <div className="col-">
                    <div className="single-feature d-flex">
                      <div className="feature-icon">
                        <i className="ti-layers"></i>
                      </div>
                      <div className="single-feature-content">
                        <h5>Qulaylik</h5>
                        <p>
                          Sizga kunlik, haftalik, oylik, balki yillik yoki
                          istalgan oraliq muddatdagi qilgan xarajat va
                          foydalaringiz kerakmi?, shunchaki xisob-kitob
                          tugmasini bosing.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-">
                    <div className="single-feature d-flex">
                      <div className="feature-icon">
                        <i className="ti-layers"></i>
                      </div>
                      <div className="single-feature-content">
                        <h5>Imkoniyat</h5>
                        <p>
                          Mahsulot yoki tovarlaringizni kimga va qachongacha
                          nasiyaga sotganingini eslolmayabsizmi?, unda nasiya
                          tugmasini bosing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="statics-area area-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="image-box">
                  <img
                    src="{% static 'assets/img/banner/about3.png' %}"
                    alt=""
                  />
                </div>
              </div>

              <div className="offset-lg-1 col-lg-6">
                <div className="area-heading">
                  <h4>Ultimate & Perfect </h4>
                  <h6>
                    Continue improving till it <b>PERFECT</b>{" "}
                  </h6>

                  <p>
                    Xohlaganingizcha mahsulotlarni istalgan kategoriyalarga
                    bo'lib, uning ro'yxatini o'zingizda saqlang.
                  </p>
                </div>
                <div className="single-data">
                  <i className="ti-paint-bucket"></i>
                  <p>Ajoyib imkoniyat</p>
                </div>
                <div className="single-data">
                  <i className="ti-check-box"></i>
                  <p>Aniq xisob-kitob</p>
                </div>
                <div className="single-data">
                  <i className="ti-ruler-pencil"></i>
                  <p>Doimiy ro'yhat</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="brands-area area-padding-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="owl-carousel brand-carousel">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell">
                      <img src="../img/logo/1.png" alt="" />
                    </div>
                  </div>
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell">
                      <img src="../img/logo/2.png" alt="" />
                    </div>
                  </div>
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell">
                      <img src="../img/logo/3.png" alt="" />
                    </div>
                  </div>
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell">
                      <img src="../img/logo/4.png" alt="" />
                    </div>
                  </div>
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell">
                      <img src="../img/logo/5.png" alt="" />
                    </div>
                  </div>
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell">
                      <img src="../img/logo/3.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index;
