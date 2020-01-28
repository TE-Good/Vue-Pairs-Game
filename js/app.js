var app = new Vue({
  el: '#app',

  data() {
    return {
      isActive: false,
      hasWon: false,
      seconds: 0,
      tilesClicked: []
    }
  },

  methods: {
    start() {
      this.isActive = true;
      this.startTimer()
    },
    startTimer() {
      let timer = setInterval(() => {
        this.seconds += 1;
      }, 1000)
    },
    handleTileClick(tile) {
      this.tilesClicked.push(tile)
    },
    stop() {
      this.isActive = false
    }
  }

});
