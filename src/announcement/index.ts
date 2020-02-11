import { Memento, extensions, window, commands, Uri } from 'vscode';

const SETUP_STRING = 'liveSassCompiler.setup.version';

export async function checkNewAnnouncement(memento: Memento) {

    const packageJSON = extensions.getExtension('ritwickdey.live-sass').packageJSON;
    const announcement = packageJSON.announcement;

    if (!announcement && Object.keys(announcement).length === 0) return;

    const stateVersion = await memento.get(SETUP_STRING) || '0.0.0';
    const installedVersion = packageJSON.version;

    if (stateVersion !== installedVersion && installedVersion === announcement.onVersion) {
        await memento.update(SETUP_STRING, installedVersion);
        const showMore = 'Show Details';
        const choice = await window.showInformationMessage(announcement.message, showMore);
        if (choice === showMore) {
            const url = announcement.url || 'https://github.com/Varstahl/vscode-live-sass-compiler';
            commands.executeCommand('vscode.open', Uri.parse(url))
        }

    }

}