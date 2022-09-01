import{_ as e,o,c,a as d}from"./app.436310c2.js";const p={},a=d('<blockquote><p>1.6.3 \u7248\u672C\u4EE5\u540E\u6DFB\u52A0\u4E86\u6C34\u5370\u529F\u80FD\uFF0C\u9ED8\u8BA4\u4E0D\u5F00\u542F\uFF0C\u9700\u8981\u66F4\u6539\u73AF\u5883\u53D8\u91CF\u6587\u4EF6\u5F00\u542F\uFF0C\u5177\u4F53\u53C2\u8003\u73AF\u5883\u53D8\u91CF\u7AE0\u8282\u3002</p></blockquote><p>\u81EA\u52A8\u6C34\u5370\u914D\u7F6E\u6587\u4EF6\uFF1A<code>config/watermark.php</code> \uFF0C\u6587\u4EF6\u4E2D\u6709\u8BE6\u7EC6\u7684\u6CE8\u91CA\u8BF4\u660E\u3002</p><p><strong>\u6BCF\u4E2A\u50A8\u5B58\u7B56\u7565\u90FD\u53EF\u4EE5\u8BBE\u7F6E\u72EC\u7ACB\u7684\u6C34\u5370\u914D\u7F6E\uFF0C\u5206\u4E3A\u6587\u5B57\u6C34\u5370\u548C\u56FE\u7247\u6C34\u5370\u4E24\u79CD\u7C7B\u578B\u3002</strong></p><h2 id="\u6587\u5B57\u6C34\u5370\u914D\u7F6E\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u6587\u5B57\u6C34\u5370\u914D\u7F6E\u8BF4\u660E" aria-hidden="true">#</a> \u6587\u5B57\u6C34\u5370\u914D\u7F6E\u8BF4\u660E\uFF1A</h2><p><code>enable</code>: \u662F\u5426\u542F\u7528\u6C34\u5370\u529F\u80FD</p><p><code>type</code>: \u7C7B\u578B[1=\u6587\u5B57\u6C34\u5370,2=\u56FE\u7247\u6C34\u5370]</p><p><code>text</code>: \u6C34\u5370\u6587\u5B57</p><p><code>font</code>: \u5B57\u4F53\u6587\u4EF6\u7EDD\u5BF9\u8DEF\u5F84</p><p><code>size</code>: \u6587\u4EF6\u5927\u5C0F</p><p><code>color</code>: \u989C\u8272</p><p><code>locate</code>: \u6C34\u5370\u4F4D\u7F6E[1=\u5DE6\u4E0A\u89D2,2=\u4E0A\u5C45\u4E2D,3=\u53F3\u4E0A\u89D2,4=\u5DE6\u5C45\u4E2D,5=\u5C45\u4E2D,6=\u53F3\u5C45\u4E2D,7=\u5DE6\u4E0B\u89D2,8=\u4E0B\u5C45\u4E2D,9=\u53F3\u4E0B\u89D2]</p><p><code>offset</code>: \u6587\u5B57\u76F8\u5BF9\u5F53\u524D\u4F4D\u7F6E\u7684\u504F\u79FB\u91CF\uFF0C\u9ED8\u8BA40</p><p><code>angle</code>: \u6587\u5B57\u503E\u659C\u89D2\u5EA6\uFF0C\u9ED8\u8BA40</p><h2 id="\u56FE\u7247\u6C34\u5370\u914D\u7F6E\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u6C34\u5370\u914D\u7F6E\u8BF4\u660E" aria-hidden="true">#</a> \u56FE\u7247\u6C34\u5370\u914D\u7F6E\u8BF4\u660E</h2><p><code>enable</code>: \u662F\u5426\u542F\u7528\u6C34\u5370\u529F\u80FD</p><p><code>type</code>: \u7C7B\u578B[1=\u6587\u5B57\u6C34\u5370,2=\u56FE\u7247\u6C34\u5370]</p><p><code>source</code>: \u6C34\u5370\u56FE\u7247\u6587\u4EF6\u7EDD\u5BF9\u8DEF\u5F84</p><p><code>locate</code>: \u6C34\u5370\u4F4D\u7F6E[1=\u5DE6\u4E0A\u89D2,2=\u4E0A\u5C45\u4E2D,3=\u53F3\u4E0A\u89D2,4=\u5DE6\u5C45\u4E2D,5=\u5C45\u4E2D,6=\u53F3\u5C45\u4E2D,7=\u5DE6\u4E0B\u89D2,8=\u4E0B\u5C45\u4E2D,9=\u53F3\u4E0B\u89D2]</p><p><code>alpha</code>: \u900F\u660E\u5EA6</p><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ\uFF1A</h2><ol><li><p>\u5B57\u4F53\u3001\u6C34\u5370\u56FE\u7247\u5982\u4F55\u914D\u7F6E\uFF1F</p><ul><li>\u4E0B\u8F7D\u4F60\u7684\u5B57\u4F53\u6587\u4EF6\u6216\u6C34\u5370\u56FE\u7247\u653E\u7F6E\u5230\u9879\u76EE\u4EFB\u610F\u76EE\u5F55, \u53D8\u91CF <code>$root</code> \u5219\u662F\u9879\u76EE\u6839\u76EE\u5F55\uFF0C\u5373 <code>public</code> \u4E0A\u5C42\u76EE\u5F55</li><li>\u5047\u5982\u73B0\u5728\u6709\u4E2A <code>test.ttf</code> \u5B57\u4F53\u6587\u4EF6\uFF0C\u5C06\u5B83\u653E\u7F6E\u5230 <code>public</code> \u76EE\u5F55\u4E0B\uFF0C\u90A3\u4E48\u8DEF\u5F84\u5219\u662F $root . &#39;public/test.ttf&#39;</li></ul></li><li><p>\u6587\u5B57\u504F\u79FB\u91CF(offset)\u548C\u503E\u659C\u89D2\u5EA6(angle)\u652F\u6301\u8D1F\u6570</p></li><li><p>\u6BCF\u4E2A\u7B56\u7565\u7684\u6C34\u5370\u914D\u7F6E\uFF0C\u53EA\u80FD\u540C\u65F6\u5B58\u5728\u4E00\u79CD\u7C7B\u578B\uFF0C\u4E0D\u53EF\u4EE5\u540C\u65F6\u914D\u7F6E\u6587\u5B57\u6C34\u5370\u548C\u56FE\u7247\u6C34\u5370</p></li><li><p>\u542F\u7528\u6C34\u5370\u529F\u80FD\u540E\uFF0C\u7CFB\u7EDF\u4E0D\u4F1A\u4FDD\u5B58\u539F\u56FE\uFF01</p></li></ol>',21),t=[a];function l(r,i){return o(),c("div",null,t)}var s=e(p,[["render",l],["__file","Watermark.html.vue"]]);export{s as default};
