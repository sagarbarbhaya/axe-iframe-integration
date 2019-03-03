var AxeBuilder = require('axe-webdriverjs');
var WebDriver = require('selenium-webdriver');
var AxeReports = require('axe-reports');
var async = require('async');
var chromeCapabilities = WebDriver.Capabilities.chrome();

var chromeOptions = {'args': ['--test-type']};
chromeCapabilities.set('chromeOptions', chromeOptions);

var driver = new WebDriver.Builder().withCapabilities(chromeCapabilities).build();
var url = "YourWebsiteNameGoesHere";
executeTask(driver, url);

async function executeTask (driver, url) {
    try{
       driver.get(url);
        driver.manage().window().maximize();
        //In case you have a website that requires login, provide credentials and login button details here
       // await driver.findElement(WebDriver.By.id("userName")).sendKeys("yourUserName");
       // await driver.findElement(WebDriver.By.id("password")).sendKeys("yourPassword");
       // await driver.findElement(WebDriver.By.className("yourLoginButtonClass")).click()
        driver.executeScript("var previewFrames = window.document.getElementsByTagName('iframe');\
        for(var i=0; i< previewFrames.length; i++){;\
        var previewFrame = previewFrames[i];\
        var script = window.document.createElement('script');\
        script.src = 'node_modules/axe-core/axe.min.js';\
        script.type = 'text/javascript';\
        previewFrame.appendChild(script);\
    };\
");
        let result = await AxeBuilder(driver).analyze();
        AxeReports.createCsvReport(result);
    }
    catch(err) {
        return Promise.reject(err);
    }
}
exports.executeTask = executeTask;



    