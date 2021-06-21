const express = require('express')
const fetch = require('node-fetch')
const router = express.Router()
const baseURL = 'http://testicardcore.azurewebsites.net'
const APIKey = 'f9475b09-5bc7-4224-8c83-hhb97852139d'
router.get('/brand', async (req, res) => {
    const headers = {
        'Content-Type': 'application/json',
    }
    const requestOptions = {
        method: 'GET',
        headers,
    }
    try {
        const response = await fetch(
            `${baseURL}/brand?pack=${req.query.pack}&lang=${req.query.lang}`,
            requestOptions
        )
        const body = JSON.parse(await response.text())
        if (response.status === 200) {
            res.json(body)
        } else {
            throw new Error(JSON.stringify(body))
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/brandDetails', async (req, res) => {
    const headers = {
        'Content-Type': 'application/json',
    }
    const requestOptions = {
        method: 'GET',
        headers,
    }
    try {
        const response = await fetch(
            `${baseURL}/brand?id=${req.query.id}`,
            requestOptions
        )
        const body = JSON.parse(await response.text())
        if (response.status === 200) {
            res.json(body)
        } else {
            throw new Error(JSON.stringify(body))
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})
router.get('/Category', async (req, res) => {
    const headers = {
        'Content-Type': 'application/json',
    }
    const requestOptions = {
        method: 'GET',
        headers,
    }
    try {
        const response = await fetch(
            `${baseURL}/Category?pack=${req.query.pack}&brand_id=${req.query.brand_id}`,
            requestOptions
        )
        const body = JSON.parse(await response.text())
        if (response.status === 200) {
            res.json(body)
        } else {
            throw new Error(JSON.stringify(body))
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})
router.get('/Pay', async (req, res) => {
    const headers = {
        'Content-Type': 'application/json',
    }
    const requestOptions = {
        method: 'POST',
        headers,
    }
    try {
        const response = await fetch(
            `${baseURL}/Pay?items=${req.query.items}&confirmcode=${req.query.confirmcode}&cardno=${req.query.cardno}&captchaCode=${req.query.captchaCode}`,
            requestOptions
        )
        const body = JSON.parse(await response.text())
        if (response.status === 200) {
            res.json(body)
        } else {
            throw new Error(JSON.stringify(body))
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/Retrieve', async (req, res) => {
    const headers = {
        'Content-Type': 'application/json',
    }
    const requestOptions = {
        method: 'GET',
        headers,
    }
    try {
        const response = await fetch(
            `${baseURL}/Retrieve?cc=${req.query.cc}&icashno=${req.query.icashno}&captchaCode=${req.query.captchaCode}`,
            requestOptions
        )
        const body = JSON.parse(await response.text())
        if (response.status === 200) {
            res.json(body)
        } else {
            throw new Error(JSON.stringify(body))
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = router
