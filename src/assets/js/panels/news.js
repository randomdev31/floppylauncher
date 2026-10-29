import { changePanel, database } from '../utils.js';
const { setValue } = require('./assets/js/utils/storage');

export default class NewsPanel {
  static id = 'news';
  async init() {
    const db = await new database().init();
    document.getElementById('news-continue').addEventListener('click', async () => {
      await setValue('news_shown_v3.0', true);
      changePanel(db.getAccounts().length ? 'home' : 'login');
    });
  }
}
