var webdriverio = require('webdriverio');
var options = {
    port: 4723,
    desiredCapabilities: {
        'browserName': '',
        'appiumVersion': '1.4.16',
        'deviceName': 'Nexus4_4.4.2',
        'device-orientation': 'portrait',
        'platformVersion': '19',
        'platformName': 'Android',
        'app': "C:/dev/appium/E2E/ContactManager.apk"
    }
};


describe("first spec", function() {
    var browser = {};
    this.timeout(99999);
    
    before(function() {
        return browser = webdriverio.remote(options).init();
        });
    
    it("Should test something", function() {
        console.log("hello");
        
    });
    
});