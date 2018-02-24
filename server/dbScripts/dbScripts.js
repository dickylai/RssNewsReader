var conn = new Mongo();
var db = conn.getDB('rssReader');

db.rssPage.drop();
db.rssLink.drop();
db.media.drop();
db.category.drop();

var media = [
  {value: 'BBC'},
  {value: 'CNN'}
];

db.createCollection('media');
db.media.insert(media, {ordered:false});

var categories = [
  {value: 'World'},
  {value: 'Technology'},
  {value: 'Health'},
  {value: 'Entertainment'},
  {value: 'Sports'},
  {value: 'Arts'}
];

db.createCollection('category');
db.category.insert(categories, {ordered:false});

var pages = [
  {
    media: db.media.findOne({value: 'BBC'})._id,
    link: 'http://www.bbc.com/news/10628494'
  }
];

db.createCollection('rssPage');
db.rssPage.insert(pages, {ordered:false});

db.createCollection('rssLink');
// db.rssLink.insert({
//   media: db.media.findOne({value: 'BBC'})._id,
//   categories: [db.category.findOne({value: 'World'})._id],
//   link: 'http://feeds.bbci.co.uk/news/world/rss.xml'
// });
// db.rssLink.insert({
//   media: db.media.findOne({value: 'BBC'})._id,
//   categories: [db.category.findOne({value: 'Technology'})._id],
//   link: 'http://feeds.bbci.co.uk/news/technology/rss.xml'
// });
// db.rssLink.insert({
//   media: db.media.findOne({value: 'BBC'})._id,
//   categories: [db.category.findOne({value: 'Health'})._id],
//   link: 'http://feeds.bbci.co.uk/news/health/rss.xml'
// });
// db.rssLink.insert({
//   media: db.media.findOne({value: 'BBC'})._id,
//   categories: [
//     db.category.findOne({value: 'Entertainment'})._id,
//     db.category.findOne({value: 'Arts'})._id
//   ],
//   link: 'http://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml'
// });
// db.rssLink.insert({
//   media: db.media.findOne({value: 'CNN'})._id,
//   categories: [db.category.findOne({value: 'World'})._id],
//   link: 'http://rss.cnn.com/rss/edition_world.rss'
// });
// db.rssLink.insert({
//   media: db.media.findOne({value: 'CNN'})._id,
//   categories: [db.category.findOne({value: 'Technology'})._id],
//   link: 'http://rss.cnn.com/rss/edition_technology.rss'
// });
// db.rssLink.insert({
//   media: db.media.findOne({value: 'CNN'})._id,
//   categories: [db.category.findOne({value: 'Sports'})._id],
//   link: '	http://rss.cnn.com/rss/edition_sport.rss'
// });
// db.rssLink.insert({
//   media: db.media.findOne({value: 'CNN'})._id,
//   categories: [db.category.findOne({value: 'Entertainment'})._id],
//   link: 'http://rss.cnn.com/rss/edition_entertainment.rss'
// });
