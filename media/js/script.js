(function ($) {
  var boiler = {};
  $(document).ready(function() {
  // Begin domReady

    boiler.dom = {
      body: $('body'),
      header: $('#header'),
      logo: $('#logo'),
      search: $('#header-search'),
      navToggle: $('#nav-toggle'),
      navigation: $('#primary-navigation'),
      page: $('#page'),
      preface: $('#preface_wrapper'),
      main: $('#main'),
      left: $('#leftside_wrapper'),
      contentZone: $('#content_wrapper'),
      content: $('#content'),
      right: $('#rightside_wrapper'),
      postscript: $('#postscript_wrapper'),
      footer: $('#footer')
    }

    boiler.dom.navToggle.on({
      click: function(e) {
        e.preventDefault();
        boiler.dom.navigation.slideToggle('fast');
      }
    });
  // End DomReady
  });
})(jQuery);
