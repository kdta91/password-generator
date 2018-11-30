var passwordGenerator = function() {
    // copy to clipboard with clipboard.js
    var clipboard = new Clipboard('#password-container');

    clipboard.on('success', function(e) {
        // console.info('Action:', e.action);
        // console.info('Text:', e.text);
        // console.info('Trigger:', e.trigger);

        $('.flash-message').fadeIn('normal', function() {
            $(this).delay(500).fadeOut();
        });

        e.clearSelection();
    });

    clipboard.on('error', function(e) {
        // console.error('Action:', e.action);
        // console.error('Trigger:', e.trigger);
    });

    function generate() {
        let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}()[]#:;^,.?!|&_`~@$%/+-=*";
        let len = (Math.random() * 24) + 8;
        let password = "";

        for (let i = 0, n = chars.length; i < len; ++i) {
            password += chars.charAt(Math.random() * n);
        }

        return showPassword(password);
    }

    function showPassword(pass) {
        $('#password').html(pass);
    }

    return {
        generate: generate
    };
}();