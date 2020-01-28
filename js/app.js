var app = new Vue({
  el: '#app',

  data() {
    return {
      gameScreen: 0,
      gameCounter: 0,
      isActive: true,
      hasWon: false,
      seconds: 0.00,
      tilesClicked: [],
      optionProduct: null,
      optionBrand: null,
      products: [
        { 
          name: 'A', 
          image: 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto,fl_lossy/6a48858b62374aed8449a8af011d27ba_9366/Lite_Racer_CLN_Shoes_Blue_B96566_01_standard.jpg',
          brand: 'adidas' 
        }, 
        {
          name: 'B', 
          image: 'https://assets.reebok.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/c55281ac20fe4d92bc6eaa54015ab26a_9366/Nano_9.0_Shoes_Blue_DV6340_01_standard.jpg',
          brand: 'reebok'
        }, 
        {
          name: 'C', 
          image: 'https://i1.adis.ws/i/jpl/jd_214003_a?qlt=80&w=600&h=425&v=1&fmt=webp',
          brand: 'nike'
        }, 
        {
          name: 'D', 
          image: 'https://nb.scene7.com/is/image/NB/mcruznn2_nb_02_i?$pdpPictLG2x$&fmt=webp',
          brand: 'new balance'
        }
      ],
      brands: [
        { 
          name: 'A', 
          image: 'http://clipart-library.com/images_k/adidas-logo-transparent-background/adidas-logo-transparent-background-18.png',
          brand: 'adidas' 
        }, 
        {
          name: 'B', 
          image: 'https://i.imgur.com/uEfZwmy.png',
          brand: 'reebok'
        }, 
        {
          name: 'C', 
          image: 'https://www.pinclipart.com/picdir/big/378-3789155_view-more-nike-logo-transparent-background-clipart.png',
          brand: 'nike'
        }, 
        {
          name: 'D', 
          image: 'https://i.imgur.com/dfjC8yV.png',
          brand: 'new balance'
        }
      ]
    }
  },

  methods: {
    start() {
      this.isActive = true;
      this.startTimer()
    },
    startTimer() {
      let timer = setInterval(() => {
        this.seconds += 0.10;
      }, 100)
    },
    handleTileClick(tile) {
      this.tilesClicked.push(tile)
    },
    stop() {
      this.isActive = false
    },
    randomise() {
      return 0.5 - Math.random()
    },
    productSelect(item, event) {
      this.removeSideHighlights(event.target)
      event.target.classList.add('highlighted')
      this.optionProduct = null
      this.optionProduct = { brand: item.brand, target: event.target }
      this.compareSelected()
    },
    brandSelect(item, event) {
      this.removeSideHighlights(event.target)
      event.target.classList.add('highlighted')
      this.optionBrand = null
      this.optionBrand = { brand: item.brand, target: event.target }
      this.compareSelected()
    },
    compareSelected() {
      if (this.optionProduct && this.optionBrand) {
        if (this.optionProduct.brand === this.optionBrand.brand) {
          this.optionProduct.target.classList.add('fadeOut')
          this.optionBrand.target.classList.add('fadeOut')
          this.gameCounter++
          this.gameCounter === 4 ? this.changeToEndScreen(this.optionProduct.target) : null
          this.optionProduct = null
          this.optionBrand = null
          
        } else {
          this.removeSideHighlights(this.optionProduct.target)
          this.removeSideHighlights(this.optionBrand.target)
          this.optionProduct.target.classList.add('wrong')
          this.optionBrand.target.classList.add('wrong')
          setTimeout(() => {
            this.optionProduct.target.classList.remove('wrong')
            this.optionBrand.target.classList.remove('wrong')
            this.optionProduct = null
            this.optionBrand = null

          }, 1000)
        }
      } 
    },
    removeSideHighlights(target){
      target.parentNode.childNodes.forEach(elem => elem.classList.remove('highlighted'))
    },
    changeToGameScreen(event) {
      event.target.parentNode.classList.remove('fadeInDown')
      event.target.parentNode.classList.add('fadeOutDown')
      setTimeout(() => this.gameScreen++, 500)
    },
    changeToEndScreen(target) {
      target.parentNode.parentNode.parentNode.parentNode.classList.remove('fadeInUp')
      target.parentNode.parentNode.parentNode.parentNode.classList.add('fadeOutRight')
      setTimeout(() => this.gameScreen++, 1000)
    }
  }

});
