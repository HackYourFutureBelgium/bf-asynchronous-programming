import { renderPageBase } from './components/renderPageBase.js';
import { getData } from './utils/setState.js';

await getData();
renderPageBase();
