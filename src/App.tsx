import React, {useState} from 'react';
import {BlocksType} from "./types/BlocksType";
import './App.css';
import Blocks from "./components/Blocks";
import BlockAddBtns from "./components/BlockAddBtns";
import renderHtml from "./functions/renderHtml";

const json:BlocksType  = [
	{
		type: 'header',
		img: 'https://oilgasforum.ru/upload/emails/folga/tnf150.png',
		date: '20–22 сентября 2022',
		place: 'Тюмень, Технопарк',
		color: "#F2F2F2",
		backgroundColor: "#004FCB",
	},
	{
		type: 'image',
		img: 'https://oilgasforum.ru/upload/emails/folga/74top2.jpg',
		link: 'https://oilgasforum.ru/registration/',
		text: 'Альтернативный текст',
		width: '600',
		color: "#222222",
		backgroundColor: "#F2F2F2",
	},
	{
		type: 'heading',
		backgroundColor: '#F2F2F2',
		color: '#004FCB',
		text: 'Заголовок',
	},
	{
		type: 'paragraph',
		text: 'Параграф текста',
		backgroundColor: '#F2F2F2',
		color: '#222222',
	},
	{
		type: 'image',
		img: 'https://oilgasforum.ru/upload/emails/folga/74digits.png',
		link: 'https://oilgasforum.ru/news/',
		text: 'Альтернативный текст',
		width: '532',
		color: "#222222",
		backgroundColor: "#F2F2F2",
	},
	{
		type: 'link',
		text: 'Ссылка',
		link: 'https://oilgasforum.ru/registration/',
		icon: 'arrow',
		backgroundColor: '#F2F2F2',
	},
	{
		type: 'quote',
		img: 'https://oilgasforum.ru/upload/emails/folga/kiyatkina.jpg',
		text: 'С нетерпением ждем встречи на TNF 2021',
		name: 'Ольга Кияткина',
		job: 'Руководитель департамента по работе с участниками',
		backgroundColor: "#F2F2F2",
	},
	{
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
	},
];

function App() {
	let initialState = json;
	const savedState = window.localStorage.getItem('blocks');
	if (savedState) {
		initialState = JSON.parse(savedState);
	}
	const [blocks, setBlocks] = useState(initialState);
	const stringified = JSON.stringify(blocks);
	const exportJson =  new Blob([stringified], {type: 'text/json'});

	window.localStorage.setItem('blocks', stringified);

	// console.log(blocks);

	return (
		<>
			<header className="constructor__header">
				<div className="container">
					<h1 className="constructor__heading">Конструктор писем для ТНФ</h1>
					<label>Подзаголовок письма:<br/><textarea name="preHeader" id="preHeader" defaultValue="подробности внутри" style={{
						resize: "vertical",
						boxSizing: "border-box",
						width: "100%",
						font: "inherit",
					}}/></label>
				</div>
			</header>
			<Blocks blocks={blocks} setBlocks={setBlocks} />
			<iframe className="constructor__preview" title="Предпросмотр" src={renderHtml(blocks, (document.getElementById('preHeader') as HTMLTextAreaElement)?.value)} />
			<footer>
				<BlockAddBtns setBlocks={setBlocks} />
				<div className="constructor__footer">
					<div className="container">
						<label>Импорт .json <input type="file" accept="application/json" onClick={(event) => {
						// eslint-disable-next-line no-restricted-globals
						if (!confirm('Это сотрет текущее письмо. Продолжить?')) {
							event.preventDefault();
						}
					}} onChange={(event) => {
						if (event.target.files) {
							const fileReader = new FileReader();
							fileReader.readAsText(event.target.files[0], "UTF-8");
							fileReader.onload = e => {
								setBlocks(() => {
									if (e.target && typeof e.target.result === 'string') {
										return JSON.parse(e.target.result) as BlocksType;
									}
									return [{type: "error", text: "Ошибка импорта"}];
								});
							};
						}
					}}/></label>
						<a href={URL.createObjectURL(exportJson)} download={(new Date().toISOString()) + '.json'} style={{
							display: "inline-block",
							color: "inherit",
						}}>Экспорт в .json</a>
						<a href={renderHtml(blocks, (document.getElementById('preHeader') as HTMLTextAreaElement)?.value)} download={(new Date().toISOString()) + '.html'} style={{
							display: "inline-block",
							color: "inherit"
						}}>Экспорт в .html</a>
						{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
						<a href="" onClick={(e) => {
							// eslint-disable-next-line no-restricted-globals
							if (confirm('Это сбросит текущее письмо. Продолжить?')) {
								window.localStorage.removeItem('blocks');
								document.location.reload();
							} else {
								e.preventDefault();
							}
						}} style={{
							display: "inline-block",
							color: "inherit",
						}}>Сбросить всё</a>
						<button type="reset" style={{color: "darkred"}} onClick={() => {
							// eslint-disable-next-line no-restricted-globals
							if (confirm('Это сотрет текущее письмо. Продолжить?')) {
								setBlocks([]);
							}
						}}>Удалить всё</button>
					</div>
				</div>
				<p className="footer__author">Конструктор сделал <a href="https://dontliem1.github.io">Михаил Воробьев</a> на React JS.</p>
			</footer>
		</>
	);
}

export default App;
