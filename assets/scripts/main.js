var repos = {
              method: "GET",
              url: "https://api.github.com/users/a-emery/repos"
            };

var user = {
              method: "GET",
              url: "https://api.github.com/users/a-emery\?cliend_id\=a0203eaedf2872c91f33\&client_secret\=80fe6ee8cc80ed8eeb964fcfabab81436a61bc58",
            };

var starred = {
              method: "GET",
              url: "https://api.github.com/users/a-emery/starred",
            };

var organs = {
              method: "GET",
              url: "https://api.github.com/users/a-emery/orgs",
            };

/*****************
Repo Pulls
*****************/

$.ajax(repos).then(function(datShit){
  console.log(datShit);
});


/*****************
User Pulls
*****************/

$.ajax(user).then(function(datShit){
  console.log(datShit);
  $(".js_avatar_img").attr("src", datShit.avatar_url);
  $(".js_user_full_name").text(datShit.name);
  $(".js_username").text(datShit.login);
  $(".js_sidebar_email").text(datShit.email);
  $(".js_followers_number").text(datShit.followers);
  $(".js_following_number").text(datShit.following);
  $(".js_joined_date").text(moment(datShit.created_at).format("MMM DD, YYYY"));
});


/*****************
Starred Pulls
*****************/

$.ajax(starred).then(function(datShit){
  console.log(datShit);
  $(".js_starred_number").text(datShit.length);
});


/*****************
Organization Pulls
*****************/





/*****************
Handlebars
*****************/

Handlebars.registerHelper('updatedAt', function(data) {
  return moment(data).startOf('hour').fromNow();
});

$.ajax(organs).then(function(datShit){
  datShit.forEach(displayOrganizationImg);
});

function displayOrganizationImg(data){
  var source = document.querySelector('#organizations-template').innerHTML;

  var template = Handlebars.compile(source);
  var outputHTML = $(template(data));

  var organizationsList = $('.organizations-list');
  $(organizationsList).append(outputHTML);
}


$.ajax(repos).then(function(datShit){
  datShit.forEach(displayRepo);
});


function displayRepo(data) {
  var source = document.querySelector('#repo-template').innerHTML;

  var template = Handlebars.compile(source);
  var outputHTML = template(data);

  console.log(moment(data.updated_at).startOf('hour').fromNow());

  var repoUl = document.querySelector('.repo-list');
  $(repoUl).prepend(outputHTML);
}
