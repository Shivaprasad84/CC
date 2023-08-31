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

const parentA = new Tag('parent_a');
parentA.ariaLevel = 1;
parentA.ariaExpanded = true;

const childA1 = new Tag('child_a_1');
childA1.ariaLevel = 2;
childA1.ariaExpanded = false;

const childA2 = new Tag('child_a_2');
childA2.ariaLevel = 2;
childA2.ariaExpanded = false;

const parentB = new Tag('parent_b');
parentB.ariaLevel = 1;
parentB.ariaExpanded = true;

const childB1 = new Tag('child_b_1');
childB1.ariaLevel = 2;
childB1.ariaExpanded = true;

const childB11 = new Tag('child_b_1_1');
childB11.ariaLevel = 3;
childB11.ariaExpanded = false;

const keepOffline = new Tag('keepOffline');
keepOffline.ariaLevel = 1;
keepOffline.ariaExpanded = false;

const tags = [
  keepOnline,
  parentA,
  childA1,
  childA2,
  keepOffline,
  parentB,
  childB1,
  childB11
];

const hierarchyMap = [];
let lastParentIndex = -1;

tags.forEach(tag => {
  if (tag.ariaLevel === 1) {
    hierarchyMap.push(tag);
    lastParentIndex += 1;
  } else {
    hierarchyMap[lastParentIndex].childs.push(tag);
    if (tag.ariaExpanded) {
      hierarchyMap.push(tag);
      lastParentIndex += 1;
    }
  }
});

console.log(hierarchyMap);
