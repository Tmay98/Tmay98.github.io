<template>
  <div>
    <h2>Resume</h2>

    <div class="paragraph">
      
      <div style="margin-top:20px;">
        You can view my resume as a PDF here <br>
        <a  href="d/Resume_May_Tommy.pdf"><i class="fa fa-download fa-lg fa-fw"></i>Download as PDF</a>
        <div style="clear:both"></div>
      </div>
    </div>

    <div style="clear:both"></div>

    <div class="full-content">

      <h2>Education</h2>
     
      <h3>September 2022 - May 2024</h3>
      <h4>Bachelor of Technology in Computer Systems <br>
      British Columbia Institute of Technology</h4>

      <h3>January 2019 - May 2021</h3>
      <h4>Computer Systems Technology Diploma <br>
      British Columbia Institute of Technology</h4>

      <h2>Experience</h2>
      <h3>January 2020 - May 2020</h3>
      <h4>Software Development Co-op<br>Reva Solutions</h4>

      <div>- Worked effectively with a team to assist in creating programs to read and analyze digitized content<br>
      - Helped write Java scripts for these programs to read and find information from multiple documents of a similar style<br>
      - Experience working remotely for half of the co-op term</div>

      <h2>Skills</h2>

      <h3>Languages</h3>
      <div>C#, Python, C++, Java, SQL, HTML, CSS, JavaScript</div>

      <h3>Development Tools</h3>
      <div>Unity, Git/GitHub, Firebase, Trello, Visual Studio, PyCharm</div>

      <h3>Other</h3>
      <div>Experience creating projects with the Agile methodology, working effectively with team members, and Great at taking initiative in completing tasks
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
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
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>