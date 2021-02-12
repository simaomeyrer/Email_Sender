import fs from 'fs'

export default class FileMover {

    actualPath: string
    newPath: string
    newFolderPath: string

    constructor(actualPath: string, newPath: string, newFolderPath: string) {
        this.actualPath = actualPath
        this.newPath = newPath
        this.newFolderPath = newFolderPath
    }

    move(): void {
        if(!this.existFolder()) {
            this.createFolder()
            this.moveFile()
        } else {
            this.moveFile()
        }
    }

    private existFolder(): Boolean {
        return fs.existsSync(this.newFolderPath)  
    }

    private createFolder(): void {
        fs.mkdirSync(this.newFolderPath)
    }

    private moveFile(): void {
        fs.rename(this.actualPath, this.newPath, err => {
            if(err) {
                throw err
            } else {
                console.log(`file moved successfully!`);
                
            }
        })
    }
}