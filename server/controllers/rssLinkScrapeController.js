var request = require('request');
var cheerio = require('cheerio');

var rssLinkScrapeController = (models) => {

  var getLinksFromPage = (page, callback) => {
    var links = [];
    var url = page.link;
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

  var saveLinkToDb = (link, callback) => {
    models.rssLinkModel.findOneAndUpdate(
      {link: link.link},
      link,
      {upsert: true},
      (err, link) => callback(err, !link)
    );
  };

  var saveLinksToDb = (links, callback) => {
    var linksAdded = 0;
    var linksProcessed = 0;
    links.forEach((link, index, array) => {
      saveLinkToDb(link, (err, isNew) => {
        if (err) return callback(err, linksAdded);
        if (isNew) linksAdded++;
        if(++linksProcessed === array.length) callback(null, linksAdded);
      });
    });
  };

  var scrapeLinks = (req, res) => {
    console.log("Start handling scrape links request...");
    models.rssPageModel.find({})
    .populate('media')
    .exec((findErr, pages) => {
      if (findErr) return res.status(500).send(findErr);
      pages.forEach((page, index, array) => {
        getLinksFromPage(page, (scrapeErr, links) => {
          if (scrapeErr) return res.status(500).send(scrapeErr);
          saveLinksToDb(links, (saveErr, linksAdded) => {
            if (saveErr) return res.status(500).send(saveErr);
            var response = {
              success: true,
              linksAdded: linksAdded
            };
            console.log("Handled scrape links request.");
            res.json(response);
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
