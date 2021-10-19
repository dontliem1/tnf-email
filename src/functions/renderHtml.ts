import {BlocksType} from "../types/BlocksType";

export default function renderHtml (blocks: BlocksType, preHeader: string) {
    const collapsed = ['paragraph', 'heading', '532', 'link', 'quote'];
    let html = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">\n' +
      '<html lang="ru">\n' +
      '<head>\n' +
      '  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n' +
      '  <meta name="viewport" content="width=device-width, initial-scale=1">\n' +
      '  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n' +
      '\n' +
      '  <title>ТНФ</title>\n' +
      '</head>\n' +
      '<body style="margin:0; padding:0; background-color:#F2F2F2; font-family: \'Arial\', sans-serif;">\n' +
      '<div style="max-height:0;overflow:hidden;font-family: Helvetica, Arial, sans-serif;">' + (preHeader ?? 'подробности внутри') + ' &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;</div>\n' +
      '    <table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#F2F2F2">\n' +
      '        <tr>\n' +
      '            <td align="center" valign="top">';
    let previousType = '';
    let previousBackgroundColor = '';
    for (const block of blocks) {
        switch (block.type) {
            case 'header':
                html += '<table style="border-collapse: collapse; width: 600px;"><tbody><tr><td style="padding: 32px 34px 25px; text-align: left; vertical-align: bottom; width: 310px; background-color: ' + block.backgroundColor + '; color: ' + block.color + ';">';
                if (block.img) {
                    html += '<img src="' + block.img + '" width="150" height="76" style="vertical-align: middle; height: auto;" alt="Тюменский нефтегазовый форум">';
                }
                html += '</td><td style="text-align: left; vertical-align: bottom; padding: 32px 34px 18px 0; font-size: 16px; line-height: 28px; background-color: ' + block.backgroundColor + '; color: ' + block.color + ';">';
                if (block.date) {
                    html += '<img src="https://oilgasforum.ru/upload/emails/folga/header_date.png" width="14" height="14" style="vertical-align: middle; height: auto;" alt="Дата"> ' + block.date + '<br>';
                }
                if (block.place) {
                    html += '<img src="https://oilgasforum.ru/upload/emails/folga/header_place.png" width="10" height="14" style="vertical-align: middle; height: auto;" alt="Место"> ' + block.place;
                }
                html += '</td></tr></tbody></table>';
                break;
            case 'image':
                let margin = '';
                if (block.width !== '600') {
                    if (!collapsed.includes(previousType)) {
                        margin += ' margin-top: 20px;'
                    }
                    margin += ' margin-bottom: 20px;'
                }
                html += '<a style="color: ' + block.color + '; text-align:center; display: inline-block; background-color: ' + block.backgroundColor + ';' + margin + '"' + (block.link ? ' href="' + block.link + '"' : '') + '><img src="' + block.img + '" alt="' + block.text + '" width="' + block.width + '" height="320" style="vertical-align:middle; height: auto; max-width: 600px;"></a>';
                break;
            case 'heading':
                if (block.icon) {
                    html += '<table style="border-collapse: collapse; width: 600px;"><tbody><tr><td style="padding: 20px 0 20px 34px; text-align: left; vertical-align: baseline; width: 68px; color: ' + block.color + '; background-color: ' + block.backgroundColor + ';"><img src="' + block.icon + '" width="68" height="68" style="vertical-align: middle; height: auto;" alt="Иконка"></td><td style="padding: 20px 34px; color: ' + block.color + '; background-color: ' + block.backgroundColor + '; font-size: 30px; line-height: 35px; vertical-align: baseline; text-align: left;">' + block.text + '</td></tr></tbody></table>'
                } else {
                    html += '<h2 style="width: 532px; padding: 20px 34px; color: ' + block.color + '; background-color: ' + block.backgroundColor + '; font-size: 24px; line-height: 1.2; font-weight: inherit; margin: 0; text-align: left;">' + block.text + '</h2>';
                }
                break;
            case 'paragraph':
                let paddingTop = '';
                if (collapsed.includes(previousType) && previousBackgroundColor === block.backgroundColor) {
                    paddingTop = '0px';
                }
                if (block.icon) {
                    html += '<table style="border-collapse: collapse; width: 600px;"><tbody><tr><td style="padding: ' + (paddingTop ? paddingTop : '20px') + ' 20px 20px 34px; text-align: left; vertical-align: top; width: 68px; color: ' + block.color + '; background-color: ' + block.backgroundColor + ';"><img src="' + block.icon + '" width="50" height="50" style="vertical-align: middle; height: auto;" alt="Иконка"></td><td style="padding: ' + (paddingTop ? paddingTop : '20px') + ' 34px 20px 0; color: ' + block.color + '; background-color: ' + block.backgroundColor + '; font-size: 16px; line-height: 24px; vertical-align: top; text-align: justify;">' + block.text + '</td></tr></tbody></table>'
                } else {
                    html += '<p style="width: 532px; display: block; padding: ' + (paddingTop ? paddingTop : '20px') + ' 34px 20px; color: ' + block.color + '; background-color: ' + block.backgroundColor + '; font-size: 16px; line-height: 24px; font-weight: inherit; margin: 0; text-align: justify;">' + block.text + '</p>';
                }
                break;
            case 'link':
                html += '<table style="width: 532px; border-collapse: collapse; margin: ' + ((collapsed.includes(previousType) && previousBackgroundColor === block.backgroundColor) ? '0' : '20px') + ' 0 20px;"><tbody><tr><td style="padding: 0;"><a href="' + block.link + '" style="display:block; background-color: #004FCB; color: #F2F2F2; font-size: 16px; line-height: 45px; padding: 0 0 0 16px; text-decoration:none;">' + block.text + '</a></td><td style="padding: 0; text-align:right;"><a href="' + block.link + '" style="display:block; background-color: #004FCB; color: #F2F2F2; font-size: 16px; line-height: 45px; padding: 0 16px; text-decoration:none;"> <img src="https://oilgasforum.ru/upload/emails/folga/btn_' + block.icon + '.png" width="16" height="16" style="vertical-align: baseline; width: auto; line-height: 45px;" alt="Перейти по ссылке"></a></td></tr></tbody></table>';
                break;
            case 'quote':
                html += '<div style="background-color: ' + block.backgroundColor + '; padding-top: ' + ((collapsed.includes(previousType) && previousBackgroundColor === block.backgroundColor) ? '0' : '20px') + '; padding-bottom: 20px;"><table style="border-collapse: collapse; width: 600px;"><tbody><tr><td style="padding: 0 0 0 34px; text-align: left; vertical-align: top; background-color: ' + block.backgroundColor + '; width: 170px;" rowspan="3">';
                if (block.img) {
                    html += '<img src="' + block.img + '" width="140" height="140" style="vertical-align: middle; height: auto;" alt="Фотография.">';
                }
                html += '</td>';
                if (block.text) {
                    html += '<td style="text-align: left; vertical-align: top; padding: 0 34px 30px 0; font-size: 24px; line-height: 28px; background-color: ' + block.backgroundColor + '; color: #004FCB;">' + block.text + '</td><tr>';
                }
                if (block.name) {
                    html += '<td style="text-align: left; vertical-align: bottom; padding: 0 34px 0 0; font-size: 14px; line-height: 18px; font-weight: bold; background-color: ' + block.backgroundColor + '; color: #222222;">' + block.name + '</td></tr><tr>';
                }
                if (block.job) {
                    html += '<td style="text-align: left; vertical-align: top; padding: 0 60px 0 0; font-size: 14px; line-height: 18px; background-color: ' + block.backgroundColor + '; color: #222222;">' + block.job + '</td></tr><tr>';
                }
                html += '</tr></tbody></table></div>';
                break;
            case 'footer':
                html += '<table style="border-collapse: collapse; width: 600px;"><tbody><tr><td colspan="3" style="padding: 32px 34px 45px; text-align: center; vertical-align: bottom; width: 310px; background-color: #004FCB; color: #F2F2F2; font-size: 16px; line-height: 19px;">';
                if (block.heading) {
                    html += '<div style="color: #00BCFF; font-weight: bold; font-size: 24px; line-height: 29px; padding-bottom: 20px;">' + block.heading + '</div>';
                }
                if (block.subheading) {html += block.subheading;}
                html += '</td></tr><tr><td style="padding: 0 0 40px 34px; font-size: 12px; line-height: 15px; background-color: #004FCB; color: #F2F2F2;">';
                if (block.tel) {
                    html += '<img src="https://oilgasforum.ru/upload/emails/folga/footer_tel.png" width="14" height="14" alt="Телефон" style="vertical-align:bottom; border-top: 1px solid; padding-top: 16px; margin-right: 8px; height: auto;"><a href="tel:' + block.tel.replace(' ', '') + '" style="color: inherit; text-decoration: none; display: inline-block;">' + block.tel + '</a>';
                }
                html += '</td><td style="padding: 0 0 40px 34px; font-size: 12px; line-height: 15px; background-color: #004FCB; color: #F2F2F2;">';
                if (block.email) {
                    html += '<img src="https://oilgasforum.ru/upload/emails/folga/footer_mail.png" width="16" height="14" alt="Телефон" style="vertical-align:bottom; border-top: 1px solid; padding-top: 16px; margin-right: 8px; height: auto;"><a href="mailto:' + block.email + '" style="color: inherit; text-decoration: none; display: inline-block;">' + block.email + '</a>';
                }
                html += '</td><td style="padding: 0 34px 40px 0; font-size: 12px; line-height: 15px; background-color: #004FCB; color: #F2F2F2;">';
                if (block.site) {
                    html += '<img src="https://oilgasforum.ru/upload/emails/folga/footer_mail.png" width="16" height="14" alt="Телефон" style="vertical-align:bottom; border-top: 1px solid; padding-top: 16px; margin-right: 8px; height: auto;"><a href="https://' + block.site + '" style="color: inherit; text-decoration: none; display: inline-block;">' + block.site + '</a>';
                }
                html += '</td></tr><tr><td colspan="3" style="text-align:right; padding: 0 34px; background-color: #004FCB; color: #00BCE1;"><div style="border-top: 1px solid; padding-bottom: 30px;"></div>';
                if (block.tg) {
                    html += '<a href="' + block.tg + '" style="color: inherit; text-decoration: none; padding: 0 10px; display: inline-block; margin-bottom: 40px;"><img src="https://oilgasforum.ru/upload/emails/folga/footer_tg.png" width="21" height="21" alt="Телеграм" style="vertical-align:middle; height: auto;"></a>';
                }
                if (block.vk) {
                    html += '<a href="' + block.vk + '" style="color: inherit; text-decoration: none; padding: 0 10px; display: inline-block; margin-bottom: 40px;"><img src="https://oilgasforum.ru/upload/emails/folga/footer_vk.png" width="21" height="21" alt="ВКонтакте" style="vertical-align:middle; height: auto;"></a>';
                }
                if (block.ig) {
                    html += '<a href="' + block.ig + '" style="color: inherit; text-decoration: none; padding: 0 10px; display: inline-block; margin-bottom: 40px;"><img src="https://oilgasforum.ru/upload/emails/folga/footer_ig.png" width="21" height="21" alt="инстаграм" style="vertical-align:middle; height: auto;"></a>';
                }
                if (block.fb) {
                    html += '<a href="' + block.fb + '" style="color: inherit; text-decoration: none; padding: 0 10px; display: inline-block; margin-bottom: 40px;"><img src="https://oilgasforum.ru/upload/emails/folga/footer_fb.png" width="21" height="21" alt="Фейсбук" style="vertical-align:middle; height: auto;"></a>';
                }
                if (block.yt) {
                    html += '<a href="' + block.yt + '" style="color: inherit; text-decoration: none; padding: 0 10px; display: inline-block; margin-bottom: 40px;"><img src="https://oilgasforum.ru/upload/emails/folga/footer_yt.png" width="21" height="21" alt="Ютьюб" style="vertical-align:middle; height: auto;"></a>';
                }
                html += '</td></tr></tbody></table><div style="width: 532px; text-align:center; color: #888; font-size: 14px; line-height: 1.4; padding: 20px 34px 30px; background-color: #F2F2F2;">Мы отправили эту рассылку на Ваш адрес, потому что Вы согласились получать информацию о форуме TNF при заполнении клиентской анкеты или при регистрации на нашем <a style="color: inherit;" href="https://' + block.site + '">сайте</a>. Если Вы получили данное письмо по ошибке или решили отказаться от получения нашей рассылки, пожалуйста, воспользуйтесь кнопкой отписки внизу письма.<br/><br/>' + block.copyright1 + '<br>' + block.copyright2 + '</div>';
                break;
        }
        previousType = block.width ?? block.type;
        previousBackgroundColor = block.backgroundColor;
    }

    html += '</td>\n' +
      '        </tr>\n' +
      '    </table>\n' +
      '</body>\n' +
      '</html>';
    const exportHtml =  new Blob([html], {type: 'text/html'});
    return URL.createObjectURL(exportHtml);
}
