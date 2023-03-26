import{_ as s,c as a,o as n,U as l}from"./chunks/framework.8f89fd55.js";const i=JSON.parse('{"title":"数字","description":"","frontmatter":{},"headers":[],"relativePath":"articles/01-开始/02-方法/数字.md","lastUpdated":1679734237000}'),p={name:"articles/01-开始/02-方法/数字.md"},o=l(`<h1 id="数字" tabindex="-1">数字 <a class="header-anchor" href="#数字" aria-label="Permalink to &quot;数字&quot;">​</a></h1><h2 id="calc" tabindex="-1">calc <a class="header-anchor" href="#calc" aria-label="Permalink to &quot;calc&quot;">​</a></h2><p>数字计算工具类</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">calc</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@fang-kang/js-utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">calc</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">+</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">}\`</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 3</span></span>
<span class="line"><span style="color:#82AAFF;">calc</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">}\`</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"><span style="color:#82AAFF;">calc</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">}\`</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 2</span></span>
<span class="line"><span style="color:#82AAFF;">calc</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">}\`</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 格式化</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">calc</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">format</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 1.00</span></span>
<span class="line"></span></code></pre></div><h2 id="uppercasenum" tabindex="-1">uppercaseNum <a class="header-anchor" href="#uppercasenum" aria-label="Permalink to &quot;uppercaseNum&quot;">​</a></h2><p>返回大写人民币</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">uppercaseNum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@fang-kang/js-utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">uppercaseNum</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1.5</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;壹元伍角&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">uppercaseNum</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;壹佰元整&#39;</span></span>
<span class="line"></span></code></pre></div>`,7),e=[o];function t(c,r,D,y,F,C){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{i as __pageData,u as default};
