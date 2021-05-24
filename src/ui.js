import { makeElement, makePostElement } from "./helpers";

// return element for tool
export default class UI {
  constructor({ api, config, onSelectPost, readOnly }) {
    this.api = api;
    this.config = config;
    this.onSelectPost = onSelectPost;
    this.onRemovePost = onRemovePost;
    this.readOnly = readOnly;
    this.nodes = {
      wrapper: makeElement("div", [this.CSS.baseClass, this.CSS.wrapper]),
      // imageContainer: makeElement("div", [this.CSS.imageContainer]),
      // imageEl: undefined,
      // imagePreloader: makeElement("div", this.CSS.imagePreloader),
      // caption: makeElement("div", [this.CSS.input, this.CSS.caption], {
      //   contentEditable: !this.readOnly,
      // }),

      listContainer: makeElement("div", [this.CSS.listContainer]),
      post: undefined,
      selectPostButton: this._createSelectPostButton(),
    };

    /**
     * Create base structure
     *  <wrapper>
     *    <image-container>
     *      <image-preloader />
     *    </image-container>
     *    <caption />
     *    <select-file-button />
     *  </wrapper>
     */

    // create base structure
    // <wrapper>
    //   <post></post>
    //   <post></post>
    //   <select-post-button></select-post-button>
    // </wrapper>
    // this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder;
    // this.nodes.listContainer.appendChild(this.nodes.post);
    this.nodes.wrapper.appendChild(this.nodes.listContainer);
    this.nodes.wrapper.appendChild(this.nodes.selectPostButton);
  }

  get CSS() {
    return {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      button: this.api.styles.button,

      /**
       * Tool's classes
       */
      imageContainer: "image-tool__image",
      imagePreloader: "image-tool__image-preloader",
      imageEl: "image-tool__image-picture",
      caption: "image-tool__caption",

      wrapper: "vz-postlist-tool",
      listContainer: "vz-postlist-tool__list",
      post: "vz-postlist-tool__list__post",
      selectPostButton: "vz-postlist-tool__select-post-button",
      removeBtn: "vz-postlist-tool__remove-post-button",
    };
  }

  render() {
    return this.nodes.wrapper;
  }

  updatePosts(posts) {
    

  }

  _createSelectPostButton() {
    const button = makeElement("button", [this.CSS.selectPostButton]);

    button.innerHTML =
      this.config.buttonContent || `${this.api.i18n.t("Select Post")}`;

    button.addEventListener("click", () => {
      this.onSelectPost();
    });

    return button;
  }
}
