export const applyCssClasses = (jsonObj: any, cssClasses: any) => {
  if (jsonObj.type) {
    if (jsonObj.attributes && typeof jsonObj.attributes === 'object') {
      Object.keys(jsonObj.attributes).forEach((key) => {
        if (key.startsWith('style')) {
          let styles =
            jsonObj.attributes[key] !== ''
              ? jsonObj.attributes[key].split(';')
              : [];
          console.log(styles);
          if (styles && Array.isArray(styles)) {
            styles.forEach((style: any) => {
              let [property, value] = style.split(':');

              if (cssClasses[property]) {
                if (cssClasses[property][value]) {
                  if (!jsonObj.attributes['class']) {
                    jsonObj.attributes['class'] = '';
                  }
                  jsonObj.attributes['class'] +=
                    ' ' + cssClasses[property][value];
                }
              }
            });
          }
        }
      });
    }
    if (jsonObj.children && Array.isArray(jsonObj.children)) {
      jsonObj.children.forEach((child: any) =>
        applyCssClasses(child, cssClasses)
      );
    }
  }
};
