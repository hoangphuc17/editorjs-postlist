import ToolboxIcon from "./svg/article-line.svg";
import UI from "./ui";
import Service from "./service";
import css from "./style.css";

// implement Tool API: https://editorjs.io/tools-api
export default class PostList {
  static get toolbox() {
    return {
      icon: ToolboxIcon,
      title: "PostList",
    };
  }

  static get isReadOnlySupported() {
    return true;
  }

  constructor({ data, config, api, readOnly }) {
    this.api = api;

    this.readOnly = readOnly;

    this.config = {
      ...config,
      onSelectPost: config.onSelectPost || (() => {}),
    };

    this.service = new Service({
      config: this.config,
      onSelect: (data) => {
        this.onSelect(data);
      },
    });

    this.ui = new UI({
      api,
      readOnly,
      config: this.config,
      onSelectPost: () => {
        this.service.selectPost();
      },
      onRemovePost: () => {
        this.onRemove();
      },
    });

    this.data = {
      posts: data.posts || [],
      style: data.style || "center",
    };
  }

  render() {
    return this.ui.render(this.data);
  }

  save() {
    return this.data;
  }

  onSelect(post) {
    this._updatePosts(post, "select");
  }

  onRemove(post) {
    this._updatePosts(post, "remove");
  }

  _updatePosts(post, action) {
    if (post && action === "select") {
      this.data.posts.push(post);
      this.ui.updatePosts(this.data.posts);
    }

    if (post && action === "remove") {
      this.data.posts.push(post);
      this.ui.updatePosts(this.data.posts);
    }
  }
}
