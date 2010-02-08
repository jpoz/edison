$.engineer.define('box', {
  defaults: {
    content: '',
    title: ''
  },
  structure: function(options) {
    var container = $('<div/>');
    
    var content = $('<div/>', {
      css: {
        'padding':'3px 5px',
        '-moz-border-radius-bottomleft': '5px', 
        '-webkit-border-bottom-left-radius': '5px',
        '-moz-border-radius-bottomright': '5px', 
        '-webkit-border-bottom-right-radius': '5px',
        'border':'3px solid #DBE7FD',
        'bacground':'white'
      },
      html: options.content
    });
    
    var header = $('<div/>', {
      css: {
        'text-align':'left',
        'padding':'3px 5px',
        '-moz-border-radius-topleft': '5px', 
        '-webkit-border-top-left-radius': '5px',
        '-moz-border-radius-topright': '5px', 
        '-webkit-border-top-right-radius': '5px',
        'background':'#BAD0FC'
      },
      html: options.title
    });
    
    header.prepend($.engineer.make('collapse_toggle', {collapseable: content}).css('margin-right','5px'));
    
    return container.append(header).append(content);
  }
});

$.engineer.define('collapse_toggle', {
  defaults: {
    collapseable: $('')
  },
  structure: function(options) {    
    return $('<div/>', {
      css: {
        '-moz-border-radius': '3px', 
        '-webkit-border-radius': '3px',
        'color':'#628DF5',
        'display':'inline-block',
        'background':'white',
        'width': '10px',
        'height': '10px',
        'line-height':'8px',
        'text-align':'center',
        'margin-top': '-2px',
        'font-size':'12px',
        'cursor':'pointer'
      },
      html: '-'
    });
  },
  behavior: function(options) {
    var self = this;
    var publicMethods = {};
    
    self.data('closed',false)
    
    publicMethods.toggle = function() {
      
      if (self.data('closed')) {
        options.collapseable.show();
        self.data('closed',false);
        self.html('-');
      } else {
        options.collapseable.hide();
        self.data('closed',true);
        self.html('+');
      }
    }
    
    self
    .click(publicMethods.toggle);
    
    return publicMethods;
  }
});

$.engineer.define('hud_tip',{
  defaults: {
    hud_text: 'hello'
  },
  behavior: function(options) {
    var self = this;
    var publicMethods = {};
    
    self.hud = $('<div/>', {
      css: {        
        '-moz-border-radius': '2px', 
        '-webkit-border-radius': '2px',
        'display':'none',
        'background':'black',
        'position':'absolute',
        'z-index':'10000',
        'color':'white',
        'padding':'5px',
        'opacity': '0.7'
      },
      html: options.hud_text
    })
    
    $('body').append(self.hud);

    self.hover(
      function(){
        var position = self.offset()
        var hud_height = self.hud.height();
        self.hud.css('top',position.top - hud_height - 15).css('left',position.left).fadeIn(200);
      },
      function(){
        self.hud.fadeOut(200);
      }
    )
    
    return publicMethods;
  }
});







