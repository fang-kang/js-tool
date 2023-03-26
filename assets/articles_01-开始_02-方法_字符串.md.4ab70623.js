import{_ as s,c as a,o as n,U as l}from"./chunks/framework.8f89fd55.js";const A=JSON.parse('{"title":"字符串","description":"","frontmatter":{},"headers":[],"relativePath":"articles/01-开始/02-方法/字符串.md","lastUpdated":1679732273000}'),p={name:"articles/01-开始/02-方法/字符串.md"},t=l(`<h1 id="字符串" tabindex="-1">字符串 <a class="header-anchor" href="#字符串" aria-label="Permalink to &quot;字符串&quot;">​</a></h1><h2 id="camelize" tabindex="-1">camelize <a class="header-anchor" href="#camelize" aria-label="Permalink to &quot;camelize&quot;">​</a></h2><p>将 xx-xx 转为 xxXx 大驼峰格式</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">camelize</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@fang-kang/js-utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">camelize</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">get-data</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// getData</span></span>
<span class="line"></span></code></pre></div><h2 id="ensureprefix" tabindex="-1">ensurePrefix <a class="header-anchor" href="#ensureprefix" aria-label="Permalink to &quot;ensurePrefix&quot;">​</a></h2><p>确保前缀有这个字符串</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ensurePrefix</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@fang-kang/js-utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">ensurePrefix</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// ab</span></span>
<span class="line"></span></code></pre></div><h2 id="ensuresuffix" tabindex="-1">ensureSuffix <a class="header-anchor" href="#ensuresuffix" aria-label="Permalink to &quot;ensureSuffix&quot;">​</a></h2><p>确保后缀有这个字符串</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ensureSuffix</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@fang-kang/js-utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">ensureSuffix</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// ba</span></span>
<span class="line"></span></code></pre></div><h2 id="hyphenate" tabindex="-1">hyphenate <a class="header-anchor" href="#hyphenate" aria-label="Permalink to &quot;hyphenate&quot;">​</a></h2><p>将大驼峰转为 xx-xx</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">hyphenate</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@fang-kang/js-utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">hyphenate</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">getData</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// get-datas</span></span>
<span class="line"></span></code></pre></div><h2 id="pwdlevel" tabindex="-1">pwdLevel <a class="header-anchor" href="#pwdlevel" aria-label="Permalink to &quot;pwdLevel&quot;">​</a></h2><p>检测字符串强度</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pwdLevel</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@fang-kang/js-utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">pwdLevel</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 0</span></span>
<span class="line"></span></code></pre></div><h2 id="spaceformat" tabindex="-1">spaceFormat <a class="header-anchor" href="#spaceformat" aria-label="Permalink to &quot;spaceFormat&quot;">​</a></h2><p>将多个空格统一处理为空</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">spaceFormat</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@fang-kang/js-utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">spaceFormat</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="trim" tabindex="-1">trim <a class="header-anchor" href="#trim" aria-label="Permalink to &quot;trim&quot;">​</a></h2><p>删除空格</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">trim</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@fang-kang/js-utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 删除空格</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;"> string </span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">s</span><span style="color:#676E95;font-style:italic;"> 字符串</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;"> TrimType </span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">type</span><span style="color:#676E95;font-style:italic;"> 所有 ｜ 前置 ｜ 前后 ｜ 后置 &#39;all&#39; | &#39;pre&#39; | &#39;around&#39; | &#39;post&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">defalut</span><span style="color:#676E95;font-style:italic;"> around</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">returns</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div><h2 id="checkstr" tabindex="-1">checkStr <a class="header-anchor" href="#checkstr" aria-label="Permalink to &quot;checkStr&quot;">​</a></h2><p>判断类型集合</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">checkStr</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@fang-kang/js-utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">checkStr</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *  case &#39;phone&#39;: //手机号码</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    case &#39;tel&#39;: //座机</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      return /^(0\\d{2,3}-\\d{7,8})(-\\d{1,4})?$/.test(str);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    case &#39;card&#39;: //身份证</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      return /(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)/.test(str);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    case &#39;pwd&#39;: //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      return /^[a-zA-Z]\\w{5,17}$/.test(str);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    case &#39;postal&#39;: //邮政编码</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      return /[1-9]\\d{5}(?!\\d)/.test(str);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    case &#39;QQ&#39;: //QQ号</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      return /^[1-9][0-9]{4,9}$/.test(str);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    case &#39;email&#39;: //邮箱</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      return /^[\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)+$/.test(str);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    case &#39;money&#39;: //金额(小数点2位)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      return /^\\d*(?:\\.\\d{0,2})?$/.test(str);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    case &#39;URL&#39;: //网址</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      return /(http|ftp|https):\\/\\/[\\w\\-_]+(\\.[\\w\\-_]+)+([\\w\\-\\.,@?^=%&amp;:/~\\+#]*[\\w\\-\\@?^=%&amp;/~\\+#])?/.test(str);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    case &#39;IP&#39;: //IP</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      return /((?:(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d)\\\\.){3}(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d))/.test(str);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    case &#39;date&#39;: //日期时间</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      return (</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        /^(\\d{4})\\-(\\d{2})\\-(\\d{2}) (\\d{2})(?:\\:\\d{2}|:(\\d{2}):(\\d{2}))$/.test(str) ||</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        /^(\\d{4})\\-(\\d{2})\\-(\\d{2})$/.test(str)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      );</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    case &#39;number&#39;: //数字</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      return /^[0-9]$/.test(str);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    case &#39;english&#39;: //英文</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      return /^[a-zA-Z]+$/.test(str);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    case &#39;chinese&#39;: //中文</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      return /^[\\\\u4E00-\\\\u9FA5]+$/.test(str);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    case &#39;lower&#39;: //小写</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      return /^[a-z]+$/.test(str);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    case &#39;upper&#39;: //大写</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      return /^[A-Z]+$/.test(str);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    case &#39;HTML&#39;: //HTML标记</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      return /&lt;(&quot;[^&quot;]*&quot;|&#39;[^&#39;]*&#39;|[^&#39;&quot;&gt;])*&gt;/.test(str);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    default:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      return true;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div><h2 id="luhncheck" tabindex="-1">luhnCheck <a class="header-anchor" href="#luhncheck" aria-label="Permalink to &quot;luhnCheck&quot;">​</a></h2><p>Luhn 算法的实现，用于验证各种标识号，例如信用卡号，IMEI 号，国家提供商标识号等。</p><p>与 String.prototype.split(&#39;&#39;)结合使用，以获取数字数组。获得最后一个数字。实施 luhn 算法。如果被整除，则返回，否则返回。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">luhnCheck</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@fang-kang/js-utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">luhnCheck</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">4485275742308327</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#82AAFF;">luhnCheck</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">6011329933655299</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//  false</span></span>
<span class="line"><span style="color:#82AAFF;">luhnCheck</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123456789</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"></span></code></pre></div>`,29),e=[t];function o(c,r,i,y,D,F){return n(),a("div",null,e)}const f=s(p,[["render",o]]);export{A as __pageData,f as default};
