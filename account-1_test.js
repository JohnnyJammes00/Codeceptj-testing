Feature('Googlesearch');

Scenario('TC1-Google Search',  ({ I }) => {
    
    I.amOnPage('https://www.google.com/');
    
    //reject cookies
    I.click('//*[@id="W0wltc"]/div');
    
    I.fillField('q', 'celtra inc');
    I.pressKey('Enter');   
    I.waitForNavigation();

    //xpath starts indexes from 1
    I.click(locate('.g').find('a').at(3));
    I.waitForNavigation();
    I.see('Celtra');
    
});

Scenario('TC2-Celtra Creative', ({ I }) => {

    const id = 'eneter your id here';
    const secret = 'enter your secret here';
    const PLATFORM_DOMAIN = 'celtra.com';

    const campaignName = 'campaign'+ Math.floor((Math.random(10)*1000).toString());
    const creativeName = 'creative'+ Math.floor((Math.random(10)*1000).toString());
    
    I.amOnPage(`https://${id}:${secret}@hub.${PLATFORM_DOMAIN}/api/me`);
    I.wait(2);
    I.amOnPage('https://zanhocevar.celtra.com/#campaigns');

    
    const country = name => locate('.option').withText(name);
    const campaign = title => `span[title="${title}"]`;
    const checkbox = checkboxName => locate('.row').withText(checkboxName);
    
    //create campaign
    I.click('button[data-action="createCampaign"]')
    I.waitForElement(locate('h1').withText('Create New Campaign'), 3);
    I.fillField('name', campaignName);
    I.fillField('Type to search...', '1111');
    I.pressKey('Enter');
    I.wait(1);

    I.click('input[name="countries"]');
    I.click(country('Albania'));
    I.click('button[data-action="goToStep"]');
    I.click('button[data-action="goToStep"]'),
   
    I.click(checkbox('Brand Awareness'));
    I.click(checkbox('Digital Traffic'));
    I.click(checkbox('Online Shopping'));
    I.click('button[data-target="people-involved"]');
    I.waitForElement('button.button.green',3)

    I.click('button[data-action="create"]');
    I.waitForText('You have successfully created a new campaign', 3);
    I.click('.close-btn');
    
    I.waitForText(campaignName, 3);
    I.click(campaign(campaignName));

    //create creative
    I.waitForVisible('button[data-action="createNewCreative"]', 3);
    I.click('button[data-action="createNewCreative"]');
    I.click('#fromBlank');

    I.waitForVisible('#RICH',3);
    I.click('#RICH');
    I.waitForVisible('div[data-testilda-id="Universal Banner"]',3);
    I.moveCursorTo('.path');
    I.moveCursorTo('#Banner');
    I.wait(1);

    I.click('div[data-testilda-id="Universal Banner"]')
    I.waitForText('Please select',3);
    I.click('Please select');
    I.wait(1);
    I.click('//*[@id="initial-unit-size"]/div[3]/div[2]/div/div/div/div[2]/div[1]/div/div[1]/div[3]/div/div/div')
    I.click('div[class="dialog-button__container dialog-button__container--medium"]');

    I.waitForElement('.input');
    I.fillField('input', creativeName);
    I.click('div[class="dialog-button__text"]');
    I.waitForText('You have successfully created',3);
    I.see('You have successfully created');
    I.see(creativeName);




});
    
