import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the Contact</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <div>
      <div className="page js-page"><header className="hero"><div className="row center-xs"><h1 className="hero-headline">Flexbox Grid</h1></div><div className="row center-xs"><p className="hero-copy">A grid system based on the <a href="http://caniuse.com/#search=flexbox"><code className="inline-anchor">flex</code></a> display property.</p></div><div className="row center-xs"><a className="button invisible-xs visible-md" href="https://github.com/kristoferjoseph/flexboxgrid/archive/v6.3.1.zip">Download</a> <a className="button" href="https://github.com/kristoferjoseph/flexboxgrid">Github</a></div></header><div className="wrap container-fluid"><a name="responsive"></a><section className="page-section"><h2>Responsive</h2><p>Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md &amp; lg viewport widths.</p><div className="row"><div className="col-xs-12 col-sm-3 col-md-2 col-lg-1"><div className="box-row"></div></div><div className="col-xs-6 col-sm-6 col-md-8 col-lg-10"><div className="box-row"></div></div><div className="col-xs-6 col-sm-3 col-md-2 col-lg-1"><div className="box-row"></div></div></div><div className="row"><div className="col-xs-12 col-sm-3 col-md-2 col-lg-1"><div className="box-row"></div></div><div className="col-xs-12 col-sm-9 col-md-10 col-lg-11"><div className="box-row"></div></div></div><div className="row"><div className="col-xs-10 col-sm-6 col-md-8 col-lg-10"><div className="box-row"></div></div><div className="col-xs-2 col-sm-6 col-md-4 col-lg-2"><div className="box-row"></div></div></div><pre><code>&lt;div className="row">
      &lt;div className="col-xs-12
      col-sm-8
      col-md-6
      col-lg-4">
      &lt;div className="box">Responsive&lt;/div>
      &lt;/div>
&lt;/div></code></pre><a name="fluid"></a><section className="page-section"><h2>Fluid</h2><p>Percent based widths allow fluid resizing of columns and rows.</p><div className="row"><div className="col-xs-12"><div className="box-row"></div></div></div><div className="row"><div className="col-xs-1"><div className="box-row"></div></div><div className="col-xs-11"><div className="box-row"></div></div></div><div className="row"><div className="col-xs-2"><div className="box-row"></div></div><div className="col-xs-10"><div className="box-row"></div></div></div><div className="row"><div className="col-xs-3"><div className="box-row"></div></div><div className="col-xs-9"><div className="box-row"></div></div></div><div className="row"><div className="col-xs-4"><div className="box-row"></div></div><div className="col-xs-8"><div className="box-row"></div></div></div><div className="row"><div className="col-xs-5"><div className="box-row"></div></div><div className="col-xs-7"><div className="box-row"></div></div></div><div className="row"><div className="col-xs-6"><div className="box-row"></div></div><div className="col-xs-6"><div className="box-row"></div></div></div><pre><code></code></pre></section><a name="syntax"></a><section className="page-section"><h2>Simple Syntax</h2><p>All you need to remember is row, column, content.</p><pre><code>&lt;div className="row">
        &lt;div className="col-xs-12">
        &lt;div className="box">12&lt;/div>
        &lt;/div>
&lt;/div></code></pre></section><a name="offsets"></a><section className="page-section"><h2>Offsets</h2><p>Offset a column</p><div className="row"><div className="col-xs-offset-11 col-xs-1"><div className="box-row"></div></div></div><div className="row"><div className="col-xs-offset-10 col-xs-2"><div className="box-row"></div></div></div><div className="row"><div className="col-xs-offset-9 col-xs-3"><div className="box-row"></div></div></div><div className="row"><div className="col-xs-offset-8 col-xs-4"><div className="box-row"></div></div></div><div className="row"><div className="col-xs-offset-7 col-xs-5"><div className="box-row"></div></div></div><div className="row"><div className="col-xs-offset-6 col-xs-6"><div className="box-row"></div></div></div><div className="row"><div className="col-xs-offset-5 col-xs-7"><div className="box-row"></div></div></div><div className="row"><div className="col-xs-offset-4 col-xs-8"><div className="box-row"></div></div></div><div className="row"><div className="col-xs-offset-3 col-xs-9"><div className="box-row"></div></div></div><div className="row"><div className="col-xs-offset-2 col-xs-10"><div className="box-row"></div></div></div><div className="row"><div className="col-xs-offset-1 col-xs-11"><div className="box-row"></div></div></div><pre><code>&lt;div className="row">
          &lt;div className="col-xs-offset-3 col-xs-9">
          &lt;div className="box">offset&lt;/div>
          &lt;/div>
