import { resolve } from 'path'

export default {
        build: {
          rollupOptions: {
            input: {
              index: 'index.html',
               swearcounter:'swearcounter.html',
               mumbai: 'mumbai.html',
               gamescore: 'gamescore.html',
               agency:'DaveAgency.html',
                birthdaysite:'birthdaysite.html',
                businesscard:'businesscard.html',
              passwordgenerator:'passwordgenerator.html',
              productpage:'productpage.html',
                nft: resolve(__dirname, 'NFT/index.html'),
                cookieconset: resolve(__dirname,'cookieconsent/cookie.html'),
                coworking: resolve(__dirname,'CoWorking/index.html'),
                meme:resolve(__dirname,'meme/index.html')
              //   nft:'./NFT/swearcounter.html'
            }
          }
        }
}
