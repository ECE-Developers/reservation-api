import { MigrationInterface, QueryRunner } from "typeorm";

export class updateRefreshToken1676601824696 implements MigrationInterface {
    name = 'updateRefreshToken1676601824696'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "current_hashed_refresh_token" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "created_at" SET DEFAULT '2023-02-17'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updated_at" SET DEFAULT '2023-02-17'`);
        await queryRunner.query(`ALTER TABLE "reservation" ALTER COLUMN "created_at" SET DEFAULT '2023-02-17'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reservation" ALTER COLUMN "created_at" SET DEFAULT '2023-02-13'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updated_at" SET DEFAULT '2023-02-13'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "created_at" SET DEFAULT '2023-02-13'`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "current_hashed_refresh_token"`);
    }

}
