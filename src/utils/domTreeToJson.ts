export const domTreeToJson = (node: any) => {
  let jsonObj: any = {};

  if (node.nodeType === Node.ELEMENT_NODE) {
    jsonObj.type = node.nodeName.toLowerCase();
    jsonObj.attributes = {};
    Array.prototype.slice.call(node.attributes).forEach((attr) => {
      jsonObj.attributes[attr.name] = attr.value;
    });
    jsonObj.children = [];
    Array.prototype.slice.call(node.childNodes).forEach((childNode) => {
      jsonObj.children.push(domTreeToJson(childNode));
    });
  } else if (node.nodeType === Node.TEXT_NODE) {
    jsonObj.type = 'text';
    jsonObj.textContent = node.textContent;
  }

  return jsonObj;
};
