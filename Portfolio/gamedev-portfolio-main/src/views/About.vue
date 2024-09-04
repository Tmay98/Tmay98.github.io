<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Tommy May</strong>, a recent graduate of the Computer Systems Bachelor program at BCIT.
        I have a great interest in creating lots of different games as well as hoping to work on bigger games to learn even more from.<br/>
        I really like both playing and creating games and my future goal is to create my own startup to make my own games.
      </div>

      <div style="margin-top: 20px;">You can look at some of the games i worked on <router-link to="/game-projects">here</router-link>,
        and view my resume <router-link to="/resume">here</router-link> as well.</div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> as a developer, to work on and help create games
        at a larger scale and learn much more about game developnment.
        You can reach me at <a href="mailto:twmay98@gmail.com">twmay98@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" width="224" height="224" alt="Avatar of Tommy" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>