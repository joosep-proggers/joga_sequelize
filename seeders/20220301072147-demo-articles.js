'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('Articles', [{
        name: 'Introduction to Ashtanga',
        slug: 'introduction-to-ashtanga',
        image: 'ashtanga.jpg',
        body: `<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. A arcu cursus vitae congue mauris. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Sodales ut etiam sit amet nisl purus in mollis. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Diam vel quam elementum pulvinar etiam non. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim.

Bibendum enim facilisis gravida neque convallis a cras semper auctor. Eros in cursus turpis massa tincidunt dui ut. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Lectus proin nibh nisl condimentum id. Natoque penatibus et magnis dis parturient montes nascetur. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Dolor purus non enim praesent elementum. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Morbi tristique senectus et netus et malesuada fames. Eget arcu dictum varius duis at. Neque convallis a cras semper auctor neque vitae. Sed pulvinar proin gravida hendrerit lectus. Magna ac placerat vestibulum lectus mauris. Consectetur a erat nam at lectus urna. </p>`,
        published: '2020-01-08 15:02:30',
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Articles',[{
        name: 'Morning vinyasa flow routine',
        slug: 'morning-vinyasa-flow-routine',
        image: 'morning.jpg',
        body: `<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. A arcu cursus vitae congue mauris. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Sodales ut etiam sit amet nisl purus in mollis. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Diam vel quam elementum pulvinar etiam non. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim.

Bibendum enim facilisis gravida neque convallis a cras semper auctor. Eros in cursus turpis massa tincidunt dui ut. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Lectus proin nibh nisl condimentum id. Natoque penatibus et magnis dis parturient montes nascetur. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Dolor purus non enim praesent elementum. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Morbi tristique senectus et netus et malesuada fames. Eget arcu dictum varius duis at. Neque convallis a cras semper auctor neque vitae. Sed pulvinar proin gravida hendrerit lectus. Magna ac placerat vestibulum lectus mauris. Consectetur a erat nam at lectus urna. </p>`,
        published: '2020-05-28 15:02:55',
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Articles', [{
        name: 'Secrets of a yoga teacher',
        slug: 'secrets-of-a-yoga-teacher',
        image: 'yoga-teacher.jpg',
        body: `<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. A arcu cursus vitae congue mauris. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Sodales ut etiam sit amet nisl purus in mollis. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Diam vel quam elementum pulvinar etiam non. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim.

Bibendum enim facilisis gravida neque convallis a cras semper auctor. Eros in cursus turpis massa tincidunt dui ut. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Lectus proin nibh nisl condimentum id. Natoque penatibus et magnis dis parturient montes nascetur. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Dolor purus non enim praesent elementum. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Morbi tristique senectus et netus et malesuada fames. Eget arcu dictum varius duis at. Neque convallis a cras semper auctor neque vitae. Sed pulvinar proin gravida hendrerit lectus. Magna ac placerat vestibulum lectus mauris. Consectetur a erat nam at lectus urna. </p>`,
        published: '2020-04-14 15:02:55',
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
    ])
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Articles', null, {});
  }
};
