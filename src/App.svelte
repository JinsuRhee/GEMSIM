<script>
  import Router from "svelte-spa-router";
  import Home from "./routes/Home.svelte";
  import Description from "./routes/Description.svelte";
  import Spec from "./routes/Spec.svelte";
  import Data from "./routes/Data.svelte";
  import Spine from "./routes/Spine.svelte";
  import Publication from "./routes/Publication.svelte";

  const routes = {
    "/": Home,
    "/description": Description,
    "/spec": Spec,
    "/data": Data,
    "/spine": Spine,
    "/publication": Publication,
  };
</script>

<Router {routes} />

<style>
  @import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
</style>
