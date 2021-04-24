interface Repository<T> {
    findById(id: any): Promise<T>
    save(t: T): Promise<T>
    delete(t: T): Promise<boolean>
}

export default Repository;