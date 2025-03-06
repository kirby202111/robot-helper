// 开发环境插件
import { spawn } from 'child_process'
import { electron } from 'process';
export const  ElectronDevPlugin = () => {
    return {
        name: 'electron-dev',
        configureServer (server){
            server?.httpServer?.on('listening',() => {
                const addressInfo = server.httpServer?.address();
                const IP = `http://localhost:${addressInfo.port}`;
                // spawn(require('electron'),['src/background.js',IP]);
                console.log(IP);
            })
        }
    }
}