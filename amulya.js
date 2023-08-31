class Tag {
  constructor(name) {
    this.name = name;
    this.childs = [];
    this.ariaLevel = 0;
    this.ariaExpanded = false;
  }
};
const keepOnline = new Tag('keepOnline');
keepOnline.ariaLevel = 1;
keepOnline.ariaExpanded = false;

const parent_a = new Tag('parent_a');
parent_a.ariaLevel = 1;
parent_a.ariaExpanded = true;

const child_a_1 = new Tag('child_a_1');
child_a_1.ariaLevel = 2;
child_a_1.ariaExpanded = false;

const child_a_2 = new Tag('child_a_2');
child_a_2.ariaLevel = 2;
child_a_2.ariaExpanded = false;

const parent_b = new Tag('parent_b');
parent_b.ariaLevel = 1;
parent_b.ariaExpanded = true;

const child_b_1 = new Tag('child_b_1');
child_b_1.ariaLevel = 2;
child_b_1.ariaExpanded = true;

const child_b_1_1 = new Tag('child_b_1_1');
child_b_1_1.ariaLevel = 3;
child_b_1_1.ariaExpanded = false;

const keepOffline = new Tag('keepOffline');
keepOffline.ariaLevel = 1;
keepOffline.ariaExpanded = false;

const tags = [keepOnline, parent_a, child_a_1, child_a_2, keepOffline, parent_b, child_b_1, child_b_1_1];

const hm = [];
let lastParentIndex = -1;

tags.forEach((tag) => {
  if(tag.ariaExpanded && tag.ariaLevel === 1) {
    hm.push(tag);
    lastParentIndex += 1;
  } else if(!tag.ariaExpanded && tag.ariaLevel === 1) {
    hm.push(tag);
    lastParentIndex += 1;
  } else {
    if(tag.ariaExpanded) {
      hm[lastParentIndex].childs.push(tag);
      hm.push(tag);
      lastParentIndex += 1;
    } else {
      hm[lastParentIndex].childs.push(tag);
    }
  }
});

console.log(tags);