&lt;/div></code></pre></section><a name="auto"></a><section className="page-section"><h2>Auto Width</h2><p>Add any number of auto sizing columns to a row. Let the grid figure it out.</p><div className="row"><div className="col-xs"><div className="box-row"></div></div><div className="col-xs"><div className="box-row"></div></div></div><div className="row"><div className="col-xs"><div className="box-row"></div></div><div className="col-xs"><div className="box-row"></div></div><div className="col-xs"><div className="box-row"></div></div></div><pre><code>&lt;div className="row">
          &lt;div className="col-xs">
          &lt;div className="box">auto&lt;/div>
          &lt;/div>
&lt;/div></code></pre></section><a name="nested"></a><section className="page-section"><h2>Nested Grids</h2><p>Nest grids inside grids inside grids.</p><div className="row"><div className="col-xs-7"><div className="box box-container"><div className="row"><div className="col-xs-9"><div className="box-first box-container"><div className="row"><div className="col-xs-4"><div className="box-nested"></div></div><div className="col-xs-8"><div className="box-nested"></div></div></div></div></div><div className="col-xs-3"><div className="box-first box-container"><div className="row"><div className="col-xs"><div className="box-nested"></div></div></div></div></div></div></div></div><div className="col-xs-5"><div className="box box-container"><div className="row"><div className="col-xs-12"><div className="box-first box-container"><div className="row"><div className="col-xs-6"><div className="box-nested"></div></div><div className="col-xs-6"><div className="box-nested"></div></div></div></div></div></div></div></div></div><pre><code>&lt;div className="row">
          &lt;div className="col-xs">
          &lt;div className="box">
          &lt;div className="row">
          &lt;div className="col-xs">
          &lt;div className="box">auto&lt;/div>
          &lt;/div>
          &lt;/div>
          &lt;/div>
          &lt;/div>
&lt;/div></code></pre></section><a name="alignment"></a><section className="page-section"><h2>Alignment</h2><p>Add classes to align elements to the start or end of a row as well as the top, bottom, or center of a column</p><h3><code>.start-</code></h3><div className="row"><div className="col-xs-12"><div className="box box-container"><div className="row start-xs"><div className="col-xs-6"><div className="box-nested"></div></div></div></div></div></div><pre><code>&lt;div className="row start-xs">
          &lt;div className="col-xs-6">
          &lt;div className="box">
          start
          &lt;/div>
          &lt;/div>
          &lt;/div>
</code></pre><h3><code>.center-</code></h3><div className="row"><div className="col-xs-12"><div className="box box-container"><div className="row center-xs"><div className="col-xs-6"><div className="box-nested"></div></div></div></div></div></div><pre><code>&lt;div className="row center-xs">
            &lt;div className="col-xs-6">
            &lt;div className="box">
            start
            &lt;/div>
            &lt;/div>
            &lt;/div>
</code></pre><h3><code>.end-</code></h3><div className="row"><div className="col-xs-12"><div className="box box-container"><div className="row end-xs"><div className="col-xs-6"><div className="box-nested"></div></div></div></div></div></div><pre><code>&lt;div className="row end-xs">
            &lt;div className="col-xs-6">
            &lt;div className="box">
            end
            &lt;/div>
            &lt;/div>
            &lt;/div>
</code></pre><p>Here is an example of using the modifiers in conjunction to acheive different alignment at different viewport sizes.</p><div className="row"><div className="col-xs-12"><div className="box box-container"><div className="row center-xs end-sm start-lg"><div className="col-xs-6"><div className="box-nested"></div></div></div></div></div></div>Example<pre><code>&lt;div className="row center-xs end-sm start-lg">
            &lt;div className="col-xs-6">
            &lt;div className="box">
            All together now
            &lt;/div>
            &lt;/div>
            &lt;/div>
</code></pre><h3><code>.top-</code></h3><div className="row top-xs"><div className="col-xs-6"><div className="box-large"></div></div><div className="col-xs-6"><div className="box"></div></div></div><pre><code>&lt;div className="row top-xs">
            &lt;div className="col-xs-6">
            &lt;div className="box">
            top
            &lt;/div>
            &lt;/div>
            &lt;/div>
</code></pre><h3><code>.middle-</code></h3><div className="row middle-xs"><div className="col-xs-6"><div className="box-large"></div></div><div className="col-xs-6"><div className="box"></div></div></div><pre><code>&lt;div className="row middle-xs">
            &lt;div className="col-xs-6">
            &lt;div className="box">
            center
            &lt;/div>
            &lt;/div>
            &lt;/div>
</code></pre><h3><code>.bottom-</code></h3><div className="row bottom-xs"><div className="col-xs-6"><div className="box-large"></div></div><div className="col-xs-6"><div className="box"></div></div></div><pre><code>&lt;div className="row bottom-xs">
            &lt;div className="col-xs-6">
            &lt;div className="box">
            bottom
            &lt;/div>
            &lt;/div>
            &lt;/div>
