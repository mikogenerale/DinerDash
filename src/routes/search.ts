import { Router } from 'express';

import { searchController } from '../controller';
import searchQueryParamValidator from '../middleware/searchQueryParamValidator';

const router = Router();

router.use(searchQueryParamValidator);
router.get('/execute', searchController.search);

export default router;
