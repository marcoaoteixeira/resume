(function ($) {
    var i18n = $.i18n();
    var language = window.navigator.userLanguage || window.navigator.language || '';
    switch (language.substr(0, 2)) {
        case 'pt': language = 'pt-br'; break;
        case 'en': language = 'en-us'; break;
        case 'fr': language = 'fr-fr'; break;
        default: language = 'en-us'; break;
    }

    $(document).ready(function () {
        changeLanguage(language.toLowerCase());
        $('.change-language').on('click', function () {
            changeLanguage(this.lang.toLowerCase());
            return false;
        });
    });

    var changeLanguage = function (language) {
        i18n.locale = language;
        i18n.load('assets/js/i18n/' + i18n.locale + '.json', i18n.locale).done(function () {
            $('#page-title').text($.i18n('page-title'));
            $('#summary-title').text($.i18n('summary-title'));
            $('#resume-content').text($.i18n('resume-content'));
        });
    };
})(jQuery);