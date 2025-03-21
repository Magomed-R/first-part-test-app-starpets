import { Column, DataType, Model, Table } from 'sequelize-typescript'

@Table({ tableName: 'users', timestamps: false })
export class User extends Model {
  @Column({ type: DataType.INTEGER, defaultValue: 10_000, validate: { min: 0 } })
  balance!: number
}
