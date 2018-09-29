var app = new Vue({
    el: '#app',
    data: {
        name: '',
        nouns: nouns,
        adjectives: adjectives,
        isShowCopyBtn: false,
    },
    created() {
        this.generate();
    },
    methods: {
        generate() {
            let adjective = this.adjectives[this.random(this.adjectives.length)];
            let noun = this.nouns[this.random(this.nouns.length)];

            this.name = adjective + ' ' + noun;
        },
        random(n) {
            return Math.floor(Math.random() * n);
        },
        showCopyBtn() {
            this.isShowCopyBtn = true;
        },
        hideCopyBtn() {
            this.isShowCopyBtn = false;
        },
        copy() {
            this.copyStringToClipboard(this.name);
        },
        copyStringToClipboard(str) {
            // Create new element
            var el = document.createElement('textarea');
            // Set value (string to be copied)
            el.value = str;
            // Set non-editable to avoid focus and move outside of view
            el.setAttribute('readonly', '');
            el.style = {position: 'absolute', left: '-9999px'};
            document.body.appendChild(el);
            // Select text inside element
            el.select();
            // Copy text to clipboard
            document.execCommand('copy');
            // Remove temporary element
            document.body.removeChild(el);
        },
    }
});
