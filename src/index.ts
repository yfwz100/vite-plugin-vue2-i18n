import { Plugin } from 'vite';

/**
 * The plugin options.
 */
export interface I18nOptions {
  /**
   * A function to decide if the given ID should be transformed.
   * By default, ID with `type=i18n` is consumed.
   */
  includes?: (id: string) => boolean;
}

const defaultOpt: Required<I18nOptions> = {
  includes: (id: string) => /type=i18n/i.test(id),
};

/**
 * Transform the code into assignment.
 *
 * @param varName the variable name.
 * @param code the code to transform.
 * @returns the transformed code.
 */
function transformCode(varName: string, code: string) {
  const assignmentPrefix = `const ${varName} =`;
  const codeTrimed = code.trim();
  if (codeTrimed.startsWith('{')) {
    return `${assignmentPrefix} ${codeTrimed};`;
  } else {
    return codeTrimed.replace(/export default/, assignmentPrefix);
  }
}

/**
 * Create the i18n plugin.
 *
 * @param opt the options.
 * @returns the i18n plugin.
 */
export function createI18nPlugin(options?: I18nOptions): Plugin {
  const opts = Object.assign({}, defaultOpt, options);
  return {
    name: 'yfwz100:vite-plugin-vue2-i18n',
    transform(code: string, id: string) {
      if (opts.includes(id)) {
        return {
          code:
            transformCode('__i18n', code.trim()) +
            `export default function i18n(Component) {\n` +
            `  const options = Component.options || Component\n` +
            `  options.__i18n = options.__i18n || []\n` +
            `  options.__i18n.push(JSON.stringify(__i18n))\n` +
            `}`,
          map: {
            mappings: '',
          },
        };
      }
    },
  };
}
