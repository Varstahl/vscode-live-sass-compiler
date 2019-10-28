import * as fs from 'fs';
import * as path from 'path';

export interface IFileResolver {
    FileUri: string,
    Exception: NodeJS.ErrnoException
}

export class FileHelper {

    static writeToOneFile(targetFileUri, data) {
        return new Promise<IFileResolver>((resolve) => {
            fs.writeFile(targetFileUri, data, 'utf8', (err) => {
                resolve({
                    FileUri : targetFileUri,
                    Exception: err
                });
            });
        })

    }

    static makeDirIfNotAvailable(dir) {
        if (fs.existsSync(dir)) return;
        if (!fs.existsSync(path.dirname(dir))) {
            this.makeDirIfNotAvailable(path.dirname(dir));
        }
        fs.mkdirSync(dir);
    }

}
