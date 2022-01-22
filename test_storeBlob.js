import fs from 'fs'
import { NFTStorage, Blob } from 'nft.storage'

const endpoint = 'https://api.nft.storage' // the default
const token = '' // your API key from https://nft.storage/manage

async function main() {
    const storage = new NFTStorage({ endpoint, token })
    const data = await fs.promises.readFile('/Users/huangxuchen/Downloads/WX20220121-233933@2x.png')
    const cid = await storage.storeBlob(new Blob([data]))
    console.log({ cid })
    const status = await storage.status(cid)
    console.log(status)
}
main()