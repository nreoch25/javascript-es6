// Tree like structure. For example comments are trees. parents and children
class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = chrilden
  }
  *[Symbol.iterator]() {
    yield this.content;
    for(let child of this.children) {
      yield* child
    }
  }
}

const children = [
  new Comment("good comment", []),
  new Comment("bad comment", []),
  new Comment("meh", []);
];

const tree = new Comment("parent comment", children);

const values = [];
for (let value of tree) {
  values.push(value);
}
