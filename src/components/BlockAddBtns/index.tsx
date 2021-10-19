import React from "react";
import {BlocksType} from "../../types/BlocksType";
import "./index.css";

type BlockAddBtnsProps = {setBlocks: React.Dispatch<React.SetStateAction<BlocksType>>}

function BlockAddBtns({setBlocks}: BlockAddBtnsProps) {
    return (
      <div className="blocks__list container">
          <h2>Шаблоны блоков</h2>
          <button type="button" name="type" value="header" onClick={() => {
              setBlocks((prevState => {
                  return prevState.concat({
                      type: 'header',
                      img: 'https://oilgasforum.ru/upload/emails/folga/tnf150.png',
                      date: '14-16 сентября 2022',
                      place: 'Тюмень, Технопарк',
                      color: "#F2F2F2",
                      backgroundColor: "#004FCB",
                  });
              }))
          }} style={{
              color: "#F2F2F2",
              backgroundColor: "#004FCB",
              borderColor: "#004FCB"
          }}>Шапка письма</button>
          <button type="button" name="type" value="header" onClick={() => {
              setBlocks((prevState => {
                  return prevState.concat({
                      type: 'heading',
                      text: 'Заголовок',
                      color: '#004FCB',
                      backgroundColor: '#F2F2F2',
                  });
              }))
          }} style={{
              color: "#004FCB"
          }}>Заголовок</button>
          <button type="button" name="type" value="paragraph" onClick={() => {
              setBlocks((prevState => {
                  return prevState.concat({
                      type: 'paragraph',
                      text: 'Параграф текста',
                      color: '#222222',
                      backgroundColor: '#F2F2F2',
                  });
              }))
          }}>Параграф текста</button>
          <button type="button" name="type" value="image" onClick={() => {
              setBlocks((prevState => {
                  return prevState.concat({
                      type: 'image',
                      img: 'https://oilgasforum.ru/upload/emails/folga/74top2.jpg',
                      link: 'https://oilgasforum.ru/registration/',
                      text: 'Альтернативный текст',
                      width: '600'
                  });
              }))
          }} style={{
              color: "#F2F2F2",
              backgroundColor: "#444",
              borderColor: "#444"
          }}>Изображение</button>
          <button type="button" name="type" value="link" onClick={() => {
              setBlocks((prevState => {
                  return prevState.concat({
                      type: 'link',
                      text: 'Ссылка',
                      link: 'https://oilgasforum.ru/registration/',
                      icon: 'arrow',
                      color: "#222222",
                      backgroundColor: "#F2F2F2",
                  });
              }))
          }} style={{
              color: "#F2F2F2",
              backgroundColor: "#004FCB",
              borderColor: "#004FCB",
          }}>Ссылка →</button>
          <button type="button" name="type" value="quote" onClick={() => {
              setBlocks((prevState => {
                  return prevState.concat({
                    type: 'quote',
                    img: 'https://oilgasforum.ru/upload/emails/folga/kiyatkina.jpg',
                    text: 'С нетерпением ждем встречи на TNF 2021',
                    name: 'Ольга Кияткина',
                    job: 'Руководитель департамента по работе с участниками',
                    backgroundColor: "#F2F2F2",
                  });
              }))
          }}>Слово руководителя</button>
          <button type="button" name="type" value="footer" onClick={() => {
              setBlocks((prevState => {
                  return prevState.concat({
                      type: 'footer',
                      heading: 'До встречи на TNF!',
                      subheading: '20–22 сентября 2022 г.',
                      tel: '8 800 350 26 37',
                      email: 'welcome@oilgasforum.ru',
                      site: 'oilgasforum.ru',
                      tg: 'https://t.me/TNF2021',
                      vk: 'https://vk.com/oilgasforum2021',
                      ig: 'https://www.instagram.com/oilgasforum/',
                      fb: 'https://www.facebook.com/TumenOilGasForum',
                      yt: 'https://www.youtube.com/channel/UCxiZZMIETcM-X0r1s3Bo97w',
                      copyright1: '© Тюменский нефтегазовый форум, 2021',
                      copyright2: '625026, г. Тюмень, ул. Республики, 142',
                  });
              }))
          }} style={{
              color: "#888",
              borderColor: "#888"
          }}>Подвал письма</button>
      </div>
    );
}

export default BlockAddBtns;
