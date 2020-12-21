declare var $: any;

export class HelperService {
    public doAnimations(elements : any) : void {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each( ()=> {
          var $this = $(this);
          var $animationDelay = $this.data('delay');
          var $animationType = 'animated ' + $this.data('animation');
          $this.css({
            'animation-delay': $animationDelay,
            '-webkit-animation-delay': $animationDelay
          });
          $this.addClass($animationType).one(animationEndEvents,  ()=> {
            $this.removeClass($animationType);
          });
        });
      }

      public galleryIsotope() {
        console.log("**************",$('.gallery').length)
        if ($('.gallery').length) {
            $('.gallery').each((index, el)=> {
                var $this = $(this),
                    $isotope = $this.find('.gallery-isotope'),
                    $filter = $this.find('.gallery-cat');

                    console.log("******$isotope*******",$isotope)
                    console.log("******$filter*******",$filter)


                if ($isotope.length) {
                    var isotope_run = (filter)=> {
                        $isotope.isotope({
                            itemSelector: '.item-isotope',
                            filter: filter,
                            percentPosition: true,
                            masonry: {
                                columnWidth: '.item-size'
                            },
                            transitionDuration: '0.6s',
                            hiddenStyle: {
                                opacity: 0
                            },
                            visibleStyle: {
                                opacity: 1
                            }
                        });
                    }

                    $filter.on('click', 'a', (event)=> {
                        event.preventDefault();
                        $(this).parents('ul').find('.active').removeClass('active');
                        $(this).parent('li').addClass('active');
                        isotope_run($(this).attr('data-filter'));
                    });

                    isotope_run('*');
                }
            });
        }
    }
}
