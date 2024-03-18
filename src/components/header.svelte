<script>
  import gem_logo from "./../images/gem_logo.png";
  //import { Router, Route } from "svelte-spa-router";
  import { link } from "svelte-spa-router";
  //import Spine from "./../routes/spine.svelte";
</script>

<header id="nav-container">
  <a href="/" use:link><img src={gem_logo} alt="" /></a>
  <h1><a href="/" use:link> GEM Simulations </a></h1>
  <nav>
    <ul>
      <li><a href="/description" use:link>Descriptions</a></li>
      <li><a href="/spec" use:link>Spec</a></li>
      <li><a href="/data" use:link>Data Access</a></li>
      <li><a href="/spine" use:link>Who does what?</a></li>
      <li><a href="/publication" use:link>Publications</a></li>
      <li><a href="/" use:link>Others</a></li>
    </ul>
  </nav>
</header>
