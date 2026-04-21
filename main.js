Vue.component('chuck-card', {
  props: ['icon_url', 'value'],
  template: `
    <div class="card h-100 chuck-card">
      <img :src="icon_url" class="card-img-top chuck-img" :alt="value">
      <div class="card-body">
        <p class="card-text">{{ value }}</p>
      </div>
    </div>
  `
})

var app = new Vue({
  el: '#app',
  data() {
    return {
      chuck: [
        {
            icon_url: "chucknorris.jpeg",
            value: "Chuck Norris can skydive into outer space."
        },
        {
            icon_url: "chucknorris.jpeg",
            value: "The chief export of Chuck Norris is pain."
        },
        {
            icon_url: "chucknorris.jpeg",
            value: "Chuck Norris doesn't read books. He stares them down until he gets the information he wants."
        },
        {
            icon_url: "chucknorris.jpeg",
            value: "Time waits for no man. Unless that man is Chuck Norris."
        },
        {
            icon_url: "chucknorris.jpeg",
            value: "If you spell Chuck Norris in Scrabble, you win. Forever."
        }
        ]
    }
  }
})