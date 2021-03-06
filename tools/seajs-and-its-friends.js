
// load sea.js
(function(m, o, d, u, l, a, r) {
    if(m[d]) return;
    function f(n, t) { return function() { r.push(n, arguments); return t; } }
    m[d] = a = { args: (r = []), config: f(0, a), use: f(1, a) };
    m.define = f(2);
    u = o.createElement('script');
    u.id = d + 'node';
    u.src = '../../../dist/seajs/1.1.0/sea.js';
    l = o.getElementsByTagName('head')[0];
    l.insertBefore(u, l.firstChild);
})(window, document, 'seajs');


// and its friends
seajs.config({

    alias: {
        // 外来模块
        '$': 'jquery/1.7.2/jquery',
        'jquery': 'jquery/1.7.2/jquery',
        'zepto': 'zepto/0.8.0/zepto',
        'underscore': 'underscore/1.3.3/underscore',
        'json': 'json/1.0.2/json',
        'handlebars': 'handlebars/1.0.0/handlebars',
        'moment': 'moment/1.6.2/moment',
        'async': 'async/0.1.18/async',
        'store': 'store/1.3.3/store',
        'swfobject': 'swfobject/2.2.0/swfobject',
        'backbone': 'backbone/0.9.2/backbone',
        'jasmine': 'jasmine/1.1.0/jasmine-html',

        // Infrastructure
        /* seajs 1.2 尚未开始 */
        'events': 'events/0.9.1/events',                     // 100%
        'class': 'class/0.9.1/class',                        // 100%
        'base': 'base/0.9.13/base',                          // 90%  完善阶段
        'widget': 'widget/0.9.9/widget',                     // 90%  完善阶段
        'widget-templatable': 'widget/0.9.9/templatable',    // 90%  完善阶段

        // Utilities
        'cookie': 'cookie/1.0.2/cookie',                     // 100%
        'iframe-shim': 'iframe-shim/0.9.0/iframe-shim',      // 100%
        'position': 'position/0.9.1/position',               // 100%
        'easing': 'easing/0.9.1/easing',                     // 90%
        /* validator 开发中 */
        /* querystring 待迁移 */
        /* placeholder 尚未开始开发 */

        // Widgets
        'overlay': 'overlay/0.9.3/overlay',                  // 90%  完善阶段
        'mask': 'overlay/0.9.3/mask',                        // 90%  完善阶段
        'dropdown': 'dropdown/0.9.0/dropdown',               // 60%  讨论阶段
        'dialog': 'dialog/0.9.0/dialog',                     // 60%  讨论阶段
        'switchable': 'switchable/0.8.1/switchable'          // 80%  讨论阶段
        /* calendar 开发中 */
        /* tip 尚未开始开发 */

        // Others
        /* spm 尚未开始 */
        /* araledoc 尚未开始 */
    },

    preload: [this.JSON ? '' : 'json', 'plugin-text']
});
