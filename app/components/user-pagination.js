import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  currentPage: 0,
  usersPerPage: 5,
  classNameBindings: ["canShowPrevious", "canShowNext"],
  numberOfPages: computed("currentPage", function() {
    return this.get("source.length") / this.get("usersPerPage");
  }),
  paginatedUsers: computed("currentPage", function() {
    let startingIndex = this.get("currentPage") * this.get("usersPerPage");
    let endingIndex = startingIndex + this.get("usersPerPage");
    return this.get("source").slice(startingIndex, endingIndex);
  }),
  pageNumbers: computed("numberOfPages", function() {
    let pages = [];
    for (let i = 0; i < this.get("numberOfPages"); i++) {
      pages.push(i + 1);
    }
    return pages;
  }),
  canShowPrevious: computed("currentPage", function() {
    return this.get("currentPage") > 0;
  }),
  canShowNext: computed("currentPage", function() {
    return this.get("currentPage") < this.get("numberOfPages") - 1;
  }),
  actions: {
    goToPrevious() {
      this.set("currentPage", this.get("currentPage") - 1);
    },
    goToNext() {
      this.set("currentPage", this.get("currentPage") + 1);
    },
    goToPage(pageNumber) {
      this.set("currentPage", pageNumber - 1);
    }
  }
});

