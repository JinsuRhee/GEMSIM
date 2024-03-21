<script>
  // Default
  import { link } from "svelte-spa-router";

  // Layout
  import Header from "./../components/header.svelte";
  import Footer from "./../components/footer.svelte";

  // Project-related
  import "./../js/spine.js";
  import { getDatabase, ref, onValue } from "firebase/database";
  import { app } from "./../js/db.js";

  import { make_pjtable_accept } from "./../js/spine";

  //$: data = [];
  let pjlist = [];
  const db = getDatabase(app);

  onMount(() => {
    const dataRef = ref(db, "users");
    onValue(dataRef, (snapshot) => {
      if (snapshot.exists()) {
        //pjlist = snapshot.val();
        pjlist = [];
        snapshot.forEach((childSnapshot) => {
          pjlist.push(childSnapshot.val());
        });
      } else {
      }
    });
  });

  //const starCountRef = ref(db, "users");
  //onValue(starCountRef, (snapshot) => {
  //  data = snapshot.val();
  //  console.log(data);
  //});

  // Page-related
  import data from "./Data.svelte";
  import spine from "./Spine.svelte";
  import { onMount } from "svelte";
  //import { logger } from "firebase-tools";
</script>

<Header />
<main id="contents-spine">
  <div>
    <!-- Usage policy -->
    <section>
      <h1>To Use GEM simulation data</h1>

      <p>
        You are welcome to play with the GEM simulation data <a
          href="/data"
          use:link>here</a
        >. When you are planning to publish your work, please refer to the below
        publication policy.
      </p>
      <br />
      <ul>
        <li>Check the conflict of interest of your project</li>
        <li>Register your project proposal first</li>
        <li>Wait to be accepted</li>
        <li>Please update your project progress</li>
        <li>
          The core members should be included to the author list
          <span
            ><ul class="list_author">
              <li>Sukyoung Ken Yi (yi@yonsei.ac.kr)</li>
              <li>San Han (sanhan@yonsei.ac.kr)</li>
              <li>Jinsu Rhee (jinsu.rhee@gmail.com)</li>
              <li>J. K. Jang (starbrown816@yonsei.ac.kr)</li>
              <li>Seyoung Jeon (syj3514@yonsei.ac.kr)</li>
            </ul></span
          >
        </li>
      </ul>
    </section>
    <br />

    <!-- Registration policy -->
    <section>
      <h1>To Register your project</h1>
      <p>
        You can proceed your research with the GEM simulation data after
        registering your science project <a href="/spine" use:link
          >here (not yet linked)</a
        >. <!-- update here-->
      </p>

      <br />
      <ul>
        <li>Choose a kind of simulation</li>
        <li>Describe your science topic</li>
        <li>Input lead- and co-authors</li>
        <li>Speicfy the deadline</li>
      </ul>
      <br />

      <p>After your proposal is accepted</p>
      <br />
      <ul>
        <li>Keep updating research status</li>
        <li>Set to "stalled" when your research is stalled</li>
      </ul>
    </section>
    <br />

    <!-- Registration Tool -->
    <!-- TODO 
            Submit identifier by user ID
        -->

    <section>
      <h1>Register</h1>
      <p>Submit your science proposal</p>
      <br />

      <form id="proposal_form">
        <fieldset>
          <table>
            <colgroup>
              <col style="width:15%;" />
              <col style="width:40%;" />
              <col style="width:12%;" />
              <col style="width:13%;" />
              <col style="width:10%;" />
              <col style="width:20%;" />
            </colgroup>
            <tr>
              <th> Simulation type </th>
              <th> Topic </th>
              <th> Lead Author </th>
              <th> Co-author </th>
              <th> Email </th>
              <th> Deadline </th>
            </tr>
            <tr>
              <td style="text-align:left; padding-left:7px; font-size:12pt;">
                <p>
                  <input class="register_checkbox" type="checkbox" id="st_yz" />
                  YZiCS
                </p>
                <br />
                <p>
                  <input class="register_checkbox" type="checkbox" id="st_nh" />
                  NewHorizon
                </p>
                <br />
                <p>
                  <input
                    class="register_checkbox"
                    type="checkbox"
                    id="st_nh2"
                  /> NewHorizon2
                </p>
                <br />
                <p>
                  <input class="register_checkbox" type="checkbox" id="st_nc" />
                  NewCluster
                </p>
                <br />
              </td>
              <td><input type="text" id="topic" /></td>
              <td><input type="text" id="lau" /></td>
              <td><input type="text" id="cau" /></td>
              <td><input type="text" id="email" /></td>
              <td><input type="month" id="deadline" /></td>
            </tr>
          </table>
          <br />
          <div id="buttons" style="top:auto; left:77%;" class="buttons">
            <input type="submit" value="submit" />
            <input type="reset" value="reset" />
          </div>
        </fieldset>
      </form>
    </section>
    <!-- Why this section does not contain form when it computes height-->

    <!-- Approve / Disapprove the proposed project -->
    <!-- TODO (only appear to the administrator)-->
    <section id="approve_project" style="margin-top:170pt;">
      <h1>Submitted Proposal</h1>
      <p>This will be shown only to a root user</p>
      <br />

      <table id="approve_project_list" border="1">
        <colgroup>
          <col style="width:13%;" />
          <col style="width:13%;" />
          <col style="width:30%;" />
          <col style="width:12%;" />
          <col style="width:13%;" />
          <col style="width:10%;" />
          <col style="width:8%;" />
          <col style="width:14%;" />
        </colgroup>
        <thead>
          <tr>
            <th> User ID </th>
            <th> Simulation type </th>
            <th> Topic </th>
            <th> Lead Author </th>
            <th> Co-author </th>
            <th> Email </th>
            <th> Deadline </th>
            <th> Decision </th>
          </tr>
        </thead>

        <!-- Updated by the DB data-->
        <tbody>
          {#each pjlist as item, pindex}
            {#if item.status == "waiting"}
              <tr>
                <td> {item.id} </td>
                <td>
                  {#each item.sim_type as item_sim, index}
                    {#if item_sim != false}
                      {item.sim_list[index]}
                      <br />
                    {/if}
                  {/each}
                </td>

                <td> {item.topic} </td>
                <td> {item.lead_author} </td>
                <td> {item.co_author} </td>
                <td> {item.email} </td>
                <td> {item.deadline} </td>
                <td>
                  <button
                    on:click={() => make_pjtable_accept(pjlist, pindex, 1)}
                  >
                    Accept
                  </button>
                  <button
                    on:click={() => make_pjtable_accept(pjlist, pindex, 0)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            {/if}
          {/each}
        </tbody>
      </table>
    </section>

    <!-- Proposal List -->
    <section style="margin-top:10pt;">
      <h1>Proposal list</h1>
      <table id="project_list_table" border="1">
        <colgroup>
          <col style="width:13%;" />
          <col style="width:30%;" />
          <col style="width:12%;" />
          <col style="width:13%;" />
          <col style="width:10%;" />
          <col style="width:10%;" />
          <col style="width:10%;" />
        </colgroup>
        <thead>
          <tr>
            <th> Simulation type </th>
            <th> Topic </th>
            <th> Lead Author </th>
            <th> Co-author </th>
            <th> Email </th>
            <th> Deadline </th>
            <th> Status </th>
          </tr>
        </thead>
        <!-- Updated by the DB data-->
        <tbody>
          {#each pjlist as item, pindex}
            {#if item.status == "approved"}
              <tr>
                <td>
                  {#each item.sim_type as item_sim, index}
                    {#if item_sim != false}
                      {item.sim_list[index]}
                      <br />
                    {/if}
                  {/each}
                </td>

                <td> {item.topic} </td>
                <td> {item.lead_author} </td>
                <td> {item.co_author} </td>
                <td> {item.email} </td>
                <td> {item.deadline} </td>
                <td> {item.status} </td>
              </tr>
            {/if}
          {/each}
        </tbody>
      </table>
    </section>
  </div>
</main>

<Footer />
