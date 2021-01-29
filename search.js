const searchForm = document.querySelector('#search-form')
const jobType = document.querySelector('#job-type')
const resultSection = document.querySelector('#result-section')

const SEARCH_COUNTRY = 'us'

firebase.auth().onAuthStateChanged((user)=> {
  if(user){
      
      document.querySelector('#user')
          .innerHTML = `${user.displayName}`
      // console.log('User:', user)

  }  else {
      // user doesn't exit
      window.location.href = 'index.html'
  }
})

// see we added "async" to the function
// because we are call the dynamic "searchJobs"
searchForm.addEventListener('submit', function (e) {
  e.preventDefault()

  getJob ()
})

// Define a function 
async function getJob() {
  const jobName = jobType.value
  // we get the results from the API
  let jobResults = await searchJobs(jobName)

  // note the content we get back from that function
  // console.log(jobResults) // this is an Object, check and see
  let jobs = jobResults.results // this is an Array

  // display the content of the 1st object of the array
 console.log(jobs)

  // there are things on the object too
  let jobsFound = jobResults.count

  updatePage(jobs, jobsFound, jobName)
}

// Define a function to update the page with results
function updatePage(jobs, jobsFound, jobName) {
  resultSection.innerHTML = `
  <div id="result-section" class="p-16">
  <h1>${jobsFound} jobs found for 
  <strong>${jobName}</strong> in ${SEARCH_COUNTRY.toUpperCase()}</h1>
  </div>`

    jobs.forEach(function (job) {

      const div = document.createElement('div')

      // <a href="#">
      // <img src="img/heart-icon-png-15.jpg" class="w-4 h-4" title="Favorite jobs">
      // </a>

      div.innerHTML = `

      <div class="flex">
      <a href="#">
      <img src="img/1024px-Heart_empty_font_awesome.png" class="w-4 h-4" 
           title="Add to favorite jobs">
      </a>

          <button id="bttn" onclick="Share()"
          class="mt-1 ml-4 mr-4 p-1 w-max rounded-3xl shadow-lg bg-green-500 text-white 
          border-2 border-white text-1xl text-center focus:outline-none focus:ring-0">
          Share
          </button>

          <h4><a href="${job.redirect_url}">${job.title}</a> | 
            ${job.location.display_name}</h4> 
        
        </div>

        <p>${job.description}</p>
        <br>

      `
// end of "div.innerHTML"

      resultSection.appendChild(div)
    })
}

async function searchJobs (jobString, jobsCount = 10, country = SEARCH_COUNTRY) {

  // see https://gist.github.com/imdeletosh/f13c339b5f8e0a62ebe973a4ac86c3c0 for a breakdown of this
  const url = `https://api.adzuna.com/v1/api/jobs/${country}/search/1?app_id=a7547f34&app_key=92b62ee9bfd90c11c097004b51438beb&results_per_page=${jobsCount}&what=${jobString}&content-type=application/json`
  
  // console.log(url)

//   https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=a7547f34&app_key=92b62ee9bfd90c11c097004b51438beb&results_per_page=20&what=javascript%20developer&content-type=application/json
  
  const result = await fetch(url)
  const data = await result.json()

  return data
}


// https://codepen.io/bneupane/pen/KMKzZZ
$(document).ready(function(){
  $("#heart").click(function(){
    if($("#heart").hasClass("liked")){
      $("#heart").html('<i class="fa fa-heart-o" aria-hidden="true"></i>');
      $("#heart").removeClass("liked");
    }else{
      $("#heart").html('<i class="fa fa-heart" aria-hidden="true"></i>');
      $("#heart").addClass("liked");
    }
  });
});

{/* <style>
.fa-heart-o {
color: red;
cursor: pointer;
}

.fa-heart {
color: red;
cursor: pointer;
}
</style>
  <span id = heart><i class="fa fa-heart-o" aria-hidden="true" ></i> </span> */}

// https://www.w3schools.com/howto/howto_js_toggle_like.asp
function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}
{/* <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i> */}
