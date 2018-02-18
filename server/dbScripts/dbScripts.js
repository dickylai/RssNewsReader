var conn = new Mongo();
var db = conn.getDB('rssReader');

db.rssLink.drop();
db.media.drop();
db.category.drop();

db.createCollection('media');
db.media.insert({value: 'BBC'});
db.media.insert({value: 'CNN'});

db.createCollection('category');
db.category.insert({value: 'World'});
db.category.insert({value: 'Technology'});
db.category.insert({value: 'Health'});
db.category.insert({value: 'Entertainment'});
db.category.insert({value: 'Sports'});
db.category.insert({value: 'Arts'});

db.createCollection('rssLink');
db.rssLink.insert({
  media: db.media.findOne({value: 'BBC'})._id,
  categories: [db.category.findOne({value: 'World'})._id],
  link: 'http://feeds.bbci.co.uk/news/world/rss.xml'
});
db.rssLink.insert({
  media: db.media.findOne({value: 'BBC'})._id,
  categories: [db.category.findOne({value: 'Technology'})._id],
  link: 'http://feeds.bbci.co.uk/news/technology/rss.xml'
});
db.rssLink.insert({
  media: db.media.findOne({value: 'BBC'})._id,
  categories: [db.category.findOne({value: 'Health'})._id],
  link: 'http://feeds.bbci.co.uk/news/health/rss.xml'
});
db.rssLink.insert({
  media: db.media.findOne({value: 'BBC'})._id,
  categories: [
    db.category.findOne({value: 'Entertainment'})._id,
    db.category.findOne({value: 'Arts'})._id
  ],
  link: 'http://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml'
});
db.rssLink.insert({
  media: db.media.findOne({value: 'CNN'})._id,
  categories: [db.category.findOne({value: 'World'})._id],
  link: 'http://rss.cnn.com/rss/edition_world.rss'
});
db.rssLink.insert({
  media: db.media.findOne({value: 'CNN'})._id,
  categories: [db.category.findOne({value: 'Technology'})._id],
  link: 'http://rss.cnn.com/rss/edition_technology.rss'
});
db.rssLink.insert({
  media: db.media.findOne({value: 'CNN'})._id,
  categories: [db.category.findOne({value: 'Sports'})._id],
  link: '	http://rss.cnn.com/rss/edition_sport.rss'
});
db.rssLink.insert({
  media: db.media.findOne({value: 'CNN'})._id,
  categories: [db.category.findOne({value: 'Entertainment'})._id],
  link: 'http://rss.cnn.com/rss/edition_entertainment.rss'
});
