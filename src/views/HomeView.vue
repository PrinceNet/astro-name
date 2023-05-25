<script>
import { nouns } from "../data/nouns";
import { adjectives } from "../data/adjectives";

export default {
  data() {
    return {
      name: "",
      nouns: nouns,
      adjectives: adjectives,
      isShowCopyBtn: false,
      isCopySuccess: false,
      fullYear: new Date().getFullYear(),
    };
  },
  created() {
    this.generate();
  },
  methods: {
    generate() {
      let adjective = this.adjectives[this.random(this.adjectives.length)];
      let noun = this.nouns[this.random(this.nouns.length)];

      this.name = adjective + " " + noun;
    },
    random(n) {
      return Math.floor(Math.random() * n);
    },
    showCopyBtn() {
      this.isShowCopyBtn = true;
    },
    hideCopyBtn() {
      this.isShowCopyBtn = false;
    },
    copy() {
      this.copyStringToClipboard(this.name);

      this.isCopySuccess = true;

      setTimeout(() => {
        this.isCopySuccess = false;
      }, 1000);
    },
    copyStringToClipboard(str) {
      // Create new element
      var el = document.createElement("textarea");
      // Set value (string to be copied)
      el.value = str;
      // Set non-editable to avoid focus and move outside of view
      el.setAttribute("readonly", "");
      el.style = { position: "absolute", left: "-9999px" };
      document.body.appendChild(el);
      // Select text inside element
      el.select();
      // Copy text to clipboard
      document.execCommand("copy");
      // Remove temporary element
      document.body.removeChild(el);
    },
  },
};
</script>

<template>
  <div class="container">
    <img src="@/assets/star.png" alt="star" class="logo" />
    <h1 class="mx-auto text-center text-uppercase">AstroName</h1>
    <p class="col-md-6 offset-md-3 subtitle">
      Your dream name is waiting for you between the stars
    </p>
    <div
      class="box text-center col-md-6 offset-md-3"
      @mouseover="showCopyBtn()"
      @mouseleave="hideCopyBtn()"
    >
      <h2>{{ name }}</h2>
      <button
        type="button"
        class="btn btn-sm btn-no-box-shadow copy"
        :class="{ 'copy--success': isCopySuccess }"
        v-show="isShowCopyBtn"
        @click="copy()"
      >
        {{ isCopySuccess ? "Copied!" : "Copy" }}
      </button>
    </div>
    <button
      type="button"
      class="btn col-md-6 offset-md-3 generate btn-no-box-shadow"
      @click="generate()"
    >
      Generate
    </button>
    <p class="col-md-6 offset-md-3 disclaimer">
      * Up to
      {{
        (nouns.length * adjectives.length)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }}
      combinations avaliable
    </p>
  </div>

  <footer>
    <p>
      Copyright <span class="copyright">&copy;</span> {{ fullYear }}
      <a href="https://doronmor.com/" target="_blank">Doron Mor</a>. All rights
      reserved.
    </p>
  </footer>
</template>

<style scoped></style>
