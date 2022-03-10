var expect = require('chai').expect;
var wd = require('wd'),
    driver = wd.promiseChainRemote({
        host: 'localhost',
        port: 4723
    });

const desiredCaps = {
    platformName: 'Android',
    platformVersion: '12.0',
    deviceName: 'emulator-5554',
    app: "E:\\apk\\daraz.apk"
}


describe('Daraz Mobile Android ', function () {

    before(function () {
        this.timeout(300 * 1000);
        return driver.init(desiredCaps);
    });

    after(function () {
        console.log("quitting");
    });
    it('Should Change The language from English to Bangla', async function () {
        this.timeout(300 * 1000);
        const element = await driver.elementByXPath("//android.widget.TextView[@text='Bangladesh']");
        expect(element).to.exist;
        element.click();
        await new Promise(res => setTimeout(res, 1000));
        const language = await driver.elementByXPath('//android.widget.Button[@text="ENGLISH"]');
        expect(language).to.exist;
        language.click();
        await new Promise(res => setTimeout(res, 3000));
        const Banner = await driver.elementByXPath(" //android.widget.Button[@text='SKIP TO THE APP >']");
        expect(Banner).to.exist;
        Banner.click();
        await new Promise(res => setTimeout(res, 3000));
        const Acoount = await driver.elementByXPath("//android.widget.TextView[@text='Account']");
        expect(Acoount).to.exist;
        Acoount.click();
        await new Promise(res => setTimeout(res, 3000));
        const English = await driver.elementByXPath("//android.widget.TextView[@resource-id='com.daraz.android:id/tv_settings']");
        expect(English).to.exist;
        English.click();
        await new Promise(res => setTimeout(res, 3000));
        const Language = await driver.elementByXPath("//android.widget.TextView[@text='ভাষা - Language']");
        expect(Language).to.exist;
        Language.click();
        await new Promise(res => setTimeout(res, 3000));
        const Bangla = await driver.elementByXPath("//android.widget.RadioButton[@text='বাংলা']");
        expect(Bangla).to.exist;
        Bangla.click();
        await new Promise(res => setTimeout(res, 3000));
        const Apply = await driver.elementByXPath("//android.widget.Button[@text='APPLY']");
        expect(Apply).to.exist;
        Apply.click();
        await new Promise(res => setTimeout(res, 3000));
     
        await driver.quit();
    });
});
