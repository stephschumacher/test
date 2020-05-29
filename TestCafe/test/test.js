
//import { Selector, t } from 'testcafe';
import { Selector, ClientFunction, t } from 'testcafe';


// test('Fixture 1 - Test 1', () => {});
// test('Fixture 1 - Test 2', () => {});

// fixture `Fixture 2`;

// test('Fixture 2 - Test 1', () => {});
// test.skip('Fixture 2 - Test 2', () => {}); // This test is skipped
// test('Fixture 2 - Test 3', () => {});


// check a link goes where it should
fixture `Test URL`
    .page `http://localhost:4000`
    test('test url goes where it should', async t => {
        // 3 different ways of doing this
        const introTextLink = Selector('a').withText('Introduction');
        const introlink = Selector('a').withAttribute('href','introduction.html')  // find it with the href
        const link = Selector('.u-margiun-bottom-tiny') // find it from the classname above
            .child('a')
        await t
        .debug()
        .click(introTextLink)
        .expect(getLocation()).contains('introduction.html'); 

      
    });



    fixture.only `Test Introduction`
    .page `http://localhost:4000/Index.html`
        test('there are at least 8 tiles', async t => {

            const tiles = Selector('.c-tile__content');
            //console.log('Found ' + await tiles.count + ' tiles');
            await t.expect(tiles.count).gte(8);  
        });



        test('for each tile, the image file matches the title', async t => {
            const tiles = Selector('.c-tile__content');
            const tiletitle = Selector('.c-tile__overlay').child('p');
            const tileimg = Selector('.c-tile__poster');

            let imgname = '';
            let img;

            // go through all the tiles and get the titles
            for (let i = 0; i < await tiletitle.count; i++)
            {
                // build filename from title, converted to lower case and spaces removed
                imgname = 'assets/img/' + (await tiletitle.nth(i).innerText).toLowerCase() + '.jpeg';
                imgname = imgname.replace(/\s+/g, '');
                //console.log(await tiletitle.nth(i).innerText + ': ' + imgname);

                // match to image
                img = Selector(tileimg.withAttribute('src', imgname));
                await t.expect(img.exists).ok();
            }
        });


        test ('alt text exists for each image', async t => {
            const images = Selector('img');

            //console.log('There are ' + await images.count + ' images')

            //console.log();

            //await t.expect(images.withAttribute('src')).ok();



        });

            
        

            //await t.expect(tiletitle.count).gte(8);  

          //await t.expect(tiletitle.innerText).contains('Developer')


           // .expect(tileimg.withAttribute('href', 'assets/img/developer.jpeg').exists).ok();





fixture('Google test')
    .page('https://www.google.com')

    test('Look for the top link text with class', async t => {
            await t
                .typeText('input[name="q"]', 'testcafe')
                .click('input[name="btnK"]')
                .expect(Selector('div').withAttribute('class', 'TbwUpd NJjxre').innerText).contains('testcafe')
               

    });

    test('look for the paragraph text with class', async t => {
        await t
            .typeText('input[name="q"]', 'testcafe')
            .click('input[name="btnK"]')
            .expect(Selector('div').withAttribute('class', 's').innerText).contains('TestCafe')
               

        });



        
const getLocation = ClientFunction(() => document.location.href);
fixture `Wiki`
    .page `https://www.wikipedia.org/`;
    test('users can search', async t => {
      await t
      .click(Selector('#searchInput'))
      .typeText(Selector('#searchInput'), 'vikings')
      .click(Selector('button[type=submit]'))
      .expect(getLocation()).contains('en.wikipedia.org/wiki/Vikings');
    });







    // look for link using ID
fixture `Fulford cycles`
    .page `http://www.fulfordcycles.com`;

    test('Look for a link existing using ID', async t => {
    const textExists = Selector('#comp-j7g5cas4link').exists;

    await t
        .expect(textExists).ok();
    });


    test('Look for the STORE link - exact match', async t => {
        console.debug(await Selector('#comp-j7g5cas4link').textContent);

        await t
        .expect(Selector('#comp-j7g5cas4link').textContent).eql('STORE')


    });


    
fixture `Introduction test suite`
     .page `http://localhost:4000/introduction.html`;

    test('look for the Introduction header', async t => {
    await t
        .expect(Selector('h2').withAttribute('class', 'c-heading-bravo').innerText).eql('Introduction')
    });
    
    test('look for the paragraph', async t => {
        const textExists = Selector('p.c-text-body').exists;
        await t
        .expect(textExists).ok()
    });
    
    
    test('look for the image container', async t => {
        const textExists = Selector('div.c-bezel').exists;
        await t
        .expect(textExists).ok()
    });



////
////
    const newsLinkScore = Selector('.storylink').parent().find('.score');

    const newsLink = Selector('.storylink')

    const generalNewsLink = Selector(className => {
        return document.getElenentsByClassName(className); // this returns all of them
    });

    fixture('selectores demo')
        .page('https://news.ycombinator.com/')

    test('selectore-test-1', async t => {
        if(generalNewsLink('storylink').nth(4).exists){  // get the 4th link
            console.log('link exists')
        }

        if(newsLink.withText('JSON').exists) { 
            console.log('link exists!')
        }

       if(newsLinkScore.exists){  
           for(let i=0; i<newsLinkScore.count; i++)
                console.log((i+1) + ": " + await newsLinkScore.nth(i).textContent)
        }
    });

        test('Assertion API', async t => {
            await t.expect(Selector('table').count).eql(4, 'Text should be 4', {timeout: 500});

            await t.expect(Selector('table').count).notEql(40); // there are 4 tables

            await t.expect(Selector('#hnmain').exists).ok();  // by id
            await t.expect(Selector('#hnmainxxx').exists).notOk();
            await t.expect(Selector('#pagespace').getAttribute('style')).typeOf('string');           
            await t.expect(Selector('#pagespace').getAttribute('style')).notTypeOf('object');
            await t.expect(Selector('#pagespace').count).gt(0); // there is 1
            await t.expect(Selector('#pagespace').count).gte(1);
            await t.expect(Selector('#pagespace').count).lt(2);
            await t.expect(Selector('#pagespace').count).within(1,10);
            await t.expect(Selector('#pagespace').count).notWithin(10,100);

            await t.expect('steph').match(/^s/);  // starts with s
            await t.expect('steph').notMatch(/^b/); //doesn't start with b
        });
   




// fixture `Getting Started`
//     .page `http://devexpress.github.io/testcafe/example`;

// test('My first test', async t => {
//     await t
//         .typeText('#developer-name', 'John Smith')
//         .click('#submit-button')

//         // Obtain the text of the article header
//         .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
// });


// test('My first test', async t => {
//     await t
//         .click('#tried-test-cafe')
// });

// fixture `Getting Started2`
// .page `https://js.devexpress.com`;
// test('Take Screenshot test', async t => {
//     await t
//         .takeScreenshot()
//         .takeElementScreenshot('.map-container');
// });





// test('it contains the text store', async t => {
//     const text = await Selector('#comp-j7g5cas4label').innerText;
//   console.log(text);
       

// });