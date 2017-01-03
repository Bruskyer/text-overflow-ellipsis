(function($) {
  $.fn.textOverflowEllipsis = function() {
    var $this = $(this),
      $full = $this.find(".full"),
      $short = $this.find(".short"),
      lines = $this.attr("data-lines"),
      thisHeight = ( Math.ceil(parseInt($this.css("line-height"))) * lines ),
      fulltext = $full.text(),
      $viewMore = $(this).next();

    $this.css("height", thisHeight + "px");
    if ($full.height() > thisHeight) {
      $full.addClass("hide");
      var shortText;
      $short.text(fulltext);
      while ($short.height() > thisHeight) {
        $short.text(function(index, text) {
          return shortText = text.replace(/\W*\s(\S)*$/, '...');
        })
      }
      $short.text(shortText);
    }
    
    
    $viewMore.on("click",function() {
      var $descripEl = $(this).prev(),
          $fullEl = $descripEl.find(".full"),
          $shortEl = $descripEl.find(".short"),
          fullH = "",
          shortH = "";

      if ( $fullEl.hasClass("hide") ) {
        $descripEl.find(".full").removeClass("hide");
        $descripEl.find(".short").addClass("hide");
        fullH = $fullEl.height();
        $descripEl.animate({height:fullH});
      }
      else {
        shortH = $shortEl.removeClass("hide").height();
        $shortEl.addClass("hide");
        $descripEl.animate({height:shortH}, 500, function(){
          $descripEl.find(".full").addClass("hide");
          $descripEl.find(".short").removeClass("hide");
        });
      }
    });
    
  };
})(jQuery);