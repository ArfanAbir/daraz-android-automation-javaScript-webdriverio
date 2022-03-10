# daraz-android-automation-javaScript-webdriverio

                              Setup Requirement 
1.	NodeJS
2.	VS code 
3.	Appium Server
4.	Appium Inspector
5.	ADB Device (android virtual Device)
6.	Android Apps
7.	Mocha 
8.	allure

               Project Structure
1st: “npm init -y” for initialization the project 
2nd: “npm install @wdi/cli” for installing necessary dependency and node_module.
3rd:  setting up the up the driver and capabilities as the adb using. Here I use android platform version 12 and API 31. 

The desired capabilities will be like this as I use in this mobile app automation testing. 
 

After setting up the desired capabilities, I set up the driver which help me to select the locator using Appium Inspector. 
The scenario picture is given below.
 


Here I have include 20 test case. Although there should be a lot more than this. But all the others test case would be like this. 

Every Test case are completely independent as it’s own locator’s are declared in the same page. 
After doing this should run “ npm test” 

If you want to run the test as “SUITE” then you should run “npm test .\\test\\suite”

