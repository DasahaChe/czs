$(document).ready(function() {

    $( "html" ).on( "click",".change_lang", function(){ 

        $(".change_lang").removeClass("active");
        $(this).addClass("active");

        let cur_lang = "";
        if($.cookie('lang')) {
            cur_lang = $.cookie('lang');
        } else {
            cur_lang = "ru";
        }

		let lang = $(this).attr("for");
        if(lang !== "") {
            
            $.cookie('lang', lang, {expires: 5, path: '/'});
            
            if(!get_storage_translation(window.location.pathname,lang)) {
                //console.log(cur_lang+">"+lang);
                set_translation(lang,cur_lang);
                
            } else {
                set_translation(lang,cur_lang);
            }
           //location.reload();   
        } 
        else {
            $.cookie('lang', null, {expires: 5, path: '/'});
            location.reload();
        }
	}); 

    function set_translation(lang,cur_lang) {
        
        let formData = new FormData();
        formData.append("lang", lang);
        formData.append("cur_lang", cur_lang);

        $( ".trnslt" ).addClass("loading_trnslt");

        $.each($( ".trnslt" ), function() {
            formData.append("lang_data[]", $(this).text());
		});
        
        AjaxFunc('/project/webroot/ajax/ajax_stat.php','post',formData,"json",false,true,false,false, (msg) => {
			 
            let translate = {};

            if(sessionStorage.getItem(window.location.pathname) === null) {
                translate[lang] = {};
            }
                
            else {
                translate = JSON.parse(sessionStorage.getItem(window.location.pathname));
                translate[lang] = {};
            }
                
            $.each($( ".trnslt" ), function(index) {
                if(msg.translations[index].text !== undefined) {
                    $(this).text(msg.translations[index].text);
                    translate[lang][index] = msg.translations[index].text; 
                }
            });

            sessionStorage.setItem(window.location.pathname, JSON.stringify(translate));

            $( ".trnslt" ).removeClass("loading_trnslt");

		} );

        $.each($( ".buyer-list .buyer:not(.head) .buyer-ttl" ), function() {
            let el = $(this);
            let text = el.text();
            //console.log(translit(text));
            el.text(translit(text));
		});
			
	};


    function get_storage_translation(page,lang) {

        let res = JSON.parse(sessionStorage.getItem(page));
        
        if(res !== null && lang in res) {
            let trnsl_obj = res[lang];
            $.each($( ".trnslt" ), function(index) {
                $(this).text(trnsl_obj[index]);
            });
            return true;
        }
        
        return false;

	};


    ;(function() {	

        if($.cookie('lang')) {
            let cur_lang = $.cookie('lang');
            if(!get_storage_translation(window.location.pathname,$.cookie('lang'))) 
                set_translation($.cookie('lang'),cur_lang);
        }
            
    })();



    function translit(word){
        var answer = '';
        var converter = {
            'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
            'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
            'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
            'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
            'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
            'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
            'э': 'e',    'ю': 'yu',   'я': 'ya',
     
            'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
            'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
            'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
            'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
            'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
            'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
            'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
        };
     
        for (var i = 0; i < word.length; ++i ) {
            if (converter[word[i]] == undefined){
                answer += word[i];
            } else {
                answer += converter[word[i]];
            }
        }
     
        return answer;
    }


});