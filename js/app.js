const App = async () => {
  const res = await (await fetch('list.json')).json();
  const mortal = document.querySelector('#mortal');
  let str = "";
  shuffle(res.data);
  res.data.map((data) => {
    str += `
    <div class='mortal-wrapper'>
      <div class="name">
        <h1>${data.name}</h1>
      </div>
      <div class="url">
        <a href="${data.url ? data.url : "#" }" target="_blank">${data.url ? data.url : "N/A"}</a>
      </div>
      <div class="socmed">
        <a href="https://github.com/${data.github ? data.github : "#"}" target="_blank"><span class="fa fa-github-square github"></span></a>
        <a href="https://linkedin.com/in/${data.linkedin ? data.linkedin : "#"}" target="_blank"><span class="fa fa-linkedin-square linkedin"></span></a>
        <a href="https://facebook.com/${data.facebook ? data.facebook : "#"}" target="_blank"><span class="fa fa-facebook-square facebook"></span></a>
        <a href="https://twitter.com/${data.twitter ? data.twitter : "#"}" target="_blank"><span class="fa fa-twitter-square twitter"></span></a>
      </div>
    </div>
    `;
  });
  mortal.innerHTML = str;
}

const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5)
}

App();