module.exports = (req, res) => {
    console.log(req.body);
    res.status(200).send({ result: 'ok', message: 'thansk MP' })
}