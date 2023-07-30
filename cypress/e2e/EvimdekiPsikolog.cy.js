/// <reference types="Cypress"/>
describe('Evimdeki Psikolog', ()=>
{
it('Randevu Alma', ()=>{
// Taryıcıdan https://www.evimdekipsikolog.com/ adresine git
cy.visit("https://www.evimdekipsikolog.com/");
cy.viewport('macbook-15');
cy.get("#CookieAccept").click();

// Sayfanın ortasında bulunan "Alanında Uzman Online Psikologlar" alanından 3. psikolog için randevu al butonua tıkla.
cy.xpath("(//button[@class='bs4-btn bs4-btn-sm bs4-btn-blue bs4-btn-block'])[3]").click();

// " Görüntülü 45 dk." seçeneğini seç
cy.xpath("(//h5[@class='list-group-item-heading'])[1]").click();
cy.get("button[class='btn btn-success']").click();
cy.wait(2000);

// "Devam Et" butonuna tıkla
cy.xpath("(//button[@class='btn btn-next'])[1]").click();

// Görüşme Tarihini "01.08.2023" Görüşme saatini "21:00-22:00" olarak seç
//cy.get("input[placeholder='Görüşme Tarihi Seçiniz']").click();
cy.get('#ScheduleDate').click();
cy.get("tr:nth-child(6)>td:nth-child(2)").click();
cy.get('#ScheduleTime').select('21:00-22:00');

// "Devam Et" butonuna tıkla
cy.xpath("(//button[@class='btn btn-next'])[2]").click();

// Rumuz alanına "QA Hunt" yaz
cy.get("input[name='NickName']").type("QA Hunt");

// "Devam Et" butonuna tıkla
cy.xpath("(//button[@class='btn btn-next'])[3]").click();

// Telefon numarası alanına "5555555555" yaz
cy.wait(2000);
cy.get("div.form-group>input[id='PhoneNumber']").type("5555555555");

// "KVKK Metni, okudum, anladım, onaylıyorum." kutucuğunu işaretle
cy.get("input#chkKvkk").check();

// "Devam Et" butonuna tıkla
cy.xpath("(//button[@class='btn btn-next'])[4]").click();

// "Üyelik Sözleşmesini, okudum, anladım, kabul ediyorum. " alanının uyarı verdiğini kontrol et
cy.get("label#chkRegister-error").should("be.visible");

// "Üyelik Sözleşmesini, okudum, anladım, kabul ediyorum. " kutucuğunu işaretle
cy.get("input#chkRegister.error").check();

// "Devam Et" butonuna tıkla
cy.xpath("(//button[@class='btn btn-next'])[4]").click();

// Tamamla butonuna tıkla
cy.get("button#btnAppLogin.btn.btn-submit").click();

// Şifre alanının uyarı verdiğini kontrol et
cy.get("label#Password-error").should("be.visible");

// Şifre alanına "787878" yaz
cy.get("input[placeholder='Şifrenizi giriniz']").type("787878");
cy.get("button#btnAppLogin.btn.btn-submit").click();

// Geçersiz kod geldiğine dair uyarıyı kontrol et
cy.get("div[class='jconfirm-content']").invoke('text').then((text) => {
  const expectedText = 'Gecersiz sms kodu girdiniz, lütfen telefonunuza gelen kodu giriniz.';
  expect(text).to.equal(expectedText);
});
})



})