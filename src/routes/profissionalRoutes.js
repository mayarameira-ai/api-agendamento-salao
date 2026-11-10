import { Router } from 'express';
import * as controller from '../controllers/profissionalController.js';

const router = Router();

router.get('/', controller.listarProfissionais());
router.post('/', controller.criarProfissional());
router.get('/:id', controller.buscarProfissionalPorId());
router.put('/:id', controller.atualizarProfissional());
router.delete('/:id', controller.excluirProfissional());   
export default router;