import { MigrationInterface, QueryRunner } from "typeorm";

export class updateUsingArgon21676254790939 implements MigrationInterface {
    name = 'updateUsingArgon21676254790939'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "created_at" SET DEFAULT '2023-02-13'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updated_at" SET DEFAULT '2023-02-13'`);
        await queryRunner.query(`ALTER TABLE "reservation" ALTER COLUMN "created_at" SET DEFAULT '2023-02-13'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reservation" ALTER COLUMN "created_at" SET DEFAULT '2023-02-10'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updated_at" SET DEFAULT '2023-02-10'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "created_at" SET DEFAULT '2023-02-10'`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying(50) NOT NULL`);
    }

}
