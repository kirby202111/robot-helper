// electron 主进程文件
import {app,BrowserWindow} from Electron

app.whenReady().then(()=>{
    const win = new BrowserWindow({
        height:600,
        width:800,
        webPreferences:{
            nodeIntegration: true, //渲染进程使用node api
            contextIsolation: false, //关闭渲染进程沙箱
            webSecurity: false
        }
    })

  
        win.LoadURL("localhost:5173")
   


})