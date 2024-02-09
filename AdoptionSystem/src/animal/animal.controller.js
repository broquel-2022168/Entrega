 'use strict'

import Animal from './animal.model.js'
import { checkUser } from '../utils/validator.js'

export const test =(req, res)=>{
    return res.send('Hello World')
}

export const agregar=async(req,res)=>{
    try {
        let{ id } = req.params
        let data=req.body
        let ide = checkUser(id)
        if(!ide) return res.status(400).send({message:'Usuario no encontrado'})
        let animal = new Animal(data)
        await animal.save()
        return res.send({message: 'Animal registered succefully'})
    } catch (error) {
        console.error(error)
        return res.status(500).send({message:'Error registering animal',error})
    }
}

export const deleteA= async(req, res)=>{
    try {
        let { id }= req.params

        let deletedAnimal = await Animal.findOneAndDelet({_id: id})
        if(!deletedAnimal)return res.status(400).send({message: 'Animal not found'})
    
        return res.send({message: `Animal Eliminated`})
    } catch (error) {
        console.error(error)
        return res.status(500).send({message: 'Error al eliminar'})
    }
}