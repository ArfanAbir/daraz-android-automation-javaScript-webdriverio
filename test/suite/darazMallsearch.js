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
    it('Should Select The Darazmall as Buy Category', async function () {
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
            const search = await driver.elementById("com.daraz.android:id/laz_homepage_search_view");
            expect(search).to.exist;
            search.click();
            await new Promise(res => setTimeout(res, 8000));
            const searchInput = await driver.elementById("com.daraz.android:id/search_input_box");
            expect(searchInput).to.exist;
            searchInput.setText("samsung");
            await new Promise(res => setTimeout(res, 8000));
            const searchBtn = await driver.elementById("com.daraz.android:id/search_button");
            expect(searchBtn).to.exist;
            searchBtn.click();
            await new Promise(res => setTimeout(res, 10000));
            const darazmallsearch = await driver.elementByXPath("//android.widget.TextView[@text='DarazMall']");
            expect(darazmallsearch).to.exist;
            darazmallsearch.click();
            await new Promise(res => setTimeout(res, 5000));
       
            await driver.quit();
    });
});
