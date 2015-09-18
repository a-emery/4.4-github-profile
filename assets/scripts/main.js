var repos = {
              method: "GET",
              url: "https://api.github.com/user/repos",
              headers: { "Authorization": "token b4102a66069d10680913154dd6d6f42e7c14d363" }
            };

var user = {
              method: "GET",
              url: "https://api.github.com/user",
              headers: { "Authorization": "token b4102a66069d10680913154dd6d6f42e7c14d363" }
            };

var starred = {
              method: "GET",
              url: "https://api.github.com/user/starred",
              headers: { "Authorization": "token b4102a66069d10680913154dd6d6f42e7c14d363" }
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
User Pulls
*****************/

$.ajax(starred).then(function(datShit){
  console.log(datShit);
  $(".js_starred_number").text(datShit.length);
});


/*****************
Handlebars
*****************/

$.ajax(repos).then(function(datShit){
  datShit.forEach(displayRepo);
});


function displayRepo(data) {
  var source = document.querySelector('#repo-template').innerHTML;

  var template = Handlebars.compile(source);
  var outputHTML = template(data);

  var repoUl = document.querySelector('.repo-list');
  $(repoUl).append(outputHTML);
}
