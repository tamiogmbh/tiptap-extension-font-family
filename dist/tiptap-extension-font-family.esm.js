import '@tiptap/extension-text-style';
import { Extension } from '@tiptap/core';

const FontFamily = Extension.create({
  name: "font-family",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontFamily: {
            default: null,
            parseHTML: (element) => {
              var _a;
              return (_a = element.style.fontFamily) == null ? void 0 : _a.replace(/['"]+/g, "");
            },
            renderHTML: (attributes) => {
              if (!attributes.fontFamily) {
                return {};
              }
              return {
                style: `font-family: '${attributes.fontFamily}'`
              };
            }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontFamily: (fontFamily) => ({ chain }) => {
        return chain().setMark("textStyle", { fontFamily }).run();
      },
      unsetFontFamily: () => ({ chain }) => {
        return chain().setMark("textStyle", { fontFamily: null }).removeEmptyTextStyle().run();
      }
    };
  }
});

export { FontFamily, FontFamily as default };
//# sourceMappingURL=tiptap-extension-font-family.esm.js.map
