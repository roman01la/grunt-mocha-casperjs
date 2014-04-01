describe('Google searching', function() {
  before(function() {
    casper.start('http://www.google.fr/');
  });

  it('should retrieve 10 or more results', function() {
    casper.then(function() {
      'Google'.should.matchTitle;
      'form[action="/search"]'.should.be.inDOM.and.be.visible;
      this.fill('form[action="/search"]', {
        q: 'casperjs'
      }, true);
    });

    casper.waitForUrl(/q=casperjs/, function() {
      (/casperjs/).should.matchTitle;
    });
  });

  it('viewport should be 1920x1080', function() {
    (function(){return window.innerWidth;}).should.evaluate.to.equal(1920);
    (function(){return window.innerHeight;}).should.evaluate.to.equal(1080);
  });

  it('User-Agent string must be \'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)\'', function() {
    (function(){return unescape(navigator.userAgent);})
      .should.evaluate.to.equal('Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)');
  });
});
