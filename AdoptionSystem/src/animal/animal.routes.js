'use strict'

import  express  from "express"
import { agregar, test } from './animal.controller.js'

const api=express.Router()

api.get('/tester',test)
api.post('/agregar',agregar)

export default api