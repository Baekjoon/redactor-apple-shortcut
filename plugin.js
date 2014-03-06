if (typeof RedactorPlugins === 'undefined') var RedactorPlugins = {};
RedactorPlugins.apple = {
    init: function() {
        this.buttonAdd('apple-command', 'apple-command', function() {
            this.insertText('⌘');
        });
        this.buttonAdd('apple-control', 'apple-control', function() {
            this.insertText('⌃');
        });
        this.buttonAdd('apple-option', 'apple-option', function() {
            this.insertText('⌥');
        });
        this.buttonAdd('apple-shift', 'apple-shift', function() {
            this.insertText('⇧');
        });
        this.buttonAdd('apple-caps-lock', 'apple-cpas-lock', function() {
            this.insertText('⇪');
        });
        this.buttonAdd('apple-eject', 'apple-eject', function() {
            this.insertText('⏏');
        });
    },
}
