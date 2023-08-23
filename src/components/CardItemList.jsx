import { CardItem } from "./CardItem";
import GameData from "../app.mock";
import { useEffect, useState } from "react";
export const CardItemList = () => {
  const [cardList, setCardList] = useState([...GameData]);
  const [openCard,setOpenCard]=useState({name:null,id:null});

  const delay=(ms)=>{
    return new Promise(resolve => setTimeout(resolve, ms));
  }

   const flipcard=async (currentId)=>
   {
    console.log('flip called')
     await delay(6000);
    cardList[currentId-1].isOpen=false;
     setCardList([...cardList]);
     console.log('card fliped')
   }

  const onClickHandler = (currentId) => {
   
    cardList[currentId - 1].isOpen =true;
    setCardList([...cardList]);

    if(openCard.name===null || cardList[currentId-1].name!==openCard.name)
    flipcard(currentId);
    else if(openCard.id!==null)
  {
    cardList[openCard.id-1].isOpen=true;
  }

    setOpenCard({name:cardList[currentId-1].name,id:currentId});
  };

  return (
    <div className="card-item-list">
      {cardList.map((item) => {
        return (
          <CardItem
            key={item.id}
            id={item.id}
            image={item.pic}
            onClick={onClickHandler}
            isOpen={item.isOpen}
          ></CardItem>
        );
      })}
    </div>
  );
};
