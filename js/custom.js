var qna = new Map([
  
  [`Is it possible to enable smart card authentication for the build-in dialogs in Chrome and Firefox like in Microsoft´s Edge?` , [
    `The Edge browser prompts an authentication dialog which requests an username and password. The dialog provides an link "More choices" where we can authenticate via an smart card:
    We do not know if there is a special windows configuration which provides the smart card authentication in this dialog.

    Unfortunately, Google Chrome and Firefox do not provide the authentication via smart card. Only password is provided:

    Question: Is it possible to enable smart card authentication for the build-in dialogs in Chrome and Firefox like in Microsoft´s Edge?`
  ,
    "q1.html",
  `We have implemented an web application (ASP.NET 5) and enabled Windows Authentication in IIS.`
  ]]
,

  [`How to unstyle anchor when using bootstrap?`, [
    `Say, I want the text to be black. One way to do that would be to add class="my_class" to the anchor tag, and then put a.my_class{color:black} rule.

    But as I will soon realize bootstrap adds also style for :hover. So, I have to change that too. Also it changes styles for outline, text-decoration, :focus, etc.

  Of course I could just read unminified version of bootstrap.css and try to understand what are all the cases I have to cover, to make sure it stays black. But I perceive that there must be some easier way - I was expecting something like adding class="link-unstyled" or something? `
  ,
    "q2.html",
  `Bootstrap adds very nice default styles for anchors, but it makes it difficult to use <a> tag for something other than blue text.`
  ]]

]);

function searchit(){
var searchval = document.getElementById("searchid").value;
var maincontent = document.getElementById("main_content");
var xmlstring = `<div class="row">
<form class="col-12" action="">
  <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
    <div class="input-group">
    <input type="search" id = "searchid" placeholder="What're you searching for?" aria-describedby="button-addon1" class="form-control border-0 bg-light">
    <div class="input-group-append">
      <button id="button-addon1" type="button" onclick="searchit()" class="btn btn-link text-primary"><i class="fa fa-search"></i></button>
    </div>
    </div>
  </div>
</form>
</div>`;
if(maincontent == null) console.log('main content is null');
// console.log(qna.size);
  var cnt = 1;
  qna.forEach((val,values) => {
    console.log(val);
    if(searchval == "" || values.includes(searchval))
    xmlstring += 
    `<div class="row box suggestion">
    <div class="row">
      <div class="col-12 suggestion question"  question-tag="auth">
        <a href="${val[1]}" class="text-secondary font-weight-bold" >
          ${values}
        </a>
        <p>
        ${val[2]}
        <span id="dots${cnt}"  >...</span><span id="more${cnt}" >
          ${val[0]}
        </span>
        </p>
        <a href="#" onclick="readmore(id); return false;" id="readmore${cnt}" class="nav-toggle">Read More</a>

      </div>
    </div>
    <div class="row interaction" style="width:100%">
      <div class="col-12">
      <span class="vote">
        <svg width="24px" height="24px" viewBox="0 0 24 24"><g id="upvote" class="icon_svg-stroke icon_svg-fill" stroke-width="1.5" stroke="#666" fill="none" fill-rule="evenodd" stroke-linejoin="round"><polygon points="12 4 3 15 9 15 9 20 15 20 15 15 21 15"></polygon></g></svg>
        <span class="q-text qu-whiteSpace--nowrap" style="box-sizing: border-box; font-size: 13px;">2</span>

      </span>
      <span class="vote">

        <svg width="24px" height="24px" viewBox="0 0 24 24"><g id="downvote" class="icon_svg-stroke icon_svg-fill" stroke="#666" fill="none" stroke-width="1.5" fill-rule="evenodd" stroke-linejoin="round"><polygon transform="translate(12.000000, 12.000000) rotate(-180.000000) translate(-12.000000, -12.000000) " points="12 4 3 15 9 15 9 20 15 20 15 15 21 15"></polygon></g></svg>
      </span>
      </div>
    </div>


  </div>`;
    cnt++;
  });
  maincontent.innerHTML = xmlstring;
}

function readmore(elementids) {
var newid = String(elementids).substr(8,String(elementids).length - 8);
var dots = document.getElementById("dots"+newid);
console.log(newid);
var moreText = document.getElementById("more"+newid);
var btnText = document.getElementById("readmore"+newid);

if (dots.style.display === "none") {
  dots.style.display = "inline";
  btnText.innerHTML = "Read more";
  moreText.style.display = "none";
} else {
  dots.style.display = "none";
  btnText.innerHTML = "Read less";
  moreText.style.display = "inline";
}
}
