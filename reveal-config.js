Reveal.initialize({
    history: true,
    slideNumber: 'c/t',
    dependencies: [
        { src: 'node_modules/reveal.js/plugin/markdown/marked.js' },
        { src: 'node_modules/reveal.js/plugin/markdown/markdown.js' },
        { src: 'node_modules/reveal.js/plugin/notes/notes.js', async: true },
        { src: 'node_modules/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
    ]
});