</code></pre></section><a name="distribution"></a><section className="page-section"><h2>Distribution</h2><p>Add classes to distribute the contents of a row or column.</p><h3><code>.around-</code></h3><div className="row"><div className="col-xs-12"><div className="box box-container"><div className="row around-xs"><div className="col-xs-2"><div className="box-nested"></div></div><div className="col-xs-2"><div className="box-nested"></div></div><div className="col-xs-2"><div className="box-nested"></div></div></div></div></div></div><pre><code>&lt;div className="row around-xs">
          &lt;div className="col-xs-2">
          &lt;div className="box">
          around
          &lt;/div>
          &lt;/div>
          &lt;div className="col-xs-2">
          &lt;div className="box">
          around
          &lt;/div>
          &lt;/div>
          &lt;div className="col-xs-2">
          &lt;div className="box">
          around
          &lt;/div>
          &lt;/div>
          &lt;/div>
</code></pre><h3><code>.between-</code></h3><div className="row"><div className="col-xs-12"><div className="box box-container"><div className="row between-xs"><div className="col-xs-2"><div className="box-nested"></div></div><div className="col-xs-2"><div className="box-nested"></div></div><div className="col-xs-2"><div className="box-nested"></div></div></div></div></div></div><pre><code>&lt;div className="row between-xs">
            &lt;div className="col-xs-2">
            &lt;div className="box">
            between
            &lt;/div>
            &lt;/div>
            &lt;div className="col-xs-2">
            &lt;div className="box">
            between
            &lt;/div>
            &lt;/div>
            &lt;div className="col-xs-2">
            &lt;div className="box">
            between
            &lt;/div>
            &lt;/div>
            &lt;/div>
</code></pre></section><a name="reordering"></a><section className="page-section"><h2>Reordering</h2><p>Add classes to reorder columns.</p><h3><code>.first-</code></h3><div className="row"><div className="col-xs-12"><div className="box box-container"><div className="row"><div className="col-xs-2"><div className="box-first">1</div></div><div className="col-xs-2"><div className="box-first">2</div></div><div className="col-xs-2"><div className="box-first">3</div></div><div className="col-xs-2"><div className="box-first">4</div></div><div className="col-xs-2"><div className="box-first">5</div></div><div className="col-xs-2 first-xs"><div className="box-nested">6</div></div></div></div></div></div><pre><code>&lt;div className="row">
          &lt;div className="col-xs-2">
          &lt;div className="box">
          1
          &lt;/div>
          &lt;/div>
          &lt;div className="col-xs-2">
          &lt;div className="box">
          2
          &lt;/div>
          &lt;/div>
          &lt;div className="col-xs-2 first-xs">
          &lt;div className="box">
          3
          &lt;/div>
          &lt;/div>
          &lt;/div>
</code></pre><h3><code>.last-</code></h3><div className="row"><div className="col-xs-12"><div className="box box-container"><div className="row"><div className="col-xs-2 last-xs"><div className="box-nested">1</div></div><div className="col-xs-2"><div className="box-first">2</div></div><div className="col-xs-2"><div className="box-first">3</div></div><div className="col-xs-2"><div className="box-first">4</div></div><div className="col-xs-2"><div className="box-first">5</div></div><div className="col-xs-2"><div className="box-first">6</div></div></div></div></div></div><pre><code>&lt;div className="row">
            &lt;div className="col-xs-2 last-xs">
            &lt;div className="box">
            1
            &lt;/div>
            &lt;/div>
            &lt;div className="col-xs-2">
            &lt;div className="box">
            2
            &lt;/div>
            &lt;/div>
            &lt;div className="col-xs-2">
            &lt;div className="box">
            3
            &lt;/div>
            &lt;/div>
            &lt;/div>
</code></pre></section><a name="reversing"></a>
<section className="page-section">
<h2>Reversing</h2><h3><code>.reverse</code></h3><div className="row"><div className="col-xs-12"><div className="box box-container"><div className="row reverse"><div className="col-xs-2"><div className="box-nested">1</div></div><div className="col-xs-2"><div className="box-nested">2</div></div><div className="col-xs-2"><div className="box-nested">3</div></div><div className="col-xs-2"><div className="box-nested">4</div></div><div className="col-xs-2"><div className="box-nested">5</div></div><div className="col-xs-2"><div className="box-nested">6</div></div></div></div></div></div><pre><code>&lt;div className="row reverse">
          &lt;div className="col-xs-2">
          &lt;div className="box">
          1
          &lt;/div>
          &lt;/div>
          &lt;div className="col-xs-2">
          &lt;div className="box">
          2
          &lt;/div>
          &lt;/div>
          &lt;div className="col-xs-2">
          &lt;div className="box">
          3
          &lt;/div>
          &lt;/div>
          &lt;/div>
</code></pre></section>
    </section></div></div></div>
  </Layout>
)

export default ContactPage
