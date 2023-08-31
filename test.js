function populateTagChildren(tagList) {
  const functionName = "populateTagChildren";
  const hierarchyMap = [];
  let lastParentIndex = -1;
  Logger.logFromClient(functionName + "(" + tagList + ")");
  return new Promise((resolve) => {
    tagList.forEach((tag) => {
      let ariaLevel, ariaExpanded;
      if (tag) {
        tag.getControllerElement().then((tagControllerElement) => {
          Promise.all([
            tagControllerElement.getWebElement().getAttribute("aria-level"),
            tagControllerElement.getWebElement().getAttribute("aria-expanded")
          ]).then((results) => {
            ariaLevel = results[0];
            ariaExpanded = results[1];
          }).then(() => {
            if (ariaLevel === 1) {
              hierarchyMap.push(tag);
              lastParentIndex += 1;
            } else {
              hierarchyMap[lastParentIndex].childs.push(tag);
              if (ariaExpanded) {
                hierarchyMap.push(tag);
                lastParentIndex += 1;
              }
            }
          })
        });
      }
    });
    resolve();
  }).then(() => {
    console.log(tagList);
    return tagList;
  });
}
