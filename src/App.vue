<template>
  <div id="app">
    <h1>{{title}}</h1>
    <h4>{{description}}</h4>
    <hr>
    <h3>
      // Below is the title in uppercase which uses
      <code>computed</code> functionality of vue
    </h3>
    <h1>{{uppercaseTitle}}</h1>
    <hr>
    <h3>
      // Input field example using
      <code>v-model</code> and
      <code>data</code>
    </h3>First Name:
    <input type="text" v-model="fName">
    Last Name:
    <input type="text" v-model="lName">
    <div>Your name is: {{fullName}}</div>
    <hr>
    <h3>
      //
      <code>watch, v-if</code>: Demonstration for watcher and printing old and new value. So old will be a character less than the new one. :)
    </h3>
    <div>
      fName being watched.....
      <br>Old Value:
      <span v-if="!fNameOld">_______________</span>
      <strong>{{fNameOld}}</strong>
      <br>New Value:
      <span v-if="!fNameNew">_______________</span>
      <strong>{{fNameNew}}</strong>
    </div>

    <hr>
    <h3>
      <code>methods, v-text, :disabled</code>
    </h3>
    <div class="counter">
      <button v-on:click="decrement" :disabled="!count">Decrement</button>
      <div v-text="count"></div>
      <button v-on:click="increment" :disabled="count >= 10">Increment</button>
    </div>
    <hr>
    <h3>
      <code>v-for</code>
    </h3>
    <div>Users name</div>
    <ul>
      <li v-for="user in users" :key="user">{{user}}</li>
    </ul>

    <hr>
    <h3>
      <code>v-html</code>
    </h3>
    <div>HTML Content live parsing and output:</div>Input an html string:
    <input style="width: 500px;" type="text" v-model="htmlInput">
    <br>
    <br>Output of parsed html:
    <br>
    <div v-html="htmlInput"></div>

    <hr>
    <h3>
      <code>Using Vue Component</code>
    </h3>
    <Counter :startCount="0"/>
    <hr>
    <h3>
      <code>$emit</code> and listening for the emit using
      <code>@clicked</code> on component
    </h3>
    <h4>
      <code>@clicked</code> can be replaced with
      <code>v-on:clicked</code>
    </h4>
    <Clicker @clicked="handleClickerClick"/>Value received from
    <code>$emit</code>:
    <span>{{clickerCounter}}</span>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import Clicker from "./components/Clicker.vue";
export default {
  name: "app",
  props: {
    title: String,
    description: String,
    users: { type: Array, required: true }
  },
  components: {
    Counter,
    Clicker
  },
  data() {
    return {
      fName: "",
      lName: "",
      fNameOld: "",
      fNameNew: "",
      count: 0,
      htmlInput: "",
      clickerCounter: 0
    };
  },
  computed: {
    uppercaseTitle() {
      return this.title.toUpperCase();
    },
    fullName() {
      return `${this.fName} ${this.lName}`;
    }
  },
  watch: {
    fName(newVal, oldVal) {
      this.fNameOld = oldVal;
      this.fNameNew = newVal;
    }
  },
  methods: {
    increment() {
      return this.count++;
    },
    decrement() {
      return this.count--;
    },
    handleClickerClick(value) {
      this.clickerCounter = value;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
code {
  font-size: 18px;
  padding: 0px 5px;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#fce4ed),
    to(#ffe8cc)
  );
  background: linear-gradient(to right, #fce4ed, #ffe8cc);
}
.counter {
  display: flex;
  font-size: 18px;
}
.counter button,
.counter div {
  margin: 10px 10px;
}
</style>
