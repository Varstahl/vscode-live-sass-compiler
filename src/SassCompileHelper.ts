import * as SassCompiler from 'sasslib/sass.node.js';

export class SassHelper {

    static targetCssFormat(format) {
        return {
            style: SassCompiler.Sass.style[format],
        }
    }

    static compileOne(SassPath: string, options) {
        return new Promise<any>((resolve, reject) => {
            SassCompiler(SassPath, options, (result) => {
                if (result.status === 0) {
                    if (!result.text) {
                        result.text = '/* No CSS */';
                    }
                }
                else {
                    result.text = `/* \n Error: ${result.formatted} \n */`;
                }
                resolve(result);
            });
        });
    }

}
