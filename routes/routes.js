const log = console.log;
const router = require("express").Router();
const list = require("../models/");

// WORKING EXAMPLES FOR LIST
// list.read(res => log(res));
// list.create('Cook', res => log(res));
// list.delete(4, res => log(res));
// list.update(10, res => log(res));

router.get("/", (req, res) => {
    res.render('home');
});


router.get('/list', (req, res) => {
    db.list.findAll()
        .then(function (dbList) {
            console.log("dbList:: ", dbList);
            // into the main index, updating the page
            var hbsObject = { list: dbList.dataValues };
            return res.render("index", hbsObject);
        });
});


// NEXT


router.post("/list/create", (req, res) => {
    log('req.body:: ', req.body);
    list.create(req.body.task_name, (results) => {
        log(results);
    });

    res.redirect('/list');
});

router.put('/list/:id', (req, res) => {
    list.update(req.params.id, results => log(results));
    res.sendStatus(200);
});

router.delete('/list/delete/:id', (req, res) => {
    list.delete(req.params.id, results => {
        log(results);
    });

    res.sendStatus(200);
});

router.get("*", (req, res) => {
    // res.render("index");
    res.redirect("/");
});

module.exports = router;