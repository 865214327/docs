import{_ as s,o as c,c as t,b as e,d as n,e as a,a as r,r as o}from"./app.436310c2.js";var d="/php-imagick.png";const p={},l={class:"custom-container tip"},h=e("p",{class:"custom-container-title"},"TIP",-1),m=a("\u5170\u7A7A\u56FE\u5E8A\u4F7F\u7528 "),g={href:"https://www.php.net/manual/zh/book.imagick.php",target:"_blank",rel:"noopener noreferrer"},u=a("Imagick \u62D3\u5C55"),k=a(" \u5BF9\u56FE\u7247\u8FDB\u884C\u5904\u7406\uFF0C\u5B83\u5E76\u975E PHP \u9884\u88C5\uFF0C\u800C\u662F\u9700\u8981\u81EA\u5DF1\u624B\u52A8\u5B89\u88C5\u7684\u3002"),b=a("imagick \u5206\u4E3A\u4E24\u4E2A\u90E8\u5206\uFF0C\u7B2C\u4E00\u4E2A\u662F "),v={href:"http://www.imagemagick.org",target:"_blank",rel:"noopener noreferrer"},_=a("ImageImagick"),f=a("\uFF0C\u7136\u540E\u624D\u662F "),I={href:"https://www.php.net/manual/zh/book.imagick.php",target:"_blank",rel:"noopener noreferrer"},w=a("PHP Imagick"),x=a("\uFF0CPHP Imagick \u652F\u6301\u54EA\u4E9B\u56FE\u7247\u53D6\u51B3\u4E8E ImageImagick \u5E93\uFF0C\u5982\u679C\u60A8\u5B89\u88C5\u5B8C\u7A0B\u5E8F\u540E\uFF0C\u53D1\u73B0\u4E2A\u522B\u62D3\u5C55\u540D(\u4F8B\u5982webp)\u65E0\u6CD5\u4E0A\u4F20\uFF0C\u5F88\u6709\u53EF\u80FD\u662F\u56E0\u4E3A imagick \u5B89\u88C5\u65F6\u672A\u652F\u6301 webp\uFF0C\u9700\u8981\u91CD\u65B0\u7F16\u8BD1\u5B89\u88C5\u3002"),z=r(`<h2 id="\u7F16\u8BD1\u5B89\u88C5-imageimagick" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u5B89\u88C5-imageimagick" aria-hidden="true">#</a> \u7F16\u8BD1\u5B89\u88C5 ImageImagick</h2><h3 id="\u4E0B\u8F7D\u5E76\u89E3\u538B-imageimagick" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u5E76\u89E3\u538B-imageimagick" aria-hidden="true">#</a> \u4E0B\u8F7D\u5E76\u89E3\u538B ImageImagick</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://github.com/ImageMagick/ImageMagick/archive/refs/heads/main.zip -O ImageMagick.zip
<span class="token function">unzip</span> ImageMagick.zip
<span class="token builtin class-name">cd</span> ImageMagick-main/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><ul><li>ImageImagick \u652F\u6301\u7684\u56FE\u7247\u7C7B\u578B\u53D7\u7CFB\u7EDF\u5F71\u54CD\uFF0C\u4F8B\u5982\u5982\u679C\u5E0C\u671B\u652F\u6301 webp\uFF0C\u9700\u8981 <code>libwebp</code> \u5E93\u7684\u652F\u6301\uFF0C\u4E14\u9700\u8981\u8FBE\u5230\u6307\u5B9A\u7248\u672C\u8981\u6C42</li><li>\u4F7F\u7528 <code>identify -list format</code> \u547D\u4EE4\u67E5\u770B\u6240\u6709\u652F\u6301\u7684\u56FE\u7247\u683C\u5F0F</li><li>\u4F7F\u7528 <code>identify -list format | grep webp</code> \u547D\u4EE4\u67E5\u770B\u6307\u5B9A\u7684\u56FE\u7247\u683C\u5F0F\u662F\u5426\u652F\u6301</li></ul></div><h3 id="\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1" aria-hidden="true">#</a> \u7F16\u8BD1</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./configure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u7F16\u8BD1\u5B89\u88C5-php-imagick" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u5B89\u88C5-php-imagick" aria-hidden="true">#</a> \u7F16\u8BD1\u5B89\u88C5 PHP Imagick</h2><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u8BF7\u5148\u4F7F\u7528 <code>php -v</code> \u547D\u4EE4\u8F93\u51FA\u5E76\u786E\u8BA4\u5F53\u524D\u4F7F\u7528\u7684 cli php \u7248\u672C\uFF0C\u907F\u514D\u5C06\u62D3\u5C55\u5B89\u88C5\u5230\u4E86\u5176\u4ED6\u7684 php \u7248\u672C\u4E0A\u3002</p></div><h3 id="\u4E0B\u8F7D\u5E76\u89E3\u538B-php-imagick" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u5E76\u89E3\u538B-php-imagick" aria-hidden="true">#</a> \u4E0B\u8F7D\u5E76\u89E3\u538B PHP Imagick</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://github.com/Imagick/imagick/archive/refs/heads/master.zip -O php-imagick.zip
<span class="token function">unzip</span> php-imagick.zip <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> imagick-master/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7F16\u8BD1\u5E76\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u5E76\u5B89\u88C5" aria-hidden="true">#</a> \u7F16\u8BD1\u5E76\u5B89\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>phpize <span class="token operator">&amp;&amp;</span> ./configure
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u6267\u884C\u547D\u4EE4 <code>php --ri imagick</code>\uFF0C\u4F1A\u51FA\u73B0\u4E0B\u56FE\u4E2D\u7684\u4FE1\u606F\uFF0C\u5373\u4E3A\u5B89\u88C5\u5B8C\u6210\u3002</p><p><img src="`+d+'" alt="php-imagick"></p>',16);function P(H,M){const i=o("ExternalLinkIcon");return c(),t("div",null,[e("div",l,[h,e("p",null,[m,e("a",g,[u,n(i)]),k]),e("p",null,[b,e("a",v,[_,n(i)]),f,e("a",I,[w,n(i)]),x])]),z])}var V=s(p,[["render",P],["__file","imagick.html.vue"]]);export{V as default};
