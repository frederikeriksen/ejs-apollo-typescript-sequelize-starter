import {
    Model,
    Table,
    Column,
    DataType
} from 'sequelize-typescript';

@Table({
    defaultScope: {},
    paranoid: false,
    tableName: 'examples'
})
class Example extends Model<Example> {
    @Column({
        type: DataType.UUID,
        primaryKey: true
    })
    id!: string;
    @Column({
        type: DataType.STRING
    })
    exampleText!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    createdAt!: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    updatedAt!: Date;
}

export default Example;