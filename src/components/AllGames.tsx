import { SimpleGrid } from "@chakra-ui/react";
import CardToAdd from "./CardToAdd";



import logo from "../assets/logo.png";
import splinterlands from "../assets/splinterlands.png";
import alien from "../assets/alienworlds.png";
import up from "../assets/upland.png";
import crazy from "../assets/crazy.png";

export default function AllGames({page,user}:{page:string,user:string}){
  const cardData =[{title:"Axie Infinity",desc:"Axie Infinity is a trading and battling game that allows players to collect, breed, raise, battle, and trade creatures known as Axies",website:"https://axieinfinity.com/", img:logo}, 
  {title:"Splinterlands",desc:"THE NEXT GENERATION OF COLLECTIBLE CARD GAMES! PLAY ANYTIME! TRADE ANYTIME! EARN ANYTIME!",website:"https://splinterlands.com/",img:splinterlands},
  {title:"Alien Worlds",desc:"Seek your fortune! Find NFTs you can use to connect and play with others. Earn Trilium that gives you power in the Planet Decentralised Autonomous Organizations (Planet DAOs) – where much of the action happens.",website:"https://alienworlds.io/?utm_source=DappRadar&utm_medium=deeplink&utm_campaign=visit-website",img:alien},
  {title:"Upland",desc:"Join the brand new NFT metaverse that is mapped to the real world and quickly becoming the largest and most dynamic blockchain-based economy in existence. ",website:"https://www.upland.me/",img:up},
  {title:"Crazy Defense Heroes",desc:"A tower defense game with RPG elements, card collectibles, and multiplayer mode.",website:"https://crazydefenseheroes.com/?utm_source=DappRadar&utm_medium=deeplink&utm_campaign=visit-website",img:crazy},];
     
    //  descriptions: [   "Actress, musician, songwriter and artist. PM for work inquires  me in your posts. adnisbgiagibgi agjagkgban fajkgfjfng fngfdjngfbkfg n fgfgsflbfg fjfn", "Actress, musician, songwriter and artist. PM for work inquires  me in your posts. adnisbgiagibgi agjagkgban fajkgfjfng fngfdjngfbkfg n fgfgsflbfg fjfn", "Actress, musician, songwriter and artist. PM for work inquires  me in your posts. adnisbgiagibgi agjagkgban fajkgfjfng fngfdjngfbkfg n fgfgsflbfg fjfn",],
  
  // const titles= ["a","nvbja",'djkna',"ajkdkd"];


  function SaveGame(title:string){
    localStorage.setItem(title,'1');
  }

    return(        
    <SimpleGrid columns={4} spacing={10}>
       {cardData.map(v => (
        <CardToAdd title={v.title} desc={v.desc} addToList={() => SaveGame(v.title + ".." + user)} website={v.website} img={v.img}/>
      ))}
        

      </SimpleGrid>
);
}