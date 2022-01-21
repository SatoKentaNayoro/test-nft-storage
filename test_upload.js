import {NFTStorage, File} from 'nft.storage';
import fs from 'fs'

const client = new NFTStorage({token: 'ApiToken'})

async function main() {
    const metadata = await client.store({
        name: 'HI',
        description: 'this is a test',
        image: new File(
            [await fs.promises.readFile('/Users/huangxuchen/Downloads/WX20220121-233933@2x.png')],
            'test1.png',
            {type: 'image/png'}
        ),
        properties: {
            custom: 'test what will happen',
            file: new File(
                [await fs.promises.readFile('/Users/huangxuchen/Downloads/WX20211204-223219@2x.png')],
                'test2.png',
                {
                    type: 'image/png'
                }
            )
        }
    })

    console.log('IPFS URL for the metadata:', metadata.url, '\n')
    console.log('metadata.json contents:\n', metadata.data)
    console.log('metadata.json contents with IPFS gateway URLs:\n', metadata.embed())
    console.log('what is ipnft:\n', metadata.ipnft)
}

main()