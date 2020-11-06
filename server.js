const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ });
const routes = require('./controllers');
const router = require('./controllers/home-routes');
const app = express();
const PORT = process.env.PORT || 3001;
const exphbs = require('express-handlebars');
const session = require('express-session');
const hbs = exphbs.create();
const path = require('path');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'boots&hat&boots&hats',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes)

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });