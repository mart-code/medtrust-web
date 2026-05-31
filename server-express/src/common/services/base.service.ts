import { Repository, ObjectLiteral, FindOneOptions } from 'typeorm';

export class BaseService<T extends ObjectLiteral> {
  constructor(protected readonly repository: Repository<T>) {}

  public async findAll(): Promise<T[]> {
    return this.repository.find();
  }

  public async findOne(options: FindOneOptions<T>): Promise<T | null> {
    return this.repository.findOne(options);
  }

  public async create(data: Partial<T>): Promise<T> {
    const entity = this.repository.create(data as any);
    return this.repository.save(entity as any);
  }

  public async update(id: string, data: Partial<T>): Promise<any> {
    return this.repository.update(id, data as any);
  }

  public async delete(id: string): Promise<any> {
    return this.repository.delete(id);
  }
}
