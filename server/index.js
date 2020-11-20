const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));


app.use('/actions', require('./routes/actions'))


const port = process.env.PORT || 1000
app.listen(port, () => console.log('Server up & running on port ' + port));
