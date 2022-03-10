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
    it('Should Open The Daraz Mobile App', async function () {
        this.timeout(300 * 3000);
        const element = await driver.elementByXPath("//android.widget.TextView[@text='Bangladesh']");
        expect(element).to.exist;
        element.click();
        await new Promise(res => setTimeout(res, 3000));
        const language = await driver.elementByXPath('//android.widget.Button[@text="ENGLISH"]');
        expect(language).to.exist;
        language.click();
        await new Promise(res => setTimeout(res, 10000));
        const Banner = await driver.elementByXPath(" //android.widget.Button[@text='SKIP TO THE APP >']");
        expect(Banner).to.exist;
        Banner.click();
        await new Promise(res => setTimeout(res, 3000));
     
        await driver.quit();
    });

});
