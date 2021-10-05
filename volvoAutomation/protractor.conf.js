let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const failFast = require('protractor-fail-fast');
exports.config = {
    plugins: [
        failFast.init(),
    ],
    framework: 'jasmine',
    directConnect: true,
    multiCapabilities: [
        {
          browserName: "chrome",
          unxpectedAlertBehaviour: "accept",
          chromeOptions: {
            //args: ["--headless", "--window-size=1920x1200"],
            args: ["--start-maximized"],
            //'debuggerAddress': 'localhost:58787'
          },
          // shardTestFiles: true,
          // maxInstances: 6
        },
      ],
    specs: ["specs/homePage.spec.ts"],
    SELENIUM_PROMISE_MANAGER: false,
    params: {
        env: "https://www.volvocars.com/intl/v/car-safety/a-million-more"
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 60000
    },
    onPrepare() {
        require("ts-node").register({
            project: require("path").join(__dirname, "./tsconfig.json"), // Relative path of tsconfig.json file
        });
        jasmine.getEnv().addReporter(
            new SpecReporter({
                suite: {
                    displayNumber: true // display each suite number (hierarchical)
                },
                spec: {
                    displayPending: false, // display each pending spec
                    displayDuration: true // display each spec duration
                },
                summary: {
                    displaySuccesses: true, // display summary of all successes after execution
                    displayFailed: true, // display summary of all failures after execution
                    displayPending: true // display summary of all pending specs after execution
                }
            })
        );
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
        jasmine.getEnv().beforeEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
    },
    afterLaunch: function () {
        failFast.clean(); // Removes the fail file once all test runners have completed.
    }
}













