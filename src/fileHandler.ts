import FileMover from "./FileMover"

export default function filePathHandler(actualPath: string, newPath: string): void {
    
    const date = new Date()

    const fileMover = new FileMover(actualPath, newPath, '')
    const yearPath = `/${date.getFullYear()}` 
    const monthPath = `/${date.getMonth()}` 


}