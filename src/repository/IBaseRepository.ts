

export default interface BaseRepository <T> {

getAll():Promise<T[]> 

save(t:T): Promise<T>

delete(t:T):Promise<T>

getById(id:string):Promise<T>
}

