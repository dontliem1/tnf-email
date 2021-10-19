import React, {FormEvent} from "react";
import {BlocksType} from "../../types/BlocksType";
import "./index.css";
import BlockControls from "../BlockControls";

type BlocksProps = {
    blocks: BlocksType,
    setBlocks: React.Dispatch<React.SetStateAction<BlocksType>>
}

function Blocks({blocks, setBlocks}: BlocksProps) {

    const inputChangeHandler = (event: FormEvent) => {
        const input = event.target as HTMLInputElement;
        const inputName = input.name;
        const index = parseInt(input.dataset.index as string, 10);
        setBlocks((prevState => {
            return prevState.map((newBlock, newIndex) => {
                if (newIndex === index) {
                    newBlock[inputName] = input.value;
                }
                return newBlock;
            })
        }))
    };

    const elementChangeHandler = (event: FormEvent) => {
        const input = event.target as HTMLElement;
        const inputName = input.dataset.name;
        const index = parseInt(input.dataset.index as string, 10);
        setBlocks((prevState => {
            return prevState.map((newBlock, newIndex) => {
                if (inputName && newIndex === index) {
                    newBlock[inputName] = input.textContent ?? '';
                }
                return newBlock;
            })
        }))
    };

    return (
      <main id="html" className="container">
          {blocks.map((block, index) => {
              switch (block.type) {
                  case "header":
                      return (
                        <div className={`block block--${block.type}`} key={index}>
                            <BlockControls blockId={index} setBlocks={setBlocks}/>
                            <table width="600" cellSpacing="0" cellPadding="0" style={{
                                color: block.color,
                                backgroundColor: block.backgroundColor
                            }}>
                                <tbody>
                                <tr>
                                    <td width="310" align="left" valign="bottom" style={{padding: "32px 34px 25px", position: "relative"}}>
                                        <img src={block.img} width="150" height="76" style={{
                                            verticalAlign: "middle",
                                            height: "auto",
                                        }} alt="Тюменский нефтегазовый форум"/>
                                        <input className="input--absolute" type="url" name="img" aria-label="Ссылка на картинку" title="Ссылка на картинку" placeholder="Ссылка на картинку" data-index={`${index}`} value={block.img} onChange={inputChangeHandler} />
                                    </td>
                                    <td align="left" valign="bottom" style={{
                                        padding: "0 0 18px",
                                        fontSize: "16px",
                                        lineHeight: "28px"
                                    }}>
                                        <img src="https://oilgasforum.ru/upload/emails/folga/header_date.png" width="14" height="14" style={{
                                            verticalAlign: "baseline",
                                            marginRight: "2px"
                                        }} alt="Дата"/>
                                        <span data-name="date" data-index={`${index}`} contentEditable suppressContentEditableWarning={true} onBlur={elementChangeHandler}>{block.date}</span>
                                        <br/>
                                        <img src="https://oilgasforum.ru/upload/emails/folga/header_place.png" width="10" height="14" style={{
                                            verticalAlign: "baseline",
                                            width: "auto",
                                            marginLeft: "2px",
                                            marginRight: "2px"
                                        }} alt="Место"/>
                                        <span data-name="place" data-index={`${index}`} contentEditable suppressContentEditableWarning={true} onBlur={elementChangeHandler}>{block.place}</span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                      );
                  case "image":
                      return (
                        <div className={`block block--${block.type}`} key={index}>
                            <BlockControls blockId={index} setBlocks={setBlocks} width={block.width}/>
                            <div className="padding-fix" style={{color: block.color, position: "relative", textAlign: "center", backgroundColor: block.backgroundColor, paddingTop: (block.width === '600' ? 0 : "20px"), paddingBottom: (block.width === '600' ? 0 : "20px")}}>
                                <img width={block.width} height="320" src={block.img??''} alt={block.text??'Картинка'} style={{
                                    verticalAlign: "middle",
                                    height: "auto",
                                    maxWidth: "600px"
                                }} />
                                <input className="input--absolute" type="url" name="img" aria-label="Ссылка на картинку" title="Ссылка на картинку" placeholder="Ссылка на картинку" data-index={`${index}`} value={block.img} onChange={inputChangeHandler} required />
                                <input className="input--absolute" type="text" name="text" aria-label="Альтернативный текст" title="Альтернативный текст" placeholder="Альтернативный текст" data-index={`${index}`} value={block.text} onChange={inputChangeHandler} />
                                <input className="input--absolute" type="url" name="link" aria-label="Куда ведёт блок" title="Куда ведёт блок" placeholder="Куда ведёт блок" data-index={`${index}`} value={block.link} onChange={inputChangeHandler} />
                            </div>
                        </div>
                      );
                  case "heading":
                      return (
                        <div className={`block block--${block.type}`} key={index}>
                            <BlockControls blockId={index} setBlocks={setBlocks}/>
                            <div style={{position: "relative"}}>
                                {block.icon ?
                                  <table cellSpacing={0} cellPadding={0} width={600}>
                                      <tbody>
                                      <tr>
                                          <td width={68} style={{
                                              verticalAlign: "middle",
                                              padding: "20px 0 20px 34px",
                                              backgroundColor: block.backgroundColor,
                                              color: block.color
                                          }}><img src={block.icon} width={68} height={68} alt="Иконка" style={{
                                              verticalAlign: "middle",
                                              height: "auto"
                                          }}/></td>
                                          <td style={{
                                              verticalAlign: "middle",
                                              padding: "20px 34px",
                                              backgroundColor: block.backgroundColor,
                                              color: block.color,
                                              fontSize: "30px",
                                              lineHeight: "35px"
                                          }} data-name="text" data-index={`${index}`} contentEditable suppressContentEditableWarning={true} onBlur={elementChangeHandler}>{block.text}</td>
                                      </tr>
                                      </tbody>
                                  </table>
                                  : <h2 style={{
                                      padding: "20px 34px",
                                      color: block.color,
                                      fontSize: "24px",
                                      fontWeight: "inherit",
                                      margin: 0,
                                      backgroundColor: block.backgroundColor
                                  }} data-name="text" data-index={`${index}`} contentEditable suppressContentEditableWarning={true} onBlur={elementChangeHandler}>{block.text}</h2>
                                }
                                <input className="input--absolute" type="url" name="icon" aria-label="Ссылка на иконку" title="Ссылка на иконку" placeholder="Ссылка на иконку" data-index={`${index}`} value={block.icon} onChange={inputChangeHandler}/>
                                <select className="input--absolute" name="color" aria-label="Цвет текста" title="Цвет текста" data-index={`${index}`} onChange={inputChangeHandler} value={block.color}>
                                    <option value="#004FCB">Синий текст</option>
                                    <option value="#F2F2F2">Белый текст</option>
                                </select>
                                <select className="input--absolute" name="backgroundColor" aria-label="Цвет текста" title="Цвет фона" data-index={`${index}`} onChange={inputChangeHandler} value={block.backgroundColor}>
                                    <option value="#F2F2F2">Белый фон</option>
                                    <option value="#032663">Синий фон</option>
                                </select></div>
                        </div>
                      );
                  case "paragraph":
                      return (
                        <div className={`block block--${block.type}`} key={index}>
                            <BlockControls blockId={index} setBlocks={setBlocks}/>
                            <div style={{position: "relative"}}>
                                {block.icon ?
                                  <table cellSpacing={0} cellPadding={0} width={600}>
                                      <tbody>
                                      <tr>
                                          <td className="padding-fix" width={68} style={{verticalAlign: "top",padding: "20px 20px 20px 34px", backgroundColor: block.backgroundColor, color: block.color}}><img src={block.icon} width={50} height={50} alt="Иконка" style={{verticalAlign: "middle", height: "auto"}}/></td>
                                          <td className="padding-fix" style={{verticalAlign: "top",padding: "20px 34px 20px 0", backgroundColor: block.backgroundColor, color: block.color, fontSize: "16px", lineHeight: "24px", textAlign: "justify"}} data-name="text" data-index={`${index}`} contentEditable suppressContentEditableWarning={true} onBlur={elementChangeHandler}>{block.text}</td>
                                      </tr>
                                      </tbody>
                                  </table>
                                  : <div className="padding-fix" style={{padding: "20px 34px", color: block.color, backgroundColor: block.backgroundColor, textAlign: "justify"}} data-name="text" data-index={`${index}`} contentEditable suppressContentEditableWarning={true} onBlur={elementChangeHandler}>{block.text}</div>
                                }
                                <input className="input--absolute" type="url" name="icon" aria-label="Ссылка на иконку" title="Ссылка на иконку" placeholder="Ссылка на иконку" data-index={`${index}`} value={block.icon} onChange={inputChangeHandler} />
                                <select className="input--absolute" name="color" aria-label="Цвет текста" title="Цвет текста" data-index={`${index}`} onChange={inputChangeHandler} value={block.color}>
                                    <option value="#222222">Чёрный текст</option>
                                    <option value="#F2F2F2">Белый текст</option>
                                </select>
                                <select className="input--absolute" name="backgroundColor" aria-label="Цвет текста" title="Цвет фона" data-index={`${index}`} onChange={inputChangeHandler} value={block.backgroundColor}>
                                    <option value="#F2F2F2">Белый фон</option>
                                    <option value="#032663">Синий фон</option>
                                </select>
                            </div>
                        </div>
                      );
                  case "link":
                      return (
                        <div className={`block block--${block.type}`} key={index}>
                            <BlockControls blockId={index} setBlocks={setBlocks}/>
                            <table className="padding-fix" cellSpacing="0" cellPadding="0" style={{border: 0, padding: "20px 34px", backgroundColor: block.backgroundColor}}>
                                <tbody>
                                    <tr>
                                        <td style={{backgroundColor: '#004FCB', position: "relative"}}>
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a style={{
                                                backgroundColor: '#004FCB',
                                                color: '#F2F2F2',
                                                display: 'inline-block',
                                                fontFamily: 'Arial',
                                                fontSize: '16px',
                                                lineHeight: '45px',
                                                textDecoration: 'none',
                                                width: '474px',
                                                paddingLeft: '16px'
                                            }} data-name="text" data-index={`${index}`} contentEditable suppressContentEditableWarning={true} onBlur={elementChangeHandler}>{block.text}</a>
                                        <input className="input--absolute" type="url" name="link" aria-label="Ссылка" title="Ссылка" placeholder="Ссылка" data-index={`${index}`} value={block.link} onChange={inputChangeHandler} />
                                        </td>
                                        <td style={{backgroundColor: '#004FCB', position: "relative"}}>
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a style={{
                                                    backgroundColor: '#004FCB',
                                                    color: '#F2F2F2',
                                                    display: 'inline-block',
                                                    fontSize: '16px',
                                                    lineHeight: 0,
                                                    textDecoration: 'none',
                                                    padding: '15px 16px 16px 8px'
                                                }}><img src={`https://oilgasforum.ru/upload/emails/folga/btn_${block.icon}.png`} width="16" height="16" style={{verticalAlign: "middle", height: "auto"}} alt="Перейти по ссылке"/></a>
                                            <select className="input--absolute" name="icon" aria-label="Иконка справа" title="Иконка справа" data-index={`${index}`} onChange={inputChangeHandler} value={block.icon}>
                                                <option value="arrow">Стрелка</option>
                                                <option value="pdf">PDF</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                      );
                  case "quote":
                      return (
                        <div className={`block block--${block.type}`} key={index}>
                            <BlockControls blockId={index} setBlocks={setBlocks}/>
                            <table className="padding-fix" cellSpacing="0" cellPadding="0" style={{border: 0, padding: "20px 34px", backgroundColor: "#F2F2F2"}}>
                                <tbody>
                                    <tr>
                                        <td width={170} rowSpan={3} style={{verticalAlign: 'top', position: "relative"}}>
                                            <img width="140" height="140" src={block.img} alt="Фотография." style={{verticalAlign: "middle", height: "auto"}} />
                                            <input className="input--absolute" type="url" name="img" aria-label="Фотография" title="Фотография" placeholder="Ссылка на фотографию" data-index={`${index}`} value={block.img} onChange={inputChangeHandler} />
                                        </td>
                                        <td style={{color: '#004FCB', fontSize: "24px", lineHeight: "28px", paddingBottom: "30px"}} data-name="text" data-index={`${index}`} contentEditable suppressContentEditableWarning={true} onBlur={elementChangeHandler}>{block.text}</td>
                                    </tr>
                                    <tr>
                                        <td style={{fontSize: "14px", lineHeight: "18px", fontWeight: "bold", verticalAlign: "bottom"}} data-name="name" data-index={`${index}`} contentEditable suppressContentEditableWarning={true} onBlur={elementChangeHandler}>{block.name}</td>
                                    </tr>
                                    <tr>
                                        <td style={{fontSize: "14px", lineHeight: "18px", verticalAlign: "top", paddingRight: "60px"}} data-name="job" data-index={`${index}`} contentEditable suppressContentEditableWarning={true} onBlur={elementChangeHandler}>{block.job}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                      );
                  case "footer":
                      return (
                        <div className={`block block--${block.type}`} key={index}>
                            <BlockControls blockId={index} setBlocks={setBlocks} width={block.width}/>
                            <div>
                                <table width="600" cellSpacing="0" cellPadding="0" style={{color: '#F2F2F2', backgroundColor: '#004FCB'}}>
                                    <tbody>
                                        <tr>
                                            <td colSpan={3} style={{
                                                padding: '34px 34px 45px',
                                                fontSize: '16px',
                                                lineHeight: '19px',
                                                textAlign: "center"
                                            }}>
                                                <div style={{
                                                    color: '#00BCFF',
                                                    fontWeight: 'bold',
                                                    fontSize: '24px',
                                                    lineHeight: '29px',
                                                    paddingBottom: '20px'
                                                }} data-name="heading" data-index={`${index}`} contentEditable suppressContentEditableWarning={true} onBlur={elementChangeHandler}>{block.heading}</div>
                                                <div data-name="subheading" data-index={`${index}`} contentEditable suppressContentEditableWarning={true} onBlur={elementChangeHandler}>{block.subheading}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{
                                                padding: '0 0 0 34px',
                                                fontSize: '12px',
                                                lineHeight: '15px',
                                                position: "relative"
                                            }} width="146">
                                                <img src="https://oilgasforum.ru/upload/emails/folga/footer_tel.png" width="14" height="14" style={{
                                                    verticalAlign: 'bottom',
                                                    borderTop: '1px solid #F2F2F2',
                                                    paddingTop: '16px',
                                                    marginRight: '8px',
                                                    height: 'auto'
                                                }} alt=""/>
                                                <span style={{
                                                    color: '#F2F2F2',
                                                    display: "inline-block"
                                                }} data-name="tel" data-index={`${index}`} contentEditable suppressContentEditableWarning={true} onBlur={elementChangeHandler}>{block.tel}</span>
                                            </td>
                                            <td style={{
                                                padding: '0 0 0 34px',
                                                fontSize: '12px',
                                                lineHeight: '15px',
                                                position: "relative"
                                            }}>
                                                <img src="https://oilgasforum.ru/upload/emails/folga/footer_mail.png" width="16" height="14" style={{
                                                    verticalAlign: 'bottom',
                                                    borderTop: '1px solid #F2F2F2',
                                                    paddingTop: '16px',
                                                    marginRight: '8px',
                                                    marginBottom: '2px',
                                                    height: 'auto'
                                                }} alt=""/>
                                                <span style={{
                                                    color: '#F2F2F2',
                                                    display: "inline-block"
                                                }} data-name="email" data-index={`${index}`} contentEditable suppressContentEditableWarning={true} onBlur={elementChangeHandler}>{block.email}</span>
                                            </td>
                                            <td style={{
                                                padding: '0 34px 0 0',
                                                fontSize: '12px',
                                                lineHeight: '15px',
                                                position: "relative"
                                            }}>
                                                <img src="https://oilgasforum.ru/upload/emails/folga/footer_site.png" width="14" height="14" style={{
                                                    verticalAlign: 'bottom',
                                                    borderTop: '1px solid #F2F2F2',
                                                    paddingTop: '16px',
                                                    marginRight: '8px',
                                                    height: 'auto'
                                                }} alt=""/>
                                                <span style={{
                                                    color: '#F2F2F2',
                                                    display: "inline-block"
                                                }} data-name="site" data-index={`${index}`} contentEditable suppressContentEditableWarning={true} onBlur={elementChangeHandler}>{block.site}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3} align="right" style={{
                                                padding: '40px 34px',
                                                position: "relative"
                                            }}>
                                                <div style={{borderTop: '1px solid #00BCE1', paddingBottom: '30px'}}/>
                                                {block.tg && <span style={{
                                                    color: '#F2F2F2',
                                                    verticalAlign: 'middle',
                                                    padding: '0 10px'
                                                }}><img src="https://oilgasforum.ru/upload/emails/folga/footer_tg.png" width="21" height="21" style={{
                                                    verticalAlign: "middle",
                                                    height: "auto"
                                                }} alt="Telegram"/></span>}
                                                {block.vk && <span style={{
                                                    color: '#F2F2F2',
                                                    verticalAlign: 'middle',
                                                    padding: '0 10px'
                                                }}><img src="https://oilgasforum.ru/upload/emails/folga/footer_vk.png" width="21" height="21" style={{
                                                    verticalAlign: "middle",
                                                    height: "auto"
                                                }} alt="ВКонтакте"/></span>}
                                                {block.ig && <span style={{
                                                    color: '#F2F2F2',
                                                    verticalAlign: 'middle',
                                                    padding: '0 10px'
                                                }}><img src="https://oilgasforum.ru/upload/emails/folga/footer_ig.png" width="21" height="21" style={{
                                                    verticalAlign: "middle",
                                                    height: "auto"
                                                }} alt="Instagram"/></span>}
                                                {block.fb && <span style={{
                                                    color: '#F2F2F2',
                                                    verticalAlign: 'middle',
                                                    padding: '0 10px'
                                                }}><img src="https://oilgasforum.ru/upload/emails/folga/footer_fb.png" width="21" height="21" style={{
                                                    verticalAlign: "middle",
                                                    height: "auto"
                                                }} alt="Facebook"/></span>}
                                                {block.yt && <span style={{
                                                    color: '#F2F2F2',
                                                    verticalAlign: 'middle',
                                                    padding: '0 0 0 10px'
                                                }}><img src="https://oilgasforum.ru/upload/emails/folga/footer_yt.png" width="21" height="21" style={{
                                                    verticalAlign: "middle",
                                                    height: "auto"
                                                }} alt="Youtube"/></span>}
                                                <fieldset className="fieldset--absolute">
                                                    <label>Telegram: <input type="url" name="tg" data-index={`${index}`} value={block.tg} onChange={inputChangeHandler} size={25}/></label>
                                                    <label>ВКонтакте: <input type="url" name="vk" data-index={`${index}`} value={block.vk} onChange={inputChangeHandler} size={25}/></label>
                                                    <label>Facebook: <input type="url" name="fb" data-index={`${index}`} value={block.fb} onChange={inputChangeHandler} size={25}/></label>
                                                    <label>Instagram: <input type="url" name="ig" data-index={`${index}`} value={block.ig} onChange={inputChangeHandler} size={25}/></label>
                                                    <label>Youtube: <input type="url" name="yt" data-index={`${index}`} value={block.yt} onChange={inputChangeHandler} size={26}/></label>
                                                </fieldset>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div style={{textAlign: "center",color: "#888", fontSize: "14px", lineHeight: 1.4, padding: '20px 34px 30px', backgroundColor: "#F2F2F2"}}>Мы отправили эту рассылку на Ваш адрес, потому что Вы согласились получать информацию о форуме TNF при заполнении клиентской анкеты или при регистрации на нашем <a style={{color: '#888'}} href={`https://${block.site}`}>сайте</a>. Если Вы получили данное письмо по ошибке или решили отказаться от получения нашей рассылки, пожалуйста, воспользуйтесь кнопкой отписки внизу письма.<br/><br/><span data-name="copyright1" data-index={`${index}`} contentEditable suppressContentEditableWarning={true} onBlur={elementChangeHandler}>{block.copyright1}</span><br/><span data-name="copyright2" data-index={`${index}`} contentEditable suppressContentEditableWarning={true} onBlur={elementChangeHandler}>{block.copyright2}</span>
                                </div>
                            </div>
                        </div>
                      );
                  default:
                      return <div className="block block-error" key={index}><BlockControls blockId={index} setBlocks={setBlocks}/>{block.text??''}</div>;
              }
          })}
      </main>
    );
}

export default Blocks;
