const log = console.log;
const router = require("express").Router();
var db = require("../models/");



router.get("/", (req, res) => {
    res.render('home');
});


router.get('/list', (req, res) => {
    // SEQUELIZE
    db.list.findAll()
        .then(function (dbList) {
            log(dbList);
            var hbsObject = { list: dbList };
            return res.render("index", hbsObject);
        });
});

router.post("/list/create", (req, res) => {
    var bodyObj = { task: req.body.task_name, complete: false }

    // SEQUELIZE
    db.list.create(bodyObj)
        .then(() => {
            console.log('CREATED NEW TASK');
            res.redirect('/list');
        });
});

router.put('/list/:id', (req, res) => {
    // list.update(req.params.id, results => log(results));
    // res.sendStatus(200);

    // SEQUELIZE
    let ID = req.params.id;

    db.list.update({ complete: true }, { where: { id: ID } })
        .then(() => {
            res.sendStatus(200)
        });


});



router.delete('/list/delete/:id', (req, res) => {

    // list.delete(req.params.id, results => {
    //     log(results);
    // });

    // SEQUELIZE

    let ID = req.params.id;
    db.list.destroy({ where: { id: ID } })
        .then(() => {
            log("DELETED TASK")
            res.sendStatus(200);
        });

});

router.get("*", (req, res) => {
    // res.render("index");
    res.redirect("/");
});

module.exports = router;