import ToolboxIcon from "./svg/article-line.svg";
import UI from "./ui";
import Service from "./service";
import css from "./style.css";
import { makeElement, makePostElement } from "./helpers";

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
    });

    this.data = {
      posts: data.posts || [],
      style: data.style || 'center',
    }
  }

  render() {
    return this.ui.render(this.data);
  }

  save() {
    return this.data;
  }

  onSelect(post) {
    this.data.posts.push(post);
  }
}
