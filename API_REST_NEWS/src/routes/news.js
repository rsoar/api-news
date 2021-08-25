const { Router } = require('express');
const router = new Router();
const newsController = require('../controllers/newsController');
const authToken = require('../middlewares/authLogin');

router.get('/', newsController.index); // mostra as noticias na pagina principal
router.post('/create', authToken, newsController.store); // cria a noticia
router.get('/:id', newsController.show); // find
router.put('/edit/:id', authToken, newsController.update); // editar a noticia
router.delete('/delete/:id', authToken, newsController.delete); // deletar a noticia

module.exports = router;
