import { Router } from 'express';
import * as controller from '../controllers/agendamentoController.js';

const router = Router();

router.get('/', controller.listarAgendamentos());
router.post('/', controller.criarAgendamento());
router.get('/:id', controller.buscarAgendamentoPorId());
router.put('/:id', controller.atualizarAgendamento());
router.delete('/:id', controller.excluirAgendamento());
router.patch('/:id/cancelar', controller.cancelarAgendamento());
export default router;