Vue.component('tile', {

  template: `<div @click="clickHandler">
                <h1>{{ name }}</h1>
                <p>{{ products && products[1] }}</p>
                <span v-if="clicked">You clicked me</span>
              </div>`,

  props: ['name', 'products'],

  data() {
    return {
      clicked: false
    }
  },

  methods: {
    clickHandler() {
      this.clicked = true;
      this.$emit('tile-clicked', this.name)
    }
  }

})
