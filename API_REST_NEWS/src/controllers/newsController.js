const NewsModel = require('../models/News');

// index
exports.index = async (req, res) => {
  try {
    const allNews = await NewsModel.findAll();
    return res.json({
      news: allNews,
    });
  } catch (e) {
    return res.json({
      error: 'Bad Request',
    });
  }
};

// create
exports.store = async (req, res) => {
  try {
    const news = await NewsModel.create(req.body);
    return res.json({
      success: 'successfully created the news',
      news,
    });
  } catch (e) {
    return res.json({
      errors: e.errors.map((err) => err.message),
    });
  }
};

// show
exports.show = async (req, res) => {
  const { id } = req.params;
  try {
    const findedNews = await NewsModel.findByPk(id);
    if (!findedNews) {
      return res.json({
        error: 'News not found',
      });
    }
    return res.json({
      news: findedNews,
    });
  } catch (e) {
    return res.json({
      error: 'bad request',
    });
  }
};

// update
exports.update = async (req, res) => {
  const { id } = req.params;
  try {
    const findedNews = await NewsModel.findByPk(id);
    if (!findedNews) {
      return res.json({
        error: 'News not found',
      });
    }
    const findedNewsUpdate = await findedNews.update(req.body);
    return res.json({
      success: 'noticia atualizada',
      after: findedNews,
      before: findedNewsUpdate,
    });
  } catch (e) {
    return res.json({
      error: 'bad request',
    });
  }
};

// delete
exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const findedNews = await NewsModel.findByPk(id);
    if (!findedNews) {
      return res.json({ error: 'news not found' });
    }
    await findedNews.destroy();
    return res.json({
      success: 'news has been deleted',
    });
  } catch (e) {
    return res.json({
      error: 'bad request',
    });
  }
};
