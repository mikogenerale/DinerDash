import { Router } from 'express';

import { searchController } from '../controller';
import searchQueryParamValidator from '../middleware/searchQueryParamValidator';

const router = Router();

router.get(
  '/execute',
  searchQueryParamValidator, 
  searchController.search
);

export default router;
