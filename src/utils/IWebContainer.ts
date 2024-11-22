import { WebContainer, type FileSystemTree } from '@webcontainer/api'

export class IWebContainer {
  isInitialize: boolean = false
  webContainerInstance: WebContainer | null = null

  async init() {
    this.webContainerInstance = await WebContainer.boot()
    this.isInitialize = true
  }

  async mount(snapshotOrTree: FileSystemTree | Uint8Array | ArrayBuffer) {
    await this.webContainerInstance?.mount(snapshotOrTree)
  }

  async export(userName: string) {
    await this.webContainerInstance?.export(userName, { format: 'binary' })
    // Save Exported Data
  }

  async readFile(path: string) {
    const file = await this.webContainerInstance?.fs.readFile(path, 'utf-8')
    return file
  }

  async readDir(path: string) {
    const files = await this.webContainerInstance?.fs.readdir(path, { withFileTypes: true })
    return files
  }

  async remove(path: string) {
    await this.webContainerInstance?.fs.rm(path, { recursive: true })
  }

  async writeFile(path: string, content: string) {
    await this.webContainerInstance?.fs.writeFile(path, content)
  }

  async mkdir(path: string) {
    await this.webContainerInstance?.fs.mkdir(path, { recursive: true })
  }
}
