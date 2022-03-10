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
    it('Should Sign In The Daraz App With Valid Credintial', async function () {
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
        const loginIcon = await driver.elementByXPath("//android.widget.TextView[@text='Login / Sign up']");
        expect(loginIcon).to.exist;
        loginIcon.click();
        await new Promise(res => setTimeout(res, 3000));
        const loginwithPassword = await driver.elementByXPath("//android.widget.TextView[@text='Login with password']");
        expect(loginwithPassword).to.exist;
        loginwithPassword.click();
        await new Promise(res => setTimeout(res, 3000));
        const mobileEmail = await driver.elementByXPath("//android.widget.EditText[@text='Mobile Number/Email']");
        expect(mobileEmail).to.exist;
        mobileEmail.setText('01713086265');
        await new Promise(res => setTimeout(res, 3000));
        const password = await driver.elementByXPath("//android.widget.EditText[@text='Password']");
        expect(password).to.exist;
        password.setText('abc123');
        await new Promise(res => setTimeout(res, 3000));
        const loginBtn = await driver.elementByXPath("//android.widget.Button[@text='Login']");
        expect(loginBtn).to.exist;
        loginBtn.click();
        await new Promise(res => setTimeout(res, 5000));
     
        await driver.quit();
    });
});
