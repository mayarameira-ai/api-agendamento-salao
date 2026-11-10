import { Router } from 'express';
import * as controller from '../controllers/servicoController.js';

const router = Router();

router.get('/', controller.listarServicos());
router.post('/', controller.criarServico());
router.get('/:id', controller.buscarServicoPorId());
router.put('/:id', controller.atualizarServico());
router.delete('/:id', controller.excluirServico());
export default router;