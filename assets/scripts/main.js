$.ajax({
  method: "GET",
  url: "https://api.github.com/user/repos",
  headers: { "Authorization": "token b4102a66069d10680913154dd6d6f42e7c14d363" }
}).then(function(datShit){
  console.log(datShit);
});

$.ajax({
  method: "GET",
  url: "https://api.github.com/user",
  headers: { "Authorization": "token b4102a66069d10680913154dd6d6f42e7c14d363" }
}).then(function(datShit){
  console.log(datShit);
});
