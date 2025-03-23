import express from 'express';
import cors from 'cors';

import { getConfig } from './src/lib';
import { ApiUtil } from './src/ApiUtil';

const app = express();

const { port } = getConfig();
const apiUtil = new ApiUtil();

app.use(express.json());
app.use(cors());

app.post('/api/chat', apiUtil.postPrompt);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});