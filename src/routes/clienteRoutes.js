import { Router } from 'express';
import * as controller from '../controllers/clienteController.js';

const router = Router();

router.get('/', controller.listarClientes());
router.post('/', controller.criarCliente());
router.get('/:id', controller.buscarClientePorId());
router.put('/:id', controller.atualizarCliente());
router.delete('/:id', controller.excluirCliente());
export default router;