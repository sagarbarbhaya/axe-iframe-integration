# axe-iframe-integration
## This project can be used to inject axe-core script into the iframes on your website

### Steps to get started -

1. git clone {this repository}
2. cd {your folder}
3. npm install
4. npm install axe-webdriverjs
5. npm install selenium-webdriver
6. npm install axe-reports
7. npm install async
8. node axe.js => results.csv

This will create a csv report of your website's audit against accessibility rules provided by the axe-core library.

If you inspect your website in a browser, you will see the following script tag inserted in every iframe element. 
``` 
<script src="node_modules/axe-core/axe.min.js"></script>
```

Customizable code in the project -

```
var url = "YourWebsiteNameGoesHere";
```

```
await driver.findElement(WebDriver.By.id("userName")).sendKeys("yourUserName");
await driver.findElement(WebDriver.By.id("password")).sendKeys("yourPassword");
await driver.findElement(WebDriver.By.className("yourLoginButtonClass")).click()
```
