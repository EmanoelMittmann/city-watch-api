import {Request} from 'express'

export interface IBaseCustomRequest<T = any> extends Request {
    Entity: T 
}