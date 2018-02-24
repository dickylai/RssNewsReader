var request = require('request');
var cheerio = require('cheerio');

var rssLinkScrapeController = (models) => {

  var getLinksFromPage = (page, callback) => {
    var links = [];
    var url = page.link;
    console.log(page.media);
    request(url, (err, response, html) => {
      if (err) {
        console.log('Cannot get the rss page: ' + url);
      } else {
        var $ = cheerio.load(html);
        $('a[href$=".xml"]').each((i, el) => {
          links.push({
            media: page.media._id,
            // TODO: category determination
            link: $(el).attr('href')
          });
        });
      }
      callback(err, links);
    });
  };

  var saveLinksToDb = (links, callback) => {
    models.rssLinkModel.collection.insert(links, {ordered:false}, (err) => {
      callback(err);
    })
  };

  var scrapeLinks = (req, res) => {
    models.rssPageModel.find({})
    .populate('media')
    .exec((findErr, pages) => {
      if (findErr) return res.status(500).send(findErr);
      pages.forEach((page, index, array) => {
        getLinksFromPage(page, (scrapeErr, links) => {
          if (scrapeErr) return res.status(500).send(scrapeErr);
          saveLinksToDb(links, (saveErr) => {
            if (saveErr) return res.status(500).send(saveErr);
            res.json({success: true});
          });
        });
      });
    });
  };

  return {
    scrapeLinks: scrapeLinks
  };
}

module.exports = rssLinkScrapeController;
