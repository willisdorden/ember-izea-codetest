import Component from "@ember/component";
import { later } from "@ember/runloop";

export default Component.extend({
  sidePanelActive: false,
  panelIsSlidingOut: false,
  classNameBindings: ["panelIsSlidingOut", "sidePanelActive"],
  actions: {
    toggleSidePanel() {
      this.toggleProperty("sidePanelActive");

      /* Need to do this here to disable click */
      document.querySelector('#postsContainer').style.pointerEvents = "none";
    },
    toggleSidePanelOut() {
      if (this.get("sidePanelActive") && !this.get("panelIsSlidingOut")) {
        this.toggleProperty("panelIsSlidingOut");
        document.querySelector('#postsContainer').style.pointerEvents = "inherit";
        /* Setting timeout to allow animation to run */
        later(() => {
          this.toggleProperty("sidePanelActive");
          this.toggleProperty("panelIsSlidingOut");
        }, 500);
      }
    }
  }
});
