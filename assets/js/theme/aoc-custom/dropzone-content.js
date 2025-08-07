import $ from 'jquery';

export default function () {
   function grMoveHtmlToDropzones() {
        // console.log('PageManager.gr_moveHtmlToDropzones: start'); 
        $('.gr-dropzone').each(function moveDropzoneContent() {
            // console.log('PageManager.gr_moveHtmlToDropzones: dropzone content found');
            const $this = $(this);
            const zoneId = $this.data('gr-zone');
            // console.log(`PageManager.gr_moveHtmlToDropzones: target zone=${zoneId}`);
            if (zoneId) {
                const $zone = $(`#${zoneId}`);
                if ($zone.length > 0) {
                    // console.log(`PageManager.gr_moveHtmlToDropzones: Moving zone to dropzone #${zoneId}`);
                    $zone.html($this.html());   // copy the html to where it should be
                } else {
                    console.warn(`PageManager.gr_moveHtmlToDropzones: dropzone #${zoneId} not found.`);
                }
            } else {
                console.warn('PageManager.gr_moveHtmlToDropzones: dropzone %o has no target.', $this);
            }
            $this.remove();            // remove the html from its temporary location
        });
    // console.log('PageManager.gr_moveHtmlToDropzones: end');
    }

    $(document).ready(function(){
		grMoveHtmlToDropzones();
        setTimeout(function(){
            var dropzone_container = $('.dropzone-container');
                dropzone_container.each(function(){
                    const $_this = $(this);
                    if($_this.children().length > 0){
                       
                    }else{
                       let con =  $_this.attr('id');
                       $('[panedropzone="' + con + '"]').remove();
                       $_this.remove();
                     
                    }
                });

                const $tabs_title = $('.dropzone-title');
               if($tabs_title){
                    $tabs_title.on('click',function(){
                        var dropid = $(this).attr('dropzone-id');
                        $('#'+dropid).toggle('toggle-show');
                    });
               }
        },1000);
	});	
}    
