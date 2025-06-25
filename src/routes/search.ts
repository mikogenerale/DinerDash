import { Router } from 'express';

import searchQueryParamValidator from '../middleware/searchQueryParamValidator';
import { SearchController } from '../controllers';

const router = Router();
const searchController = new SearchController()

router.get(
  '/execute',
  searchQueryParamValidator,
  searchController.search
);

export default router;
