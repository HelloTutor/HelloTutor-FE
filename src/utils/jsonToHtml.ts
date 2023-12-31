export const jsonToHtml: any = (jsonObjArray: any[]) => {
  const result = jsonObjArray.map((jsonObj) => {
    if (jsonObj.type === 'text') {
      return jsonObj.textContent;
    } else {
      const attributes = Object.keys(jsonObj.attributes)
        .map((key) => ` ${key}="${jsonObj.attributes[key]}"`)
        .join('');

      const children = jsonToHtml(jsonObj.children);

      // <br> 태그에 대한 예외 처리
      if (jsonObj.type === 'br') {
        return '<br>';
      }

      return `<${jsonObj.type}${attributes}>${children}</${jsonObj.type}>`;
    }
  });

  return result.join('');
};
